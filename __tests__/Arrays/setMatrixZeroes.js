const setMatrixZeroes = require("../../CodingChallenges_Javascript/Arrays/setMatrixZeroes");

test("Set toZeroes [[1,1,1],[1,0,1],[1,1,1]]", () => {
    expect(setMatrixZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])).toStrictEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]]);
});

test("Set toZeroes [[0,1,2,0],[3,4,5,2],[1,3,1,5]]", () => {
    expect(setMatrixZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])).toStrictEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);
});

