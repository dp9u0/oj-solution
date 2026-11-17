# [156] 上下翻转二叉树

## Description


```md
https://leetcode.cn/problems/binary-tree-upside-down/description/
* algorithms
* Medium (73.75%)
* Likes:    151
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5]'
给你一个二叉树的根节点 root ，请你将此二叉树上下翻转，并返回新的根节点。
你可以按下面的步骤翻转一棵二叉树：
原来的左子节点变成新的根节点
原来的根节点变成新的右子节点
原来的右子节点变成新的左子节点
上面的步骤逐层进行。题目数据保证每个右节点都有一个同级节点（即共享同一父节点的左节点）且不存在子节点。

示例 1：
输入：root = [1,2,3,4,5]
输出：[4,5,2,null,null,3,1]
示例 2：
输入：root = []
输出：[]
示例 3：
输入：root = [1]
输出：[1]

提示：
树中节点数目在范围 [0, 10] 内
1 <= Node.val <= 10
树中的每个右节点都有一个同级节点（即共享同一父节点的左节点）
树中的每个右节点都没有子节点

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given the `root` of a binary tree, turn it upside down: the original left child becomes the new root of the subtree, the original root becomes its right child, and the original right child becomes its left child. This is applied level by level. Guaranteed: every right node has a sibling (left) and has no children.

**Example:**
root = [1,2,3,4,5] → [4,5,2,null,null,3,1]

**Constraints:**
- 0 <= number of nodes <= 10

## Approach

迭代沿左脊柱下行,携带上一层的根与右子:每层将 `cur.left = prevRight`、`cur.right = prev`,随后 prev=cur、prevRight=right、cur=left。循环结束时 prev 即新根。

时间 O(n),空间 O(1)。
