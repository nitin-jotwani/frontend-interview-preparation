const array = [0, 23, 56, -9, 67, 1, 800, 8, 3, 2, 400];
selectionSort(array);
console.log(array)

function selectionSort (array) {
  const lengthOfArray = array.length;
  for(let i=0; i<lengthOfArray; i++) {
    let minIndex = i;
    for(let j=i+1; j<lengthOfArray; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if(minIndex !== i) { // ensures that we indeed found element which is small than other
      swap(array, i, minIndex);
    }
  }
}

function swap(array, largeIndex, smallIndex) {
  array[smallIndex] = array[largeIndex] + array[smallIndex];
  array[largeIndex] = array[smallIndex] - array[largeIndex];
  array[smallIndex] = array[smallIndex] - array[largeIndex];
}