# [1161] Maximum Level Sum of a Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/)

* algorithms
* Medium (69.97%)
* Likes:    4133
* Dislikes: 117
* Testcase Example:  '[1,7,0,7,-8,null,null]'

```md
Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

Example 1:


Input: root = [1,7,0,7,-8,null,null]
Output: 2
Explanation:
Level 1 sum = 1.
Level 2 sum = 7 + 0 = 7.
Level 3 sum = 7 + -8 = -1.
So we return the level with the maximum sum which is level 2.

Example 2:

Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
Output: 2


Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105


```

## 题目翻译

给定二叉树的根节点，根的层级为 1，子节点层级为 2，以此类推。返回节点值之和最大的最小层级 x。

**示例 1：** root = [1,7,0,7,-8,null,null] → 2（第1层和=1，第2层和=7，第3层和=-1）
**示例 2：** root = [989,null,10250,98693,-89388,null,null,null,-32127] → 2

**约束：**
- 节点数在 [1, 10^4] 范围内
- -10^5 <= Node.val <= 10^5

## 解题思路 (Approach)

BFS 层序遍历。逐层计算节点值之和，跟踪最大和及其对应的最小层级。

时间复杂度：O(n)，空间复杂度：O(n)。

## Solution

[SourceCode](./solution.js)
