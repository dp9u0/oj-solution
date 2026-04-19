# [1131] Maximum of Absolute Value Expression

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-of-absolute-value-expression/description/)

* algorithms
* Medium (48.65%)
* Likes:    678
* Dislikes: 419
* Testcase Example:  '[1,2,3,4]\n[-1,4,5,6]'

```md
Given two arrays of integers with equal lengths, return the maximum value of:

arr1[i] - arr1[j]
+
arr2[i] - arr2[j]
+
i - j

where the maximum is taken over all 0 <= i, j < arr1.length.

Example 1:

Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
Output: 13

Example 2:

Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
Output: 20


Constraints:

2 <= arr1.length == arr2.length <= 40000
-10^6 <= arr1[i], arr2[i] <= 10^6


```

## 题目翻译

给定两个等长的整数数组，求 |arr1[i]-arr1[j]| + |arr2[i]-arr2[j]| + |i-j| 的最大值，其中 0 <= i, j < n。

## 解题思路

展开绝对值，每项有正负两种情况，共 8 种符号组合。对每种组合构造 f(i) = s1*arr1[i] + s2*arr2[i] + s3*i，答案为 8 种组合中 max(f)-min(f) 的最大值。时间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
