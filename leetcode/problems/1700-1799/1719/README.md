# [1719] Number Of Ways To Reconstruct A Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/description/)

* algorithms
* Hard (45.75%)
* Likes:    236
* Dislikes: 159
* Testcase Example:  '[[1,2],[2,3]]'

```md
You are given an array pairs, where pairs[i] = [xi, yi], and:

There are no duplicates.
xi < yi

Let ways be the number of rooted trees that satisfy the following conditions:

The tree consists of nodes whose values appeared in pairs.
A pair [xi, yi] exists in pairs if and only if xi is an ancestor of yi or yi is an ancestor of xi.
Note: the tree does not have to be a binary tree.

Two ways are considered to be different if there is at least one node that has different parents in both ways.
Return:

0 if ways == 0
1 if ways == 1
2 if ways > 1

A rooted tree is a tree that has a single root node, and all edges are oriented to be outgoing from the root.
An ancestor of a node is any node on the path from the root to that node (excluding the node itself). The root has no ancestors.

Example 1:


Input: pairs = [[1,2],[2,3]]
Output: 1
Explanation: There is exactly one valid rooted tree, which is shown in the above figure.

Example 2:


Input: pairs = [[1,2],[2,3],[1,3]]
Output: 2
Explanation: There are multiple valid rooted trees. Three of them are shown in the above figures.

Example 3:

Input: pairs = [[1,2],[2,3],[2,4],[1,5]]
Output: 0
Explanation: There are no valid rooted trees.

Constraints:

1 <= pairs.length <= 105
1 <= xi < yi <= 500
The elements in pairs are unique.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定无重复的数对数组 pairs，pairs[i]=[xi,yi] 表示 xi 是 yi 的祖先或 yi 是 xi 的祖先。求满足条件的有根树的构造方式数（返回 0/1/2）。

## 解题思路

利用祖先集合的性质。每个节点的祖先集 = 与它配对的所有节点 ∪ 自身。根节点的祖先集最大（包含所有节点）。
按祖先集大小从大到小处理每个节点，找其父节点（父节点的祖先集包含当前节点的祖先集）。如果同一层有多个可选父节点则方式数>1。需要验证每个 pair 的祖先关系是否成立。
