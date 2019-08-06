const myPromise = require('./index');

const promise = new myPromise(function(resolve) {
    setTimeout(function() {
        resolve('nitin');
    }, 2000);
});

promise.then(function(string) {
    console.log('Output:', string)
})