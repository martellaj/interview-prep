declare module 'queue-fifo' {
    class Queue {
        constructor();
        isEmpty(): boolean;
        size(): number;
        clear(): void;
        enqueue(data: any): void;
        dequeue(): any;
        peek(): any;
    }

    export = Queue;
}