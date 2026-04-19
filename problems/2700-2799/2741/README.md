# [2741] Special Permutations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/special-permutations/description/)

* algorithms
* Medium (29.47%)
* Likes:    592
* Dislikes: 66
* Testcase Example:  '[2,3,6]'

```md
You are given a0-indexedinteger arraynumscontainingndistinct positive integers. A permutation ofnumsis called special if:

For all indexes0 <= i < n - 1, eithernums[i] % nums[i+1] == 0ornums[i+1] % nums[i] == 0.

Returnthe total number of special permutations.As the answer could be large, return itmodulo109+ 7.

Example 1:

Input: nums = [2,3,6]
Output: 2
Explanation: [3,6,2] and [2,6,3] are the two special permutations of nums.

Example 2:

Input: nums = [1,4,3]
Output: 2
Explanation: [3,1,4] and [4,1,3] are the two special permutations of nums.


Constraints:

2 <= nums.length <= 14
1 <= nums[i] <= 109


```

## 题目翻译

给定 n 个不同正整数，求排列中相邻元素能互相整除的排列数，对 10^9+7 取模。

## 解题思路

**状态压缩 DP**

n ≤ 14，用 bitmask 表示已使用的元素集合。dp[mask][last] 表示已使用 mask 集合、最后一个元素是 nums[last] 时的方案数。预处理 adj[i][j] 表示 nums[i] 和 nums[j] 是否能相邻。O(2^n * n * n) 时间。

## Solution

[SourceCode](./solution.js)
