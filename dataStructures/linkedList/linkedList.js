function ListNode(data) {
    this.data = data;
    this.next = null;
}

function List() {
    this.head = null;
    this.tail = null;
}

/**
 * Creates a ListNode with the given data value
 * and adds it to the beginning of the List.
 * @param {*} data
 */
List.prototype.addFirst = function(data) {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
        this.tail = this.head;
    }
};

/**
 * Creates a ListNode with the given data value
 * and adds it to the end of the list.
 * @param {*} data
 */
List.prototype.addLast = function(data) {
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
List.prototype.find = function(data) {
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

const list = new List();

list.addFirst(0);
list.addFirst(1);
// Expected: 1 => 0 => null

list.addLast(2);
// Expected: 1 => 0 => 2 => null

const n1 = list.find(1);
// Expected: A node with data 1 and pointing to node with data 0.

const n2 = list.find(100);
// Expected: null

debugger;