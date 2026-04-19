# [3892] Minimum Operations to Achieve At Least K Peaks

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-achieve-at-least-k-peaks/description/)

* algorithms
* Hard (30.01%)
* Likes:    41
* Dislikes: 6
* Testcase Example:  '[2,1,2]\n1'

```md
You are given a ​​​​​​​circular integer array​​​​​​​ nums of length n.
An index i is a peak if its value is strictly greater than its neighbors:

The previous neighbor of i is nums[i - 1] if i > 0, otherwise nums[n - 1].
The next neighbor of i is nums[i + 1] if i < n - 1, otherwise nums[0].

You are allowed to perform the following operation any number of times:

Choose any index i and increase nums[i] by 1.

Return an integer denoting the minimum number of operations required to make the array contain at least k peaks. If it is impossible, return -1.

Example 1:

Input: nums = [2,1,2], k = 1
Output: 1
Explanation:

To achieve at least k = 1 peak, we can increase nums[2] = 2 to 3.
After this operation, nums[2] = 3 is strictly greater than its neighbors nums[0] = 2 and nums[1] = 1.
Therefore, the minimum number of operations required is 1.


Example 2:

Input: nums = [4,5,3,6], k = 2
Output: 0
Explanation:

The array already contains at least k = 2 peaks with zero operations.
Index 1: nums[1] = 5 is strictly greater than its neighbors nums[0] = 4 and nums[2] = 3.
Index 3: nums[3] = 6 is strictly greater than its neighbors nums[2] = 3 and nums[0] = 4.
Therefore, the minimum number of operations required is 0.


Example 3:

Input: nums = [3,7,3], k = 2
Output: -1
Explanation:
It is impossible to have at least k = 2 peaks in this array. Therefore, the answer is -1.


Constraints:

2 <= n == nums.length <= 5000
-105 <= nums[i] <= 105
0 <= k <= n​​​​​​​


```

## 题目翻译

给定长度为 n 的循环整数数组 nums，一个索引 i 是峰当且仅当其值严格大于两个邻居（循环）。可以对任意元素 +1 任意次。求使数组至少有 k 个峰的最少操作次数，不可能返回 -1。

## 解题思路

**关键观察**：循环数组中两个峰不可能相邻，因此最大峰数 = floor(n/2)。超过则返回 -1。

每个索引变成峰的代价独立（对非相邻索引）：cost[i] = max(0, max(左邻居, 右邻居) + 1 - nums[i])。

问题转化为：从循环数组中选 k 个不相邻索引，使总代价最小。

**循环 DP**：拆成两个线性子问题：
- 不选索引 0：在 [1, n-1] 上线性选 k 个
- 选索引 0：代价 cost[0] + 在 [2, n-2] 上线性选 k-1 个

线性选 k 个不相邻最小代价：dp[i][j] = min(dp[i-1][j], dp[i-2][j-1] + cost[i])，滚动数组优化。

时间 O(n·k)，空间 O(k)。

## Solution

[SourceCode](./solution.js)
