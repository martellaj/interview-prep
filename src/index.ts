import { BinarySearchTree, BinarySearchTreeNode } from './dataStructures/binarySearchTree';

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(2);

const node = new BinarySearchTreeNode(5);
tree.root.right = node;

console.log(tree.isBst());

debugger;
