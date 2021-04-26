/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix and do the rotation.
 */
function rotateImage(matrix) {
    transpose(matrix);
    reverseMatrix(matrix);

    return matrix;
}

function transpose(matrix){
    for (let i = 0; i < matrix.length; i++){
        for (let j = i; j < matrix[i].length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}

function reverseMatrix(matrix){
    for (let i = 0; i < matrix.length; i++){
        reverseArray(matrix[i]);
    }
}

function reverseArray(array){
    for (let i = 0; i < array.length / 2; i++){
        let ptr = array.length - 1 - i;
        let temp = array[ptr];
        array[ptr] = array[i];
        array[i] = temp;
    }
}

module.exports = rotateImage;

