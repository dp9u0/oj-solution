# [3891] Minimum Increase to Maximize Special Indices

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-increase-to-maximize-special-indices/description/)

* algorithms
* Medium (18.82%)
* Likes:    94
* Dislikes: 10
* Testcase Example:  '[1,2,2]'

```md
You are given an integer array nums of length n.
An index i (0 < i < n - 1) is special if nums[i] > nums[i - 1] and nums[i] > nums[i + 1].
You may perform operations where you choose any index i and increase nums[i] by 1.
Your goal is to:

Maximize the number of special indices.
Minimize the total number of operations required to achieve that maximum.

Return an integer denoting the minimum total number of operations required.

Example 1:

Input: nums = [1,2,2]
Output: 1
Explanation:​​​​​​​

Start with nums = [1, 2, 2].
Increase nums[1] by 1, array becomes [1, 3, 2].
The final array is [1, 3, 2] has 1 special index, which is the maximum achievable.
It is impossible to achieve this number of special indices with fewer operations. Thus, the answer is 1.


Example 2:

Input: nums = [2,1,1,3]
Output: 2
Explanation:​​​​​​​

Start with nums = [2, 1, 1, 3].
Perform 2 operations at index 1, array becomes [2, 3, 1, 3].
The final array is [2, 3, 1, 3] has 1 special index, which is the maximum achievable. Thus, the answer is 2.


Example 3:

Input: nums = [5,2,1,4,3]
Output: 4
Explanation:​​​​​​​​​​​​​​​​​​​​​

Start with nums = [5, 2, 1, 4, 3].
Perform 4 operations at index 1, array becomes [5, 6, 1, 4, 3].
The final array is [5, 6, 1, 4, 3] has 2 special indices, which is the maximum achievable. Thus, the answer is 4.​​​​​​​



Constraints:

3 <= n <= 105
1 <= nums[i] <= 109


```

## 题目翻译

给定整数数组 nums。索引 i (0<i<n-1) 是特殊的如果 nums[i] > nums[i-1] 且 nums[i] > nums[i+1]。可以任意增加某个元素。目标是最大化特殊索引数量，并在最大数量下最小化总操作次数。返回最小操作数。

## 解题思路

相邻索引不可能同时特殊。令 cost[i] = max(0, max(nums[i-1], nums[i+1]) + 1 - nums[i])，即让 i 成为特殊索引的最小代价。问题是选择不相邻的索引集合，最大化数量、最小化总代价。用路径上的 DP：dp[i][0/1] 表示前 i 个候选位置的最优解（[count, cost]），按 count 优先最大、cost 优先最小转移。

## Solution

[SourceCode](./solution.js)
