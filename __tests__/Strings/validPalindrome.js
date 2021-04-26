const validPalindrome = require("../../CodingChallenges_Javascript/Strings/validPalindrome");

test("racecar is a valid palindrome", () => {
    expect(validPalindrome("racecar")).toBe(true);
});

test("RaCeCar is a valid palindrome", () => {
    expect(validPalindrome("RaCeCar")).toBe(true);
});

test("R  a, Ce  Ca:r is a valid palindrome", () => {
    expect(validPalindrome("R  a, Ce  Ca:r")).toBe(true);
});

test("s is empty", () => {
    expect(validPalindrome("")).toBe(true);
});

test("s is one char", () => {
    expect(validPalindrome("a")).toBe(true);
});

test("racbar is not valid palindrome", () => {
    expect(validPalindrome("racbar")).toBe(false);
});

test("sadgasgasdgadsgasdhdashas is not valid palindrome", () => {
    expect(validPalindrome("sadgasgasdgadsgasdhdashas")).toBe(false);
});

test("race db  ecar is not valid palindrome", () => {
    expect(validPalindrome("race db  ecar")).toBe(false);
});

test("',,,,,,,,,,,,acva' is not valid palindrome", () => {
    expect(validPalindrome(",,,,,,,,,,,,acva")).toBe(false);
});

