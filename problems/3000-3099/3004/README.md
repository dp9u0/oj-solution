# [3004] 相同颜色的最大子树

## Description


```md
https://leetcode.cn/problems/maximum-subtree-of-the-same-color/description/
* algorithms
* Medium (24.70%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '[[0,1],[0,2],[0,3]]\n[1,1,2,3]'
给定一个二维整数数组 edges，表示一个有 n 个节点的树，节点编号从 0 到 n - 1，以节点 0 为根，其中 edges[i] = [ui, vi] 表示节点 vi 和 ui 之间存在一条边。
还给定一个 下标从 0 开始，大小为 n 的整数数组 colors，其中 colors[i] 表示节点 i 分配的颜色。
我们希望找到一个节点 v，使得 v 的子树中的每个节点具有 相同 的颜色。
返回 具有 尽可能多 节点 且 符合上述要求的子树大小。

示例 1：
输入：edges = [[0,1],[0,2],[0,3]], colors = [1,1,2,3]
输出：1
解释：每种颜色分别对应为：1 -> 红色，2 -> 绿色，3 -> 蓝色。我们可以看到以节点 0 为根的子树具有不同颜色的子节点。任何其他子树都是相同颜色的，并且大小为 1。因此，我们返回 1。
示例 2：
输入：edges = [[0,1],[0,2],[0,3]], colors = [1,1,1,1]
输出：4
解释：整个树具有相同的颜色，以节点 0 为根的子树具有节点数最多，为 4。因此，我们返回 4。
示例 3：
输入：edges = [[0,1],[0,2],[2,3],[2,4]], colors = [1,2,3,3,3]
输出：3
解释：每种颜色分别对应为：1 -> 红色，2 -> 绿色，3 -> 蓝色。我们可以看到以节点 0 为根的子树有不同颜色的子节点。其他任何子树都是相同颜色的，但以节点 2 为根的子树的大小为 3，这是最大的。因此，我们返回 3。

提示：
n == edges.length + 1
1 <= n <= 5 * 104
edges[i] == [ui, vi]
0 <= ui, vi < n
colors.length == n
1 <= colors[i] <= 105
输入被生成，使得由 edges 表示的图是一棵树。
Hint 1: For each node, define a flag[v] indicating that the subtree of this node contains only one color or not.
Hint 2: In the DFS process, when you call dfs(u) from node v, after that DFS of u has finished, check if flag[u] == false, then flag[v] is also false.
Hint 3: Also if color[v] != color[u], flag[v] becomes false.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Rooted tree (root 0), node colors. Find the largest subtree (rooted at any node) whose nodes all share one color; return its size.

Approach: post-order DFS computing (uniformFlag, size) per node: a node is uniform iff every child is uniform with the same color as the node. Track the max size over uniform nodes. Iterative stack to avoid recursion depth at n = 5e4. O(n).

Verified: edges [[0,1],[0,2],[0,3]], colors [1,1,2,3] -> 1; colors [1,1,1,1] -> 4; [[0,1],[0,2],[2,3],[2,4]] / [1,2,3,3,3] -> 3.
