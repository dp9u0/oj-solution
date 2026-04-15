# [2326] Spiral Matrix IV

## Description

[LeetCode Problem Description](https://leetcode.com/problems/spiral-matrix-iv/description/)

* algorithms
* Medium (82.28%)
* Likes:    1317
* Dislikes: 56
* Testcase Example:  '3\n5\n[3,0,2,6,8,1,7,9,4,2,5,5,0]'

```md
You are given two integers m and n, which represent the dimensions of a matrix.
You are also given the head of a linked list of integers.
Generate an m x n matrix that contains the integers in the linked list presented in spiral order (clockwise), starting from the top-left of the matrix. If there are remaining empty spaces, fill them with -1.
Return the generated matrix.

Example 1:


Input: m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
Output: [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
Explanation: The diagram above shows how the values are printed in the matrix.
Note that the remaining spaces in the matrix are filled with -1.

Example 2:


Input: m = 1, n = 4, head = [0,1,2]
Output: [[0,1,2,-1]]
Explanation: The diagram above shows how the values are printed from left to right in the matrix.
The last space in the matrix is set to -1.

Constraints:

1 <= m, n <= 105
1 <= m * n <= 105
The number of nodes in the list is in the range [1, m * n].
0 <= Node.val <= 1000


```

## 中文翻译

给定两个整数 m 和 n 表示矩阵的维度，以及一个整数链表的头节点。

生成一个 m x n 的矩阵，按顺时针螺旋顺序从左上角填充链表中的整数。剩余空位填充 -1。

返回生成的矩阵。

## 解题思路

**模拟螺旋遍历：**

1. 初始化 m x n 矩阵，全部填 -1
2. 按顺时针方向（右→下→左→上）遍历矩阵
3. 用方向数组控制移动方向，碰到边界或已填充位置时转向
4. 从链表中依次取值填入

时间复杂度：O(m*n)，空间复杂度：O(m*n)

## Solution

[SourceCode](./solution.js)
