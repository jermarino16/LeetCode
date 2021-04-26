/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Example 1:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 * (0,0) (0,1) (0, 2) (1,2) (2, 2) (2, 1) (2, 0) (1, 0) (1, 1)
 *
 * Example 2:
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */
function spiralMatrix(matrix) {
    let result = [];
    let m = matrix.length;
    let n = matrix[0].length;
    let topRowCounter = 0, bottomRowCounter = 0, rightColumnCounter = 0, leftColumnCounter = 0;
    let numberOfIterations = 0;

    //Figure out iteration numbers
    if (m > n) {
        numberOfIterations = (n * 2);
    } else {
        numberOfIterations = (m * 2);
    }

    while (topRowCounter + bottomRowCounter + rightColumnCounter + leftColumnCounter < numberOfIterations) {
        if ((topRowCounter === rightColumnCounter && topRowCounter === bottomRowCounter && topRowCounter === leftColumnCounter)) {
            iterateRight(matrix, topRowCounter, leftColumnCounter, rightColumnCounter, result)
            topRowCounter++;
        } else if (rightColumnCounter === bottomRowCounter && rightColumnCounter === leftColumnCounter) {
            iterateDown(matrix, n - 1 - rightColumnCounter, topRowCounter, bottomRowCounter, result);
            rightColumnCounter++;
        } else if (bottomRowCounter === leftColumnCounter) {
            iterateLeft(matrix, m - 1 - bottomRowCounter, leftColumnCounter, rightColumnCounter, result);
            bottomRowCounter++;
        } else {
            iterateUp(matrix, leftColumnCounter, topRowCounter, bottomRowCounter, result);
            leftColumnCounter++;
        }
    }

    return result;
}

function iterateRight(matrix, rowIndex, leftColumnCounter, rightColumnCounter, result) {
    for (let j = 0 + leftColumnCounter; j < matrix[rowIndex].length - rightColumnCounter; j++) {
        result.push(matrix[rowIndex][j]);
    }
}

function iterateLeft(matrix, rowIndex, leftColumnCounter, rightColumnCounter, result) {
    for (let j = matrix[rowIndex].length - rightColumnCounter - 1; j >= 0 + leftColumnCounter; j--) {
        result.push(matrix[rowIndex][j]);
    }
}

function iterateDown(matrix, columnIndex, topRowCounter, bottomRowCounter, result) {
    for (let i = 0 + topRowCounter; i < matrix.length - bottomRowCounter; i++) {
        result.push(matrix[i][columnIndex]);
    }
}

function iterateUp(matrix, columnIndex, topRowCounter, bottomRowCounter, result) {
    for (let i = matrix.length - 1 - bottomRowCounter; i >= 0 + topRowCounter; i--) {
        result.push(matrix[i][columnIndex]);
    }
}

module.exports = spiralMatrix;