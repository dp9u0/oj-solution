# [LCR 149] 彩灯装饰记录 I

## Description


```md
https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/description/
* algorithms
* Medium (62.97%)
* Likes:    319
* Dislikes: -
* Testcase Example:  '[8,17,21,18,null,null,6]'
一棵圣诞树记作根节点为 root 的二叉树，节点值为该位置装饰彩灯的颜色编号。请按照从 左 到 右 的顺序返回每一层彩灯编号。

示例 1：
输入：root = [8,17,21,18,null,null,6]
输出：[8,17,21,18,6]

提示：
节点总数 <= 1000

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A Christmas tree is a binary tree; node value = color id of the decorative light. Return, in left-to-right order, the lights of each level (level-order traversal as a single flattened list).

**Example:** `root = [8,17,21,18,null,null,6]` → `[8,17,21,18,6]`

**Constraints:** node count ≤ 1000.

---

## Approach

**BFS level-order**: queue; pop nodes and push their values in order; enqueue left then right children.

Complexity: `O(n)`.
