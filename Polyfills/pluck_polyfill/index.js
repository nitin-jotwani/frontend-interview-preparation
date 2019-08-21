// https://ramdajs.com/docs/#pluck
/*
var getAges = R.pluck('age');
getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]

R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
*/
function myPluck(pick, data) {
    if (typeof(data) === 'object') {
        for(let key in data) {
            if(typeof(data[key]) === 'object') {
                for(let key2 in data[key]) {
                    if (key2 === pick) {
                        data[key] = data[key][key2]
                    }
                }
            }
        }
    }
    return data;
}

const myObj = {
    personalInfo1: {
        name: 'nitin'
    },
    personalInfo2: {
        name: 'niton'
    },
    personalInfo3: {
        age: 26
    }
}
const result = myPluck('name', myObj);
console.log(result)