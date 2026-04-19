# [3725] Count Ways to Choose Coprime Integers from Rows

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-ways-to-choose-coprime-integers-from-rows/description/)

* algorithms
* Hard (48.41%)
* Likes:    65
* Dislikes: 4
* Testcase Example:  '[[1,2],[3,4]]'

```md
You are given a m x n matrix mat of positive integers.
Return an integer denoting the number of ways to choose exactly one integer from each row of mat such that the greatest common divisor of all chosen integers is 1.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: mat = [[1,2],[3,4]]
Output: 3
Explanation:



Chosen integer in the first row
Chosen integer in the second row
Greatest common divisor of chosen integers


1
3
1


1
4
1


2
3
1


2
4
2



3 of these combinations have a greatest common divisor of 1. Therefore, the answer is 3.

Example 2:

Input: mat = [[2,2],[2,2]]
Output: 0
Explanation:
Every combination has a greatest common divisor of 2. Therefore, the answer is 0.


Constraints:

1 <= m == mat.length <= 150
1 <= n == mat[i].length <= 150
1 <= mat[i][j] <= 150


```

## 翻译

给定m×n正整数矩阵，从每行恰好选一个数，使所有选出的数的GCD为1，求方案数模10^9+7。

## 解题思路

容斥原理+莫比乌斯函数。设f(d)=从每行选一个数且所有数都被d整除的方案数=每行中d的倍数个数之积。答案=Σ μ(d)*f(d)，d从1到150。μ(d)为莫比乌斯函数，可用筛法预计算。

## Solution

[SourceCode](./solution.js)
