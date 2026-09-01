# [675] Cut Off Trees for Golf Event

## Description

[LeetCode Problem Description](https://leetcode.com/problems/cut-off-trees-for-golf-event/description/)

* algorithms
* Hard (36.84%)
* Likes:    1306
* Dislikes: 691
* Testcase Example:  '[[1,2,3],[0,0,4],[7,6,5]]'

```md
You are asked to cut off all the trees in a forest for a golf event. The forest is represented as an m x n matrix. In this matrix:
0 means the cell cannot be walked through.
1 represents an empty cell that can be walked through.
A number greater than 1 represents a tree in a cell that can be walked through, and this number is the tree's height.
In one step, you can walk in any of the four directions: north, east, south, and west. If you are standing in a cell with a tree, you can choose whether to cut it off.
You must cut off the trees in order from shortest to tallest. When you cut off a tree, the value at its cell becomes 1 (an empty cell).
Starting from the point (0, 0), return the minimum steps you need to walk to cut off all the trees. If you cannot cut off all the trees, return -1.
Note: The input is generated such that no two trees have the same height, and there is at least one tree needs to be cut off.

Example 1:
Input: forest = [[1,2,3],[0,0,4],[7,6,5]]
Output: 6
Explanation: Following the path above allows you to cut off the trees from shortest to tallest in 6 steps.
Example 2:
Input: forest = [[1,2,3],[0,0,0],[7,6,5]]
Output: -1
Explanation: The trees in the bottom row cannot be accessed as the middle row is blocked.
Example 3:
Input: forest = [[2,3,4],[0,0,5],[8,7,6]]
Output: 6
Explanation: You can follow the same path as Example 1 to cut off all the trees.
Note that you can cut off the first tree at (0, 0) before making any steps.

Constraints:
m == forest.length
n == forest[i].length
1 <= m, n <= 50
0 <= forest[i][j] <= 109
Heights of all trees are distinct.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

你需要为高尔夫比赛砍掉森林中的所有树。森林用一个 m x n 矩阵表示，其中：

- `0` 表示该格子无法通行。
- `1` 表示可以通行的空格子。
- 大于 `1` 的数字表示该格子上有一棵可通行的树，数字即树的高度。

每一步你可以向四个方向（北、东、南、西）移动一格。如果你站在有树的格子上，可以选择是否砍掉它。

你必须按照从矮到高的顺序砍树。砍掉一棵树后，该格子的值变为 `1`（空格子）。

从点 `(0, 0)` 出发，返回砍掉所有树所需的最少步数。如果无法砍掉所有树，返回 `-1`。

注意：输入保证没有两棵树高度相同，且至少有一棵树需要被砍掉。

示例 1：
输入：`forest = [[1,2,3],[0,0,4],[7,6,5]]`
输出：`6`
解释：按照上述路径可以以 6 步按从矮到高的顺序砍掉所有树。

示例 2：
输入：`forest = [[1,2,3],[0,0,0],[7,6,5]]`
输出：`-1`
解释：中间行被阻挡，底行的树无法到达。

示例 3：
输入：`forest = [[2,3,4],[0,0,5],[8,7,6]]`
输出：`6`
解释：可以走与示例 1 相同的路径。注意可以在不走任何步的情况下先砍掉 (0,0) 处的第一棵树。

约束：
- `m == forest.length`
- `n == forest[i].length`
- `1 <= m, n <= 50`
- `0 <= forest[i][j] <= 10^9`
- 所有树的高度互不相同。

## 解题思路

**关键观察**：砍树顺序是固定的（必须从矮到高），所以总路径 = 依次从起点 `(0,0)` 到最矮的树、再从该树到次矮的树……每段最短路径之和。每段之间的路径互相独立，各自取最短即全局最优（贪心正确，因为顺序不可变）。

**算法（BFS）**：

1. 扫描矩阵，收集所有高度 `> 1` 的格子，按高度升序排序，得到必须依次访问的目标序列。
2. 从 `(0,0)` 出发，依次 BFS 求出到每个目标的 最短距离，累加步数。
3. 若任意一段 BFS 无法到达，返回 `-1`。

**复杂度**：树的数量 `T ≤ m·n ≤ 2500`，每次 BFS `O(m·n)`，总时间 `O((m·n)²)` ≈ 6.25×10⁶，对 50×50 规模完全可接受。空间 `O(m·n)`。
