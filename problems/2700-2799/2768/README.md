# [2768] Number of Black Blocks

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-black-blocks/description/)

* algorithms
* Medium (41.67%)
* Likes:    285
* Dislikes: 51
* Testcase Example:  '3\n3\n[[0,0]]'

```md
You are given two integers m and n representing the dimensions of a0-indexedm x n grid.
You are also given a 0-indexed 2D integer matrix coordinates, where coordinates[i] = [x, y] indicates that the cell with coordinates [x, y] is colored black. All cells in the grid that do not appear in coordinates are white.
A block is defined as a 2 x 2 submatrix of the grid. More formally, a block with cell [x, y] as its top-left corner where 0 <= x < m - 1 and 0 <= y < n - 1 contains the coordinates [x, y], [x + 1, y], [x, y + 1], and [x + 1, y + 1].
Return a 0-indexed integer array arr of size 5 such that arr[i] is the number of blocks that contains exactly i black cells.

Example 1:

Input: m = 3, n = 3, coordinates = [[0,0]]
Output: [3,1,0,0,0]
Explanation: The grid looks like this:

There is only 1 block with one black cell, and it is the block starting with cell [0,0].
The other 3 blocks start with cells [0,1], [1,0] and [1,1]. They all have zero black cells.
Thus, we return [3,1,0,0,0].

Example 2:

Input: m = 3, n = 3, coordinates = [[0,0],[1,1],[0,2]]
Output: [0,2,2,0,0]
Explanation: The grid looks like this:

There are 2 blocks with two black cells (the ones starting with cell coordinates [0,0] and [0,1]).
The other 2 blocks have starting cell coordinates of [1,0] and [1,1]. They both have 1 black cell.
Therefore, we return [0,2,2,0,0].


Constraints:

2 <= m <= 105
2 <= n <= 105
0 <= coordinates.length <= 104
coordinates[i].length == 2
0 <= coordinates[i][0] < m
0 <= coordinates[i][1] < n
It is guaranteed that coordinates contains pairwise distinct coordinates.


```

## 中文翻译

给定 m x n 网格和黑色格子坐标列表。一个 block 是 2x2 子矩阵。返回大小为 5 的数组，arr[i] 表示恰好包含 i 个黑色格子的 block 数量。

## 解题思路

**哈希计数：**

1. 网格太大不能遍历，但黑色格子最多 10^4
2. 每个黑色格子最多属于 4 个 block（左上角分别在 [x,y], [x-1,y], [x,y-1], [x-1,y-1]）
3. 用 Map 统计每个 block（用左上角坐标作 key）包含的黑色格子数
4. 遍历 Map 得到各计数的 block 数
5. arr[0] = 总 block 数 - arr[1] - arr[2] - arr[3] - arr[4]

总 block 数 = (m-1) * (n-1)

时间复杂度：O(k)，k 为黑色格子数

## Solution

[SourceCode](./solution.js)
