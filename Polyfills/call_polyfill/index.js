Function.prototype.myCall = function(someOtherThis) {
    someOtherThis.fnName = this;
    // someOtherThis.fnName(); // This will work, but without args

    // to handle args we will use eval
    const args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');        
    }
    eval("someOtherThis.fnName(" + args + ")");
}

Function.prototype.myCall_v2 = function myCall(thisArg, ...params) {
    thisArg.functionToCall = this
    thisArg.functionToCall(...params)
}

function showProfileMessage(arg1, arg2) {
    console.log('showProfileMessage:', this.name, arg1, arg2);
}

const obj = {
    name: "Nitin"
}
showProfileMessage.myCall(obj, 'Dude', 'Yoo');
