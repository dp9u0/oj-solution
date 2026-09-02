# [LCR 150] 彩灯装饰记录 II

## Description


```md
https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/description/
* algorithms
* Easy (68.72%)
* Likes:    325
* Dislikes: -
* Testcase Example:  '[8,17,21,18,null,null,6]'
一棵圣诞树记作根节点为 root 的二叉树，节点值为该位置装饰彩灯的颜色编号。请按照从左到右的顺序返回每一层彩灯编号，每一层的结果记录于一行。

示例 1：
输入：root = [8,17,21,18,null,null,6]
输出：[[8],[17,21],[18,6]]
提示：
节点总数 <= 1000
注意：本题与主站 102 题相同：https://leetcode.cn/problems/binary-tree-level-order-traversal/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A Christmas tree is a binary tree with node values as light color ids. Return the lights of each level left-to-right, each level in its own row.

**Example:** `[8,17,21,18,null,null,6]` → `[[8],[17,21],[18,6]]`

**Constraints:** ≤ 1000 nodes. Note: same as LeetCode 102.

---

## Approach

**BFS level-order** producing one array per level: while the queue is nonempty, snapshot its current length (the level size), pop that many into a `level` array, and enqueue their children.

Complexity: `O(n)`.
