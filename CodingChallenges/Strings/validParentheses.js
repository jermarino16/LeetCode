/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *  1. Open brackets must be closed by the same type of brackets.
 *  2. Open brackets must be closed in the correct order.
 */

function validParentheses(s) {
    let stack = [];

    stack.push(s[0]);
    let stackSize = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] == ')') {
            if (stack[stackSize - 1] == '(') {
                stack.pop();
                stackSize--;
            } else {
                return false;
            }
        } else if (s[i] == '}') {
            if (stack[stackSize - 1] == '{') {
                stack.pop();
                stackSize--;
            } else {
                return false;
            }
        } else if (s[i] == ']') {
            if (stack[stackSize - 1] == '[') {
                stack.pop();
                stackSize--;
            } else {
                return false;
            }
        } else {
            stack.push(s[i]);
            stackSize++;
        }
    }

    return stack.length === 0;
}

module.exports = validParentheses;