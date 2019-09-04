var obj = {
    prop1: 1,
    prop2: 2,
    prop3: {
        nestedProp1: 1,
        nestedProp2: 2,
        hellNested: {
            hellNestedProp1: 1,
            hellNestedProp2: 2
        }
    }
}

var clonedObj = myClone(obj);
obj.prop3.nestedProp1 = 5;
obj.prop3.hellNested.hellNestedProp1 = 5;
console.log(clonedObj);

function myClone(obj, newObj = {}) {
    for(prop in obj) {
        if(typeof obj[prop] === 'object')
            newObj[prop] = myClone(obj[prop]);
        else
            newObj[prop] = obj[prop];
    }
    return newObj;
}