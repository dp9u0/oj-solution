# [3915] Maximum Sum of Alternating Subsequence With Distance at Least K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-of-alternating-subsequence-with-distance-at-least-k/description/)

* algorithms
* Hard (32.61%)
* Likes:    27
* Dislikes: 4
* Testcase Example:  '[5,4,2]\n2'

```md
You are given an integer array nums of length n and an integer k.
Pick a subsequence with indices 0
For every 1 = k.
The selected values form a strictly alternating sequence. In other words, either:

nums[i1]  nums[i3]
nums[i1] > nums[i2]  ...


A subsequence of length 1 is also considered strictly alternating. The score of a valid subsequence is the sum of its selected values.
Return an integer denoting the maximum possible score of a valid subsequence.

Example 1:
Input: nums = [5,4,2], k = 2
Output: 7
Explanation:
An optimal choice is indices [0, 2], which gives values [5, 2].
The distance condition holds because 2 - 0 = 2 >= k.
The values are strictly alternating because 5 > 2.
The score is 5 + 2 = 7.
Example 2:
Input: nums = [3,5,4,2,4], k = 1
Output: 14
Explanation:
An optimal choice is indices [0, 1, 3, 4], which gives values [3, 5, 2, 4].
The distance condition holds because each pair of consecutive chosen indices differs by at least k = 1.
The values are strictly alternating since 3  2
The score is 3 + 5 + 2 + 4 = 14.
Example 3:
Input: nums = [5], k = 1
Output: 5
Explanation:
The only valid subsequence is [5]. A subsequence with 1 element is always strictly alternating, so the score is 5.

Constraints:
1
1
1
Hint 1: Use dynamic programming
Hint 2: Let dp[i][val][0/1] represent the maximum score using the first i values, where the last selected value is val and 0/1 indicates the alternating relation of the last two selected values
Hint 3: Use a segment tree to query values greater than or less than val during the DP transitions

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译（中文）

给定一个长度为 n 的整数数组 nums 和一个整数 k。

选取一个下标递增的子序列 0 <= i1 < i2 < ... < im < n，需满足：

1. 对任意 1 <= j < m，都有 i(j+1) - ij >= k（相邻两个被选下标的距离至少为 k）；
2. 选出的值构成严格交错（zigzag）序列，即满足以下两种形式之一：
   - nums[i1] < nums[i2] > nums[i3] < ...（先升后降交替）
   - nums[i1] > nums[i2] < nums[i3] > ...（先降后升交替）

长度为 1 的子序列也视为严格交错序列。合法子序列的得分为所选值之和。

返回合法子序列的最大得分。

示例 1：nums = [5,4,2], k = 2 → 输出 7（选 [5,2]，下标距离 2 >= k，5 > 2）
示例 2：nums = [3,5,4,2,4], k = 1 → 输出 14（选 [3,5,2,4]，3 < 5 > 2 < 4）
示例 3：nums = [5], k = 1 → 输出 5（单元素子序列恒合法）

## 解题思路

DP + 值域线段树（区间最大值），O(n log n)：

1. 按下标从小到大处理。对每个下标 i（值 v）维护两个状态：
   - `down[i]`：以 i 结尾、上一步是下降（或单独元素），下一步必须选比 v 大的数，的最大得分；
   - `up[i]`：以 i 结尾、上一步是上升（或单独元素），下一步必须选比 v 小的数，的最大得分。
2. 状态转移（从下标 j 转移到 i 需满足 i - j >= k）：
   - `up[i] = max(v, max{ tDown[u] + v | u < v })`：从「需要变大」且结尾值 u < v 的状态接上 v，形成上升；
   - `down[i] = max(v, max{ tUp[u] + v | u > v })`：从「需要变小」且结尾值 u > v 的状态接上 v，形成下降。
   其中 tDown/tUp 是两棵按值建立的最大值线段树，存储已插入下标的状态（按结尾值索引）。
3. 距离约束用「延迟插入」处理：处理下标 i 的查询之前，先把所有下标 p <= i - k 的状态插入线段树，保证树中只包含可转移的下标。
4. 答案为所有 down[i]、up[i] 的最大值（单元素状态已包含在两者之中，全正值必非负）。

值先离散化；线段树用迭代式写法，支持单点取 max 更新与前/后缀最大值查询。

复杂度：时间 O(n log n)，空间 O(n)。
