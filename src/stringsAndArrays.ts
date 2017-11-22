/**
 * Returns the first nonrepated character in the input string.
 * Problem details on page 91.
 * @param string
 */
function nonrepeated(string: string) {
    let map: any = {};

    // First pass builds map of character counts.
    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (map[char]) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }

    // Second pass finds first character with count of 1.
    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (map[char] === 1) {
            console.log(`First nonrepeated character: ${char}`);
            return char;
        }
    }

    // Test cases
    // nonrepeated('total');
    // nonrepeated('teeter');
}

/**
 * Removes all instances of characters in "remove" from "string".
 * Problem details on page 94.
 * @param string
 * @param remove
 */
function removeChars(string: string, remove: string): string {
    let map = {};
    let newString = '';

    for (let i = 0; i < remove.length; i++) {
        map[remove[i]] = true;
    }

    for (let i = 0; i < string.length; i++) {
        if (!map[string[i]]) {
            newString += string[i];
        }
    }

    console.log(`New string: ${newString}`);
    return newString;

    // Test cases
    // removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');
}

/**
 * Reverses the words in an input string.
 * Problem details on page 97.
 * @param string
 */
function reverseWords(string: string): string {
    let reversedString = '';
    const words = string.split(' ');

    for (let i = words.length - 1; i >= 0; i--) {
        let space = i === 0 ? '' : ' ';
        reversedString += `${words[i]}${space}`;
    }

    console.log(`Reversed words: "${reversedString}"`);
    return reversedString;
}

function isAlpha(input: string): boolean {
    return (input >= 'a' && input <= 'z') ||
        (input >= 'A' && input <= 'Z');
}

function reverseNotSpecial(input: string): string {
    let reversed = [];
    let rIndex = 0;

    for (let i = input.length - 1; i >= 0; i--) {
        if (isAlpha(input[i])) {
            let inserted = false;
            while (!inserted) {
                if (!reversed[rIndex]) {
                    reversed[rIndex] = input[i];
                    inserted = true;
                }

                rIndex++;
            }
        } else {
            // Bad: reversed[i] = input[i];

            /**
             * Instead of just putting it in the spot here,
             * we'd have to shift elements in "reversed" to the right
             * to make room for special character if the spot isn't
             * empty.
             */
        }
    }

    return reversed.join('');
}

function binarySearchArray(array: number[], target: number): number {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const middle = Math.floor((start + end) / 2);
        const middleVal = array[middle];

        if (target === middleVal) {
            return middle;
        } else if (target < middleVal) {
            end = middle - 1;
        } else if (target > middleVal) {
            start = middle + 1;
        }
    }

    return null;
}

const array = [1, 2, 3, 4, 5, 6];
console.log(binarySearchArray(array, 4));