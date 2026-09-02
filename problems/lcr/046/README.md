# [LCR 046] 二叉树的右视图

## Description


```md
https://leetcode.cn/problems/WNC0Lk/description/
* algorithms
* Medium (70.28%)
* Likes:    58
* Dislikes: -
* Testcase Example:  '[1,2,3,null,5,null,4]'
给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例 1：
输入: [1,2,3,null,5,null,4]
输出: [1,3,4]
示例 2：
输入: [1,null,3]
输出: [1,3]
示例 3：
输入: []
输出: []

提示：
二叉树的节点个数的范围是 [0,100]
-100 <= Node.val <= 100

注意：本题与主站 199 题相同：https://leetcode.cn/problems/binary-tree-right-side-view/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given the root of a binary tree, imagine standing on its right side; return the node values visible from top to bottom (the rightmost node of each level).

**Example 1:** `[1,2,3,null,5,null,4]` → `[1,3,4]`
**Example 3:** `[]` → `[]`

**Constraints:** ≤ 100 nodes. Note: same as LeetCode 199.

---

## Approach

**BFS level-order**: process one level at a time; the last node in each level (rightmost) is added to the result.

Complexity: `O(n)`.
