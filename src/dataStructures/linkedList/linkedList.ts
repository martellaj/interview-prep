export class ListNode {
    public data: number;
    public next: ListNode;

    constructor(data: number) {
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

export class List {
    public head: ListNode;
    public tail: ListNode;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Creates a ListNode with the given data value
     * and adds it to the beginning of the List.
     * @param {*} data
     */
    public addFirst(data: number): ListNode {
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
    public addLast(data: number) {
        const newNode = new ListNode(data);

        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    /**
     * Finds the first instance of a ListNode with the
     * given data value and returns it. Returns null
     * if no ListNode with the data value exists in the
     * list.
     * @param {*} data
     */
    public find(data: number) {
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
    public insertAfter(data: number, target: number) {
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
    public insertBefore(data: number, target: number) {
        let prevNode: ListNode = null;
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
    public removeFirst(): ListNode {
        if (this.head) {
            const oldHead = this.head;
            this.head = oldHead.next;

            if (this.head === null) {
                this.tail = this.head;
            }

            return oldHead;
        }
    }
}

/**
 * Creates a list and does stuff to it.
 */
function testList() {
    const list = new List();

    list.addFirst(0);
    list.addFirst(1);
    list.print();
    // Expected: 1 => 0 => null

    list.addLast(2);
    list.print();
    // Expected: 1 => 0 => 2 => null

    list.insertAfter(3, 1);
    list.print();
    // Expected: 1 => 3 => 0 => 2 => null

    list.insertBefore(4, 2);
    list.print();
    // Expected: 1 => 3 => 0 => 4 => 2 => null

    list.insertBefore(5, 1);
    list.print();
    // Expected: 5 => 1 => 3 => 0 => 4 => 2 => null

    const n1 = list.find(1);
    n1.print();
    // Expected: A node with data 1 and pointing to node with data 0.

    const n2 = list.find(100);
    // Expected: null
}