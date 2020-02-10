(function () {
    var a = b = 42;
})();

console.log(typeof a);
console.log(typeof b);

/*
The variable a is undefined because it is scoped to the anonymous function and goes out of scope when the function completes. 
b on the other hand is in the global scope. 

This is because it is not declared inside the function; 
the var keyword only applies to a here, so b is hoisted to the global scope.
*/