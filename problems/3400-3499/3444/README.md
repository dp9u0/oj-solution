# [3444] Minimum Increments for Target Multiples in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-increments-for-target-multiples-in-an-array/description/)

* algorithms
* Hard (27.53%)
* Likes:    87
* Dislikes: 7
* Testcase Example:  '[1,2,3]\n[4]'

```md
You are given two arrays, nums and target.
In a single operation, you may increment any element of nums by 1.
Return the minimum number of operations required so that each element in target has at least one multiple in nums.

Example 1:

Input: nums = [1,2,3], target = [4]
Output: 1
Explanation:
The minimum number of operations required to satisfy the condition is 1.

Increment 3 to 4 with just one operation, making 4 a multiple of itself.


Example 2:

Input: nums = [8,4], target = [10,5]
Output: 2
Explanation:
The minimum number of operations required to satisfy the condition is 2.

Increment 8 to 10 with 2 operations, making 10 a multiple of both 5 and 10.


Example 3:

Input: nums = [7,9,10], target = [7]
Output: 0
Explanation:
Target 7 already has a multiple in nums, so no additional operations are needed.


Constraints:

1 <= nums.length <= 5 * 104
1 <= target.length <= 4
target.length <= nums.length
1 <= nums[i], target[i] <= 104


```

## 题目翻译

给定 nums 和 target 数组。可以对 nums 中元素+1。求最少操作次数使得 target 中每个元素都有至少一个 nums 中的倍数。

## 解题思路

target.length ≤ 4，用 bitmask DP。对每个 target 子集预计算 LCM。dp[mask] 表示覆盖 mask 中所有 target 的最小操作数。对每个 num，尝试将其分配给各子集（增量到 LCM 的倍数），更新 dp。

## Solution

[SourceCode](./solution.js)
