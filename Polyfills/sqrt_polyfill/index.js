const result = mySqrt(16);

console.log(result)

function mySqrt (number) {
    let i = 1,
        result = 1;
    while(result < number) {
        i++;
        result = i * i;
    }
    return i;
}