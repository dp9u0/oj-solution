# [4108] 使红色节点连通的最小代价

## Description


```md
https://leetcode.cn/problems/minimum-cost-to-make-red-nodes-connected/description/
* algorithms
* Medium (58.33%)
* Dislikes: -
* Testcase Example:  '3\n"RBR"\n[[0,1],[1,2]]'
给你一个整数 n，表示一棵有 n 个节点的树，节点编号从 0 到 n - 1，并且树以节点 0 为 根节点。这棵树由一个长度为 n - 1 的二维数组 edges 表示，其中 edges[i] = [ui, vi] 表示节点 ui 和 vi 之间存在一条 无向 边。
另给你一个长度为 n 的字符串 colors，其中 colors[i] 表示节点 i 的颜色：'R' 表示红色，'B' 表示蓝色。
你可以 翻转 任意节点的颜色：从 'R' 变为 'B'，或从 'B' 变为 'R'。翻转节点 u 的代价等于以节点 u 为根的子树的大小。
你的目标是通过翻转颜色，使所有 红色 节点在树中形成 一个连通分量 。蓝色节点可以不连通。没有红色节点的配置也视为有效。
返回实现这一目标所需的 最小总代价 。
在有根树中，节点 v 的子树是由所有到根节点的路径经过 v 的节点组成的集合。

示例 1：
输入： n = 3, colors = "RBR", edges = [[0,1],[1,2]]
输出： 1
解释：
有两个红色节点（0 和 2），它们彼此不连通。
可以将节点 2 从 'R'（红色）翻转为 'B'（蓝色）。节点 2 的子树大小为 1，因此代价为 1。
翻转后，只有节点 0 仍为红色，恰好形成一个红色连通分量。
示例 2：
输入： n = 3, colors = "RBR", edges = [[0,1],[0,2]]
输出： 0
解释：​​​​​​​
有两个红色节点（0 和 2），它们已经彼此连通。
所有红色节点已经形成一个连通分量，因此无须翻转。最小总代价为 0。
示例 3：
输入： n = 4, colors = "BRRR", edges = [[0,1],[0,2],[0,3]]
输出： 2
解释：​​​​​​​
有三个红色节点（1、2 和 3），它们彼此不连通。
这三个红色节点都是叶节点，且互不连通。
为了得到一个红色连通分量，保留一个红色叶节点，并将另外两个翻转为蓝色。
每个叶节点的子树大小均为 1，因此翻转其中任意两个的总代价为 2。
示例 4：
输入： n = 3, colors = "BBB", edges = [[0,1],[1,2]]
输出： 0
解释：
​​​​​​​
所有节点均为蓝色，因此没有红色节点。
空的红色节点集合也视为一个连通分量，因此当前状态已经有效，代价为 0。

提示：​​​​​​​
1 <= n <= 105
n == colors.length
colors[i] 为 'R' 或 'B'。
edges.length == n - 1
edges[i] = [ui, vi]
0 <= ui, vi <= n - 1
输入保证 edges 表示一棵有效的树。

```

## Solution

[SourceCode](./solution.js)

## English Translation

You are given an integer n representing a tree with n nodes numbered 0 to n-1, rooted at node 0,
given by edges[i] = [u_i, v_i] (undirected). You are also given a string colors where colors[i]
is 'R' (red) or 'B' (blue). You may flip any node's color; flipping node u costs the size of the
subtree rooted at u. The goal is to make all red nodes form one connected component (blue nodes
may be disconnected; having no red nodes is also valid). Return the minimum total cost.

Example 1: n=3, colors="RBR", edges=[[0,1],[1,2]] -> 1 (flip node 2, subtree size 1).
Example 2: n=3, colors="RBR", edges=[[0,1],[0,2]] -> 0 (reds already connected).
Example 3: n=4, colors="BRRR", edges=[[0,1],[0,2],[0,3]] -> 2 (flip two of the three red leaves).
Example 4: n=3, colors="BBB", edges=[[0,1],[1,2]] -> 0.

Constraints: 1 <= n <= 1e5; edges form a valid tree.

## Approach

Kept (= unflipped) red nodes inside a subtree can only reach the outside through the subtree
root, so per node v the kept reds must either attach to v or form one sealed component. Tree DP,
post-order (iterative BFS order):

Flips go both directions (R->B and B->R), and flipping a blue node to red can be optimal: it
may cheaply connect separated red parts (cost = its subtree size instead of flipping away many
reds below). So with costR(v) = 0 if v initially red else size[v], costB(v) = size[v] if v
initially red else 0:

- dpR[v] (v final red): all final-red nodes in subtree(v) lie in one component containing v.
  Each child either attaches (dpR[c]) or is emptied (dpB[c]): dpR[v] = costR(v) + sum of
  min(dpR[c], dpB[c]).
- dpB[v]: no final-red nodes in subtree(v): dpB[v] = costB(v) + sum dpB[c].
- dpS[v] (v final blue, one sealed final-red component inside): exactly one child w carries
  final reds (min(dpR[w], dpS[w])), all others are emptied: dpS[v] = costB(v) + sum dpB[c] +
  min over c of ( min(dpR[c], dpS[c]) - dpB[c] ); INF if no finite candidate.

A sealed component below a non-root node can only be the global one, so it must be propagated to
the root through dpS. Answer = min(dpR[0], dpS[0], dpB[0]). O(n); costs fit in doubles (<= n^2).
