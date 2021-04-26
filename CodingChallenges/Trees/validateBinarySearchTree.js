/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 *  The left subtree of a node contains only nodes with keys less than the node's key.
 *  The right subtree of a node contains only nodes with keys greater than the node's key.
 *  Both the left and right subtrees must also be binary search trees..
 *
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 */
function validateBinarySearchTree(root) {
    validate(root, null, null);
}

function validate(root, low, high){
    if(root === null){
        return true;
    }

    if ((high !== null && root.val >= high) || (low != null && root.val <= low)){
        return false;
    }

    return validate(root.left, low, root.val) && validate(root.right, root.val, high)
}

module.exports = validateBinarySearchTree;