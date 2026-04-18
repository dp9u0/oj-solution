# [1210] Minimum Moves to Reach Target with Rotations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/description/)

* algorithms
* Hard (52.02%)
* Likes:    289
* Dislikes: 75
* Testcase Example:  '[[0,0,0,0,0,1],[1,1,0,0,1,0],[0,0,0,0,1,1],[0,0,1,0,1,0],[0,1,1,0,0,0],[0,1,1,0,0,0]]\r'

```md
In ann*ngrid, there is a snake that spans 2 cells and starts moving from the top left corner at (0, 0) and (0, 1). The grid has empty cells represented by zeros and blocked cells represented by ones. The snake wants to reach the lower right corner at(n-1, n-2)and(n-1, n-1).
In one move the snake can:

Move one cell to the rightif there are no blocked cells there. This move keeps the horizontal/vertical position of the snake as it is.
Move down one cellif there are no blocked cells there. This move keeps the horizontal/vertical position of the snake as it is.
Rotate clockwise if it&#39;s in a horizontal position and the two cells under it are both empty. In that case the snake moves from(r, c)and(r, c+1)to(r, c)and(r+1, c).

Rotate counterclockwiseif it&#39;s in a vertical position and the two cells to its right are both empty. In that case the snake moves from(r, c)and(r+1, c)to(r, c)and(r, c+1).


Return the minimum number of moves to reach the target.
If there is no way to reach the target, return-1.

Example 1:


Input: grid = [[0,0,0,0,0,1],
[1,1,0,0,1,0],
[0,0,0,0,1,1],
[0,0,1,0,1,0],
[0,1,1,0,0,0],
[0,1,1,0,0,0]]
Output: 11
Explanation:
One possible solution is [right, right, rotate clockwise, right, down, down, down, down, rotate counterclockwise, right, down].

Example 2:

Input: grid = [[0,0,1,1,1,1],
[0,0,0,0,1,1],
[1,1,0,0,0,1],
[1,1,1,0,0,1],
[1,1,1,0,0,1],
[1,1,1,0,0,0]]
Output: 9


Constraints:

2 <= n <= 100
0 <= grid[i][j] <= 1
It is guaranteed that the snake starts at empty cells.


```

## 题目翻译

n×n 网格中一条蛇占两格，从 (0,0)-(0,1) 出发，目标到达 (n-1,n-2)-(n-1,n-1)。可右移、下移、顺时针旋转（水平→垂直）、逆时针旋转（垂直→水平）。求最少步数。

## 解题思路

**BFS**

状态 (r, c, orientation)，orientation=0 水平（尾在 (r,c+1)），1 垂直（尾在 (r+1,c)）。4 种转移：右移、下移、旋转。BFS 找最短路径。O(n^2) 时间。

## Solution

[SourceCode](./solution.js)
