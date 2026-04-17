# [1263] Minimum Moves to Move a Box to Their Target Location

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/description/)

* algorithms
* Hard (49.58%)
* Likes:    888
* Dislikes: 60
* Testcase Example:  '[["#","#","#","#","#","#"],["#","T","#","#","#","#"],["#",".",".","B",".","#"],["#",".","#","#",".","#"],["#",".",".",".","S","#"],["#","#","#","#","#","#"]]'

```md
A storekeeper is a game in which the player pushes boxes around in a warehouse trying to get them to target locations.
The game is represented by an m x n grid of characters grid where each element is a wall, floor, or box.
Your task is to move the box &#39;B&#39; to the target position &#39;T&#39; under the following rules:

The character &#39;S&#39; represents the player. The player can move up, down, left, right in grid if it is a floor (empty cell).
The character &#39;.&#39; represents the floor which means a free cell to walk.
The character&#39;#&#39;represents the wall which means an obstacle (impossible to walk there).
There is only one box &#39;B&#39; and one target cell &#39;T&#39; in the grid.
The box can be moved to an adjacent free cell by standing next to the box and then moving in the direction of the box. This is a push.
The player cannot walk through the box.

Return the minimum number of pushes to move the box to the target. If there is no way to reach the target, return -1.

Example 1:


Input: grid = [['#','#','#','#','#','#'],
['#','T','#','#','#','#'],
['#','.','.','B','.','#'],
['#','.','#','#','.','#'],
['#','.','.','.','S','#'],
['#','#','#','#','#','#']]
Output: 3
Explanation: We return only the number of times the box is pushed.
Example 2:

Input: grid = [['#','#','#','#','#','#'],
['#','T','#','#','#','#'],
['#','.','.','B','.','#'],
['#','#','#','#','.','#'],
['#','.','.','.','S','#'],
['#','#','#','#','#','#']]
Output: -1

Example 3:

Input: grid = [['#','#','#','#','#','#'],
['#','T','.','.','#','#'],
['#','.','#','B','.','#'],
['#','.','.','.','.','#'],
['#','.','.','.','S','#'],
['#','#','#','#','#','#']]
Output: 5
Explanation: push the box down, left, left, up and up.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 20
grid contains only characters &#39;.&#39;, &#39;#&#39;, &#39;S&#39;, &#39;T&#39;, or &#39;B&#39;.
There is only one character &#39;S&#39;, &#39;B&#39;, and &#39;T&#39; in the grid.


```

## 题目翻译

推箱子游戏：玩家 S 在网格中推箱子 B 到目标 T。玩家可以上下左右移动（不能穿墙或穿箱），站在箱子旁边向箱子方向移动即可推动箱子（推动一次）。返回最少推动次数。

## 解题思路

**0-1 BFS**

状态 = (箱子位置, 玩家位置)。每次转移：
- 玩家移动到空格：代价 0（从队列前端插入）
- 玩家推动箱子：代价 1（从队列后端插入）

用 0-1 BFS（双端队列）保证第一次到达状态即为最优。状态空间 O(m²n²)。

## Solution

[SourceCode](./solution.js)
