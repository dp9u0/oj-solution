# [3788] Maximum Score of a Split

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-score-of-a-split/description/)

* algorithms
* Medium (51.79%)
* Likes:    71
* Dislikes: 7
* Testcase Example:  '[10,-1,3,-4,-5]'

```md
You are given an integer array nums of length n.
Choose an index i such that 0 <= i < n - 1.
For a chosen split index i:

Let prefixSum(i) be the sum of nums[0] + nums[1] + ... + nums[i].
Let suffixMin(i) be the minimum value among nums[i + 1], nums[i + 2], ..., nums[n - 1].

The score of a split at index i is defined as:
score(i) = prefixSum(i) - suffixMin(i)
Return an integer denoting the maximum score over all valid split indices.

Example 1:

Input: nums = [10,-1,3,-4,-5]
Output: 17
Explanation:
The optimal split is at i = 2, score(2) = prefixSum(2) - suffixMin(2) = (10 + (-1) + 3) - (-5) = 17.

Example 2:

Input: nums = [-7,-5,3]
Output: -2
Explanation:
The optimal split is at i = 0, score(0) = prefixSum(0) - suffixMin(0) = (-7) - (-5) = -2.

Example 3:

Input: nums = [1,1]
Output: 0
Explanation:
The only valid split is at i = 0, score(0) = prefixSum(0) - suffixMin(0) = 1 - 1 = 0.


Constraints:

2 <= nums.length <= 105
-109​​​​​​​ <= nums[i] <= 109


```

## 中文翻译

给定长度为 n 的整数数组 nums。选择一个分割索引 i（0 <= i < n-1），score(i) = prefixSum(i) - suffixMin(i)，其中 prefixSum(i) 是前 i+1 个元素之和，suffixMin(i) 是 i+1 到 n-1 位置的最小值。返回所有合法分割点的最大 score。

## 解题思路

**前缀和 + 后缀最小值**

1. 预计算 suffixMin[i] = min(nums[i], suffixMin[i+1])，从右往左扫一遍
2. 从左往右维护 prefixSum，枚举分割点 i，score = prefixSum - suffixMin[i+1]，取最大值

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
