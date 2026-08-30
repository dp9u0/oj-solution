# [913] Cat and Mouse

## Description

[LeetCode Problem Description](https://leetcode.com/problems/cat-and-mouse/description/)

* algorithms
* Hard (36.04%)
* Likes:    1031
* Dislikes: 182
* Testcase Example:  '[[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]'

```md
A game on an undirected graph is played by two players, Mouse and Cat, who alternate turns.
The graph is given as follows: graph[a] is a list of all nodes b such that ab is an edge of the graph.
The mouse starts at node 1 and goes first, the cat starts at node 2 and goes second, and there is a hole at node 0.
During each player&#39;s turn, they must travel along oneedge of the graph that meets where they are. For example, if the Mouse is at node 1, it must travel to any node in graph[1].
Additionally, it is not allowed for the Cat to travel to the Hole (node 0).
Then, the game can end in threeways:

If ever the Cat occupies the same node as the Mouse, the Cat wins.
If ever the Mouse reaches the Hole, the Mouse wins.
If ever a position is repeated (i.e., the players are in the same position as a previous turn, andit is the same player&#39;s turn to move), the game is a draw.

Given a graph, and assuming both players play optimally, return

1if the mouse wins the game,
2if the cat wins the game, or
0if the game is a draw.


Example 1:


Input: graph = [[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]
Output: 0

Example 2:


Input: graph = [[1,3],[0],[3],[0,2]]
Output: 1


Constraints:

3 <= graph.length <= 50
1<= graph[i].length < graph.length
0 <= graph[i][j] < graph.length
graph[i][j] != i
graph[i] is unique.
The mouse and the cat can always move.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

无向图博弈：鼠从 1 先手，猫从 2 后手，0 是洞。轮流沿边移动；猫不能进洞。猫抓到鼠（同点）猫胜；鼠进洞鼠胜；局面（鼠位，猫位，轮到谁）重复为平局。双方最优博弈，返回 1/2/0。

示例：`[[2,5],[3],[0,4,5],[1,4,5],[2,3],[0,2,3]]` → `0`

## 解题思路

经典**逆推 BFS（retrograde analysis）**：状态 (m, c, t)，终局状态染色（m=0 → 鼠胜；m=c → 猫胜）入队；对每个已定状态找其**前驱**（上一步走动的位置，猫的前驱排除洞）：

- 前驱轮到移动方是受益方且后继是其胜利色 → 前驱定为该色；
- 否则前驱的可用度 −1，减到 0（所有走法都输）→ 定为对方胜色。

最终 color[1][2][0]。O(n²·deg)。