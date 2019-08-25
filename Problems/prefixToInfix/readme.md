## Prefix to Infix Evaluate
```
Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

Scan from right to left.
Steps:
1. If `operand` push it to stack
2. If `operator` pop two items from stack and apply that operator and then push it to stack.

https://www.youtube.com/watch?v=1zqgyoZzda4