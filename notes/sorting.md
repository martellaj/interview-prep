* Selection sort
    - Iterate over list, swapping your current working element with the smallest element in the list
    - O(n^2) in worst, average, and best cases
    - In-place

* Insertion sort
    - Iterate over list, placing the current working item into its appropriate place in a set of already sorted elements
    - O(n) when elements are already sorted
    - O(n^2) in worst and average cases
    - In-place
    - Achieve by making the first element your "sorted" list, then iterating from there, moving the current working element into the right place by shifting elements to the right until it's the right place

* Quick sort
    - Choose a pivot value to split set into two subsets
    - Partition array by putting all elements less than pivot at beginning of array, and putting pivot in its proper place
    - Apply this recursively until the list is sorted (when start is no longer less than end)
    - Average case is O(nlog(n))