# Linked List

> [Reference](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html)

## What I remember (may or may not be correct)
* They can be single or double, which refers to the number of links that each node has.
  * Single only links to the next one, while double also links to the previous node.
* A typical implementation will have a `Node` that has a `value` and a `link`

## Key points
* Dynamic data structures (not static like an array... even though that's not entirely true in JavaScript)
* The first element is referred to as the "head"
* A major disadvantage is that they don't allow for direct access to individual elements, but instead they require you to traverse the list
* Another disadvantage is that it requires extra memory, as you need to store link references
* Adding an element to a linked list is as simple as creating a new `Node` and adding a link to it from the end (also "tail") of the list
* Removing an element (for a singly linked list) means changing the `link` from the previous `Node` to point to the `Node` that comes after the one you are removing

## Operations
* `addFirst` - Adds a `Node` to the beginning of the list
* `find` - An example of traversing the list
* `addLast` - Adds a `Node` to the end of the list
* `insertAfter` - Adds a `Node` after a `Node` with a given value
* `insertBefore` - Adds a `Node` before a `Node` with a given value
* `delete` - Removes a `Node` from the list