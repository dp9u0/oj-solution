# [954] Array of Doubled Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/array-of-doubled-pairs/description/)

* algorithms
* Medium (39.75%)
* Likes:    1576
* Dislikes: 186
* Testcase Example:  '[3,1,3,6]'

```md
Given an integer array of even length arr, return true if it is possible to reorder arr such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2, or false otherwise.

Example 1:

Input: arr = [3,1,3,6]
Output: false

Example 2:

Input: arr = [2,1,2,6]
Output: false

Example 3:

Input: arr = [4,-2,2,-4]
Output: true
Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].


Constraints:

2 <= arr.length <= 3 * 104
arr.length is even.
-105 <= arr[i] <= 105


```

## 中文翻译

给定偶数长度整数数组 arr，能否重新排列使得 arr[2i+1] = 2 * arr[2i]？

## 解题思路

按绝对值排序，用频率 Map 贪心配对。从小到大处理，每个 x 需要 freq[x] 个 2x 配对。0 需要偶数个。

## Solution

[SourceCode](./solution.js)
