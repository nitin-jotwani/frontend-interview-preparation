/*
Input: 4,5,6-10
Output: 4,5,6,7,8,9,10 added to list

Input: 9,10,11
Output:
9,10 already exists
11 aaded to list

accept value from textbox and don't use any submit button for textbox
*/
// Add your javascript here
const numberInputElement = document.getElementById("numberInput");
const alreadyExistsElement = document.getElementById("alreadyExists");
const addedToListElement = document.getElementById("addedToList");
const inputNumberSpaceKey = 'INPUT_NUMBER_STORAGE'
const isLocalStorageEmpty = () => localStorage.getItem(inputNumberSpaceKey) === null
const isNumber = (no) => !isNaN(no) && no !== 'null'
const getRange = (start, count) => [...new Array(count + 1)].map((val, index) => index + start)

numberInputElement.addEventListener('keyup', debounce(validateNumbers, 2000));

function debounce (func, delay) { 
    let debounceTimer 
    return function() { 
        const context = this
        const args = arguments 
            clearTimeout(debounceTimer) 
            debounceTimer = setTimeout(() => func.apply(context, args), delay) 
    } 
} 

function hasKey(key) {
    if (isLocalStorageEmpty()) { return false }
    const storage = localStorage.getItem(inputNumberSpaceKey)
    const jsonObj = JSON.parse(storage)
    return !!jsonObj[key]
}

function addKey(key) {
    if (hasKey(key)) { return }
    const storage = localStorage.getItem(inputNumberSpaceKey)
    const updatedStorage = {
        ...JSON.parse(storage),
        [key]: 1
    }
    localStorage.setItem(inputNumberSpaceKey, JSON.stringify(updatedStorage))
}

function getList(input) {
    const inputStr = String(input)
    const inputNumbers = inputStr.split(',')
    return inputNumbers.reduce((listOfNumbers, inputNumber) => {
        let numbersToPush = [inputNumber]
        if (inputNumber.includes('-')) {
            const [num1, num2] = inputNumber.split('-')
            const parsedNum1 = parseInt(num1)
            const parsedNum2 = parseInt(num2)
            numbersToPush = getRange(parsedNum1, parsedNum2 - parsedNum1)
        }
        numbersToPush.forEach(no => isNumber(no) && listOfNumbers.push(parseInt(no)));
        return [...new Set(listOfNumbers)];
    }, [])
}

function validateNumbers() {
    const listOfNumbers = getList(numberInputElement.value);
    const map = listOfNumbers.reduce( (map, no) => {
        const mapKey = hasKey(no) ? 'alreadyPresent' : 'notPresent'
        map[mapKey].push(no);
        addKey(no);
        return map;
    }, {
        alreadyPresent: [],
        notPresent: []
    })
    alreadyExistsElement.innerHTML = map.alreadyPresent.join() + ' already exists'
    addedToListElement.innerHTML = map.notPresent.join() + ' have been added to the list';
}