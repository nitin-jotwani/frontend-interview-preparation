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
  const res = [];
  preOrderF(root, res)
  return res;
};

function preOrderF(root, res) {
  if(root) {
      res.push(root.val);
      if (root.left) {
          preOrderF(root.left, res);
      }
      if (root.right) {
          preOrderF(root.right, res);
      }
  }
}