# [3128] Right Triangles

## Description

[LeetCode Problem Description](https://leetcode.com/problems/right-triangles/description/)

* algorithms
* Medium (48.57%)
* Likes:    136
* Dislikes: 24
* Testcase Example:  '[[0,1,0],[0,1,1],[0,1,0]]'

```md
You are given a 2D boolean matrix grid.
A collection of 3 elements of grid is a right triangle if one of its elements is in the same row with another element and in the same column with the third element. The 3 elements may not be next to each other.
Return an integer that is the number of right triangles that can be made with 3 elements of grid such that all of them have a value of 1.

Example 1:




0
1
0


0
1
1


0
1
0






0
1
0


0
1
1


0
1
0






0
1
0


0
1
1


0
1
0





Input: grid = [[0,1,0],[0,1,1],[0,1,0]]
Output: 2
Explanation:
There are two right triangles with elements of the value 1. Notice that the blue ones do notform a right triangle because the 3 elements are in the same column.

Example 2:




1
0
0
0


0
1
0
1


1
0
0
0





Input: grid = [[1,0,0,0],[0,1,0,1],[1,0,0,0]]
Output: 0
Explanation:
There are no right triangles with elements of the value 1. Notice that the blue ones do not form a right triangle.

Example 3:




1
0
1


1
0
0


1
0
0






1
0
1


1
0
0


1
0
0





Input: grid = [[1,0,1],[1,0,0],[1,0,0]]
Output: 2
Explanation:
There are two right triangles with elements of the value 1.


Constraints:

1 <= grid.length <= 1000
1 <= grid[i].length <= 1000
0 <= grid[i][j] <= 1


```

## 翻译

给定一个 01 矩阵，三个元素构成直角三角形当且仅当其中一个元素与另一个同行、与第三个同列。统计所有由 1 组成的直角三角形数量。

## Approach

对于每个为 1 的格子 (i, j) 作为直角顶点，三角形数量 = (该行其他 1 的个数) × (该列其他 1 的个数)。预处理每行和每列的 1 的计数，遍历所有格子累加即可。

## Solution

[SourceCode](./solution.js)
