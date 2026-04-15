# [2597] The Number of Beautiful Subsets

## Description

[LeetCode Problem Description](https://leetcode.com/problems/the-number-of-beautiful-subsets/description/)

* algorithms
* Medium (50.94%)
* Likes:    1310
* Dislikes: 178
* Testcase Example:  '[2,4,6]\n2'

```md
You are given an array nums of positive integers and a positive integer k.
A subset of nums is beautiful if it does not contain two integers with an absolute difference equal to k.
Return the number of non-empty beautiful subsets of the array nums.
A subset of nums is an array that can be obtained by deleting some (possibly none) elements from nums. Two subsets are different if and only if the chosen indices to delete are different.

Example 1:

Input: nums = [2,4,6], k = 2
Output: 4
Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
It can be proved that there are only 4 beautiful subsets in the array [2,4,6].

Example 2:

Input: nums = [1], k = 1
Output: 1
Explanation: The beautiful subset of the array nums is [1].
It can be proved that there is only 1 beautiful subset in the array [1].


Constraints:

1 <= nums.length <= 18
1 <= nums[i], k <= 1000


```

## 中文翻译

给定正整数数组 `nums` 和正整数 `k`。

如果子集中不包含差值绝对值等于 k 的两个整数，则该子集是"美丽的"。

返回数组 `nums` 的非空美丽子集数量。

## 解题思路

**按余数分组 + DP：**

1. 将 nums 按 `num % k` 的余数分组。只有同余数的数之间才可能差值为 k
2. 对每组排序后，用 DP 计算美丽子集数：dp[i][0/1] 表示前 i 个数中不选/选第 i 个的方案数
3. 如果相邻两个数差值为 k，选当前数则不能选前一个；否则可以自由选择
4. 各组的方案数相乘（减去全不选的 1 种），最后加回总数（因为有多个组都不选的情况）

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
