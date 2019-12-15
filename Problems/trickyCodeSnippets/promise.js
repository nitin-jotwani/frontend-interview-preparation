function promise () {
    Promise.resolve('Yes')
    .then(function (res) {
        console.log('res', res);
    });
    // console.log('res outside', res);
}
promise();

// Explanation: It's due to var which comes from catch(x) or then(res) are declared like with(){}.
// with ({x: 1, y: 2}) {console.log(x) }
// console.log('x outside:', x)
// for more refer js doc