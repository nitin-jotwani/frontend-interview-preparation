/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//     for(let i = 0; i<numbers.length; i++) {
//         for(let j = i+1; j<numbers.length; j++) {
//             if (numbers[i]+numbers[j] === target)
//                 return [i+1,j+1]
//         }  
//     }
// };

var twoSum = function(numbers, target) {
    let low = 0,
        high = numbers.length - 1;
    while (low < high) {
        const addition = numbers[low]+numbers[high];
        if (addition === target) {
            return [low+1, high+1];
        }
        if (addition >= target)
            high--;
        else
            low++;
    }
};