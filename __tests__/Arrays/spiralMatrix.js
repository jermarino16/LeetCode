const spiralMatrix = require("../../CodingChallenges_Javascript/Arrays/spiralMatrix");

test("SpiralMatrix [[1,2,3],[4,5,6],[7,8,9]]", () => {
    expect(spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});

test("SpiralMatrix [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", () => {
    expect(spiralMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])).toStrictEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
});

test("SpiralMatrix [[3],[2]]", () => {
    expect(spiralMatrix([[3], [2]])).toStrictEqual([3, 2]);
});

test("SpiralMatrix [[2,5],[8,4],[0,-1]]", () => {
    expect(spiralMatrix([[2, 5], [8, 4], [0, -1]])).toStrictEqual([2, 5, 4, -1, 0, 8]);
});
