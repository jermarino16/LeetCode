const firstUniqueCharacterInString = require("../../CodingChallenges_Javascript/Strings/firstUniqueCharacterInString");

test("abcdefg returns 0", () => {
    expect(firstUniqueCharacterInString("abcdefg")).toBe(0);
});

test("abadefg returns 1", () => {
    expect(firstUniqueCharacterInString("abadefg")).toBe(1);
});

test("ababddeeffgg returns -1", () => {
    expect(firstUniqueCharacterInString("ababddeeffgg")).toBe(-1);
});

test("aabbc returns 4", () => {
    expect(firstUniqueCharacterInString("aabbc")).toBe(4);
});
