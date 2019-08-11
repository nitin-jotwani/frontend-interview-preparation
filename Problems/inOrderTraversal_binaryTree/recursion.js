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
var inorderTraversal = function(root) {
  const res = [];
  inOrderF(root, res)
  return res;
};

function inOrderF(root, res) {
  if(root) {
      if (root.left) {
          inOrderF(root.left, res);
      }
      res.push(root.val);
      if (root.right) {
          inOrderF(root.right, res);
      }
  }
}