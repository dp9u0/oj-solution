# [1447] Simplified Fractions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/simplified-fractions/description/)

* algorithms
* Medium (69.69%)
* Likes:    442
* Dislikes: 48
* Testcase Example:  '2'

```md
Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive) such that the denominator is less-than-or-equal-to n. You can return the answer in any order.

Example 1:

Input: n = 2
Output: ['1/2']
Explanation: '1/2' is the only unique fraction with a denominator less-than-or-equal-to 2.

Example 2:

Input: n = 3
Output: ['1/2','1/3','2/3']

Example 3:

Input: n = 4
Output: ['1/2','1/3','1/4','2/3','3/4']
Explanation: '2/4' is not a simplified fraction because it can be simplified to '1/2'.


Constraints:

1 <= n <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数 n，返回所有 0 到 1 之间（不含端点）的最简分数，分母 ≤ n。最简分数意味着分子分母互质。

## 解题思路

枚举所有 a/b 其中 1 ≤ a < b ≤ n，检查 gcd(a, b) == 1 即可。n ≤ 100，直接 O(n^2 log n) 暴力。
