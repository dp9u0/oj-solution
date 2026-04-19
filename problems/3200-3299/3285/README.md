# [3285] Find Indices of Stable Mountains

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-indices-of-stable-mountains/description/)

* algorithms
* Easy (86.85%)
* Likes:    106
* Dislikes: 40
* Testcase Example:  '[1,2,3,4,5]\n2'

```md
There are n mountains in a row, and each mountain has a height. You are given an integer array height where height[i] represents the height of mountain i, and an integer threshold.
A mountain is called stable if the mountain just before it (if it exists) has a height strictly greater than threshold. Note that mountain 0 is not stable.
Return an array containing the indices of all stable mountains in any order.

Example 1:

Input: height = [1,2,3,4,5], threshold = 2
Output: [3,4]
Explanation:

Mountain 3 is stable because height[2] == 3 is greater than threshold == 2.
Mountain 4 is stable because height[3] == 4 is greater than threshold == 2.


Example 2:

Input: height = [10,1,10,1,10], threshold = 3
Output: [1,3]

Example 3:

Input: height = [10,1,10,1,10], threshold = 10
Output: []


Constraints:

2 <= n == height.length <= 100
1 <= height[i] <= 100
1 <= threshold <= 100


```

## 题目翻译

给定山高数组 height 和阈值 threshold。山 i 是"稳定的"当前一座山高度 > threshold。返回所有稳定山的索引。

## 解题思路

遍历，检查 height[i-1] > threshold。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
