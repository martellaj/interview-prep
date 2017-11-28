import { Queue } from './dataStructures/queue';

export function createArray(numberOfElements: number): number[] {
    const array = [];

    for (let i = 0; i < numberOfElements; i++) {
        array.push(i);
    }

    return array;
}

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

/**
 * Returns the most frequent integer in an integer array.
 * @param array
 */
export function mostFrequent(array: number[]): number {
    let counts = {};
    let max = null;

    if (array.length === 0) {
        return null;
    } else if (array.length === 1) {
        return array[0];
    } else {
        counts[array[0]] = 1;
        max = array[0];
    }

    for (let i = 1; i < array.length; i++) {
        const currElement = array[i];
        counts[currElement] ? counts[currElement]++ : counts[currElement] = 1;
        counts[max] < counts[currElement] ? max = currElement : null;
    }

    return max;
}

/**
 * Prints pairs within the array who have a sum of 10.
 * @param array
 */
export function sumPairs(array: number[]) {
    /**
     * Test cases
     * ==========
     * - An empty array
     * - An array with 1 element
     * - An array with 1 "5"
     * - An array with multiple "5"s
     * - An array with [0, 10]
     * - An array with a negative number as part of a pair (i.e. [-2, 12])
     */

    // Return if input hasn't been initialized or has a length less than 2.
    if (!array || array.length < 2) {
        return;
    }

    let map = {};
    let printedSame = false;

    for (let i = 0; i < array.length; i++) {
        const curr = array[i];
        const pair = 10 - curr;

        // Special case for number who is a pair with itself (i.e. 5 in this case).
        if (curr === pair) {
            // If we've already hit number and haven't printed the pair, do so.
            if (map[curr] && !printedSame) {
                console.log(`${curr}, ${pair}`);
                printedSame = true;
                continue;
            }

            // If we didn't print on this loop, mark as seen and move on.
            map[curr] = true;
            continue;
        }

        // If we've already processed element, move on.
        if (map[curr]) {
            continue;
        }

        // If we've seen element's buddy, print the pair.
        if (map[pair]) {
            console.log(`${curr}, ${pair}`);
        }

        // Mark current element as seen.
        map[curr] = true;
    }
}

/**
 * Returns the length of the largest substring of the input string.
 *
 * Problem: https://leetcode.com/problems/longest-substring-without-
 * repeating-characters/
 *
 * @param string
 */
export function longestSubstring(string: string): number {
    let maxString = '';
    let currString = '';

    for (let i = 0; i < string.length; i++) {
        if (currString.indexOf(string[i]) === -1) {
            currString += string[i];
        } else {
            if (currString.length > maxString.length) {
                maxString = currString;
            }

            /**
             * Originally just ended the currString here, and started
             * a new string when we hit a dupe. I missed the fact that
             * just because we hit a dupe, it doesn't mean part of the
             * currString can be used still.
             */
            let salvagableSubstring = '';
            for (let j = currString.length - 1; j >= 0; j--) {
                if (currString[j] !== string[i]) {
                    salvagableSubstring += currString[j];
                } else {
                    break;
                }
            }

            const foo = salvagableSubstring.split('');
            const bar = foo.reverse();
            const baz = bar.join('');

            currString = baz + string[i];
        }
    }

    // Check last substring we made.
    if (currString.length > maxString.length) {
        maxString = currString;
    }

    return maxString.length;
}

/**
 * May or may not be actually correct.
 * @param number
 */
export function isPalindrome(number: number): boolean {
    const string = number.toString();

    if (string[0] === '-') {
        return false;
    }

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

/**
 * Prints out letter combinations of a phone number.
 * @param digits
 */
export function letterCombinations(digits: string): void {
    const mappings = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    const queue = new Queue<string>();
    queue.enqueue('');

    for (let i = 0; i < digits.length; i++) {
        const digit = parseInt(digits[i]);

        while (queue.peek().length === i) {
            const curr = queue.dequeue().data;
            for (let j = 0; j < mappings[digit].length; j++) {
                queue.enqueue(curr + mappings[digit][j]);
            }
        }
    }

    queue.print();
}

export function uniqueElement(array: number[]): number {
    let map = [];

    for (let i = 0; i < array.length; i++) {
        const curr = array[i];
        if (!map[curr]) {
            map[curr] = 1;
        } else {
            map[curr] = map[curr] + 1;
        }
    }

    for (let i = 0; i < array.length; i++) {
        const curr = array[i];
        if (map[curr] === 1) {
            return curr;
        }
    }
}