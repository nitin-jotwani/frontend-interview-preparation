## array.slice on arguments
We know slice works with array only. But we can make it work with objects as long as object is having length.<br/>
Example in method arguments, they are not normal array, but array like object. So, we can convert it to array using-<br/>
`Array.prototype.slice.call(arguments)`<br/>
https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work