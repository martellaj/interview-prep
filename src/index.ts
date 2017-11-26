import { List } from './dataStructures/linkedList';

const emptyList = List.createList(0);
const fullList = List.createList(10);
const oneList = List.createList(1);

console.log(emptyList.remove(0));
console.log(oneList.remove(1));
console.log(oneList.remove(0));
console.log(fullList.remove(5));
console.log(fullList.remove(0));
console.log(fullList.remove(9));
debugger;
