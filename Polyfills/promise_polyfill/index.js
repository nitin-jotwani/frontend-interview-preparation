class MyPromise {
    constructor(executor) {
        this._handleResolution;
        executor(this._resolve.bind(this));
    }

    _resolve(value) {
        this._handleResolution(value);
    }
    then(resolutionHandler) {
        this._handleResolution = resolutionHandler;
    }
}

module.exports = MyPromise; // MyPromiseES5

function MyPromiseES5(exe) {
    console.log('running promise')
    exe(resolve)
}

function resolve(val) {
    console.log('running then')
    thenRuns(val)
}

var thenRuns;
MyPromise2.prototype.then = function (handler) {
    console.log('saving then context')
    thenRuns = handler;
}
