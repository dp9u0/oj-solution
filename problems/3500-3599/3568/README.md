# [3568] Minimum Moves to Clean the Classroom

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-moves-to-clean-the-classroom/description/)

* algorithms
* Medium (26.63%)
* Likes:    130
* Dislikes: 16
* Testcase Example:  '["S.", "XL"]\n2'

```md
You are given an m x n grid classroom where a student volunteer is tasked with cleaning up litter scattered around the room. Each cell in the grid is one of the following:

&#39;S&#39;: Starting position of the student
&#39;L&#39;: Litter that must be collected (once collected, the cell becomes empty)
&#39;R&#39;: Reset area that restores the student&#39;s energy to full capacity, regardless of their current energy level (can be used multiple times)
&#39;X&#39;: Obstacle the student cannot pass through
&#39;.&#39;: Empty space

You are also given an integer energy, representing the student&#39;s maximum energy capacity. The student starts with this energy from the starting position &#39;S&#39;.
Each move to an adjacent cell (up, down, left, or right) costs 1 unit of energy. If the energy reaches 0, the student can only continue if they are on a reset area &#39;R&#39;, which resets the energy to its maximum capacity energy.
Return the minimum number of moves required to collect all litter items, or -1 if it&#39;s impossible.

Example 1:

Input: classroom = ['S.', 'XL'], energy = 2
Output: 2
Explanation:

The student starts at cell (0, 0) with 2 units of energy.
Since cell (1, 0) contains an obstacle &#39;X&#39;, the student cannot move directly downward.
A valid sequence of moves to collect all litter is as follows:

Move 1: From (0, 0) &rarr; (0, 1) with 1 unit of energy and 1 unit remaining.
Move 2: From (0, 1) &rarr; (1, 1) to collect the litter &#39;L&#39;.


The student collects all the litter using 2 moves. Thus, the output is 2.


Example 2:

Input: classroom = ['LS', 'RL'], energy = 4
Output: 3
Explanation:

The student starts at cell (0, 1) with 4 units of energy.
A valid sequence of moves to collect all litter is as follows:

Move 1: From (0, 1) &rarr; (0, 0) to collect the first litter &#39;L&#39; with 1 unit of energy used and 3 units remaining.
Move 2: From (0, 0) &rarr; (1, 0) to &#39;R&#39; to reset and restore energy back to 4.
Move 3: From (1, 0) &rarr; (1, 1) to collect the second litter &#39;L&#39;.


The student collects all the litter using 3 moves. Thus, the output is 3.


Example 3:

Input: classroom = ['L.S', 'RXL'], energy = 3
Output: -1
Explanation:
No valid path collects all &#39;L&#39;.


Constraints:

1 <= m == classroom.length <= 20
1 <= n == classroom[i].length <= 20
classroom[i][j] is one of &#39;S&#39;, &#39;L&#39;, &#39;R&#39;, &#39;X&#39;, or &#39;.&#39;
1 <= energy <= 50
There is exactly one &#39;S&#39; in the grid.
There are at most 10 &#39;L&#39; cells in the grid.


```

## 翻译

网格中 S 为起点，L 为垃圾，R 为充能点，X 为障碍。每步移动消耗 1 能量，到达 R 恢复满能量。能量为 0 时只有站在 R 上才能继续。求收集所有垃圾的最少步数。

## 解题思路

BFS 状态空间：(row, col, 垃圾收集位掩码, 当前能量)。最多 10 个 L，掩码 2^10=1024。网格 20x20，能量 50。visited[r][c][mask] 记录到达该状态的最大能量用于剪枝。

## Solution

[SourceCode](./solution.js)
