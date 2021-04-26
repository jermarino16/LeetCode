/**
 *  Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
 *  (i.e., from left to right, then right to left for the next level and alternate between).
 *
 *  Ex1:
 *      Input: root = [3,9,20,null,null,15,7]
 *      Output: [[3],[20,9],[15,7]]
 */
function levelOrderTraversal(root) {
    let result = [];

    helper(root, result, 0);

    return result;
}

function helper(root, result, level, zig) {
    if (root !== null) {
        if (result.length === level) {
            result.push([]);
        }
        result[level].push(root.val);

        if(level % 2 !== 0){
            if (root.left !== null) {
                helper(root.left, result, level + 1);
            }

            if (root.right !== null) {
                helper(root.right, result, level + 1);
            }
        }else{
            if (root.right !== null) {
                helper(root.right, result, level + 1);
            }
            if (root.left !== null) {
                helper(root.left, result, level + 1);
            }
        }

    }
}

module.exports = levelOrderTraversal;