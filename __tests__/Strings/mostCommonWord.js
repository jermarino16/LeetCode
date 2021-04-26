const mostCommonWord = require("../../CodingChallenges_Javascript/Strings/mostCommonWord");

test("hey there how you doing hey hey, returns hey", () => {
    expect(mostCommonWord("hey there how you doing hey hey", ['there', 'how'])).toBe('hey');
});

test("hey there how how you doing hey hey, returns hey", () => {
    expect(mostCommonWord("hey there how how you doing hey hey", ['there', 'hey'])).toBe('how');
});

test("I'm pretty cool you know? Like the coolest super duper cool cool for school. Okay good talk. Okay OKAY OKAy okay. returns okay", () => {
    expect(mostCommonWord("I'm pretty cool you know? Like the coolest super duper cool cool for school. Okay good talk. Okay OKAY OKAy okay.", [])).toBe('okay');
});

test("a, a, a, a, b,b,b,c, c. returns b", () => {
    expect(mostCommonWord("a, a, a, a, b,b,b,c, c", ['a'])).toBe('b');
});

test("a, a, a, a, b,b,b,c, c. returns a", () => {
    expect(mostCommonWord("a, a, a, a, b,b,b,c, c", [])).toBe('a');
});
