from typing import List


def twoSum(nums: List[int], target: int) -> List[int]:
    length = len(nums)
    map = {}

    for i in range(length):
        complement = target - nums[i];
        if complement in map:
            return sorted([i, map[complement]])
        else:
            map[nums[i]] = i;

    return []
