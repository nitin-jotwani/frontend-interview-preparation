(function () {
    try {
        throw new Error()
    }
    catch (x) {
        var x = 1, y = 5; // let x or const x won't work because already declared catch(x)
        console.log(x, y)
    }
    console.log(x, y)
})()