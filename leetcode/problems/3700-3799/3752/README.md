# [3752] Lexicographically Smallest Negated Permutation that Sums to Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-smallest-negated-permutation-that-sums-to-target/description/)

* algorithms
* Medium (30.96%)
* Likes:    68
* Dislikes: 7
* Testcase Example:  '3\n0'

```md
You are given a positive integer n and an integer target.
Return the lexicographically smallest array of integers of size n such that:

The sum of its elements equals target.
The absolute values of its elements form a permutation of size n.

If no such array exists, return an empty array.
A permutation of size n is a rearrangement of integers 1, 2, ..., n.

Example 1:

Input: n = 3, target = 0
Output: [-3,1,2]
Explanation:
The arrays that sum to 0 and whose absolute values form a permutation of size 3 are:

[-3, 1, 2]
[-3, 2, 1]
[-2, -1, 3]
[-2, 3, -1]
[-1, -2, 3]
[-1, 3, -2]
[1, -3, 2]
[1, 2, -3]
[2, -3, 1]
[2, 1, -3]
[3, -2, -1]
[3, -1, -2]

The lexicographically smallest one is [-3, 1, 2].

Example 2:

Input: n = 1, target = 10000000000
Output: []
Explanation:
There are no arrays that sum to 10000000000 and whose absolute values form a permutation of size 1. Therefore, the answer is [].


Constraints:

1 <= n <= 105
-1010 <= target <= 1010


```

## 翻译

给定正整数 n 和整数 target，返回字典序最小的长度为 n 的数组，使得元素之和等于 target，且元素绝对值构成 {1,...,n} 的排列。不存在则返回空数组。

## 解题思路

总和 total = n*(n+1)/2。取反某些元素使和变为 target，等价于找到子集之和 sumNeg = (total - target) / 2。贪心从大到小选：尽可能取反大数使字典序最小（负数排在前面，绝对值越大越前）。使用 BigInt 防止溢出。

## Solution

[SourceCode](./solution.js)
