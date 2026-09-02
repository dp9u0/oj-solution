# [LCR 056] 两数之和 IV - 输入二叉搜索树

## Description


```md
https://leetcode.cn/problems/opLdQZ/description/
* algorithms
* Easy (74.20%)
* Likes:    75
* Dislikes: -
* Testcase Example:  '[8,6,10,5,7,9,11]\n12'
给定一个二叉搜索树的 根节点 root 和一个整数 k , 请判断该二叉搜索树中是否存在两个节点它们的值之和等于 k 。假设二叉搜索树中节点的值均唯一。

示例 1：
输入: root = [8,6,10,5,7,9,11], k = 12
输出: true
解释: 节点 5 和节点 7 之和等于 12
示例 2：
输入: root = [8,6,10,5,7,9,11], k = 22
输出: false
解释: 不存在两个节点值之和为 22 的节点

提示：
二叉树的节点个数的范围是  [1, 104].
-104 <= Node.val <= 104
root 为二叉搜索树
-105 <= k <= 105

注意：本题与主站 653 题相同： https://leetcode.cn/problems/two-sum-iv-input-is-a-bst/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given the root of a **binary search tree** and an integer `k`, determine whether there exist two nodes whose values sum to `k`. All node values are distinct.

**Example 1:** `root=[8,6,10,5,7,9,11], k=12` → `true`
**Example 2:** `k=22` → `false`

**Constraints:** nodes `[1,10^4]`, values in `[-10^4,10^4]`, `k in [-10^5,10^5]`.

Note: same as LeetCode 653.

---

## Approach

In-order traversal of a BST yields **sorted** values. Collect them, then use the classic **two-pointer** two-sum on the sorted array.

Complexity: `O(n)` time, `O(n)` space.
