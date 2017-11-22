export class ListNode<T> {
    public data: T;
    public next: ListNode<T>;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }

    /**
     * Prints the list's data in order.
     */
    public print() {
        console.log(`ListNode: ${this.data}`);
    }
}

export class List<T> {
    public head: ListNode<T>;
    public tail: ListNode<T>;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    public isEmpty(): boolean {
        return this.head === null;
    }

    /**
     * Creates a ListNode with the given data value
     * and adds it to the beginning of the List.
     * @param {*} data
     */
    public addFirst(data: T): ListNode<T> {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;

        if (!this.tail) {
            this.tail = this.head;
        }

        return newNode;
    }

    /**
     * Creates a ListNode with the given data value
     * and adds it to the end of the list.
     * @param {*} data
     */
    public addLast(data: T): ListNode<T> {
        const newNode = new ListNode(data);

        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        return newNode;
    }

    /**
     * Finds the first instance of a ListNode with the
     * given data value and returns it. Returns null
     * if no ListNode with the data value exists in the
     * list.
     * @param {*} data
     */
    public find(data: T) {
        let currentNode = this.head;

        while (currentNode.next) {
            if (currentNode.data === data) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }

        return null;
    }

    /**
     * Creates a new ListNode with the data value, and
     * inserts it after the node with the target value.
     * If the target doesn't exist, the new node is not
     * inserted in the list.
     * @param {*} data
     * @param {*} target
     */
    public insertAfter(data: T, target: T) {
        const targetNode = this.find(target);

        if (targetNode) {
            const newNode = new ListNode(data);
            newNode.next = targetNode.next;
            targetNode.next = newNode;

            /**
             * Check if newNode was inserted at the end
             * of the list and mark it as the tail if so.
             */
            if (newNode.next === null) {
                this.tail = newNode;
            }
        }
    }

    /**
     * Creates a new ListNode with the data value, and
     * inserts it before the node with the target value.
     * If the target doesn't exist, the new node is not
     * inserted in the list.
     * @param {*} data
     * @param {*} target
     */
    public insertBefore(data: T, target: T) {
        let prevNode: ListNode<T> = null;
        let currentNode = this.head;
        let inserted = false;

        while (!inserted) {
            if (currentNode.data === target) {
                const newNode = new ListNode(data);

                // Special case if target is head.
                if (prevNode === null) {
                    this.head = newNode;
                    newNode.next = currentNode;
                    inserted = true;
                } else {
                    prevNode.next = newNode;
                    newNode.next = currentNode;
                    inserted = true;
                }
            } else {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }

    /**
     * Prints the list's data in order.
     */
    public print() {
        let currentNode = this.head;
        let string = '';

        while (currentNode) {
            string += `${currentNode.data}${currentNode.next ? ', ' : ''}`;
            currentNode = currentNode.next;
        }

        console.log(`List: ${string}`);
    }

    /**
     * Removes the first item in the list.
     */
    public removeFirst(): ListNode<T> {
        if (this.head) {
            const oldHead = this.head;
            this.head = oldHead.next;

            if (this.head === null) {
                this.tail = this.head;
            }

            return oldHead;
        }
    }

    /**
     * "Maintain Linked List Tail Pointer" problem on page 43.
     * @param node
     */
    public delete(node: ListNode<T>): boolean {
        // Ensure list isn't empty.
        if (!this.head) {
            return false;
        }

        /**
         * If the target is the head, remove it by
         * setting head to the next element. Also check
         * if the next element is null. If so, that means
         * we had a list with 1 element and tail needs to
         * be changed as well.
         */
        if (this.head.data === node.data) {
            this.head = node.next;

            if (!this.head) {
                this.tail = this.head;
            }

            return true;
        }

        let prevNode = this.head;
        let currNode = prevNode.next;

        /**
         * Iterate over list. If we find the target, delete it by deleting
         * the reference to it. If it's previous element's next value is now
         * null, set that value as the tail. The head can't possibly be changed
         * after this comment.
         */
        while (currNode) {
            if (currNode.data === node.data) {
                prevNode.next = currNode.next;

                if (!prevNode.next) {
                    this.tail = prevNode;
                }

                return true;
            } else {
                prevNode = currNode;
                currNode = currNode.next;
            }
        }

        /**
         * If we haven't returned by now, it means the node to delete
         * does not exist within the list.
         */
        return false;
    }

    /**
     * "Maintain Linked List Tail Pointer" problem on page 43.
     */
    public insertAfter2(node: ListNode<T>, data: T): boolean {
        const newNode = new ListNode(data);

        /**
         * If target node is null, add item to the beginning of the list and
         * set it as the head. Otherwise, just add node after target.
         */
        if (!node) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            newNode.next = node.next;
            node.next = newNode;
        }

        /**
         * Once new node is inserted, check its "next" value to see if it's
         * null. If so, it means that the node is the new tail (set it as so).
         */
        if (!newNode.next) {
            this.tail = newNode;
        }

        return true;
    }

    /**
     * "Mth-to-Last Element of a Linked List" problem on page 50.
     * @param m
     */
    public mthToLast(m: number): ListNode<T> {
        let mPointer = this.head;
        let pointer = this.head;

        for (let i = 0; i < m; i++) {
            if (!mPointer.next) {
                return null;
            } else {
                mPointer = mPointer.next;
            }
        }

        while (mPointer.next) {
            mPointer = mPointer.next;
            pointer = pointer.next;
        }

        return pointer;
    }

    /**
     * This function assumes the List is sorted.
     */
    public insertSorted(data: T): boolean {
        const newNode = new ListNode(data);

        // No head / smallest number.
        if (!this.head) {
            this.head = newNode;
            return true;
        } else {
            if (newNode.data < this.head.data) {
                newNode.next = this.head;
                this.head = newNode;
                return true;
            }
        }

        // Insert between head and tail.
        let prevNode = this.head;
        let currNode = this.head.next;
        while (currNode) {
            if (prevNode.data < data && data <= currNode.data) {
                newNode.next = prevNode.next;
                prevNode.next = newNode;
                return true;
            }

            prevNode = currNode;
            currNode = currNode.next;
        }

        // If we get here, it's the biggest item.
        prevNode.next = newNode;
        this.tail = newNode;
        return true;
    }
}

/**
 * Creates a list and does stuff to it.
 */
function testList() {
    const list = new List();

    list.addLast(0);
    list.addLast(1);
    list.addLast(2);
    list.addLast(3);
    list.addLast(4);
    list.addLast(5);

    list.print();
    const m = 5;
    console.log(`Target: ${list.mthToLast(m).data}`);

    debugger;
}