/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     let index = nums.findIndex(num => num === target);
//     if(index < 0) {
//         index = nums.findIndex(num => num > target);
//     }
//     return index<0 ? nums.length : index;
// };

var searchInsert = function(nums, target) {
    let low = 0,
        high = nums.length - 1;
    let midIndex;
    while(low <= high) {
        midIndex = Math.floor((low+high)/2);
        if (target < nums[midIndex])
            high = midIndex - 1;
        else if (target > nums[midIndex])
            low = midIndex + 1;
        else 
            return midIndex;
    }
    if (target > nums[midIndex])
        return midIndex+1;
    else
        return midIndex;
};