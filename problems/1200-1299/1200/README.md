# [1200] Minimum Absolute Difference

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-absolute-difference/description/)

* algorithms
* Easy (75.09%)
* Likes:    2890
* Dislikes: 96
* Testcase Example:  '[4,2,1,3]'

```md
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr


Example 1:

Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
Example 2:

Input: arr = [1,3,6,10,15]
Output: [[1,3]]

Example 3:

Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]


Constraints:

2 <= arr.length <= 105
-106 <= arr[i] <= 106


```

## 翻译

给定互不相同的整数数组arr，找出所有最小绝对差的元素对，按升序返回。

## 解题思路

排序后遍历相邻元素对，先找最小差值，再收集所有等于最小差值的相邻对。

## Solution

[SourceCode](./solution.js)
