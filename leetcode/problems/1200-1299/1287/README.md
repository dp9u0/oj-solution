# [1287] Element Appearing More Than 25% In Sorted Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/)

* algorithms
* Easy (61.15%)
* Likes:    1780
* Dislikes: 85
* Testcase Example:  '[1,2,2,6,6,6,6,7,10]'

```md
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6

Example 2:

Input: arr = [1,1]
Output: 1


Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 105


```

## 中文翻译

给定非递减排序数组，有且仅有一个元素出现次数超过 25%，找出该元素。

## 解题思路

数组已排序，统计连续相同元素数量，超过 n/4 即为答案。

## Solution

[SourceCode](./solution.js)
