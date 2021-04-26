const findMinimumInRotatedSortedArray = require("../../CodingChallenges_Javascript/Arrays/findMinimumInRotatedSortedArray");

test("[3,4,5,1,2] returns 1", () => {
    expect(findMinimumInRotatedSortedArray([3,4,5,1,2])).toStrictEqual(1);
});

test("[1,2,3,4,5] returns 1", () => {
    expect(findMinimumInRotatedSortedArray([1,2,3,4,5])).toStrictEqual(1);
});

test("[2,3,4,5,1] returns 1", () => {
    expect(findMinimumInRotatedSortedArray([2,3,4,5,1])).toStrictEqual(1);
});

test("[1] returns 1", () => {
    expect(findMinimumInRotatedSortedArray([1])).toStrictEqual(1);
});

test("[1, 2] returns 1", () => {
    expect(findMinimumInRotatedSortedArray([1, 2])).toStrictEqual(1);
});

test("[2, 1] returns 1", () => {
    expect(findMinimumInRotatedSortedArray([2, 1])).toStrictEqual(1);
});

test("[0,1,4,4,5,6,7] returns 0", () => {
    expect(findMinimumInRotatedSortedArray([0,1,4,4,5,6,7])).toStrictEqual(0);
});

test("[6,7,0,0,0,0,4,4,5] returns 0", () => {
    expect(findMinimumInRotatedSortedArray([6,7,0,0,0,0,4,4,5])).toStrictEqual(0);
});

test("[0,0,0,0,0,0] returns 0", () => {
    expect(findMinimumInRotatedSortedArray([0,0,0,0,0,0])).toStrictEqual(0);
});
