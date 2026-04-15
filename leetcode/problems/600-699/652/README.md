# [652] Find Duplicate Subtrees

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-duplicate-subtrees/description/)

* algorithms
* Medium (60.66%)
* Likes:    6129
* Dislikes: 504
* Testcase Example:  '[1,2,3,4,null,2,4,null,null,4]'

```md
Given the rootof a binary tree, return all duplicate subtrees.
For each kind of duplicate subtrees, you only need to return the root node of any one of them.
Two trees are duplicate if they have the same structure with the same node values.

Example 1:


Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]

Example 2:


Input: root = [2,1,1]
Output: [[1]]

Example 3:


Input: root = [2,2,2,3,null,3,null]
Output: [[2,3],[3]]


Constraints:

The number of the nodes in the tree will be in the range [1, 5000]
-200 <= Node.val <= 200


```

## 题目翻译

给定二叉树根节点，返回所有重复子树。对于每种重复子树，只需返回其中任意一个的根节点。两棵树重复当且仅当结构和节点值完全相同。

## 解题思路

DFS 序列化每棵子树，用哈希表统计序列出现次数。当某个序列第 2 次出现时，将当前节点加入结果。

序列化格式：val(left)(right)，空节点用 # 表示。给每个子树分配唯一 ID 可以避免长字符串，但直接用字符串序列化在本题规模下可行。

时间复杂度 O(n^2)（字符串拼接），空间复杂度 O(n^2)

## Solution

[SourceCode](./solution.js)
