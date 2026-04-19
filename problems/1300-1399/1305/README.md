# [1305] All Elements in Two Binary Search Trees

## Description

[LeetCode Problem Description](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/description/)

* algorithms
* Medium (80.24%)
* Likes:    3192
* Dislikes: 99
* Testcase Example:  '[2,1,4]\n[1,0,3]'

```md
Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

Example 1:


Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]

Example 2:


Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]


Constraints:

The number of nodes in each tree is in the range [0, 5000].
-105 <= Node.val <= 105


```

## 中文翻译

给定两棵二叉搜索树 root1 和 root2，返回包含两棵树所有整数并按升序排列的列表。

## 解题思路

中序遍历两棵 BST 得到两个有序数组，然后双指针合并。

## Solution

[SourceCode](./solution.js)
