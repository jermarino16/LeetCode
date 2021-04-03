const reverseString = require("../../CodingChallenges/Arrays/reverseString");

test("Reverse ['a','b','c']", () => {
    expect(reverseString(['a', 'b', 'c'])).toStrictEqual(['c','b','a']);
});

test("Reverse ['a','b','c', 'd']", () => {
    expect(reverseString(['a', 'b', 'c', 'd'])).toStrictEqual(['d','c','b', 'a']);
});
