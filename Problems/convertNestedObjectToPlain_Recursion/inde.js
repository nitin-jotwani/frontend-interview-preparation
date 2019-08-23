const personalInfo = {
    name: 'nitin',
    surname: 'jotwani',
    address: {
        city: 'Ulhasnagar',
        state: 'Maharashtra',
        landmark: {
            district: 'thane'
        }
    }
}

let plainObj = {};
const result = convertNestedObjectToPlain(personalInfo, 'personalInfo');
console.log(result);

function convertNestedObjectToPlain (nestedObj, parentKeyName) {
    const keys = Object.keys(nestedObj);
    for(key in keys) {
        const parentKey = parentKeyName+'_';
        if(typeof(nestedObj[keys[key]]) !== 'object') {
            const newKeyName = parentKey + keys[key]
            plainObj[newKeyName] = nestedObj[keys[key]];
        } else {
            convertNestedObjectToPlain(nestedObj[keys[key]], parentKey + keys[key]);
        }
    }
    return plainObj;
}