# [1925] Count Square Sum Triples

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-square-sum-triples/description/)

* algorithms
* Easy (77.14%)
* Likes:    742
* Dislikes: 65
* Testcase Example:  '5'

```md
A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.
Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

Example 1:

Input: n = 5
Output: 2
Explanation: The square triples are (3,4,5) and (4,3,5).

Example 2:

Input: n = 10
Output: 4
Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).


Constraints:

1 <= n <= 250


```

## 中文翻译

给定整数 n，求满足 a^2 + b^2 = c^2 且 1 <= a, b, c <= n 的三元组个数。

## 解题思路

枚举 a 和 b（1 <= a < b <= n），检查 a^2 + b^2 是否为完全平方数且 <= n^2。每对 (a,b) 贡献 2 个三元组（a,b 和 b,a）。

时间复杂度：O(n^2)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
