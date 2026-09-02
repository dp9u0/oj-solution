# [LCR 143] 子结构判断

## Description


```md
https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/description/
* algorithms
* Medium (46.41%)
* Likes:    848
* Dislikes: -
* Testcase Example:  '[1,2,3,4]\n[3]'
给定两棵二叉树 tree1 和 tree2，判断 tree2 是否以 tree1 的某个节点为根的子树具有 相同的结构和节点值 。
注意，空树 不会是以 tree1 的某个节点为根的子树具有 相同的结构和节点值 。

示例 1：


输入：tree1 = [1,7,5], tree2 = [6,1]
输出：false
解释：tree2 与 tree1 的一个子树没有相同的结构和节点值。
示例 2：
输入：tree1 = [3,6,7,1,8], tree2 = [6,1]
输出：true
解释：tree2 与 tree1 的一个子树拥有相同的结构和节点值。即 6 - > 1。

提示：
0 <= 节点个数 <= 10000

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given two binary trees `tree1` (A) and `tree2` (B), determine whether B, rooted at some node of A, has the **same structure and node values**. An empty tree is not considered a substructure.

**Example 1:** A=[1,7,5], B=[6,1] → false
**Example 2:** A=[3,6,7,1,8], B=[6,1] → true

**Constraints:** node count ≤ 10^4.

---

## Approach

Helper `match(A, B)`: does B's structure match starting exactly at A? (B being empty → true; A empty while B nonempty → false; values equal and children match recursively).

Main: if B is empty return false. Otherwise true if `match(A,B)`, or try recursing into A's children.

Complexity: `O(|A|·|B|)` worst case.
