## array.slice on arguments
We know slice works with array only. But we can make it work with objects as long as object is having length.<br/>
Example in method arguments, they are not normal array, but array like object. So, we can convert it to array using-<br/>
`Array.prototype.slice.call(arguments)`<br/>
https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work

## Another way of finding middle
`left+(right-left)/2` is same as `(left+right)/2`, but avoids overflow for large numbers

## Recursion vs Stack
`Recursion` implicitly works as a `stack` only. So, any problem implemented using recursion can be implemented using stack too and other DS.

## Don't use `for in` for arrays
Let's say you add some prototype to array and then using `for in` on array. What for in does is iterate over each prop of array element and whatever its properties are. So, it iterate over your added prototype too.
```
Array.prototype.test = 'test'
let arr = [1,2,3]
for(let ele in arr) {
    console.log(ele, arr[ele])
}

Output:
0 1
1 2
2 3
test test
```

So, use normal for loop over arrays always

## JS has decimal issue
`2.5*6.73` will give `16.825000000000003` So, always use toFixed(2) when expecting decimals.
