# [1394] Find Lucky Integer in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-lucky-integer-in-an-array/description/)

* algorithms
* Easy (75.50%)
* Likes:    1632
* Dislikes: 45
* Testcase Example:  '[2,2,3,4]'

```md
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
Return the largest lucky integer in the array. If there is no lucky integer return -1.

Example 1:

Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

Example 2:

Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

Example 3:

Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.


Constraints:

1 <= arr.length <= 500
1 <= arr[i] <= 500


```

## 中文翻译

给定整数数组，"幸运整数"是指出现频率等于其值的数。返回最大的幸运整数，不存在则返回 -1。

## 解题思路

统计频率，从大到小遍历，找到第一个 freq[i] === i 的数。

## Solution

[SourceCode](./solution.js)
