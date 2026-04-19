# [2862] Maximum Element-Sum of a Complete Subset of Indices

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/description/)

* algorithms
* Hard (42.80%)
* Likes:    233
* Dislikes: 59
* Testcase Example:  '[8,7,3,5,7,2,4,9]'

```md
You are given a 1-indexed array nums. Your task is to select a complete subset from nums where every pair of selected indices multiplied is a perfect square,. i. e. if you select ai and aj, i * j must be a perfect square.
Return the sum of the complete subset with the maximum sum.

Example 1:

Input: nums = [8,7,3,5,7,2,4,9]
Output: 16
Explanation:
We select elements at indices 2 and 8 and 2 * 8 is a perfect square.

Example 2:

Input: nums = [8,10,3,8,1,13,7,9,4]
Output: 20
Explanation:
We select elements at indices 1, 4, and 9. 1 * 4, 1 * 9, 4 * 9 are perfect squares.


Constraints:

1 <= n == nums.length <= 104
1 <= nums[i] <= 109


```

## 中文翻译

给定 1-indexed 数组 nums，选一个子集使得任意两个选中下标的乘积是完全平方数。返回最大和的子集。

## 解题思路

关键性质：i*j 是完全平方数当且仅当 i 和 j 的"无平方因子部分"相同。将每个下标去除所有平方因子后按余数分组，同组内任意两元素乘积为完全平方数。取各组和中最大值。

## Solution

[SourceCode](./solution.js)
