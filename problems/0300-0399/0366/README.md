# [366] 寻找二叉树的叶子节点

## Description


```md
https://leetcode.cn/problems/find-leaves-of-binary-tree/description/
* algorithms
* Medium (81.16%)
* Likes:    279
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5]'
给你一棵二叉树的 root 节点，请按照以下方式收集树的节点：
收集所有的叶子节点。
移除所有的叶子节点。
重复以上步骤，直到树为空。

示例 1：
输入：root = [1,2,3,4,5]
输出：[[4,5,3],[2],[1]]
解释：
[[3,5,4],[2],[1]] 和 [[3,4,5],[2],[1]] 也被视作正确答案，因为每一层返回元素的顺序不影响结果。
示例 2：
输入：root = [1]
输出：[[1]]

提示：
树中节点的数量在[1, 100]范围内。
-100 <= Node.val <= 100

```

## Solution

[SourceCode](./solution.js)

## Translation

Given the `root` of a binary tree, collect its nodes as follows: collect all leaf nodes, remove them, repeat until the tree is empty. Return the collected values grouped by round (order within a round doesn't matter).

- Example 1: root = [1,2,3,4,5] → `[[4,5,3],[2],[1]]`
- Example 2: root = [1] → `[[1]]`

Constraints: number of nodes in [1, 100]; `-100 <= Node.val <= 100`.

## Approach

"第几轮被移除"恰好等于节点**高度**(叶子高度 0,父节点 = 1 + max(子高度))。一次后序 DFS:

- 空节点返回 -1,使叶子高度为 0。
- 节点高度 h 时,`res[h]` 若不存在则新建,把 `node.val` 放入 `res[h]`。

每节点访问一次,O(n) 时间与空间。
