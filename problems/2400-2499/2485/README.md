# [2485] Find the Pivot Integer

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-pivot-integer/description/)

* algorithms
* Easy (83.82%)
* Likes:    1450
* Dislikes: 60
* Testcase Example:  '8'

```md
Given a positive integer n, find the pivot integer x such that:

The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.

Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

Example 1:

Input: n = 8
Output: 6
Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.

Example 2:

Input: n = 1
Output: 1
Explanation: 1 is the pivot integer since: 1 = 1.

Example 3:

Input: n = 4
Output: -1
Explanation: It can be proved that no such integer exist.


Constraints:

1 <= n <= 1000


```

## 中文翻译

给定正整数 n，找枢轴整数 x 使 [1,x] 的和等于 [x,n] 的和。不存在返回 -1。

## 解题思路

数学推导。sum(1,x) = x(x+1)/2, sum(x,n) = (x+n)(n-x+1)/2。令两者相等得 x(x+1) = (x+n)(n-x+1)，化简得 x^2 = n(n+1)/2。所以 x = sqrt(n(n+1)/2)，判断是否为整数即可。

## Solution

[SourceCode](./solution.js)
