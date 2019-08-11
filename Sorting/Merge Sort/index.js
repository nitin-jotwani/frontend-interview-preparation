const array = [60, 0, 56, -9, 67, 1, 800, 8, 3, 2, 400];
mergeSort(array, 0, array.length - 1);
console.log(array)

function mergeSort (array, left, right) {
  if(left<right) {
    const mid = Math.floor((left + right)/2);
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, mid, right);
  }
}

function merge(array, left, mid, right) {
  const tempArr1 = array.slice(left, mid + 1);
  const tempArr2 = array.slice(mid + 1, right + 1);
  let i = 0,
      j = 0,
      k = left;
  while(i<tempArr1.length && j<tempArr2.length) {
    if(tempArr1[i] > tempArr2[j]) {
      array[k] = tempArr2[j];
      j++;
    } else {
      array[k] = tempArr1[i];
      i++;
    }
    k++;
  }

  while(i < tempArr1.length) {
    array[k] = tempArr1[i];
    i++;
    k++;
  }
  while(j < tempArr2.length) {
    array[k] = tempArr2[j];
    j++;
    k++;
  }
}

/*
Breakpoint 1
0,  1,  2,  3,  4, 5,   6, 7, 8, 9,  10
0, 23, 56, -9, 67, 1, 800, 8, 3, 2, 400
Left: 0   Right: 10   MID: 5

Breakpoint 2
0,  1,  2,  3,  4, 5   ||     6, 7, 8, 9,  10
0, 23, 56, -9, 67, 1   ||   800, 8, 3, 2, 400
Left: 0   Right: 5   MID: 2

Breakpoint 3
0,  1,  2   ||    3,  4, 5   ||     6, 7, 8, 9,  10
0, 23, 56   ||   -9, 67, 1   ||   800, 8, 3, 2, 400
Left: 0   Right: 2   MID: 1

Breakpoint 4
0,  1  ||   2   ||    3,  4, 5   ||     6, 7, 8, 9,  10
0, 23  ||  56   ||   -9, 67, 1   ||   800, 8, 3, 2, 400
Left: 0   Right: 1   MID: 0

Call will be mergeSort(array, 0, 0). So, i<j fails. Go back (i.e. processing at Breakpoint 4)
Call will be mergeSort(array, 1, 1). So, i<j fails. Go back (i.e. processing at Breakpoint 4)
Call will be merge(array, 0, 0, 1)

processing at Breakpoint 3 now
Call will be mergeSort(array, 2, 2). So, i<j fails. Go back (i.e. processing at Breakpoint 3)
Call will be merge(array, 0, 1, 2)

processing at Breakpoint 2 now
Call will be mergeSort(array, 3, 5)
*/