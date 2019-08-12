https://leetcode.com/problems/maximum-depth-of-binary-tree/<br/>
https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/<br/>https://www.youtube.com/watch?v=_O-mK2g_jhI
## How it works
1. If root is `null` then retun 0
2. If root is not `null`
    1. Calc depth of left subtree
    2. Calc depth of right subtree
    3. Compare depth of left, right and get max and add 1 to it
    4. Return height