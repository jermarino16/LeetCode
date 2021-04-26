/**
 *  Given the root of a binary tree, return the inorder traversal of its nodes' values.
 */
function inorderTraversal(root) {
    let result = [];

    helper(root, result);

    return result;
}

function helper(root, result) {
    if (root !== null){
        if (root.left !== null){
            helper(root.left, result);
        }
        result.push(root.val);
        if (root.right !== null){
            helper(root.right, result);
        }
    }
}

module.exports = inorderTraversal;