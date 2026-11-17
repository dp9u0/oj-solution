# [255] 验证二叉搜索树的前序遍历序列

## Description


```md
https://leetcode.cn/problems/verify-preorder-sequence-in-binary-search-tree/description/
* algorithms
* Medium (51.73%)
* Likes:    217
* Dislikes: -
* Testcase Example:  '[5,2,1,3,6]'
给定一个 无重复元素 的整数数组 preorder ， 如果它是以二叉搜索树的先序遍历排列 ，返回 true 。

示例 1：
输入: preorder = [5,2,1,3,6]
输出: true
示例 2：
输入: preorder = [5,2,6,1,3]
输出: false

提示:
1 <= preorder.length <= 104
1 <= preorder[i] <= 104
preorder 中 无重复元素

进阶：您能否使用恒定的空间复杂度来完成此题？

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an array of **unique** integers representing a preorder traversal of a BST, verify whether it could be a valid BST preorder traversal.

**Example:**
[5,2,1,3,6] → true; [5,2,6,1,3] → false

**Constraints:**
- 1 <= preorder.length <= 10^4

## Approach

单调递减栈 + 下界:值入栈前,把栈中所有比它小的节点弹出(说明进入它们的右子树),弹出的最大值成为新的下界;任何值小于下界即 false(它落进了已关闭的左子树)。

时间 O(n),空间 O(n)。
