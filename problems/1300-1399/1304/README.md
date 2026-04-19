# [1304] Find N Unique Integers Sum up to Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/description/)

* algorithms
* Easy (78.44%)
* Likes:    2492
* Dislikes: 620
* Testcase Example:  '5'

```md
Given an integer n, return any array containing n unique integers such that they add up to 0.

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Example 2:

Input: n = 3
Output: [-1,0,1]

Example 3:

Input: n = 1
Output: [0]


Constraints:

1 <= n <= 1000


```

## 翻译

返回 n 个不同整数，使其和为 0。

## 解题思路

构造：取 1,2,...,n-1 和 -(1+2+...+n-1)。这样前 n-1 个正数各不相同，最后一个负数与前 n-1 个都不同（因为 |sum| >= n 而 1..n-1 最大为 n-1）。

## Solution

[SourceCode](./solution.js)
