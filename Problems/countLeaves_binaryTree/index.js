// USING DFS
let leafCount = 0;
var countLeaf = function (node) {
    if (!node.left && !node.right) {
        leafCount++;
        console.log('here', leafCount)
        return;
    }
    node.left && isSameTree(node.left);
    node.right && isSameTree(node.right);
};
countLeaf(root)
console.log('leafCount: ', leafCount)