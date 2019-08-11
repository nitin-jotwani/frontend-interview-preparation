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
  let stack = [],
      res = [];
  while(root || stack.length) {
      if (root) {
          stack.push(root);
          root = root.left;
      } else {
          const node = stack.pop();
          res.push(node.val);
          root = node.right;
      }
  }
  console.log(res);
  return res;
};