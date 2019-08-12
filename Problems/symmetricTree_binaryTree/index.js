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
var isSymmetric = function(root) {
  return isSymmetricF(root, root);
};

function isSymmetricF(tree1, tree2) {
  if(!tree1 && !tree2) {
      return true;
  }
  if(!tree1 || !tree2 || tree1.val!==tree2.val) {
      return false
  }
  return isSymmetricF(tree1.left, tree2.right) && isSymmetricF(tree1.right, tree2.left)
}