# [505] 迷宫 II

## Description


```md
https://leetcode.cn/problems/the-maze-ii/description/
* algorithms
* Medium (53.32%)
* Likes:    195
* Dislikes: -
* Testcase Example:  '[[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]]\n[0,4]\n[4,4]'
迷宫中有一个球，它有空地 (表示为 0) 和墙 (表示为 1)。球可以向上、向下、向左或向右滚过空地，但直到撞上墙之前它都不会停止滚动。当球停止时，它才可以选择下一个滚动方向。
给定 m × n 的迷宫(maze)，球的起始位置 (start = [startrow, startcol]) 和目的地 (destination = [destinationrow, destinationcol])，返回球在目的地 (destination) 停止的最短距离。如果球不能在目的地 (destination) 停止，返回 -1。
距离是指球从起始位置 ( 不包括 ) 到终点 ( 包括 ) 所经过的空地数。
你可以假设迷宫的边界都是墙 ( 见例子 )。

示例 1:
输入: maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [4,4]
输出: 12
解析: 一条最短路径 : left -> down -> left -> down -> right -> down -> right。
总距离为 1 + 1 + 3 + 1 + 2 + 2 + 2 = 12。
示例 2:
输入: maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [3,2]
输出: -1
解析: 球不可能在目的地停下来。注意，你可以经过目的地，但不能在那里停下来。
示例 3:
输入: maze = [[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], start = [4,3], destination = [0,1]
输出: -1

注意:
m == maze.length
n == maze[i].length
1 <= m, n <= 100
maze[i][j] 是 0 或 1.
start.length == 2
destination.length == 2
0 <= startrow, destinationrow < m
0 <= startcol, destinationcol < n
球和目的地都存在于一个空地中，它们最初不会处于相同的位置。

迷宫至少包含两个空地。

```

## Solution

[SourceCode](./solution.js)

## Translation

Same rolling maze as 490 (no hole). Return the **minimum rolling distance** to stop at destination, or -1.

- Example: the 490 maze, start [0,4], dest [4,4] → `12` (l,d,l,d,r,d,r: 1+1+3+1+2+2+2)
- dest [3,2] → `-1` (no stop lands exactly there)

Constraints: maze ≤ 100×100.

## Approach

**Dijkstra,节点 = 停驻点,边权 = 滚动步数**。从每个停驻点 4 方向滚到墙,松弛距离;出堆时若已到 destination 返回。距离数组剪枝(d > dist 跳过陈旧项)。

节点 ≤ mn,线性堆取最小足够。
