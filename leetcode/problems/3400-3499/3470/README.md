# [3470] Permutations IV

## Description

[LeetCode Problem Description](https://leetcode.com/problems/permutations-iv/description/)

* algorithms
* Hard (34.25%)
* Likes:    30
* Dislikes: 4
* Testcase Example:  '4\n6'

```md
Given two integers, n and k, an alternating permutation is a permutation of the first n positive integers such that no two adjacent elements are both odd or both even.
Return the k-th alternating permutation sorted in lexicographical order. If there are fewer than k valid alternating permutations, return an empty list.

Example 1:

Input: n = 4, k = 6
Output: [3,4,1,2]
Explanation:
The lexicographically-sorted alternating permutations of [1, 2, 3, 4] are:

[1, 2, 3, 4]
[1, 4, 3, 2]
[2, 1, 4, 3]
[2, 3, 4, 1]
[3, 2, 1, 4]
[3, 4, 1, 2] &larr; 6th permutation
[4, 1, 2, 3]
[4, 3, 2, 1]

Since k = 6, we return [3, 4, 1, 2].

Example 2:

Input: n = 3, k = 2
Output: [3,2,1]
Explanation:
The lexicographically-sorted alternating permutations of [1, 2, 3] are:

[1, 2, 3]
[3, 2, 1] &larr; 2nd permutation

Since k = 2, we return [3, 2, 1].

Example 3:

Input: n = 2, k = 3
Output: []
Explanation:
The lexicographically-sorted alternating permutations of [1, 2] are:

[1, 2]
[2, 1]

There are only 2 alternating permutations, but k = 3, which is out of range. Thus, we return an empty list [].


Constraints:

1 <= n <= 100
1 <= k <= 1015


```

## 题目翻译

给定两个整数 n 和 k，交替排列是 [1..n] 的一个排列，其中没有两个相邻元素同为奇数或同为偶数。返回按字典序排序的第 k 个交替排列。如果有效排列数少于 k 个，返回空列表。

## 解题思路

**组合计数 + 逐位构造**

设奇数个数 o = ceil(n/2)，偶数个数 e = floor(n/2)。若 |o - e| > 1 则无解。

预计算 dp[o][e][s]：剩余 o 个奇数、e 个偶数、s=1 表示下一个需要奇数/s=0 表示下一个需要偶数时的合法排列数。
- dp[0][0][*] = 1
- dp[o][e][1] = o * dp[o-1][e][0]（选一个奇数，下一个需要偶数）
- dp[o][e][0] = e * dp[o][e-1][1]（选一个偶数，下一个需要奇数）

用 BigInt 计算，cap 在 10^15+1。

构造第 k 个排列：逐位枚举 1..n 中未使用的合法候选（满足奇偶交替约束），用 dp 值快速跳过，直到找到目标。

时间 O(n^2)，空间 O(n^2)。

## Solution

[SourceCode](./solution.js)
