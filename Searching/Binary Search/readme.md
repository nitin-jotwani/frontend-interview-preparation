## Tips
- In this case array is always sorted. So, always there could be an alternative of optimising solution.
    -   Exmaple like finding a number, you never have to traverse linearly. Think of a trick how you can utilise binary search when you have sorted array. This will result in efficient time complexity. https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
- Don't use formula `middle=(start+end)/2` as it can result in overflow for large numbers. The safest way to find the middle of two numbers without getting an overflow is as follows: `middle = start + (end-start)/2`.

- good link https://medium.com/better-programming/three-smart-ways-to-use-binary-search-in-coding-interviews-250ba296cb82