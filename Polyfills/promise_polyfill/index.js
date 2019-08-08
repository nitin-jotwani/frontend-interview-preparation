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

module.exports = MyPromise;
