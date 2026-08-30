# [3905] Multi Source Flood Fill

## Description

[LeetCode Problem Description](https://leetcode.com/problems/multi-source-flood-fill/description/)

* algorithms
* Medium (56.00%)
* Likes:    98
* Dislikes: 4
* Testcase Example:  '3\n3\n[[0,0,1],[2,2,2]]'

```md
You are given two integers n and m representing the number of rows and columns of a grid, respectively.
You are also given a 2D integer array sources, where sources[i] = [ri, ci, color​​​​​​​i] indicates that the cell (ri, ci) is initially colored with colori. All other cells are initially uncolored and represented as 0.
At each time step, every currently colored cell spreads its color to all adjacent uncolored cells in the four directions: up, down, left, and right. All spreads happen simultaneously.
If multiple colors reach the same uncolored cell at the same time step, the cell takes the color with the maximum value.
The process continues until no more cells can be colored.
Return a 2D integer array representing the final state of the grid, where each cell contains its final color.

Example 1:

Input: n = 3, m = 3, sources = [[0,0,1],[2,2,2]]
Output: [[1,1,2],[1,2,2],[2,2,2]]
Explanation:
The grid at each time step is as follows:
​​​​​​​
At time step 2, cells (0, 2), (1, 1), and (2, 0) are reached by both colors, so they are assigned color 2 as it has the maximum value among them.

Example 2:

Input: n = 3, m = 3, sources = [[0,1,3],[1,1,5]]
Output: [[3,3,3],[5,5,5],[5,5,5]]
Explanation:
The grid at each time step is as follows:


Example 3:

Input: n = 2, m = 2, sources = [[1,1,5]]
Output: [[5,5],[5,5]]
Explanation:
The grid at each time step is as follows:
​​​​​​​
Since there is only one source, all cells are assigned the same color.


Constraints:

1 <= n, m <= 105
1 <= n * m <= 105
1 <= sources.length <= n * m
sources[i] = [ri, ci, colori]
0 <= ri <= n - 1
0 <= ci <= m - 1
1 <= colori <= 106​​​​​​​
All (ri, ci​​​​​​​) in sources are distinct.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定两个整数 n 和 m，分别表示网格的行数和列数。
再给定一个二维整数数组 sources，其中 sources[i] = [ri, ci, colori] 表示单元格 (ri, ci) 初始被染成颜色 colori。所有其他单元格初始未着色，用 0 表示。
在每个时间步，每个当前已着色的单元格同时向四个方向（上、下、左、右）相邻的未着色单元格扩散自己的颜色，所有扩散同时发生。
如果多个颜色在同一时间步到达同一个未着色单元格，该单元格取值最大的颜色。
过程持续到不能再有单元格被着色为止。
返回一个二维整数数组，表示网格的最终状态，每个单元格包含其最终颜色。

示例 1：n = 3, m = 3, sources = [[0,0,1],[2,2,2]] → 输出 [[1,1,2],[1,2,2],[2,2,2]]
（第 2 步时，(0,2)、(1,1)、(2,0) 同时被两种颜色到达，取最大值 2）

## 解题思路

多源 BFS（层序扩散）：

1. 将网格展平为一维 Int32Array（大小 n*m），初始全 0，把每个 source 直接写入对应格子。
2. 所有源构成第 0 层 frontier（记录格子下标和颜色）。
3. 逐层扩散：对当前层每个格子，向四个相邻格子扩散；只考虑尚未着色（grid 值为 0）的邻格。同一层内可能有多个颜色到达同一格，用辅助数组 best 收集每个格子本层收到的最大颜色（touched 记录被触碰的格子）。
4. 本层处理完后，将 touched 中每个格子的值写入 grid（=best），并作为下一层 frontier。
5. 直到 frontier 为空，返回 grid。

关键点：
- 一个格子一旦被着色就不再变色，颜色竞争只发生在它首次被着色的那一层，所以只需在层内取 max。
- 每个格子最多入队一次，时间复杂度 O(n*m)，空间 O(n*m)。n*m ≤ 1e5，完全可行。
