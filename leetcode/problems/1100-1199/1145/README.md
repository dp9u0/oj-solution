# [1145] Binary Tree Coloring Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/binary-tree-coloring-game/description/)

* algorithms
* Medium (52.86%)
* Likes:    1404
* Dislikes: 225
* Testcase Example:  '[1,2,3,4,5,6,7,8,9,10,11]\n11\n3'

```md
Two players play a turn based game on a binary tree. We are given the root of this binary tree, and the number of nodes n in the tree. n is odd, and each node has a distinct value from 1 to n.
Initially, the first player names a value x with 1 <= x <= n, and the second player names a value y with 1 <= y <= n and y != x. The first player colors the node with value x red, and the second player colors the node with value y blue.
Then, the players take turns starting with the first player. In each turn, that player chooses a node of their color (red if player 1, blue if player 2) and colors an uncolored neighbor of the chosen node (either the left child, right child, or parent of the chosen node.)
If (and only if) a player cannot choose such a node in this way, they must pass their turn. If both players pass their turn, the game ends, and the winner is the player that colored more nodes.
You are the second player. If it is possible to choose such a y to ensure you win the game, return true. If it is not possible, return false.

Example 1:


Input: root = [1,2,3,4,5,6,7,8,9,10,11], n = 11, x = 3
Output: true
Explanation: The second player can choose the node with value 2.

Example 2:

Input: root = [1,2,3], n = 3, x = 1
Output: false


Constraints:

The number of nodes in the tree is n.
1 <= x <= n <= 100
n is odd.
1 <= Node.val <= n
All the values of the tree are unique.


```

## 中文翻译

二叉树上两人博弈染色。玩家1先选节点 x 染红，玩家2选 y 染蓝。然后轮流从己方已染色节点扩展到未染色的相邻节点。最终染色多的赢。问玩家2是否能选择 y 保证获胜。

## 解题思路

**子树大小分析**：玩家2的最优策略是占据 x 的某个相邻节点，将树分成三部分（左子树、右子树、父侧）。玩家2应选择最大那部分的入口节点，如果能拿到超过 n/2 的节点就能赢。

时间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
