# [1382] Balance a Binary Search Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/balance-a-binary-search-tree/description/)

* algorithms
* Medium (86.29%)
* Likes:    4171
* Dislikes: 105
* Testcase Example:  '[1,null,2,null,3,null,4]'

```md
Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.
A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

Example 1:


Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.

Example 2:


Input: root = [2,1,3]
Output: [2,1,3]


Constraints:

The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 105


```

## 题目翻译

给定二叉搜索树的根节点，返回一个具有相同节点值的平衡二叉搜索树。如果有多个答案，返回任意一个。平衡的定义是每个节点的两个子树深度差不超过 1。

**示例 1：** root = [1,null,2,null,3,null,4,null,null] → [2,1,3,null,null,null,4]
**示例 2：** root = [2,1,3] → [2,1,3]

**约束：**
- 节点数在 [1, 10^4] 范围内
- 1 <= Node.val <= 10^5

## 解题思路 (Approach)

中序遍历得到有序数组，然后用分治法从有序数组构建平衡 BST：取中间元素为根，递归构建左子树和右子树。

时间复杂度：O(n)，空间复杂度：O(n)。

## Solution

[SourceCode](./solution.js)
