const transpose = (arr, transpose = []) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!transpose[j]) {
                transpose[j] = [];
            }
            transpose[j][i] = arr[i][j];
        }
    }
    console.log(transpose)
}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transpose(arr);