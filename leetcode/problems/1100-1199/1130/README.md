# [1130] Minimum Cost Tree From Leaf Values

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/description/)

* algorithms
* Medium (67.84%)
* Likes:    4439
* Dislikes: 283
* Testcase Example:  '[6,2,4]'

```md
Given an array arr of positive integers, consider all binary trees such that:

Each node has either 0 or 2 children;
The values of arr correspond to the values of each leaf in an in-order traversal of the tree.
The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree, respectively.

Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node. It is guaranteed this sum fits into a 32-bit integer.
A node is a leaf if and only if it has zero children.

Example 1:


Input: arr = [6,2,4]
Output: 32
Explanation: There are two possible trees shown.
The first has a non-leaf node sum 36, and the second has non-leaf node sum 32.

Example 2:


Input: arr = [4,11]
Output: 44


Constraints:

2 <= arr.length <= 40
1 <= arr[i] <= 15
It is guaranteed that the answer fits into a 32-bit signed integer (i.e., it is less than 231).


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定正整数数组 arr，对应二叉树叶子的中序遍历。非叶节点的值 = 左子树最大叶值 × 右子树最大叶值。求所有可能二叉树中非叶节点值之和的最小值。

## 解题思路

**单调栈（贪心）**

贪心策略：每次消除当前最小的元素，让它和较小的邻居配对（乘积最小）。

1. 维护单调递减栈
2. 遍历 arr，当当前元素 > 栈顶时，弹出栈顶（最小元素），让它与栈中下一个元素和当前元素中较小的那个相乘
3. 每次弹出都累加乘积到结果中
4. 最后栈中剩余元素依次配对

时间复杂度 O(n)，空间复杂度 O(n)。
