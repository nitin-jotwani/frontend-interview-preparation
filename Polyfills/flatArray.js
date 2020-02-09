Array.prototype.myFlat = function () {
    const arr = this;
    return arr.reduce((acc, ele) => {
        return Array.isArray(ele) ? acc.concat(ele.myFlat()) : acc.concat(ele);
    }, [])
}

const arr = [1, 2, [3, 4, [5, 6]]];
console.log('Custom: ', arr.myFlat());
// console.log('Actual: ', arr.flat()); // [1,2,3,4]