(function () {
    try {
        throw new Error()
    }
    catch (x) {
        var x = 1, y = 5;
        console.log(x, y)
    }
    console.log(x, y)
})()