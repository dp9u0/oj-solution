# [3640] Trionic Array II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/trionic-array-ii/description/)

* algorithms
* Hard (47.32%)
* Likes:    383
* Dislikes: 38
* Testcase Example:  '[0,-2,-1,-3,0,2,-1]'

```md
You are given an integer array nums of length n.
A trionic subarray is a contiguous subarray nums[l...r] (with 0 <= l < r < n) for which there exist indices l < p < q < r such that:

nums[l...p] is strictly increasing,
nums[p...q] is strictly decreasing,
nums[q...r] is strictly increasing.

Return the maximum sum of any trionic subarray in nums.

Example 1:

Input: nums = [0,-2,-1,-3,0,2,-1]
Output: -4
Explanation:
Pick l = 1, p = 2, q = 3, r = 5:

nums[l...p] = nums[1...2] = [-2, -1] is strictly increasing (-2 < -1).
nums[p...q] = nums[2...3] = [-1, -3] is strictly decreasing (-1 > -3)
nums[q...r] = nums[3...5] = [-3, 0, 2] is strictly increasing (-3 < 0 < 2).
Sum = (-2) + (-1) + (-3) + 0 + 2 = -4.


Example 2:

Input: nums = [1,4,2,7]
Output: 14
Explanation:
Pick l = 0, p = 1, q = 2, r = 3:

nums[l...p] = nums[0...1] = [1, 4] is strictly increasing (1 < 4).
nums[p...q] = nums[1...2] = [4, 2] is strictly decreasing (4 > 2).
nums[q...r] = nums[2...3] = [2, 7] is strictly increasing (2 < 7).
Sum = 1 + 4 + 2 + 7 = 14.



Constraints:

4 <= n = nums.length <= 105
-109 <= nums[i] <= 109
It is guaranteed that at least one trionic subarray exists.


```

## 中文翻译

给定数组，找"三段式"子数组的最大和：先严格递增，再严格递减，再严格递增，每段至少 2 个元素。

## 解题思路

状态机 DP。三个状态：phase 0（递增）、phase 1（递减）、phase 2（递增）。用 f0, f1, f2 分别记录各阶段的最大子数组和。

- nums[i] > nums[i-1]：f0 = max(nums[i-1]+nums[i], f0+nums[i])；f2 = max(f1+nums[i], f2+nums[i])
- nums[i] < nums[i-1]：f1 = max(f0+nums[i], f1+nums[i])
- 相等则全部重置

每段至少 2 个元素，f0 初始化为 -Infinity，只有连续递增 2 个才能激活。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
