https://leetcode.com/problems/minimum-depth-of-binary-tree/
## How it works
1. If root is `null` then retun 0
2. If both child's of root are `null` then return 1. Because we know answer comes 1 for node having no childs. So, save recursion.
3. If root is not `null`
    1. Calc depth of left subtree
    2. Calc depth of right subtree
    3. Compare depth of left, right and get min and add 1 to it
    4. Return height

`Note:` In this, we have to consider a special case when root has no right child i.e.`[3,9]`.<br/>
So, in this if child is null, then we assign any large no as value. Because if we process that then will get value as `0` for null. Which will disturb result in find min().<br/>
Whereas in maxDepth finding we don't do this because we picking anyways large no. But here we have to pick min no and `0` may affect here. So extra check is required here.