## Example for Understanding this
```
var myObject = {
    testA: 'iam testA',
    testB: function testB() {
        console.log('iam testB', this)
    }
}

myObject.testB(); // iam testB { testA: 'iam testA', testB: [Function: testB] }
```

Caller is passed as 'this' into the callee. <br />
It means, function or object which is used to call a function is passed as this to that function.<br />
In above example, `myObject.testB();` <br />
Here, myObject is used to call testB. Hence, caller is myObject and callee is testB.<br />
So, testB will receive myObject props as this.
