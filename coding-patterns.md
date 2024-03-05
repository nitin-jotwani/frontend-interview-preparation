# Concepts, Algos, Techniques 
This contains tips & patterns for coding questions. How to analyze questions and approaches for solving.

## Refer for more deep dive
This is just for ref. In case wanted to explore more in depth. <br/>
[Coding Interview Problem Patterns](https://www.educative.io/courses/grokking-the-coding-interview)<br/>
[Grokking the Coding Interview](https://www.designgurus.io/course/grokking-the-coding-interview)

## Steps to solve any question
1. Take time and thoroughly read the question
2. Try to find a hint in question by finding words like- subarray, sorted array, or not, etc. Will discuss more about this.
3. Consider bruteforce as well as try to analyze which type of pattern it is
4. Walkthrough conceptually above solution
5. Code!

Tips:
1. Try to solve problem first with bruteforce approach.
2. Only if you're confident about using pattern solution then only use it. Otherwise bruteforce first.

## Pattern1: Two Pointers
In problems where we deal with sorted arrays or linked-list.<br/>
Result could be to find a pair, triplet or sub-array.
Ref.: [Medium Blog](https://medium.com/better-programming/the-ultimate-strategy-to-preparing-for-the-coding-interview-ee9f7eb439f3)

## Binary Search
Whenever we encounter a sorted Array, List, or Matrix in a coding problem and we are asked to find a specific number, we all know that the best algorithm we can use is the binary search.<br/>
Ref.: [Medium Blog](https://medium.com/better-programming/three-smart-ways-to-use-binary-search-in-coding-interviews-250ba296cb82)


## Dynamic Programming
Problems like Min, max, shortest, longest, total no of ways. These kind of problems requires optimisation. Can be solved using greedy and DP. Greedy fails sometimes so DP is used. With optimization problems, you see terms like shortest/longest, minimized/maximized, least/most, fewest/greatest, biggest/smallest, etc.<br/>
DP is applicable to the problems which are having properties of -
- overlapping sub problem
    - in which solutions of subproblem help in finding big solution. You dont have to re-compute because we have already stored result of small sub probs.
- optimal sub structure
    - Solution can be obtained by finding optimal solution of it’s sub-problem<br/>
[read more](https://docs.google.com/document/d/18J9M1XkNqM3YX4zVkU-Qxk8wAqTC-481yq7WKtZFDvM/edit#heading=h.xwcxeeo3vy6z)


## Sliding Window
- Very well suited for iteratable items like array, strings, linklist
- when you see Q such as longest, shortest, min, max, subarray, contains, etc.
- need to find from contiguous sequence<br/>
[read more](https://docs.google.com/document/d/18J9M1XkNqM3YX4zVkU-Qxk8wAqTC-481yq7WKtZFDvM/edit#heading=h.yu1wip5j0gmm)


