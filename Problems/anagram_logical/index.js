const arr = ['eat', 'ate', 'tea', 'bat', 'tab'];

const result = anagram(arr);
console.log(result);

function anagram(arr) {
    const anagramGroup = {};
    arr.forEach(element => {
       const word = element.split('').sort().join(''); 
       if (anagramGroup[word]) {
           anagramGroup[word].push(element);
       } else {
           anagramGroup[word] = [element]
       }
    });
    const keys = Object.keys(anagramGroup);
    const resultArr = []
    for(let i=0; i<keys.length; i++) {
        resultArr[i] = anagramGroup[keys[i]];
    }
    return resultArr;
}