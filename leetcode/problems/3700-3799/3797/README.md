# [3797] Count Routes to Climb a Rectangular Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-routes-to-climb-a-rectangular-grid/description/)

* algorithms
* Hard (24.37%)
* Likes:    42
* Dislikes: 1
* Testcase Example:  '["..","#."]\n1'

```md
You are given a string array grid of size n, where each string grid[i] has length m. The character grid[i][j] is one of the following symbols:

&#39;.&#39;: The cell is available.
&#39;#&#39;: The cell is blocked.

You want to count the number of different routes to climb grid. Each route must start from any cell in the bottom row (row n - 1) and end in the top row (row 0).
However, there are some constraints on the route.

You can only move from one available cell to another available cell.
The Euclidean distance of each move is at most d, where d is an integer parameter given to you. The Euclidean distance between two cells (r1, c1), (r2, c2) is sqrt((r1 - r2)2 + (c1 - c2)2).
Each move either stays on the same row or moves to the row directly above (from row r to r - 1).
You cannot stay on the same row for two consecutive turns. If you stay on the same row in a move (and this move is not the last move), your next move must go to the row above.

Return an integer denoting the number of such routes. Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: grid = ['..','#.'], d = 1
Output: 2
Explanation:
We label the cells we visit in the routes sequentially, starting from 1. The two routes are:

.2
#1


32
#1

We can move from the cell (1, 1) to the cell (0, 1) because the Euclidean distance is sqrt((1 - 0)2 + (1 - 1)2) = sqrt(1) <= d.
However, we cannot move from the cell (1, 1) to the cell (0, 0) because the Euclidean distance is sqrt((1 - 0)2 + (1 - 0)2) = sqrt(2) > d.

Example 2:

Input: grid = ['..','#.'], d = 2
Output: 4
Explanation:
Two of the routes are given in example 1. The other two routes are:

2.
#1


23
#1

Note that we can move from (1, 1) to (0, 0) because the Euclidean distance is sqrt(2) <= d.

Example 3:

Input: grid = ['#'], d = 750
Output: 0
Explanation:
We cannot choose any cell as the starting cell. Therefore, there are no routes.

Example 4:

Input: grid = ['..'], d = 1
Output: 4
Explanation:
The possible routes are:

.1


1.


12


21



Constraints:

1 <= n == grid.length <= 750
1 <= m == grid[i].length <= 750
grid[i][j] is &#39;.&#39; or &#39;#&#39;.
1 <= d <= 750


```

## 翻译

给定 n×m 网格（'.' 可走，'#' 阻塞）和参数 d。从底行任意格子出发，到顶行任意格子结束。
每次移动：同行移动或上行一行，欧几里得距离 <= d。不能连续两次同行移动（同行后必须上行）。
求满足条件的路径数，模 10^9+7。

## 解题思路

DP + 前缀和优化。每行两个状态：
- arrive[r][c]：通过上行到达 (r,c) 的路径数
- stay[r][c]：通过同行移动到达 (r,c) 的路径数

转移：
1. arrive[r][c] = sum(prevArrive[c']+prevStay[c']) for c'在列距离w_up内（w_up=floor(sqrt(d²-1))）
2. stay[r][c'] = sum(arrive[r][c]) for c在列距离d内且c≠c'

用前缀和实现 O(1) 区间查询，总复杂度 O(n×m)。

## Solution

[SourceCode](./solution.js)
