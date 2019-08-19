const array = [0, 23, 56, -9, 67, 1, 800, 8, 3, 2, 400];
bubbleSort(array);
console.log(array)

function bubbleSort (array) {
  const lengthOfArray = array.length;
  for(let i=0; i<lengthOfArray; i++) {
    for(let j=0; j<lengthOfArray-i-1; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j, j+1);
      }
    }
  }
}

function swap(array, no1, no2) {
  array[no2] = array[no1] + array[no2];
  array[no1] = array[no2] - array[no1];
  array[no2] = array[no2] - array[no1];
}