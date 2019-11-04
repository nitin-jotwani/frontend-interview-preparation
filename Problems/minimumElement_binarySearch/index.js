const arr = [5, 6, 8, 1, 3];

const minElement = (arr, low, high) => {
    const mid = low + Math.floor((high-low)/2);
    console.log(low, high, mid);
    if(low>=high)
        return -1;
    if(arr[mid]>arr[mid+1]) 
        return arr[mid+1]
    if(arr[mid]<arr[mid-1])
        return arr[mid]
    if(arr[high] > arr[mid])
        return minElement(arr, low, mid-1)
    return minElement(arr, mid+1, high)
    
}

const result = minElement(arr, 0, arr.length-1);
console.log('Result: ', result)