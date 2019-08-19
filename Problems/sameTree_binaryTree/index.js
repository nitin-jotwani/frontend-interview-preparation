/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return isSameTreeNormalF(p,q)
};

function isSameTreeOptF(p,q) {
    if(!p && !q) return true
    if(!p || !q || p.val!==q.val) {
        return false
    }
    return isSameTreeOptF(p.left,q.left) && isSameTreeOptF(p.right,q.right)
}

function isSameTreeNormalF(p,q) {
    if(!p && !q) {
      return true;
    }
    if(p && !q) {
        return false;  
    } 
    if(!p && q) {
        return false;
    }
    if(p.val !== q.val) {
        return false;
    }
    return isSameTreeNormalF(p.left, q.left) && isSameTreeNormalF(p.right, q.right);
}