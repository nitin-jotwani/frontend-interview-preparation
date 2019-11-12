const arr = [89, 24, 75, 11, 76];
let n1,n2;
if(arr[0]>arr[1]) {
    n1 = arr[0];
    n2 = arr[1];
} else {
    n1 = arr[1];
    n2 = arr[0];
}
for(let i=2; i<arr.length; i++) {
    if(arr[i]>n1) {
        n2 = n1;
        n1 = arr[i]
        continue;
    }
    if (arr[i] > n2 && arr[i]<n1) {
        n2 = arr[i];
    }
}
console.log(n2)