# [3200] Maximum Height of a Triangle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-height-of-a-triangle/description/)

* algorithms
* Easy (44.29%)
* Likes:    166
* Dislikes: 31
* Testcase Example:  '2\n4'

```md
You are given two integers red and blue representing the count of red and blue colored balls. You have to arrange these balls to form a triangle such that the 1st row will have 1 ball, the 2nd row will have 2 balls, the 3rd row will have 3 balls, and so on.
All the balls in a particular row should be the same color, and adjacent rows should have different colors.
Return the maximum height of the triangle that can be achieved.

Example 1:

Input: red = 2, blue = 4
Output: 3
Explanation:

The only possible arrangement is shown above.

Example 2:

Input: red = 2, blue = 1
Output: 2
Explanation:

The only possible arrangement is shown above.

Example 3:

Input: red = 1, blue = 1
Output: 1

Example 4:

Input: red = 10, blue = 1
Output: 2
Explanation:

The only possible arrangement is shown above.


Constraints:

1 <= red, blue <= 100


```

## 题目翻译

给定红色和蓝色球的数量，排列成三角形（第 1 行 1 个球，第 2 行 2 个...）。同一行颜色相同，相邻行颜色不同。求三角形的最大高度。

## 解题思路

模拟两种情况：第 1 行用红色开始，或第 1 行用蓝色开始。逐行消耗球，取两种情况的最大高度。

时间复杂度：O(sqrt(max(red, blue)))，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
