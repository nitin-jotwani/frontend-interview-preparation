const sortedArray = [2, 4, 7, 10, 13, 23, 37, 88, 150, 157, 203];

const valueToFind = 7;

const indexOfValue = binarySearch(sortedArray, 0, sortedArray.length - 1, valueToFind);

console.log('Value Present at index: ', indexOfValue);

function binarySearch (array, low, high, key) {
    while (low <= high) {
        const midIndex = Math.floor((low + high) / 2);
        if (key < array[midIndex]) {
            high = midIndex - 1;
        } else if (key > array[midIndex]) {
            low = midIndex + 1;
        } else {
            return midIndex;
        }
    }
    return -1;
}
