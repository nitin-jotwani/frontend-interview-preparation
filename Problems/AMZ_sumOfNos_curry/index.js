const result = sum(1)(2)(3)(4)();
console.log(result);

function sum(value1) {
    return function (value2) {
        if(!value2)
            return value1;
        return sum(value1 + value2);
    }
}