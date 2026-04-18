# [2413] Smallest Even Multiple

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-even-multiple/description/)

* algorithms
* Easy (88.33%)
* Likes:    1078
* Dislikes: 127
* Testcase Example:  '5'

```md
Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

Example 1:

Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.

Example 2:

Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.


Constraints:

1 <= n <= 150


```

## 题目翻译

给定正整数n，返回同时是2和n的倍数的最小正整数。

## 解题思路

即LCM(2, n)。n为偶数时答案为n，奇数时为2n。

## Solution

[SourceCode](./solution.js)
