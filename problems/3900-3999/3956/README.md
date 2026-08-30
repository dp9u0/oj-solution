# [3956] Maximum Sum of M Non-Overlapping Subarrays I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-of-m-non-overlapping-subarrays-i/description/)

* algorithms
* Hard (27.01%)
* Likes:    85
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

1 <= n == nums.length <= 1000
-109 <= nums[i] <= 109​​​​​​​
1 <= m <= n
1 <= l <= r <= n


```

## 中文翻译

给定长度为 n 的整数数组 nums，以及三个整数 m、l、r。
你需要从 nums 中选出**至少一个、至多 m 个**互不重叠的子数组，满足：

- 每个被选子数组的长度在 [l, r] 之间（含端点）。
- 所有被选子数组的总和尽可能大。

返回能获得的最大总和。

示例 1：nums = [4,1,-5,2], m = 2, l = 1, r = 3 → 输出 7（选 [4,1] 和 [2]）。
示例 2：nums = [1,0,3,4], m = 2, l = 1, r = 2 → 输出 8（选 [1] 和 [3,4]）。
示例 3：nums = [-1,7,-4], m = 1, l = 2, r = 3 → 输出 6（选 [-1,7]）。
示例 4：nums = [-3,-4,-1], m = 2, l = 1, r = 2 → 输出 -1（全为负，选 [-1]）。

约束：1 <= n <= 1000；-10^9 <= nums[i] <= 10^9；1 <= m <= n；1 <= l <= r <= n。

## 解题思路

**分层 DP + 滑动窗口最大值（单调队列），时间 O(n·m)，空间 O(n)。**

- 前缀和 `P[i]` = 前 i 个元素之和，子数组 `nums[k..i-1]` 的和为 `P[i] - P[k]`。
- 定义 `dp[j][i]`：在前 i 个元素中选**至多 j 个**子数组（允许一个都不选，此时值为 0）的最大总和。
- 转移：第 j 层中，要么不用第 i 个元素（`dp[j][i-1]`），要么最后一个子数组恰好以位置 i 结尾、长度 len ∈ [l, r]，即起点 k = i - len ∈ [i-r, i-l]：

  `dp[j][i] = max(dp[j][i-1], max_{k∈[i-r, i-l], k≥0} ( dp[j-1][k] + P[i] - P[k] ))`

- 窗口内的 `dp[j-1][k] - P[k]` 取最大值可用单调队列维护（队头为最大，滑出左界即弹头），使每层均摊 O(n)。
- 答案必须至少选一个子数组：任何合法方案（设用了 c ≥ 1 个子数组）中最后一个子数组的右端点落在某个 i，其方案值恰为某一层 j 的转移值 `T_j(i)`；反之每个转移值都对应合法方案。由于 `dp[j][i]` 对 i、j 单调不减，故

  `答案 = max_{1≤j≤m, 1≤i≤n} T_j(i)`

  即每层扫描时记录转移值最大值，各层再取 max。这样全负数组的情形（示例 4）也自然正确，无需单独处理。

复杂度：时间 O(n·m)（n, m ≤ 1000，约 10^6），空间 O(n)。

## Solution

[SourceCode](./solution.js)
