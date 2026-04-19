# [2458] Height of Binary Tree After Subtree Removal Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/description/)

* algorithms
* Hard (54.86%)
* Likes:    1553
* Dislikes: 38
* Testcase Example:  '[1,3,4,2,null,6,5,null,null,null,null,null,7]\n[4]'

```md
You are given the root of a binary tree with n nodes. Each node is assigned a unique value from 1 to n. You are also given an array queries of size m.
You have to perform m independent queries on the tree where in the ith query you do the following:

Remove the subtree rooted at the node with the value queries[i] from the tree. It is guaranteed that queries[i] will not be equal to the value of the root.

Return an array answer of size m where answer[i] is the height of the tree after performing the ith query.
Note:

The queries are independent, so the tree returns to its initial state after each query.
The height of a tree is the number of edges in the longest simple path from the root to some node in the tree.


Example 1:


Input: root = [1,3,4,2,null,6,5,null,null,null,null,null,7], queries = [4]
Output: [2]
Explanation: The diagram above shows the tree after removing the subtree rooted at node with value 4.
The height of the tree is 2 (The path 1 -> 3 -> 2).

Example 2:


Input: root = [5,8,9,2,1,3,7,4,6], queries = [3,2,4,8]
Output: [3,2,3,2]
Explanation: We have the following queries:
- Removing the subtree rooted at node with value 3. The height of the tree becomes 3 (The path 5 -> 8 -> 2 -> 4).
- Removing the subtree rooted at node with value 2. The height of the tree becomes 2 (The path 5 -> 8 -> 1).
- Removing the subtree rooted at node with value 4. The height of the tree becomes 3 (The path 5 -> 8 -> 2 -> 6).
- Removing the subtree rooted at node with value 8. The height of the tree becomes 2 (The path 5 -> 9 -> 3).


Constraints:

The number of nodes in the tree is n.
2 <= n <= 105
1 <= Node.val <= n
All the values in the tree are unique.
m == queries.length
1 <= m <= min(n, 104)
1 <= queries[i] <= n
queries[i] != root.val


```

## 翻译

给定一棵有 n 个节点的二叉树（节点值为 1~n 且唯一），以及查询数组 queries。每次查询移除以 queries[i] 为根的子树，返回移除后树的高度。查询之间互不影响（每次查询后树恢复原状）。树的高度为根到最远叶子节点的边数。

## 解题思路

两遍 DFS 预处理。第一遍计算每个节点的 depth 和子树 height。第二遍自顶向下传递 upHeight：对于节点 v 的左孩子，其 upHeight = max(父的upHeight, depth(父) + 1 + 右兄弟子树height)；右孩子类似。upHeight[v] 即移除 v 子树后树的高度。O(n) 预处理，O(1) 每次查询。

## Solution

[SourceCode](./solution.js)
