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

reverseWords('Do or do not, there is no try.');