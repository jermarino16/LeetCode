const rotateImage = require("../../CodingChallenges/Arrays/rotateImage");

test("Rotate [1,2,3], [4,5,6], [7,8,9]", () => {
    expect(rotateImage([[1,2,3], [4,5,6], [7,8,9]])).toStrictEqual([[7,4,1], [8,5,2], [9,6,3]]);
});
