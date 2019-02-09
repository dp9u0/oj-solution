# [941] Valid Mountain Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-mountain-array/description/)

* algorithms
* Easy (34.92%)
* Testcase Example:  '[2,1]'

```md
Given an array A of integers, return true if and only if it is a valid mountain array.
Recall that A is a mountain array if and only if:
A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:

A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[B.length - 1]



Example 1:
Input: [2,1]
Output: false
Example 2:
Input: [3,5,5]
Output: false
Example 3:
Input: [0,3,2,1]
Output: true

Note:
0 <= A.length <= 10000
0 <= A[i] <= 10000
```

## Solution

Tow Ponters 问题,分别从左和右边开始找到不再增加or减少的位置,如果都是相同位置,则是mountain array,需要增加判断是否是单调递增或递减array

[SourceCode](./solution.js)