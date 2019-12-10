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