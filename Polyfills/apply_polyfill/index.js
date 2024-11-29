Function.prototype.myApply = function app(thisContext, params) {
    thisContext.fn = this
    thisContext.fn(...params)
}
