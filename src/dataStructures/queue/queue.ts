import { List, ListNode } from '../linkedList/linkedList';

class Queue {
    private _queue: List;

    constructor() {
        this._queue = new List();
    }

    /**
     * Adds a new item to the queue.
     * @param data
     */
    public enqueue(data: number) {
        this._queue.addLast(data);
    }

    /**
     * Removes the oldest item from the queue.
     */
    public dequeue(): ListNode {
        const dequeued = this._queue.removeFirst();

        if (dequeued) {
            console.log(`Dequeued: ${dequeued.data}`);
        } else {
            console.log('Queue is empty!');
        }

        return dequeued;
    }

    /**
     * Clears the queue.
     */
    public clear() {
        let currentNode = this._queue.head;

        while (currentNode) {
            this.dequeue();
            currentNode = this._queue.head;
        }
    }

    /**
     * Prints current state of queue.
     */
    public print() {
        this._queue.print();
    }
}

function testQueue() {
    const queue = new Queue();

    queue.enqueue(0);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.print();

    queue.dequeue();
    queue.print();

    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.print();

    queue.dequeue();
    queue.dequeue();
    queue.print();

    queue.clear();
    queue.print();

    debugger;
}

testQueue();