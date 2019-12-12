function add(a, b) {
    setTimeout(() => console.log(a + b), 0);
}
function sub(a, b) {
    setTimeout(() => console.log(a - b), 0);
}
setTimeout(add(3, 2), 0);
console.log(5);
add(1, 3)
console.log(8)
sub(1, 2);

// How setTimeout works
/*
In setTimeout you just have to write a function name. It will be called byself when timeout is over. 
However, if you're writing function using () then this will be called immediately.
setTimeout(add, 0); // will be called in next tick
setTimeout(add(2,3), 0); // will be called immediately and will not be called after timeOut
*/