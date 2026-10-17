# [面试题 04.05] 合法二叉搜索树

## Description


```md
https://leetcode.cn/problems/legal-binary-search-tree-lcci/description/
* lcci
* Medium (36.43%)
* Likes:    114
* Dislikes: -
* Testcase Example:  '[2,1,3]'
实现一个函数，检查一棵二叉树是否为二叉搜索树。
示例 1：
输入：
2
/ \
1   3
输出：true
示例 2：
输入：
5
/ \
1   4
/ \
3   6
输出：false
解释：输入为: [5,1,4,null,null,3,6]。
根节点的值为 5 ，但是其右子节点值为 4 。
Hint 1: 如果使用前序遍历来遍历树，元素的顺序是正确的，这是否表明树实际上是有序的？有重复元素会发生什么？如果允许重复元素，它们必须位于特定的一边（通常是左边）。
Hint 2: 作为一个二叉搜索树，并不是说每个节点都满足left.value <= current.value < right就够了。左边的每个节点必须小于当前节点，该节点还必须小于右边的所有节点。
Hint 3: 如果左边的每个节点必须小于或等于当前节点，那么这就等于左边最大的节点必须小于或等于当前节点。
Hint 4: 相比于根据leftTree.max和rightTree.min来验证当前节点的值，我们可以翻转逻辑吗？验证左子树的节点以确保其小于current.value。
Hint 5: 把checkBST函数当作一个递归函数，保证每个节点在允许范围内(最小, 最大)。首先，这个范围是无限的。当我们遍历左边，最小的是负无穷大，最大的是root.value。你能实现这个递归函数，并且随着遍历而适当调整这些范围吗？

```

## Description (English)

Implement a function to check whether a binary tree is a binary search tree (BST).

Example 1:
Input: 2 / 1 3
Output: true

Example 2:
Input: 5 / 1 4 / 3 6 (i.e. [5,1,4,null,null,3,6])
Output: false
Explanation: the root is 5 but its right child's left child is 4 < 5.

## 思路

值域递归 O(n)：每个节点校验自身严格落在开区间 (lo, hi) 内；左行把上界收紧为当前值、右行把下界收紧为当前值。仅检查"父大于左子"不够——越界的深层节点（示例 2 中 4）必须靠继承下来的上界抓住。

## Solution

[SourceCode](./solution.js)
