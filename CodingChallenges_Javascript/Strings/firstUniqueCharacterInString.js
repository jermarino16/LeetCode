/**
 * Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.
 */
function firstUniqueCharacterInString(s) {
    let characterMap = new Map();

    // create occurrence count
    for (let i = 0; i < s.length; i++) {
        if (characterMap.has(s[i])) {
            characterMap.set(s[i], characterMap.get(s[i]) + 1);
        } else {
            characterMap.set(s[i], 1);
        }
    }

    //loop through string again and return the first character that has value of 1.
    for (let i = 0; i < s.length; i++) {
        if (characterMap.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
}

module.exports = firstUniqueCharacterInString;