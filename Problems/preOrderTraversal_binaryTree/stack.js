/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let stack = [],
        res = [];
    while(root || stack.length) {
        if (root) {
            res.push(root.val);
            stack.push(root);
            root = root.left;
        } else {
            const node = stack.pop()
            root = node.right;
        }
    }
    console.log(res);
    return res;
};