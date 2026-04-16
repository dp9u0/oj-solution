# [1346] Check If N and Its Double Exist

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-n-and-its-double-exist/description/)

* algorithms
* Easy (41.73%)
* Likes:    2527
* Dislikes: 259
* Testcase Example:  '[10,2,5,3]'

```md
Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]


Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.


Constraints:

2 <= arr.length <= 500
-103 <= arr[i] <= 103


```

## 中文翻译

给定整数数组 arr，判断是否存在两个不同下标 i 和 j 使得 arr[i] == 2 * arr[j]。

## 解题思路

用 Set 存储已遍历的元素，对每个元素检查 2*arr[i] 或 arr[i]/2（偶数时）是否在 Set 中。

## Solution

[SourceCode](./solution.js)
