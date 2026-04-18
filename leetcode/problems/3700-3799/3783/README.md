# [3783] Mirror Distance of an Integer

## Description

[LeetCode Problem Description](https://leetcode.com/problems/mirror-distance-of-an-integer/description/)

* algorithms
* Easy (87.76%)
* Likes:    63
* Dislikes: 2
* Testcase Example:  '25'

```md
You are given an integer n.
Define its mirror distance as: abs(n - reverse(n))​​​​​​​ where reverse(n) is the integer formed by reversing the digits of n.
Return an integer denoting the mirror distance of n​​​​​​​.
abs(x) denotes the absolute value of x.

Example 1:

Input: n = 25
Output: 27
Explanation:

reverse(25) = 52.
Thus, the answer is abs(25 - 52) = 27.


Example 2:

Input: n = 10
Output: 9
Explanation:

reverse(10) = 01 which is 1.
Thus, the answer is abs(10 - 1) = 9.


Example 3:

Input: n = 7
Output: 0
Explanation:

reverse(7) = 7.
Thus, the answer is abs(7 - 7) = 0.



Constraints:

1 <= n <= 109


```

## 题目翻译

给定整数 n，返回 |n - reverse(n)|，其中 reverse(n) 是 n 的数字反转。

## 解题思路

反转数字后取绝对差值。

## Solution

[SourceCode](./solution.js)
