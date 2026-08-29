# [3957] Maximum Sum of M Non-Overlapping Subarrays II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-of-m-non-overlapping-subarrays-ii/description/)

* algorithms
* Hard (17.16%)
* Likes:    14
* Dislikes: 6
* Testcase Example:  '[4,1,-5,2]\n2\n1\n3'

```md
You are given an integer array nums of length n, and three integers m, l, and r.
Your task is to select at least one and at most m non-overlapping subarrays from nums such that:

Each selected subarray has a length between [l, r] (inclusive).
The total sum of all selected subarrays is maximized.

Return the maximum total sum you can achieve.

Example 1:

Input: nums = [4,1,-5,2], m = 2, l = 1, r = 3
Output: 7
Explanation:
One optimal strategy is to:

Select the subarray [4, 1] with sum 4 + 1 = 5 and the subarray [2] with sum 2. Both subarrays have length between [l, r].
The total sum of these subarrays is 5 + 2 = 7, which is the maximum achievable sum with at most m = 2 subarrays.


Example 2:

Input: nums = [1,0,3,4], m = 2, l = 1, r = 2
Output: 8
Explanation:
One optimal strategy is to:

Select the subarray [1] with sum 1 and the subarray [3, 4] with sum 3 + 4 = 7. Both subarrays have length between [l, r].
The total sum of these subarrays is 1 + 7 = 8, which is the maximum achievable sum with at most m = 2 subarrays.


Example 3:

Input: nums = [-1,7,-4], m = 1, l = 2, r = 3
Output: 6
Explanation:

Select the subarray [-1, 7] from nums which has length between [l, r].
The total sum of this subarray is -1 + 7 = 6, which is the maximum achievable sum with at most m = 1 subarray.


Example 4:

Input: nums = [-3,-4,-1], m = 2, l = 1, r = 2
Output: -1
Explanation:

All subarrays of nums have negative sums. The optimal strategy is to select the subarray [-1], which has length between [l, r].
The total sum of this subarray is -1, which is the maximum achievable sum with at most m = 2 subarrays.



Constraints:

1 <= n == nums.length <= 105
-105 <= nums[i] <= 105​​​​​​​
1 <= m <= n
1 <= l <= r <= n


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定长度 n 的整数数组 `nums` 与 `m, l, r`。选**至少 1 个、至多 m 个**互不重叠子数组，每个长度 ∈ [l, r]，最大化总和。

示例 1：`[4,1,-5,2], m=2, l=1, r=3` → `7`（[4,1]+[2]）
示例 2：`[1,0,3,4], 2, 1, 2` → `8`；示例 3：`[-1,7,-4], 1, 2, 3` → `6`；示例 4：全负 `[-3,-4,-1], 2, 1, 2` → `-1`

约束：n 可达 ~3×10^5，`|nums[i]| <= 10^5`，`1 <= m <= n`

## 解题思路

朴素划分 DP `E[j][i]` + 单调队列是 O(n·min(m, n/l))——隐藏测试有 n≈2.9×10^5、m=n 的全负大用例，直接超时。

**Aliens 技巧（带权二分）**：区间选择的 LP 值函数 f(j)（≤ j 段的最大和）在整数区间矩阵 TU 性下**凹**、斜率为非负整数 → 整数 λ 二分：

- `g(λ) = max(总和 − λ·段数)`（允许 0 段），一遍 O(n) DP + 单调队列（队内按 (值, 段数) 序），同时记录**最优解的最小段数** c(λ)；
- c(λ) 随 λ 单调不增，二分最小 λ* 使 c(λ*) ≤ m，`f(m) = min(h(λ*), h(λ*−1))`，`h(λ) = g(λ) + λ·m`（凸函数取邻点防平台）；
- 答案：f(m) > 0 取 f(m)；否则必取恰好 1 段 → 最优单段和（前缀和滑窗最小值 O(n)，注意不能 O(n·r)）。

复杂度 O(n log V)（V≈最大单段和）。数值 |g + λm| < 4×10^15 < 2^53 双精度安全。本地 400 组随机与朴素精确 DP 对拍一致，29 万全 -1 大用例秒过。
