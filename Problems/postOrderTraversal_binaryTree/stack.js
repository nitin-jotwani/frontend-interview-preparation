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
  let stack = [],
      res = [];
  stack.push(root)
  while(stack.length) {
      const node = stack.pop();
      if (node) {
          res.push(node.val);
          stack.push(node.left);
          stack.push(node.right);
      }
  }
  console.log(res.reverse()); // print as reverse, coz it's like stack
  return res;
};