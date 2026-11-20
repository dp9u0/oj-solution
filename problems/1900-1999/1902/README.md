# [1902] 给定二叉搜索树的插入顺序求深度

## Description


```md
https://leetcode.cn/problems/depth-of-bst-given-insertion-order/description/
* algorithms
* Medium (45.79%)
* Likes:    17
* Dislikes: -
* Testcase Example:  '[2,1,4,3]'
给定一个从 0 开始索引的整数类型数组 order ，其长度为 n，是从 1 到 n 的所有整数的一个排列，表示插入到一棵二叉搜索树的顺序。
二叉搜索树的定义如下：
一个节点的左子树只包含键值小于该节点键值的节点。
一个节点的右子树只包含键值大于该节点键值的节点。
左子树和右子树须均为二叉搜索树。
该二叉搜索树的构造方式如下：
order[0] 将成为该二叉搜索树的根。
所有后续的元素均在维持二叉搜索树性质的前提下作为任何已存在节点的子节点插入。
返回该二叉搜索树的深度。
一棵二叉树的深度是从根节点到最远叶节点的最长路径所经节点的个数。

示例 1:
输入: order = [2,1,4,3]
输出: 3
解释: 该二叉搜索树的深度为 3，路径为 2->4->3。
示例 2:
输入: order = [2,1,3,4]
输出: 3
解释: 该二叉搜索树的深度为 3，路径为 2->3->4。
示例 3:
输入: order = [1,2,3,4]
输出: 4
解释: 该二叉搜索树的深度为 4，路径为 1->2->3->4。

提示：
n == order.length
1 <= n <= 105
order 是从 1 到 n 的整数的一个排列。
Hint 1: There are at most 2 possible places where a new node can be inserted?
Hint 2: How can we keep track of the depth of each node?

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given a 0-indexed integer array `order` of length `n` — a permutation of `1..n` — describing the order in which keys are inserted into a binary search tree (first element becomes the root, later elements are inserted as leaves maintaining the BST property), return the depth of the resulting BST. Depth = number of nodes on the longest root-to-leaf path.

Example 1:
Input: order = [2,1,4,3]
Output: 3

Example 2:
Input: order = [2,1,3,4]
Output: 3

Example 3:
Input: order = [1,2,3,4]
Output: 4

Constraints: n == order.length, 1 <= n <= 10^5, order is a permutation of 1..n.

## Approach

Simulating insertions node by node is O(n^2) on degenerate orders. Key fact: when inserting value `v`, its BST parent is one of its two neighbors among already-inserted keys — the predecessor `pred` (largest inserted key < v) or successor `succ` (smallest inserted key > v) — and that parent's depth equals `max(depth[pred], depth[succ])` (the other neighbor is an ancestor of the parent). Hence `depth[v] = 1 + max(depth[pred], depth[succ])`.

Since keys are a permutation of `1..n`, find pred/succ with two Fenwick trees for prefix maximum over inserted markers (one on the value axis, one on the reversed axis for successors). Track the answer as the max depth seen.

Time O(n log n), space O(n).
