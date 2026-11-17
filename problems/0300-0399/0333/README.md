# [333] 最大二叉搜索子树

## Description


```md
https://leetcode.cn/problems/largest-bst-subtree/description/
* algorithms
* Medium (50.60%)
* Likes:    207
* Dislikes: -
* Testcase Example:  '[10,5,15,1,8,null,7]'
给定一个二叉树，找到其中最大的二叉搜索树（BST）子树，并返回该子树的大小。其中，最大指的是子树节点数最多的。
二叉搜索树（BST）中的所有节点都具备以下属性：

左子树的值小于其父（根）节点的值。


右子树的值大于其父（根）节点的值。

注意：子树必须包含其所有后代。

示例 1：
输入：root = [10,5,15,1,8,null,7]
输出：3
解释：本例中最大的 BST 子树是高亮显示的子树。返回值是子树的大小，即 3 。
示例 2：
输入：root = [4,2,7,2,3,5,null,2,null,null,null,null,null,1]
输出：2

提示：
树上节点数目的范围是 [0, 104]
-104 <= Node.val <= 104

进阶:  你能想出 O(n) 时间复杂度的解法吗？
Hint 1: You can recursively use algorithm similar to 98. Validate Binary Search Tree at each node of the tree, which will result in O(nlogn) time complexity.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given a binary tree, find the size of the largest **subtree** that is a valid BST.

**Example:**
[10,5,15,1,8,null,7] → 3 (subtree rooted at 5)

**Constraints:**
- 0 <= nodes <= 10^4

## Approach

后序汇总:每个节点返回 {isBST, size, min, max}。节点是 BST 当且仅当左右子树都是 BST 且 val 严格处于左右 (max, min) 之间;是则合并尺寸并更新答案,否则向上报 isBST=false。

时间 O(n),空间 O(h)。
