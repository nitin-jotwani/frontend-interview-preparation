// https://ramdajs.com/docs/#merge

// const withDefaults = R.merge({x: 0, y: 0});
// withDefaults({y: 2}); //=> {x: 0, y: 2}
function _objectAssign() {
    let idx = 0;
    const resultObj = {};
    while(idx < arguments.length) {
        const src = arguments[idx];
        for(let key in src) {
            resultObj[key] = src[key];
        }
        idx++;
    }
    return resultObj;
}
function myMerge(obj1) {
    return function (obj2) {
        return _objectAssign(obj1, obj2);
    }
}

const obj1 = {x: 1, y: 2};
const obj2 = {y: 3, d: 5, p: 9};
const result = myMerge(obj1)(obj2);
console.log(result)