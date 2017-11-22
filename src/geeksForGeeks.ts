import { List } from './dataStructures/linkedList/linkedList';

function insertSortedLinkedList() {
    const list = new List<number>();
    list.addLast(2);
    list.addLast(5);
    list.addLast(7);
    list.addLast(10);
    list.addLast(15);

    list.insertSorted(4);
    list.print();
}

insertSortedLinkedList();