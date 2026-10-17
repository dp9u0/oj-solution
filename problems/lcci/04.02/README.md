# [面试题 04.02] 最小高度树

## Description


```md
https://leetcode.cn/problems/minimum-height-tree-lcci/description/
* lcci
* Easy (79.43%)
* Likes:    165
* Dislikes: -
* Testcase Example:  '[-10,-3,0,5,9]'
给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。
示例：
给定有序数组: [-10,-3,0,5,9],
一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
0
/ \
-3   9
/   /
-10  5
Hint 1: 最小的二叉树在每个节点左侧的节点数与右侧相同。现在我们把注意力放到根节点上，你要如何保证位于根的左侧和右侧的节点数量大致相同呢？
Hint 2: 你可以通过找到“理想”的下一个要添加的元素和多次调用insertValue来实现。这样效率会有点儿低，因为你必须反复遍历树。尝试用递归代替。你能把这个问题分解为子问题吗？
Hint 3: 想象一下，我们有一个createMinimalTree方法可以返回给定数组的最小树（但由于一些奇怪的原因不在树的根上操作）。你能用这个操作树的根节点吗？你能写出函数的基线条件吗？非常好！那基本上是整个函数了。

```

## Description (English)

Given a sorted integer array with distinct elements in ascending order, write an algorithm to create a binary search tree of minimal height.

Example:
Given sorted array: [-10,-3,0,5,9]
One possible answer: [0,-3,9,-10,null,5]

## 思路

取区间中点为根递归建树 O(n)：左半区递归成左子树、右半区成右子树，两侧规模差 ≤ 1 保证高度最小（⌈log₂(n+1)⌉）且天然满足 BST 性质。任一合法最小树均被判题接受。

## Solution

[SourceCode](./solution.js)
