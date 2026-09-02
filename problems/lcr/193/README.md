# [LCR 193] 二叉搜索树的最近公共祖先

## Description


```md
https://leetcode.cn/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/description/
* algorithms
* Easy (69.20%)
* Likes:    353
* Dislikes: -
* Testcase Example:  '[6,2,8,0,4,7,9,null,null,3,5]\n2\n8'
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

示例 1：
输入：root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出：6
解释：节点 2 和节点 8 的最近公共祖先是 6。
示例 2：
输入：root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出：2
解释：节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。

说明：
所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉搜索树中。
注意：本题与主站 235 题相同：https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/

```

## Solution

[SourceCode](./solution.js)

---

## English Description

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).”

For example, given the following BST: `root = [6,2,8,0,4,7,9,null,null,3,5]`

**Example 1:**
> Input: `root = [6,2,8,0,4,7,9,null,null,3,5]`, `p = 2`, `q = 8`
> Output: `6`

**Example 2:**
> Input: `root = [6,2,8,0,4,7,9,null,null,3,5]`, `p = 2`, `q = 4`
> Output: `2`

**Notes:**
- All node values are unique.
- `p` and `q` are different and both exist in the given BST.
- This problem is identical to LeetCode main 235: https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/

---

## 思路 Approach

利用二叉搜索树性质:节点值满足 `left < root < right`。

从根节点开始向下走,对当前节点 `cur`:
- 若 `p.val < cur.val` 且 `q.val < cur.val`,说明 p、q 都在左子树,`cur = cur.left`;
- 若 `p.val > cur.val` 且 `q.val > cur.val`,说明 p、q 都在右子树,`cur = cur.right`;
- 否则,`p` 与 `q` 一个在左子树、一个在右子树(或当前节点就是 p/q 本身),此时 `cur` 即为它们的分岔点,也就是最近公共祖先,直接返回。

采用**迭代**实现,时间复杂度 O(h)(h 为树高),空间 O(1),优于普通二叉树 LCA 的递归遍历。
