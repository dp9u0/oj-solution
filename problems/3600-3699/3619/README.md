# [3619] 总价值可以被 K 整除的岛屿数目

## Description


```md
https://leetcode.cn/problems/count-islands-with-total-value-divisible-by-k/description/
* algorithms
* Medium (57.14%)
* Likes:    13
* Dislikes: -
* Testcase Example:  '[[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]]\n5'
给你一个 m x n 的矩阵 grid 和一个正整数 k。一个 岛屿 是由 正 整数（表示陆地）组成的，并且陆地间 四周 连通（水平或垂直）。
一个岛屿的总价值是该岛屿中所有单元格的值之和。
返回总价值可以被 k 整除 的岛屿数量。

示例 1:
输入: grid = [[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], k = 5
输出: 2
解释:
网格中包含四个岛屿。蓝色高亮显示的岛屿的总价值可以被 5 整除，而红色高亮显示的岛屿则不能。
示例 2:
输入: grid = [[3,0,3,0], [0,3,0,3], [3,0,3,0]], k = 3
输出: 6
解释:
网格中包含六个岛屿，每个岛屿的总价值都可以被 3 整除。

提示:
m == grid.length
n == grid[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
0 <= grid[i][j] <= 106
1 <= k < = 106
Hint 1: Use a BFS/DFS to find connected components.

```

## Description (English)

You are given an m x n matrix `grid` and a positive integer `k`. An **island** is a group of **positive** integers (representing land) that are 4-directionally connected (horizontally or vertically).

The **total value** of an island is the sum of the values of all its cells.

Return the number of islands whose total value is divisible by `k`.

Example 1:

```
Input: grid = [[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], k = 5
Output: 2
Explanation: The grid contains four islands. The highlighted (blue) islands have a total value divisible by 5, while the others do not.
```

Example 2:

```
Input: grid = [[3,0,3,0],[0,3,0,3],[3,0,3,0]], k = 3
Output: 6
Explanation: The grid contains six islands, and the total value of each is divisible by 3.
```

Constraints:

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 1000
- 1 <= m * n <= 10^5
- 0 <= grid[i][j] <= 10^6
- 1 <= k <= 10^6

## Approach

经典连通分量统计：BFS 洪水填充求岛屿。

1. 遍历网格，遇到 `grid[i][j] > 0`（陆地且未访问）时启动一次 BFS，发现一个新岛屿。
2. BFS 过程中用队列逐层扩展四方向邻居，累加岛屿内所有格子的值，同时把访问过的格子置 0（或标记 visited）防止重复访问。
3. 每个岛屿遍历完后判断 `sum % k === 0`，是则计数 +1。

注意点：
- m * n 可达 1e5，必须用**迭代 BFS** 而非递归 DFS，避免调用栈溢出。
- 单格值最大 1e6、格子最多 1e5 个，岛屿和最大 1e11，超出 32 位整数，但 JS Number 可安全表示，无溢出问题。

复杂度：时间 O(m·n)，每个格子至多入队一次；空间 O(m·n)，队列与visited。

## Solution

[SourceCode](./solution.js)
