// https://ramdajs.com/docs/#compose
// Performs right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.
function myCompose (...args) {
    return function(value) {
        args.reverse();
        let prevValue;
        for(let i=0; i<args.length; i++) {
            if(i===0) 
            prevValue = args[i](value);
            else
            prevValue = args[i](prevValue);
        }
        return prevValue;
    }

}

function isDivisibleBy2(val) {
    if(val%2 === 0) 
        return 'divisible';
    return 'not divisible';
}

function square(val) {
    return val * val;
}
const composedFn = myCompose(isDivisibleBy2, square);
const result = composedFn(21);
console.log(result)
