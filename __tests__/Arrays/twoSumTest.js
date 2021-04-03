const twoSum = require("../../CodingChallenges/Arrays/twoSum");

test("Indices 0,1 add up to target.", () => {
    expect(twoSum([1, 4, 6, 7, 9], 5)).toStrictEqual([0, 1]);
});

test("Indices 1,3 add up to target.", () => {
    expect(twoSum([1, 4, 6, 7, 9], 11)).toStrictEqual([1, 3]);
});

test("No indices add up to target", () => {
    expect(twoSum([1, 4, 6, 7, 9], 100)).toStrictEqual(null);
});

test("Nums is null", () => {
    expect(twoSum(null, 100)).toStrictEqual(null);
});
