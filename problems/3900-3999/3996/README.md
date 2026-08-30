# [3996] Even Number of Knight Moves

## Description

[LeetCode Problem Description](https://leetcode.com/problems/even-number-of-knight-moves/description/)

* algorithms
* Easy (74.95%)
* Likes:    70
* Dislikes: 8
* Testcase Example:  '[1,1]\n[2,2]'

```md
You are given two integer arrays start and target, where each array is of the form [x, y] representing a cell on a standard 8 x 8 chessboard.
Return true if a knight can move from start to target in an even number of moves. Otherwise, return false.
Note: A valid knight move consists of moving two squares in one direction and one square perpendicular to it. The figure below illustrates all eight possible moves from a cell.


Example 1:

Input: start = [1,1], target = [2,2]
Output: true
Explanation:
One possible sequence of moves is (1, 1) -> (3, 2) -> (2, 4) -> (4, 3) -> (2, 2).
The knight reaches the target in 4 moves, which is even. Thus, the answer is true.

Example 2:

Input: start = [4,5], target = [6,6]
Output: false
Explanation:​​​​​​​
It is impossible to reach target = [6, 6] from start = [4, 5] in an even number of moves. Thus, the answer is false.


Constraints:

start.length == target.length == 2
0 <= start[i], target[i] <= 7


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

8×8 棋盘，马从 start 到 target，判断是否存在**偶数步**的走法。

示例 1：`[1,1] → [2,2]` true（4 步）；示例 2：`[4,5] → [6,6]` false

## 解题思路

马每步 x+y 变化 ±1 或 ±3（奇数）→ 每步换色。偶数步可达 ⟺ 起终点同色 ⟺ `(|dx|+|dy|)` 为偶。8×8 上同色对均可实现（含原地 0 步）。用 (位置, 奇偶) BFS 全棋盘 4096 对验证公式。O(1)。