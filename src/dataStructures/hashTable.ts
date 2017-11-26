// O(1) look-up with a good hash function.

class HashTable {
    private _hashTable: Array<Array<number>>;

    constructor() {
        this._hashTable = [];
    }

    /**
     * Adds a key-value pair to the hash table. This does not
     * allow for duplicate keys (overwrites).
     * @param key
     * @param value
     */
    public add(key: number, value: number) {
        const hashedKey = this._hash(key);
        const row = this._hashTable[hashedKey];

        if (row) {
            row[key] = value;
        } else {
            this._hashTable[hashedKey] = [];
            this._hashTable[hashedKey][key] = value;
        }
    }

    /**
     * Retrieves the value for the given key. Returns null
     * if key doesn't exist within the hash table.
     * @param key
     */
    public retrieve(key: number): number {
        const hashedKey = this._hash(key);
        const row = this._hashTable[hashedKey];

        if (row) {
            return row[key];
        } else {
            return null;
        }
    }

    /**
     * Removes the key-value pair with the given key from the
     * hash table. It doesn't return anything, but it could.
     * @param key
     */
    public remove(key: number) {
        const hashedKey = this._hash(key);
        const row = this._hashTable[hashedKey];

        if (row) {
            row[key] = undefined;
        }
    }

    /**
     * Super awesome hash function.
     * @param key
     */
    private _hash(key: number): number {
        return key % 5;
    }
}

function testHashTable() {
    const hashTable = new HashTable();

    hashTable.add(0, 0);
    hashTable.add(1, 0);
    hashTable.add(5, 1);

    console.log(hashTable.retrieve(0));
    console.log(hashTable.retrieve(5));

    hashTable.remove(0);
    console.log(hashTable.retrieve(0));

    debugger;
}

testHashTable();