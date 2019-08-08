const result = mySqrt(8);

console.log(result)

function mySqrt (number) {
    let i = 1,
        result = 1;
    while(result < number) {
        i++;
        result = i * i;
    }
    if(result>number)
        return i - 1;
    return i;
}