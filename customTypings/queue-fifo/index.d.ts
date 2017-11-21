declare module 'queue-fifo' {
    export default class Queue {
        constructor();
        isEmpty(): boolean;
        size(): number;
        clear(): void;
        enqueue(data: any): void;
        dequeue(): any;
        peek(): any;
    }
}