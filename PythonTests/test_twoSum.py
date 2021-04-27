from CodingChallenges_Python.Arrays.twoSum import twoSum


def test_two_sum_index_1_2():
    assert twoSum([1, 3, 5, 10], 8) == [1, 2]


def test_two_sum_has_no_answer():
    assert twoSum([1, 3, 5, 10], 100) == []


def test_two_sum_index_2_3():
    assert twoSum([1, 3, 12, 10], 22) == [2, 3]
