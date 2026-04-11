# [1110] Delete Nodes And Return Forest

## Description

[LeetCode Problem Description](https://leetcode.com/problems/delete-nodes-and-return-forest/description/)

* algorithms
* Medium (72.48%)
* Likes:    4805
* Dislikes: 145
* Testcase Example:  '[1,2,3,4,5,6,7]\n[3,5]'

```md
Given the root of a binary tree, each node in the tree has a distinct value.
After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).
Return the roots of the trees in the remaining forest. You may return the result in any order.

Example 1:


Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]

Example 2:

Input: root = [1,2,4,null,3], to_delete = [3]
Output: [[1,2,4]]


Constraints:

The number of nodes in the given tree is at most 1000.
Each node has a distinct value between 1 and 1000.
to_delete.length <= 1000
to_delete contains distinct values between 1 and 1000.


```

## 翻译

给定二叉树根节点 `root`，树中每个节点值唯一。删除所有值在 `to_delete` 中的节点后，剩下的节点形成森林。返回森林中所有树的根节点，顺序不限。

## Approach

**DFS 后序遍历。** 用 Set 存 `to_delete` 方便快速查找。自底向上后序遍历：
1. 递归处理左右子树
2. 如果当前节点需要删除，其左右孩子（若非空）成为新树的根，加入结果集
3. 如果当前节点不删除且是根节点（parent 被删除），也加入结果集

用返回值通知父节点当前子树是否被删除（返回 null 表示已删除）。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
