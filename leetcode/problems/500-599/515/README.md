# [515] Find Largest Value in Each Tree Row

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/)

* algorithms
* Medium (66.30%)
* Likes:    4142
* Dislikes: 130
* Testcase Example:  '[1,3,2,5,3,null,9]'

```md
Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

Example 1:


Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]

Example 2:

Input: root = [1,2,3]
Output: [1,3]


Constraints:

The number of nodes in the tree will be in the range [0, 104].
-231 <= Node.val <= 231 - 1


```

## 题目翻译

给定二叉树的根节点，返回每一层中最大值组成的数组。

**示例 1：** root = [1,3,2,5,3,null,9] → [1,3,9]
**示例 2：** root = [1,2,3] → [1,3]

**约束：**
- 节点数在 [0, 10^4] 范围内
- -2^31 <= Node.val <= 2^31 - 1

## 解题思路 (Approach)

BFS 层序遍历。每层遍历时记录该层最大值，加入结果数组。

时间复杂度：O(n)，空间复杂度：O(n)。

## Solution

[SourceCode](./solution.js)
