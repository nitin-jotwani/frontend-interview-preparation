function first() {
    return new Promise(resolve => {
        console.log(2);
        resolve(3);
        console.log(4);
    });
}

async function f() {
    console.log(1);
    let r = await first();
    console.log(r);
}

console.log("a");
f();
console.log("b");

/*
async-await uses Generators to resolve and wait for Promise.

await is asynchronous in async-await, when compiler reach at await it stops executing and 
push everything into event queue and continue with synchronous code after async function.
*/

// https://github.com/rohan-paul/Awesome-JavaScript-Interviews/blob/master/Promise-Async-Await-Sequential-Execution/async-await-master-notes/asyn-await-how-its-called-asynchronous-when-it-makes-possible-to-execute-in-synchrounous-manner.md