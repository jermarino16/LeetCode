/**
 *  Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */
function levelOrderTraversal(root) {
    let result = [];

    helper(root, result, 0);

    return result;
}

function helper(root, result, level) {
    if (root !== null) {
        if (result.length === level){
            result.push([]);
        }
        result[level].push(root.val);

        if (root.left !== null) {
            helper(root.left, result, level + 1);
        }

        if (root.right !== null) {
            helper(root.right, result, level + 1);
        }
    }
}

module.exports = levelOrderTraversal;