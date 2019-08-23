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

const result = convertNestedObjectToPlain(personalInfo, 'personalInfo', {});
console.log(result);

function convertNestedObjectToPlain (nestedObj, parentKeyName, plainObj) {
    const keys = Object.keys(nestedObj);
    for(key in nestedObj) {
        const parentKey = parentKeyName+'_';
        if(typeof(nestedObj[key]) !== 'object') {
            const newKeyName = parentKey + key
            plainObj[newKeyName] = nestedObj[key];
        } else {
            convertNestedObjectToPlain(nestedObj[key], parentKey + key, plainObj);
        }
    }
    return plainObj;
}