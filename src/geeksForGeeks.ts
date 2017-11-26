import { List } from './dataStructures/linkedList';

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

/**
 * Finds the pair in array whose sum is closest to x.
 * Assumes that the array is sorted.
 * @param array
 * @param x
 */
function findClosestPairSum(array: number[], x: number) {
    if (!array || array.length < 2) {
        return null;
    } else if (array.length === 2 || x < (array[0] + array[1])) {
        return [array[0], array[1]];
    }

    let prev = array[0] + array[1];
    let curr = undefined;

    for (let i = 0; i < array.length - 1; i++) {
        curr = array[i] + array[i + 1];

        if (x >= prev && x <= curr) {
            const d1 = x - prev;
            const d2 = curr - x;

            if (d1 < d2 || d1 === 0) {
                return [array[i - 1], array[i]];
            } else {
                return [array[i], array[i + 1]];
            }
        }
    }

    return [array[array.length - 2], array[array.length - 1]];
}

const array = [2, 5, 6, 10, 11];
const closestPair = findClosestPairSum(array, 10);
debugger;