# [526] Beautiful Arrangement

## Description

[LeetCode Problem Description](https://leetcode.com/problems/beautiful-arrangement/description/)

* algorithms
* Medium (64.75%)
* Likes:    3406
* Dislikes: 391
* Testcase Example:  '2'

```md
Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful arrangement if for every i (1 <= i <= n), either of the following is true:

perm[i] is divisible by i.
i is divisible by perm[i].

Given an integer n, return the number of the beautiful arrangements that you can construct.

Example 1:

Input: n = 2
Output: 2
Explanation:
The first beautiful arrangement is [1,2]:
- perm[1] = 1 is divisible by i = 1
- perm[2] = 2 is divisible by i = 2
The second beautiful arrangement is [2,1]:
- perm[1] = 2 is divisible by i = 1
- i = 2 is divisible by perm[2] = 1

Example 2:

Input: n = 1
Output: 1


Constraints:

1 <= n <= 15


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 n，1 到 n 的排列 perm（1-indexed）称为优美排列，若对每个 i，perm[i] 能被 i 整除或 i 能被 perm[i] 整除。返回优美排列的数量。

## 解题思路

状态压缩 DP。dp[mask] 表示已使用数字集合为 mask 时的方案数。mask 中 1 的个数 k 表示已填到第 k 个位置，下一个填位置 k+1。

遍历所有未使用的数字 j，若 j 能被 k+1 整除或 k+1 能被 j 整除，则 dp[mask | (1<<j)] += dp[mask]。

n ≤ 15，状态数 2^15 = 32768。
