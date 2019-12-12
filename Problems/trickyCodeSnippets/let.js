const xyz = "Outside";
try {
    const xyz = "Inside";
    console.log(xyz) // Inside
    throw new Error("Blah");
} catch (err) {
    console.log(xyz); // Outside
}

// You can override let, const if it's declared in another block (not at same block level)