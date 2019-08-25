const coins = [2,3,5,10];
const total = 15;
const result = coinChange(coins, total);
console.log(result)

function coinChange(coins, total) {
    const resultArray = [];
    for (let i = 0; i < coins.length; i++) {
        resultArray[i] = new Array();
        for (let j = 0; j <= total; j++) {
            if (j == 0) {
                resultArray[i][j] = 0;
                continue;
            }
            if (coins[i] > j) {
                resultArray[i][j] = i > 0 ? resultArray[i - 1][j] : Infinity;
            } else {
                resultArray[i][j] = Math.min(
                    (i > 0 ? resultArray[i - 1][j] : Infinity),
                    1 + resultArray[i][j - coins[i]]
                );
            }
        }
    }
    console.log(resultArray)
    let totalRemaining = total;
    let i = coins.length - 1;
    let j = total;
    const denominationPicked = [];
    if (resultArray[coins.length-1][total] === Infinity) { // SOLUTION DOESNT EXISTS
        return -1;
    }
    while (totalRemaining !== 0) {
        if (i > 0 && resultArray[i][j] === resultArray[i - 1][j]) {
            i--;
            continue;
        }
        const pickCoin = coins[i];
        denominationPicked.push(pickCoin);
        totalRemaining = j - pickCoin;
        j = totalRemaining;
    }
    console.log('Denominations Picked :', denominationPicked)
    return denominationPicked.length;
}
