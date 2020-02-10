function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}


async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
}
add1(10).then(v => {
    console.log('add1: ', v);
});


async function add2(x) {
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(30);
    return x + await p_a + await p_b; // this happens sequentially. One await then next await.
}

add2(10).then(v => {
    console.log('add2: ', v);
});

/*
What happens in add2 is, both of them are triggered in parallel and timer is started, 
and then next await is used which will stop and wait for result and then next await is taken.
*/