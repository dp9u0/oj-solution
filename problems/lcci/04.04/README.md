# [面试题 04.04] 检查平衡性

## Description


```md
https://leetcode.cn/problems/check-balance-lcci/description/
* lcci
* Easy (60.46%)
* Likes:    115
* Dislikes: -
* Testcase Example:  '[3,9,20,null,null,15,7]'
实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。
示例 1：
给定二叉树 [3,9,20,null,null,15,7]
3
/ \
9  20
/  \
15   7
返回 true 。
示例 2：
给定二叉树 [1,2,2,3,3,null,null,4,4]
1
/ \
2   2
/ \
3   3
/ \
4   4
返回 false 。
Hint 1: 考虑平衡树的定义。你可以检查单个节点的条件吗？你可以检查每个节点吗？
Hint 2: 如果你开发了一个蛮力解法，请注意它的运行时间。如果你是用于计算每个节点的子树的高度，那么该算法会很低效。
Hint 3: 如果你可以修改二叉树节点类，允许节点存储子树的高度，会如何？
Hint 4: 你不需要修改二叉树类来存储子树的高度。递归函数是否可以计算每个子树的高度，同时检查节点是否平衡？尝试让函数返回多个值。
Hint 5: 其实，你只需要一个checkHeight函数即可，它既可以计算高度，也可以平衡检查。可以使用整数返回值表示两者。

```

## Description (English)

Implement a function to check whether a binary tree is balanced. Balanced here means: for any node, the height difference between its two subtrees is no more than 1.

Example 1: [3,9,20,null,null,15,7] → true
Example 2: [1,2,2,3,3,null,null,4,4] → false

## 思路

一次后序递归 O(n)：`height` 返回子树高度，失衡以 -1 作哨兵向上短路传播——避免"每个节点重算子树高度"的 O(n²) 蛮力。

## Solution

[SourceCode](./solution.js)
