import { List, ListNode } from '../linkedList/linkedList';

class Stack {
    public top: ListNode;

    private _stack: List;

    constructor() {
        this.top = null;
        this._stack = new List();
    }

    /**
     * Checks top of stack to determine if it's empty.
     */
    public isEmpty(): boolean {
        const _isEmpty = this.top === null;
        console.log(`Stack is empty: ${_isEmpty}`);
        return _isEmpty;
    }

    /**
     * Gets the value of the item on top of the stack.
     * If the stack is empty, null is returned.
     */
    public peek(): number {
        const top = this.top;

        if (top) {
            console.log(`Top: ${top.data}`);
            return top.data;
        } else {
            return null;
        }
    }

    /**
     * Adds a new node to the top of the stack.
     * @param data
     */
    public push(data: number) {
        const newTop = this._stack.addFirst(data);
        this.top = newTop;
    }

    /**
     * Pops the top off the stack.
     */
    public pop(): ListNode {
        const top = this.top;

        if (top) {
            const oldTop = this._stack.removeFirst();
            this.top = oldTop.next;

            return oldTop;
        }
    }
}

/**
 * Creates a stack and does stuff with it.
 */
function testStack() {
    const stack = new Stack();
    stack.isEmpty();

    stack.push(0);
    stack.push(1);
    stack.push(2);

    stack.peek();
    stack.isEmpty();

    const poppedTop = stack.pop();
    console.log(`Popped top: ${poppedTop.data}`);

    debugger;
}

testStack();