function myFlat() {
    const arr = this;
    return arr.reduce((acc, el) => Array.isArray(el) ? acc.concat(el.myFlat()) : acc.concat(el), []);
};

const arr = [[1,2,3],[4,5,[6,7]]];
Array.prototype.myFlat = myFlat;

const flattenArr = arr.myFlat();
console.log(flattenArr);