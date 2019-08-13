/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return calc(root) !== -1;
};

function calc(root) {
  if(!root) return 0
  if(!root.left && !root.right) return 1;
  const leftHeight = calc(root.left);
  const rightHeight = calc(root.right);
  console.log(leftHeight, rightHeight);
  if(leftHeight == -1 || rightHeight == -1 || Math.abs(rightHeight - leftHeight) > 1)
      return -1
  return 1 + Math.max(leftHeight, rightHeight);
}