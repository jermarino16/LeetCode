/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 */
function reverseString(s) {
    let ptr = s.length - 1;

    for (let i = 0; i < s.length  / 2; i++){
        let temp = s[ptr];
        s[ptr] = s[i];
        s[i] = temp;
        ptr--;
    }

    return s;
}

module.exports = reverseString;