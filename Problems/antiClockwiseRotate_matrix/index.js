const rotate = (arr, transpose = []) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!transpose[j]) {
                transpose[j] = [];
            }
            transpose[j][i] = arr[i][j];
        }
    }
    for (let i = 0; i < transpose.length; i++) {
        const temp = transpose[0][i];
        transpose[0][i] = transpose[2][i];
        transpose[2][i] = temp;
    }
    console.log(transpose)
}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotate(arr);