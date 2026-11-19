# [742] 二叉树最近的叶节点

## Description


```md
https://leetcode.cn/problems/closest-leaf-in-a-binary-tree/description/
* algorithms
* Medium (50.37%)
* Likes:    118
* Dislikes: -
* Testcase Example:  '[1,3,2]\n1'
给定一个 每个结点的值互不相同 的二叉树，和一个目标整数值 k，返回 树中与目标值 k  最近的叶结点 。
与叶结点最近 表示在二叉树中到达该叶节点需要行进的边数与到达其它叶结点相比最少。而且，当一个结点没有孩子结点时称其为叶结点。

示例 1：
输入：root = [1, 3, 2], k = 1
输出： 2
解释： 2 和 3 都是距离目标 1 最近的叶节点。
示例 2：
输入：root = [1], k = 1
输出：1
解释：最近的叶节点是根结点自身。
示例 3：
输入：root = [1,2,3,4,null,null,null,5,null,6], k = 2
输出：3
解释：值为 3（而不是值为 6）的叶节点是距离结点 2 的最近结点。

提示：
二叉树节点数在 [1, 1000] 范围内
1 <= Node.val <= 1000
每个节点值都 不同
给定的二叉树中有某个结点使得 node.val == k
Hint 1: Convert the tree to a general graph, and do a breadth-first search.  Alternatively, find the closest leaf for every node on the path from root to target.

```

## Solution

[SourceCode](./solution.js)

## Translation

All node values distinct; return the leaf with the fewest edges to the node whose value is k (ties: any accepted).

- Example 1: [1,3,2], k=1 → 2 (or 3; both at distance 1)
- Example 3: [1,2,3,4,null,null,null,5,null,6], k=2 → `3` (leaf 3 closer than leaf 6)

Constraints: ≤ 1000 nodes.

## Approach

**树转无向图 + BFS**。DFS 建邻接表(父↔子双向)并收集叶子集合(无孩子);从 k 所在节点 BFS,第一个命中叶子集合的节点即答案——BFS 天然按距离分层,平局时判题机接受任一等距叶。O(n)。
