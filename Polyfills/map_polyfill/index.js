function myMap(fn) {
    const arr = this;
    for(let i=0;i<arr.length;i++) {
        arr[i] = fn(arr[i]);
    }
    return arr;
}
Array.prototype.myMap = myMap;
const arr = [1,2,3,4,5];
const result = arr.myMap(el => {
    if (el % 2 === 0) {
        return el + ' is divisible';
    }
    return el + ' is not divisible';
});
console.log(result)



/*
One Liner Dudeee!
Array.prototype.myMap = function(logic) {
    return this.reduce((acc, el)=>acc.concat(logic(el)),[])
}
*/