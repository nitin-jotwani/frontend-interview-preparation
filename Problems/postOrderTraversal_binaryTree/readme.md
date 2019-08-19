https://leetcode.com/problems/binary-tree-inorder-traversal/

## How it works
1. Push root to `first stack`
2. Loop while `first stack` is not empty
    1. Pop a node from `first stack` and if it's not null push to `second stack`
    2. Push left and then right child of popped node to `first stack`
3. Print `second stack` in reverse order

## Notes
In this we are actually pushing root to result stack first and then it's left and right contents to temp stack. From there then right content is picked and then left...continues<br/><br/>

So, it's like push root first, then it's right contents and then it's left contents. Hence, when you see result in reverse order we have a postOrder traversal `Left Right Root`.