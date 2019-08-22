// https://ramdajs.com/docs/#compose
// Performs right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.

const composedFn = myCompose(isDivisibleBy2, square);
const result = composedFn(21);
console.log(result)

function myCompose (...args) {
    args.reverse();
    const isAllFuncType = args.every(el=> typeof(el) === 'function');
    const lastFuncs = args.slice(1, Infinity);
    const arityCheck = lastFuncs.every(el=> el.length === 1);
    if (!isAllFuncType)
        throw new Error('not all are type of function');
    if (!arityCheck)
        throw new Error('no of arguments should be unary');
    return function(value) {
        const resultOfFirstFunc = args[0](value);
        return lastFuncs.reduce((acc, el) => el(acc), resultOfFirstFunc);
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

function addOne(val) {
    return val + 1;
}

function inValidArgs(val1, val2) {
    return val1+val2;
}