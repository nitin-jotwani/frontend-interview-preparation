https://leetcode.com/problems/binary-tree-inorder-traversal/
## Inorder Traversal Using Stack
1. Create an empty Stack S
2. Initialize current node as root
3. Push current node to S and set `current = current.left` until current in `null`
4. If current is `null` and stack is not empty then
    1. Pop an item from stack
    2. Print the popped item or save it to result array. Set `current = current.right`
    3. Go to Step 3
5. If current is `null` and stack is empty then it's done

## Notes
Keep pushing left of node until null is found. <br/>
When null found means it has no more children now and so pop and proceed to right side of tree.<br/>
`Note:` Whenever you pop, you are actually popping a root of it's child or leaf node. Hence, we pop and move to right because it's in-order `Left Root Right`