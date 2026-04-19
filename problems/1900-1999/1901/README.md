# [1901] Find a Peak Element II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-a-peak-element-ii/description/)

* algorithms
* Medium (54.59%)
* Likes:    2719
* Dislikes: 163
* Testcase Example:  '[[1,4],[3,2]]'

```md
A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.
Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].
You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.
You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.

Example 1:


Input: mat = [[1,4],[3,2]]
Output: [0,1]
Explanation:Both 3 and 4 are peak elements so [1,0] and [0,1] are both acceptable answers.

Example 2:


Input: mat = [[10,20,15],[21,30,14],[7,16,32]]
Output: [1,1]
Explanation:Both 30 and 32 are peak elements so [1,1] and [2,2] are both acceptable answers.


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 500
1 <= mat[i][j] <= 105
No two adjacent cells are equal.


```

## 题目翻译

在 2D 矩阵中找到一个峰值元素，即严格大于上下左右相邻元素的元素。矩阵外边界视为 -1。没有两个相邻单元格相等。要求 O(m log n) 或 O(n log m) 时间复杂度。

## 解题思路

**二分查找行**

1. 对行进行二分查找，lo = 0, hi = m-1
2. 对于中间行 mid，找到该行的最大值列 maxCol
3. 比较与上下行的关系：
   - 若 mat[mid][maxCol] > 上下相邻，则为峰值
   - 若上方更大，搜索上半部分
   - 若下方更大，搜索下半部分

关键：行内最大值保证左右方向一定满足条件，只需判断上下方向。

时间复杂度 O(m log n)（二分 log m 行，每行找最大 O(n)）。

## Solution

[SourceCode](./solution.js)
