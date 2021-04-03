/**
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 */
function validPalindrome(s) {
    let ptr = s.length - 1;

    for (let i = 0; i < ptr; i++){
        if (!isAlphaNumeric(s[i])){
            continue;
        }
        if(!isAlphaNumeric(s[ptr])){
            ptr--;
            i--;
            continue;
        }

        if(s[i].toLowerCase() === s[ptr].toLowerCase()){
            ptr--;
        }else{
            return false;
        }
    }

    return true;
}

function isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
    }
    return true;
};

module.exports = validPalindrome;