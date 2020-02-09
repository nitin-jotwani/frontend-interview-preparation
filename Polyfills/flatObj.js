Object.prototype.myFlat = function () {
    const obj = this;
    return Object.keys(obj).reduce((acc, key) => {
        if (typeof obj[key] === 'object')
            acc = { ...acc, ...obj[key].myFlat() }
        else
            acc[key] = obj[key];
        return acc;
    }, {})
}

const obj = {
    field1: 1,
    field2: 2,
    field3: 3,
    field4: {
        Nfield1: 4,
        Nfield2: 5,
        Nfield3: {
            NNfield1: 6
        }
    }
}

console.log(obj.myFlat())