# [3529] Count Cells in Overlapping Horizontal and Vertical Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-cells-in-overlapping-horizontal-and-vertical-substrings/description/)

* algorithms
* Medium (27.17%)
* Likes:    62
* Dislikes: 14
* Testcase Example:  '[["a","a","c","c"],["b","b","b","c"],["a","a","b","a"],["c","a","a","c"],["a","a","b","a"]]\n' +

```md
'"abaca"'
You are given an m x n matrix grid consisting of characters and a string pattern.
A horizontal substring is a contiguous sequence of characters read from left to right. If the end of a row is reached before the substring is complete, it wraps to the first column of the next row and continues as needed. You do not wrap from the bottom row back to the top.
A vertical substring is a contiguous sequence of characters read from top to bottom. If the bottom of a column is reached before the substring is complete, it wraps to the first row of the next column and continues as needed. You do not wrap from the last column back to the first.
Count the number of cells in the matrix that satisfy the following condition:

The cell must be part of at least one horizontal substring and at least one vertical substring, where both substrings are equal to the given pattern.

Return the count of these cells.

Example 1:


Input: grid = [['a','a','c','c'],['b','b','b','c'],['a','a','b','a'],['c','a','a','c'],['a','a','b','a']], pattern = 'abaca'
Output: 1
Explanation:
The pattern 'abaca' appears once as a horizontal substring (colored blue) and once as a vertical substring (colored red), intersecting at one cell (colored purple).

Example 2:


Input: grid = [['c','a','a','a'],['a','a','b','a'],['b','b','a','a'],['a','a','b','a']], pattern = 'aba'
Output: 4
Explanation:
The cells colored above are all part of at least one horizontal and one vertical substring matching the pattern 'aba'.

Example 3:

Input: grid = [['a']], pattern = 'a'
Output: 1


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
1 <= pattern.length <= m * n
grid and pattern consist of only lowercase English letters.


```

## 翻译

给定字符矩阵和模式串，水平子串按行优先从左到右读取（可跨行），垂直子串按列优先从上到下读取（可跨列）。求同时被至少一个水平匹配和至少一个垂直匹配覆盖的格子数。

## 解题思路

KMP + 差分数组。将矩阵分别按行优先和列优先展平为字符串，用 KMP 查找所有模式出现位置。对水平和垂直分别用差分数组标记覆盖区间，前缀和求出每个位置的覆盖情况，最后遍历所有格子统计同时被水平和垂直覆盖的数量。

## Solution

[SourceCode](./solution.js)
