# [2005] 斐波那契树的移除子树游戏

## Description


```md
https://leetcode.cn/problems/subtree-removal-game-with-fibonacci-tree/description/
* algorithms
* Hard (45.75%)
* Likes:    7
* Dislikes: -
* Testcase Example:  '3'
斐波那契树是一种按这种规则函数 order(n) 创建的二叉树：
order(0) 是空树。
order(1) 是一棵只有一个节点的二叉树。
order(n) 是一棵根节点的左子树为 order(n - 2) 、右子树为 order(n - 1) 的二叉树。
Alice 和 Bob 在玩一种关于斐波那契树的游戏，由 Alice 先手。在每个回合中，每个玩家选择一个节点，然后移除该节点及其子树。只能删除根节点 root 的玩家输掉这场游戏。
给定一个整数 n，假定两名玩家都按最优策略进行游戏，若 Alice 赢得这场游戏，返回 true 。若 Bob 赢得这场游戏，返回 false 。
一棵二叉树的子树 tree 是由 tree 中某个节点及其所有后代节点组成的树。树 tree 也可当作自身的子树。

示例 1:
输入: n = 3
输出: true
解释:
Alice 移除右子树中的节点 1。
Bob 要么移除左子树中的 1，要么移除右子树中的 2。
Alice 可以移除 Bob 未移除的任意节点。
Bob 只能删除根节点 3，所以 Bob 输了。
返回 true，因为 Alice 赢了。
示例 2:
输入: n = 1
输出: false
解释:
Alice 只能移除根节点 1, 所以 Alice 输了。
返回 false，因为 Alice 输了。
示例 3:
输入: n = 2
输出: true
解释:
Alice 删除节点 1.
Bob 只能删除根节点 2，所以 Bob 输了。
返回 true，因为 Alice 赢了。

提示：
1 <= n <= 100
Hint 1: How can game theory help us solve this problem?
Hint 2: Think about the Sprague–Grundy theorem and the Colon Principle
Hint 3: The Grundy value of a node is the nim sum of the Grundy values of its children.

```

## Solution

[SourceCode](./solution.js)

## English Translation

A Fibonacci tree is created by the rule `order(n)`: `order(0)` is empty; `order(1)` is a single node; `order(n)` has left subtree `order(n-2)` and right subtree `order(n-1)`.

Alice and Bob play a game on this tree, Alice first. Each turn a player picks a node and removes it together with its whole subtree. The player who can only remove the root loses. With optimal play, return `true` if Alice wins.

Examples: n=1 -> false, n=2 -> true, n=3 -> true.

Constraints: 1 <= n <= 100.

## Approach

Sprague-Grundy analysis. The global root is unremovable, so the game is the disjoint sum of the two hanging subtrees `{order(n-2), order(n-1)}` under the "remove any node with its descendants, normal play" rule. The position is losing exactly when the two components have equal Grundy values `h(order(n-2)) == h(order(n-1))`.

Exact Grundy values of order trees explode combinatorially (order(7) already has 33 nodes and 500k+ reachable prunings), so the equality pattern is established by exhaustive brute force over small n: computing h for m <= 7 gives h = 1,2,4,7,4,4,1 with the first equal consecutive pair at (5,6) — i.e. losses at n = 1 and n = 7. The verified judge-accepted pattern: **Bob wins iff n ≡ 1 (mod 6)** (losses at n = 1, 7, 13, ...).

Time O(1).
