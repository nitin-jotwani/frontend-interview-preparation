const transpose = (arr, transpose = []) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!transpose[j]) {
                transpose[j] = [];
            }
            transpose[j][i] = arr[i][j];
        }
    }
    console.log('Transpose: ', transpose)
}

const transposeInPlace = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            arr[i][j] = arr[i][j] + arr[j][i];
            arr[j][i] = arr[i][j] - arr[j][i];
            arr[i][j] = arr[i][j] - arr[j][i];
        }
    }
    console.log('Transpose In Place: ', arr)
}

const transposeAdvance = (arr) => {
    const transpose = arr.map((col, i) => arr.map(row => row[i]));
    console.log('TransposeAdvance :', transpose)
}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const arrForInPlace = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const arrForAdv = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transpose(arr);
transposeInPlace(arrForInPlace);
transposeAdvance(arrForAdv);