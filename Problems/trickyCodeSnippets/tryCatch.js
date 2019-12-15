function test() {
    try {
        throw new Error('Nitin Errored')
    }
    catch (err) {
        console.log('Inside: ', err)
    }
    console.log('Outside: ', err) // ReferenceError: err is not defined
}

test();

with ({ a: 2 }) { console.log('Inside With expr: ', a) }
// console.log('Outside: ', a) // ReferenceError: a is not defined


// Explanation: It's due to var which comes from catch(x) or then(res) are declared like with(){}.
// with ({x: 1, y: 2}) {console.log(x) }
// console.log('x outside:', x)
// for more refer js doc
