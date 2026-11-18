# [644] 子数组最大平均数 II

## Description


```md
https://leetcode.cn/problems/maximum-average-subarray-ii/description/
* algorithms
* Hard (45.94%)
* Likes:    123
* Dislikes: -
* Testcase Example:  '[1,12,-5,-6,50,3]\n4'
给你一个包含 n 个整数的数组 nums ，和一个整数 k 。
请你找出 长度大于等于 k 且含最大平均值的连续子数组。并输出这个最大平均值。任何计算误差小于 10-5 的结果都将被视为正确答案。

示例 1：
输入：nums = [1,12,-5,-6,50,3], k = 4
输出：12.75000
解释：
- 当长度为 4 的时候，连续子数组平均值分别为 [0.5, 12.75, 10.5] ，其中最大平均值是 12.75 。
- 当长度为 5 的时候，连续子数组平均值分别为 [10.4, 10.8] ，其中最大平均值是 10.8 。
- 当长度为 6 的时候，连续子数组平均值分别为 [9.16667] ，其中最大平均值是 9.16667 。
当取长度为 4 的子数组（即，子数组 [12, -5, -6, 50]）的时候，可以得到最大的连续子数组平均值 12.75 ，所以返回 12.75 。
根据题目要求，无需考虑长度小于 4 的子数组。
示例 2：
输入：nums = [5], k = 1
输出：5.00000

提示：
n == nums.length
1 <= k <= n <= 104
-104 <= nums[i] <= 104

```

## Solution

[SourceCode](./solution.js)

## Translation

Find the maximum average of a contiguous subarray with length ≥ k; answers within 1e-5 accepted.

- Example 1: nums = [1,12,-5,-6,50,3], k = 4 → `12.75` ([12,-5,-6,50])
- Example 2: [5], k = 1 → `5`

Constraints: n ≤ 10^4.

## Approach

**二分平均数 + O(n) 判定**。判定 mid:令 b[i] = nums[i] − mid,存在长度 ≥ k 的子数组均值 ≥ mid ⟺ 存在长度 ≥ k 的子数组和 ≥ 0 ⟺ 存在 j ≥ k 使 `P[j] − min(P[0..j−k]) ≥ 0`(P 为 b 的前缀和,扫描时维护窗口左侧最小前缀)。二分 [min(nums), max(nums)] 约 60 轮,总 O(n log range/eps)。
