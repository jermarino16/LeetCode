const validParentheses = require("../../CodingChallenges_Javascript/Strings/validParentheses");

test("'(){}[]' is valid", () => {
    expect(validParentheses("(){}[]")).toBe(true);
});

test("'({[]})' is valid", () => {
    expect(validParentheses("({[]})")).toBe(true);
});

test("'(' is invalid", () => {
    expect(validParentheses("(")).toBe(false);
});

test("'(' is invalid", () => {
    expect(validParentheses("[(])")).toBe(false);
});

