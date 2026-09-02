# [LCR 054] 把二叉搜索树转换为累加树

## Description


```md
https://leetcode.cn/problems/w6cpku/description/
* algorithms
* Medium (84.65%)
* Likes:    78
* Dislikes: -
* Testcase Example:  '[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]'
给定一个二叉搜索树，请将它的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。

提醒一下，二叉搜索树满足下列约束条件：
节点的左子树仅包含键 小于 节点键的节点。
节点的右子树仅包含键 大于 节点键的节点。
左右子树也必须是二叉搜索树。

示例 1：
输入：root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
示例 2：
输入：root = [0,null,1]
输出：[1,null,1]
示例 3：
输入：root = [1,0,2]
输出：[3,3,2]
示例 4：
输入：root = [3,2,4,1]
输出：[7,9,4,10]

提示：
树中的节点数介于 0 和 104 之间。
每个节点的值介于 -104 和 104 之间。
树中的所有值 互不相同 。
给定的树为二叉搜索树。

注意：
本题与主站 538 题相同： https://leetcode.cn/problems/convert-bst-to-greater-tree/
本题与主站 1038 题相同：https://leetcode.cn/problems/binary-search-tree-to-greater-sum-tree/

```

## Description (English)

Given the root of a binary search tree (BST), convert it to a greater tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.

Example 1:
Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

Example 2:
Input: root = [0,null,1]
Output: [1,null,1]

Example 3:
Input: root = [1,0,2]
Output: [3,3,2]

Example 4:
Input: root = [3,2,4,1]
Output: [7,9,4,10]

Constraints:
- The number of nodes in the tree is in the range [0, 10^4].
- -10^4 <= Node.val <= 10^4
- All the values in the tree are unique.
- root is guaranteed to be a valid binary search tree.

## Solution Approach

**逆中序遍历（反向中序，右→根→左）**

由于是二叉搜索树，中序遍历（左→根→右）得到升序序列，那么反向中序遍历（右→根→左）得到的便是降序序列。遍历过程中维护一个累计和 `sum`，它始终等于「所有已经遍历过的节点值之和」，即所有大于当前节点值的节点之和。

对每个节点：
1. 先遍历右子树（更大的值），累计 `sum`；
2. `sum += root.val`，然后令 `root.val = sum`；
3. 再遍历左子树。

这样每个节点的新值就是「原 BST 中大于等于它的所有值之和」，恰好满足题意。

- 时间复杂度：O(n)，每个节点只访问一次
- 空间复杂度：O(h)，递归栈深度（h 为树高），最坏 O(n)

## Solution

[SourceCode](./solution.js)
