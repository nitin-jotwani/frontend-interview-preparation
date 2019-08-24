/*
Input: {2,3,5,7,10}
Total: 14
Subset = {2,5,7}
*/

const input = [2, 3, 5, 7, 10];
const total = 20;

const subset = findSubset(input, total);
console.log(subset);

function findSubset(input, total) {
    const result = [];
    for (let i = 0; i < input.length; i++) {
        result[i] = [];
        for (let j = 0; j <= total; j++) {
            if (j == 0) {
                result[i][j] = 1;
                continue;
            }
            if (input[i] > j) {
                result[i][j] = i > 0 ? result[i - 1][j] : 0;
            } else {
                if (i > 0 && result[i - 1][j] === 1) { // solution already exists from previous 
                    result[i][j] = result[i - 1][j];
                    continue;
                }
                if (i === 0 && input[i] < j) {
                    result[i][j] = 0;
                }
                else {
                    result[i][j] = i > 0 ? result[i - 1][j - input[i]] : result[i][j - input[i]];
                }
            }
        }
    }
    const nosPicked = [];
    let totalToMake = 0;
    let i = input.length-1,
        j = total;
    while (j !== 0) {
        if (i!=0 && result[i][j] === result[i-1][j]) {
            i--;
            continue;
        }
        const picked = input[i];
        totalToMake += picked;
        nosPicked.push(picked);
        j = j - input[i];
    }
    console.log(result);
    return nosPicked.sort((a,b)=>a>b);
}