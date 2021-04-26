/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *  1. Open brackets must be closed by the same type of brackets.
 *  2. Open brackets must be closed in the correct order.
 */

function validParentheses(s) {
    while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
        s = s.replace("()", "").replace("{}", "").replace("[]", "");
    }
    return s === "";
}

module.exports = validParentheses;