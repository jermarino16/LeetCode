/**
 * Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.
 *
 * Follow up:
 *  - A straight forward solution using O(mn) space is probably a bad idea.
 *  - A simple improvement uses O(m + n) space, but still not the best solution.
 *  - Could you devise a constant space solution?
 */
function setMatrixZeroes(matrix) {
    const setRowsToZero = new Set();
    const setColumnsToZero = new Set();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                setRowsToZero.add(i);
                setColumnsToZero.add(j);
            }
        }
    }

    for (const i of setRowsToZero.values()) {
        setRowToZeroes(i, matrix);
    }

    for (const j of setColumnsToZero.values()) {
        setColumnToZeroes(j, matrix);
    }

    return matrix;
}

function setRowToZeroes(rowIndex, matrix) {
    for (let j = 0; j < matrix[rowIndex].length; j++) {
        matrix[rowIndex][j] = 0;
    }
}

function setColumnToZeroes(columnIndex, matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][columnIndex] = 0;
    }
}


module.exports = setMatrixZeroes;