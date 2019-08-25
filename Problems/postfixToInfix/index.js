const postFix = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

const result = convertToInfix(postFix);
console.log(result);

function convertToInfix(postFix) {
    const eval = {
        '+': (a, b) => a+b,
        '-': (a, b) => a-b,
        '*': (a, b) => a*b,
        '/': (a, b) => parseInt(a/b)
    }
    const stack = [];
    for(el in postFix) {
        if(eval[postFix[el]]) {
            const pop1 = parseInt(stack.pop());
            const pop2 = parseInt(stack.pop());
            const expr = eval[postFix[el]](pop2,pop1);
            stack.push(expr)
        } else {
            stack.push(postFix[el])
        }
    }
    return stack.pop();
}