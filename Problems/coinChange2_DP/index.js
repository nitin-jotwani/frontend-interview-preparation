const coins = [5, 8, 3, 9, 11];
const total = 38;
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
            const pickPreviousValue = i > 0 ? resultArray[i - 1][j] : Infinity
            if (coins[i] > j) {
                resultArray[i][j] = pickPreviousValue;
            } else {
                resultArray[i][j] = Math.min(
                    pickPreviousValue,
                    1 + resultArray[i][j - coins[i]]
                );
            }
        }
    }
    // console.log(resultArray)
    if (resultArray[coins.length - 1][total] === Infinity) { // SOLUTION DOESNT EXISTS
        return -1;
    }
    let i = coins.length - 1;
    let j = total;
    const denominationPicked = [];
    while (j !== 0) {
        if (i > 0 && resultArray[i][j] === resultArray[i - 1][j]) {
            i--;
            continue;
        }
        denominationPicked.push(coins[i]);
        j = j - coins[i];
    }
    console.log('Denominations Picked :', denominationPicked)
    return denominationPicked.length;
}
