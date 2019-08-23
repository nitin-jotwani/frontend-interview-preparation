const coins = [1,2,3,5,10];
const total = 15;
const result = coinChange(coins, total);
console.log(result)

function coinChange(coins, total) {
    const resultArray = [];
    for(let i=0; i<coins.length; i++) {
        resultArray[i] = new Array();
        for(let j=0; j<=total; j++) {
            if(j==0) {
                resultArray[i][j] = 1;
                continue;
            }
            if(coins[i] > j) {
                resultArray[i][j] = i>0?resultArray[i-1][j]:0;
            } else {
                resultArray[i][j] = (i>0?resultArray[i-1][j]:0) + resultArray[i][j-coins[i]];
            }
        }
    }
    return resultArray;
}