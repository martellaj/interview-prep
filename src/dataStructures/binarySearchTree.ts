// import { Queue } from '../queue/queue';
import { Stack } from '../stack/stack';
import Queue = require('queue-fifo');

class BinarySearchTreeNode {
    public data: number;
    public left: BinarySearchTreeNode;
    public right: BinarySearchTreeNode;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

interface BSTFindResult {
    target: BinarySearchTreeNode;
    parent: BinarySearchTreeNode;
}

class BinarySearchTree {
    public root: BinarySearchTreeNode;

    constructor() {
        this.root = null;
    }

    public insert(data: number) {
        const newNode = new BinarySearchTreeNode(data);

        /**
         * If there's no root yet, make new node the root and return.
         */
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currNode = this.root;

        while (currNode) {
            if (data < currNode.data) {
                if (!currNode.left) {
                    currNode.left = newNode;
                    return;
                } else {
                    currNode = currNode.left;
                }
            } else if (data > currNode.data) {
                if (!currNode.right) {
                    currNode.right = newNode;
                    return;
                } else {
                    currNode = currNode.right;
                }
            } else {
                return;
            }
        }
    }

    public delete(data: number) {
        const findResult = this.find(data);

        if (findResult) {
            let targetNode = findResult.target;
            let parentNode = findResult.parent;

            if (parentNode) {
                if (data < parentNode.data) {
                    parentNode.left = targetNode.right;

                } else if (data > parentNode.data) {

                }
            }
        }
    }

    public find(data: number): BSTFindResult {
        if (!this.root) {
            return null;
        }

        let parentNode: BinarySearchTreeNode = undefined;
        let currNode = this.root;

        while (currNode) {
            if (data < currNode.data) {
                parentNode = currNode;
                currNode = currNode.left;
            } else if (data > currNode.data) {
                parentNode = currNode;
                currNode = currNode.right;
            } else {
                return {
                    target: currNode,
                    parent: parentNode
                };
            }
        }

        return null;
    }

    public bfs() {
        if (!this.root) {
            return;
        }

        const queue = new Queue();
        queue.enqueue(this.root);

        let log = '';
        while (!queue.isEmpty()) {
            const currNode = queue.dequeue();
            log += `${currNode.data}, `;

            currNode.left ? queue.enqueue(currNode.left) : null;
            currNode.right ? queue.enqueue(currNode.right) : null;
        }

        console.log(log);
    }

    public dfs() {
        if (!this.root) {
            return;
        }

        const stack = new Stack<BinarySearchTreeNode>();
        stack.push(this.root);

        let log = '';
        while (!stack.isEmpty()) {
            const currNode = stack.pop().data;
            log += `${currNode.data}, `;

            currNode.right ? stack.push(currNode.right) : null;
            currNode.left ? stack.push(currNode.left) : null;
        }

        console.log(log);
    }

    public getHeight(): number {
        const height = this._getHeight(this.root);

        console.log(`Tree height: ${height}`);

        return height;
    }

    private _getHeight(node: BinarySearchTreeNode): number {
        if (!node) {
            return 0;
        } else {
            return 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
        }
    }

    public getMinDepth(): number {
        return this._getMinDepth(this.root);
    }

    private _getMinDepth(node: BinarySearchTreeNode): number {
        if (!node) {
            return 0;
        }

        return 1 + Math.min(this._getMinDepth(node.left), this._getMinDepth(node.right));
    }

    public preorder() {
        this._preorder(this.root);
    }

    private _preorder(node: BinarySearchTreeNode) {
        if (node) {
            console.log(node.data);
            node.left ? this._preorder(node.left) : null;
            node.right ? this._preorder(node.right) : null;
        }
    }

    public preorderIterative() {
        const visitedNodes = new Stack<BinarySearchTreeNode>();

        if (!this.root) {
            return;
        }

        visitedNodes.push(this.root);

        while (!visitedNodes.isEmpty()) {
            const currNode = visitedNodes.pop().data;
            console.log(currNode.data);
            currNode.right ? visitedNodes.push(currNode.right) : null;
            currNode.left ? visitedNodes.push(currNode.left) : null;
        }
    }

    public lca(a: number, b: number) {
        const lca = this._lca(this.root, a, b);
        console.log(`LCA: ${lca}`);
    }

    private _lca(node: BinarySearchTreeNode, a: number, b: number): number {
        const data = node.data;

        if (a < data && b < data) {
            return this._lca(node.left, a, b);
        } else if (a > data && b > data) {
            return this._lca(node.right, a, b);
        } else {
            return node.data;
        }
    }
}

function testBst() {
    const tree = new BinarySearchTree();

    tree.insert(10);
    tree.insert(5);
    tree.insert(2);
    tree.insert(7);

    console.log(tree.getMinDepth());
}

testBst();