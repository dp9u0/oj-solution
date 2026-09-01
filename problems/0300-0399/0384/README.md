# [384] Shuffle an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shuffle-an-array/description/)

* algorithms
* Medium (59.64%)
* Likes:    1436
* Dislikes: 946
* Testcase Example:  '["Solution","shuffle","reset","shuffle"]\n[[[1,2,3]],[],[],[]]'

```md
Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.
Implement the Solution class:

Solution(int[] nums) Initializes the object with the integer array nums.
int[] reset() Resets the array to its original configuration and returns it.
int[] shuffle() Returns a random shuffling of the array.


Example 1:

Input
['Solution', 'shuffle', 'reset', 'shuffle']
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
// Any permutation of [1,2,3] must be equally likely to be returned.
// Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]


Constraints:

1 <= nums.length <= 50
-106 <= nums[i] <= 106
All the elements of nums are unique.
At most 104 calls in total will be made to reset and shuffle.


```

## 题目翻译

给定一个整数数组 `nums`，设计一个算法来随机打乱数组。所有排列应当等概率出现。

实现 `Solution` 类：
- `Solution(int[] nums)` - 用整数数组初始化对象
- `int[] reset()` - 将数组重置为原始配置并返回
- `int[] shuffle()` - 返回数组的随机打乱结果

## 解题思路

Fisher-Yates 洗牌算法：从后往前遍历数组，每次从 `[0, i]` 中随机选一个索引 `j`，交换 `arr[i]` 和 `arr[j]`。这样每个排列等概率出现。`reset` 直接返回保存的原始数组副本。

时间复杂度：shuffle O(n)，reset O(1)
空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
