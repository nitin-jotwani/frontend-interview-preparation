# Index
### Global Object
### Execution Context
### IIFE
### Semicolons

## Global Object
Global execution context creates two things for you- `Global Object` & `this`.<br/>
GLobal Object is window object. At global level, global object & this are equal.<br/>
Global means not inside a function.

## Execution context
code 1:
```
var a = 'hello world';

function b() {
    console.log('called b');
}
b();
console.log(a);
```
```
called b
hello world
```

code 2:
```
b();
console.log(a);

var a = 'hello world';

function b() {
    console.log('called b');
}
```
```
called b
undefined
```
Here we are calling before they are created even. We are still getting the value but for var we get `undefined`(will see later why). This phenomenon is called `Hoisting`.<br>
The way we've learnt what hoisting is- that js moves all the var & declaration to top physically, hence they are accessible. `BIG NO`. It's not a proper reason. Let's see how it happens-

Execution context runs in two phases:<br/>
    - Creation Phase
As parser runs through code, it recog where var and functions are created. It then assign memory to them. It's not like they are moved to top physically. So, before your code executed li by line javascript engine has already set aside memoryspace for vars and functions. Hence, they exists in memory and can be accessed. However, when it comes to vars. It's lilbit different. Functions are placed as a whole in memory but vars are assigned as `undefined` when memory is assigned to them.

    - Execution Phase
In this phase code is executed line by line. Hence, in above value of a is `undefined` because we're trying to print before it is assigned. But it does exists in memory with value `undefined`.

## IIFE
### Function Statement
```
function myFunc (name) {
    console.log('Hello' + name);
}

myFunc('Nitin')
```
Function statements requires a name else it will give error.
### Function Expression
```
var myFunc = function (name) {
    console.log('Hello' + name);
}

myFunc('Nitin')
```
Function expression can be a anonymous function or named function.
### IIFE
So, from above we understood that we can't write a anonymous function when it's a statement like-
```
function(name) {
    console.log('hello' + name)
}
```
Above will give err `Function statements require a function name`<br>
So, we have to trick the parser so that it treats as valid. We will wrap this function inside (). Anything inside parenthesis is treated as expression. ex. (5+6). We will pass function in that case.
```
(function(name) {
    console.log('hello' + name)
})
```
But, this will just declare it, we need to invoke it. To invoke function we use ().
```
(function(name) {
    console.log('hello' + name)
}('Nitin'))
```
or
```
(function(name) {
    console.log('hello' + name)
})('Nitin')
```

### Why use IIFE?
- Keeps variables separately in execution context of that function and doesn't get placed in global execution context.
- Code is safe. Whatever you write inside IIFE it will not interfare with anyother code, vars.

## Semicolon
In Javascript, semicolons are optional. Syntax parser auto adds it if you didnt. Anywhere it sees an enter or nextline syntax parser adds a semicolon and assumes it's an end of line.<br>

Should you use semicolon or not?<br>
Yes. Write semicolon by yourself rather than syntax parser doing it for you. You have better handling of code in this case.