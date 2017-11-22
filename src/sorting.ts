function selection(array: number[]) {
    console.log('Selection sort');
    console.log('--------------');
    console.log(array.toString());

    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        let temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;

        console.log(array.toString());
    }
}

function insertion(array: number[]) {
    console.log('Insertion sort');
    console.log('--------------');
    console.log(array.toString());

    for (let i = 1; i < array.length; i++) {
        const value = array[i];
        let emptyPos = i;

        while (emptyPos > 0 && array[emptyPos - 1] > value) {
            array[emptyPos] = array[emptyPos - 1];
            emptyPos--;
        }

        array[emptyPos] = value;

        console.log(array.toString());
    }
}

function partition(array: number[], start: number, end: number): number {
    let pIndex = start;
    const pivot = array[end];

    // Move elements less than the pivot to the beginning of the array.
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            const temp = array[i];
            array[i] = array[pIndex];
            array[pIndex] = temp;
            pIndex++;
        }
    }

    // Move pivot to correct position.
    const temp = array[end];
    array[end] = array[pIndex];
    array[pIndex] = temp;

    return pIndex;
}

function quick(array: number[], start: number, end: number) {
    if (start < end) {
        const pIndex = partition(array, start, end);
        quick(array, start, pIndex - 1);
        quick(array, pIndex + 1, end);
    }
}

function testSorting() {
    let array = [4, 2, 7, 1, 8, 9, 3];
    quick(array, 0, array.length - 1);
    console.log(array);
}

testSorting();
