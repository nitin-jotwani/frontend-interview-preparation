/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let height = 0;
var maxDepth = function(root) {
    if(!root) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    if(left>right)
        height = 1 + left
    else
        height = 1 + right
    return height;
}