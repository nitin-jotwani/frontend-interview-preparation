function stringify (data) {
    const typeOfData = typeof data;
    if (typeOfData === 'boolean' || data === null || data === undefined || typeOfData === 'string' || typeOfData === 'number')
        return data;
    if (typeOfData === 'function')
        return null;
    if (Array.isArray(data))
        return `[${data.map(ele => stringify(ele)).join()}]`;
    if (data instanceof Date)
        return new Date();
    if (typeOfData === 'object') {
        const result = Object.keys(data).reduce((acc, key) => {
            if(typeof data[key] === 'function')
                return acc;
            return acc += `"${key}":"${stringify(data[key])}",`;
        }, '');
        return `{${result.slice(0, -1)}}`;
    }
}

const obj = {
    field1: 'Nitin',
    field2: [1,2, {nested: 'yes'}, [3,4]],
    field3: function(){},
    field4: null,
    field5: true,
    field6: false,
    field7: 8,
    field8: 8.95,
    field9: new Date()
}

console.log('Custom: ',stringify(obj))
console.log('Actual: ', JSON.stringify(obj))