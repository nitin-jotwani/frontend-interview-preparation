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
    if(!root) 
        return 0;
    if(!root.left && !root.right) // I dont have any child count me as one directly and save one recursion :)
        return 1;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return 1 + Math.max(left, right);
}