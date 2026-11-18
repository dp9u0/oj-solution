# [499] 迷宫 III

## Description


```md
https://leetcode.cn/problems/the-maze-iii/description/
* algorithms
* Hard (47.91%)
* Likes:    91
* Dislikes: -
* Testcase Example:  '[[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]]\n[4,3]\n[0,1]'
由空地和墙组成的迷宫中有一个球。球可以向上（u）下（d）左（l）右（r）四个方向滚动，但在遇到墙壁前不会停止滚动。当球停下时，可以选择下一个方向（必须与上一个选择的方向不同）。迷宫中还有一个洞，当球运动经过洞时，就会掉进洞里。
给定球的起始位置，目的地和迷宫，找出让球以最短距离掉进洞里的路径。 距离的定义是球从起始位置（不包括）到目的地（包括）经过的空地个数。通过'u', 'd', 'l' 和 'r'输出球的移动方向。 由于可能有多条最短路径， 请输出字典序最小的路径。如果球无法进入洞，输出"impossible"。
迷宫由一个0和1的二维数组表示。 1表示墙壁，0表示空地。你可以假定迷宫的边缘都是墙壁。起始位置和目的地的坐标通过行号和列号给出。

示例1:
输入 1: 迷宫由以下二维数组表示
0 0 0 0 0
1 1 0 0 1
0 0 0 0 0
0 1 0 0 1
0 1 0 0 0
输入 2: 球的初始位置 (rowBall, colBall) = (4, 3)
输入 3: 洞的位置 (rowHole, colHole) = (0, 1)
输出: "lul"
解析: 有两条让球进洞的最短路径。
第一条路径是 左 -> 上 -> 左, 记为 "lul".
第二条路径是 上 -> 左, 记为 'ul'.
两条路径都具有最短距离6, 但'l' < 'u'，故第一条路径字典序更小。因此输出"lul"。
示例 2:
输入 1: 迷宫由以下二维数组表示
0 0 0 0 0
1 1 0 0 1
0 0 0 0 0
0 1 0 0 1
0 1 0 0 0
输入 2: 球的初始位置 (rowBall, colBall) = (4, 3)
输入 3: 洞的位置 (rowHole, colHole) = (3, 0)
输出: "impossible"
示例: 球无法到达洞。
示例 3：
输入：maze = [[0,0,0,0,0,0,0],[0,0,1,0,0,1,0],[0,0,0,0,1,0,0],[0,0,0,0,0,0,1]], ball = [0,4], hole = [3,5]
输出："dldr"

提示：
m == maze.length
n == maze[i].length
1 <= m, n <= 100
maze[i][j] is 0 or 1.
ball.length == 2
hole.length == 2
0 <= ballrow, holerow <= m
0 <= ballcol, holecol <= n
球和洞都存在于一个空地中，它们最初不会处于同一位置。
迷宫中至少有 2 个空地。

```

## Solution

[SourceCode](./solution.js)

## Translation

Same rolling maze, but with a hole: the ball drops in when it **rolls over** it. Return the path with minimal distance (number of cells rolled); among equal-distance paths, the **lexicographically smallest** one (u/d/l/r letters). "impossible" if unreachable.

- Example 1: ball (4,3), hole (0,1) → `"lul"` (both "lul" and "ul" have distance 6; "l" < "u")
- Example 2: hole (3,0) → `"impossible"`
- Example 3: ball (0,4), hole (3,5) → `"dldr"`

Constraints: maze ≤ 100×100.

## Approach

**Dijkstra,键 = (距离, 路径字符串)**。从停驻点向 4 方向滚动;滚动途中遇到洞立即停在洞上。每个停驻点保存最优 (dist, path),新候选严格更优(距离更小,或距离相同且路径字典序更小)才更新入堆。

- 等距路径比较取字典序:同一停驻点等距且互非前缀的两条路径,后缀追加后大小关系不变;前缀情形只可能来自 0 步滚动(被墙挡住),不会产生更新,故正确。
- 距离相同再比字符串保证答案字典序最小;堆用线性取最小(节点 ≤ 10^4)。
