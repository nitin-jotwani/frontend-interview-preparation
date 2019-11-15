const arr = [1, 4, 5, 2, 7, 8, 3];
const range = [2, 5];
const hashTable = {};
let flag = true;
for (let i = 0; i < arr.length; i++) {
    hashTable[arr[i]] = 1;
}
for (let i = range[0]; i <= range[1]; i++) {
    if(hashTable[i])
        continue;
    else {
        flag = false;
        break;
    }
}
console.log('All Elements in range: ', flag);