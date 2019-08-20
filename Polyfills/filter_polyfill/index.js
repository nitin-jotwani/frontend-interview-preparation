const arr = [1,2,3,4];

const result = arr.filter(ele=>ele>2);

console.log('Actual Filter: ', result);


// Polyfill
function myFilter (testCondition) {
    const arr = this;
    const filterResult = [];
    arr.forEach(ele => {
        testCondition(ele) && filterResult.push(ele);
    })
    return filterResult;
};

Array.prototype.myFilter = myFilter;
const myFilterResult = arr.myFilter(ele=>ele>2);
console.log('myFilterResult: ', myFilterResult)