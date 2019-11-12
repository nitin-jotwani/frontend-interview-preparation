const arr = [[0, 0, 1], [0, 1, 1], [0, 0, 0]];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if(arr[i][j] === 0) {
            count++;
        } else {
            break;
        }
    }
}
console.log(count)