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
var minDepth = function(root) {
    if(!root) 
        return 0;
    if (!root.left && !root.right)  // I dont have any child count me as one directly and save one recursion :)
        return 1; 
    const left = root.left ? minDepth(root.left):99999999;
    const right = root.right ? minDepth(root.right):999999999;
    return 1 + Math.min(left,right)
}