const postFix = ["*", "+", "4", "5", "*", "2", "3"]

const result = convertToInfix(postFix.reverse());
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