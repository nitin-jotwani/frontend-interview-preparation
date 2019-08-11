## array.slice on arguments
We know slice works with array only. But we can make it work with objects as long as object is having length.<br/>
Example in method arguments, they are not normal array, but array like object. So, we can convert it to array using-<br/>
`Array.prototype.slice.call(arguments)`<br/>
https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work

## Another way of finding middle
`left+(right-left)/2` is same as `(left+right)/2`, but avoids overflow for large numbers

## Recursion vs Stack
`Recursion` implicitly works as a `stack` only. So, any problem implemented using recursion can be implemented using stack too and other DS.