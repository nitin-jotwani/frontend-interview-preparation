const infix = "(A*(B+(C/D)))";
const infixArr = infix.split('');
const operators = {
    '+': 1,
    '-': 1,
    '/': 2,
    '*': 2,
    '^': 3
};

const result = convertToPostfix(infixArr);


function convertToPostfix(infixArr) {
    const stack = [];
    let postFixExpr = ""
    let pop;
    for(el in infixArr) {
        const currentElement = infixArr[el];
        const isOperator = operators[currentElement];
        console.log('current ele: ', currentElement)
        if (isOperator && !stack.length || currentElement === '(') {
            stack.push(currentElement);
            console.log('found open (', stack, postFixExpr)
            continue;
        }
        if(currentElement === ')') {
            // console.log('found closing )')
            pop = stack.pop(); 
            while(pop !== '(') {
                postFixExpr+=pop;
                pop = stack.pop();
            }
            console.log('found closing )', stack, postFixExpr)
            continue;
        }
        if(isOperator) {
            pop = stack.pop();
            console.log('its an operator. pop = ', pop) 
            if(operators[currentElement] > operators[pop] || pop === '(') {
                stack.push(pop);
                stack.push(currentElement);
            } else {
                while(operators[currentElement] <= operators[pop]) {
                    postFixExpr += pop;
                    pop = stack.length && stack.pop();
                }
                if(pop) {
                    stack.push(pop);
                }
                stack.push(currentElement);
            }
            console.log('operator procesed', stack, postFixExpr)
        } else {
            postFixExpr += currentElement;
            console.log('its an operand', stack, postFixExpr)
        }
        // console.log(stack, postFixExpr)
    }
    pop = stack.pop()
    while(pop) {
        postFixExpr+=pop;
        pop=stack.pop();
    }
    console.log(postFixExpr)
}