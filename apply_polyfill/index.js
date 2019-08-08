Function.prototype.myCall = function(someOtherThis) {
    someOtherThis.fnName = this;
    // someOtherThis.fnName(); // This will work, but without args

    // to handle args we will use eval
    const args = arguments[1];
    const newArray = [];
    args.forEach((ele, index) => {
        newArray.push('args[' + index +']');
    })
    eval("someOtherThis.fnName(" + newArray + ")");
}

function showProfileMessage(arg1, arg2) {
    console.log('showProfileMessage:', this.name, arg1, arg2);
}

const obj = {
    name: "Nitin"
}
showProfileMessage.myCall(obj, ['Dude', 'Yoo']);
