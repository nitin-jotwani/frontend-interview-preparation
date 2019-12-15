const add = (a, b, c) => a + b + c;

const curry1 = createCurry(add);
const curry2 = createCurry(add);
const curry3 = createCurry(add);

const result1 = curry1(1)(2)(3);
const result2 = curry2(1,2)(3);
const result3 = curry3(1)(2,3);
console.log('Result: ', result1, result2, result3);

function createCurry(func) {
    const totalArgs = func.length;
    let argsGot = [];
    return function curry(...args) {
        argsGot = [...argsGot, ...args];
        if(argsGot.length === totalArgs)
            return func.apply(null, argsGot);
        else
            return curry;
    }
}