# [977] Squares of a Sorted Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/squares-of-a-sorted-array/description/)

* algorithms
* Easy (73.76%)
* Testcase Example:  '[-4,-1,0,3,10]'

```md
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Note:
1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.
```

## Solution

由于原数组是排序好的,因此可以作为TP 问题,左右分别向中间开始遍历,选取 abs 大的那个作为当前填入值.

[SourceCode](./solution.js)