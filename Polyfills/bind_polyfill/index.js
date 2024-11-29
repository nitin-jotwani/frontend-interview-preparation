Function.prototype.myBind = function (someOtherThis) {
    const functionToCall = this;
    const boundArgs = Array.prototype.slice.call(arguments, 1);
    return function bound() {
        return functionToCall.apply(someOtherThis, boundArgs)
    };
}

function methodToRun(arg1, arg2) {
    console.log(this, arg1, arg2);
}

const obj = {
    name: 'nitin'
}

const boundFunc = methodToRun.myBind(obj, 'Dude', 'Yoo');
boundFunc();

// Using spread and Rest
Function.prototype.myBind = function fn(thisContext, ...params) {
    thisContext.fn = this
    return () => {
        thisContext.fn(...params)
    }
}

const boundFunc = obj.func1.myBind({f1: 'pqr'}, 'b1param1', 'b1param2')
boundFunc()
