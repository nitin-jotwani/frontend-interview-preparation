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
var postorderTraversal = function(root) {
  const res = [];
  postOrderF(root, res)
  return res;
};

function postOrderF(root, res) {
  if(root) {
    if (root.left) {
      postOrderF(root.left, res);
    }
    if (root.right) {
      postOrderF(root.right, res);
    }
    res.push(root.val);
  }
}