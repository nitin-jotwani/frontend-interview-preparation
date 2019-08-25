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
            const pop1 = stack.pop();
            const pop2 = stack.pop();
            const expr = eval[postFix[el]](parseInt(pop2),parseInt(pop1)); // if you want to evaluate and produce output
            // const expr = '(' + pop2 + postFix[el] + pop1 + ')'; // if you want to create infix string expr
            stack.push(expr)
        } else {
            stack.push(postFix[el])
        }
    }
    return stack.pop();
}