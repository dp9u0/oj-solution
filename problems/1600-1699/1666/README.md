# [1666] 改变二叉树的根节点

## Description


```md
https://leetcode.cn/problems/change-the-root-of-a-binary-tree/description/
* algorithms
* Medium (65.14%)
* Likes:    12
* Dislikes: -
* Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n7'
给定一棵二叉树的根节点 root 和一个叶节点 leaf ，更改二叉树，使得 leaf 为新的根节点。
你可以按照下列步骤修改从 leaf 到 root 的路径中除 root 外的每个节点 cur ：
如果 cur 有左子节点，则该子节点变为 cur 的右子节点。注意我们保证 cur 至多有一个子节点。
cur 的原父节点变为 cur 的左子节点。
返回修改后新树的根节点。
注意：确保你的答案在操作后正确地设定了 Node.parent （父节点）指针，否则会被判为错误答案。

示例 1:
输入: root = [3,5,1,6,2,0,8,null,null,7,4], leaf = 7
输出: [7,2,null,5,4,3,6,null,null,null,1,null,null,0,8]
示例 2:
输入: root = [3,5,1,6,2,0,8,null,null,7,4], leaf = 0
输出: [0,1,null,3,8,5,null,null,null,6,2,null,null,7,4]

提示:
树中节点的个数在范围 [2, 100] 内。
-109 <= Node.val <= 109
所有的 Node.val 都是唯一的。
leaf 存在于树中。
Hint 1: Start traversing from the leaf. Always go up till you reach the root.
Hint 2: Change pointers as asked, make the current node's parent its left child, and make the left child the right one if needed.

```

## Solution

[SourceCode](./solution.js)

## Translation

Re-root the binary tree at leaf (path leaf→root flipped); every parent pointer must be updated.

## Approach

**自叶上行翻转**。prev 从 null 开始沿路径向上:cur 的非路径孩子(cur.left ≠ prev 时)移到右;cur.left = 旧父;cur.parent = prev;root 结束时 root.parent = prev 且指向 prev 的那侧孩子置 null(防止环)。O(高度)。
