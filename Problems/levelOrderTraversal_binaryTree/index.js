/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let queue=[]
  if(!root) return [];
  queue.push(root);
  let res=[];
  while(queue.length) {
      const temp=[];
      let currentLength = queue.length;
      while(currentLength--) {
          const node = queue.shift();
          temp.push(node.val);
          if(node.left) queue.push(node.left)
          if(node.right) queue.push(node.right)
      }
      res.push(temp);        
  }
  return res;
};