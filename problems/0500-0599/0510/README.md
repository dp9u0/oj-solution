# [510] 二叉搜索树中的中序后继 II

## Description


```md
https://leetcode.cn/problems/inorder-successor-in-bst-ii/description/
* algorithms
* Medium (61.59%)
* Likes:    101
* Dislikes: -
* Testcase Example:  '[2,1,3]\n1'
给定一棵二叉搜索树和其中的一个节点 node ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 null 。
一个节点 node 的中序后继是键值比 node.val 大所有的节点中键值最小的那个。
你可以直接访问结点，但无法直接访问树。每个节点都会有其父节点的引用。节点 Node 定义如下：
class Node {
public int val;
public Node left;
public Node right;
public Node parent;
}

示例 1：
输入：tree = [2,1,3], node = 1
输出：2
解析：1 的中序后继结点是 2 。注意节点和返回值都是 Node 类型的。
示例 2：
输入：tree = [5,3,6,2,4,null,null,1], node = 6
输出：null
解析：该结点没有中序后继，因此返回 null 。

提示：
树中节点的数目在范围 [1, 104] 内。
-105 <= Node.val <= 105
树中各结点的值均保证唯一。

进阶：你能否在不访问任何结点的值的情况下解决问题?

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a node in a BST (each node has `parent`; the tree root is NOT given), find its in-order successor, or null. Follow-up: solve without reading any node values.

- Example 1: tree [2,1,3], node 1 → 2
- Example 2: tree [5,3,6,2,4,null,null,1], node 6 → null

Constraints: 1–10^4 nodes; unique values.

## Approach

只看结构不看值(满足进阶):

- **有右子树**:后继 = 右子树最左节点(一路 left)。
- **无右子树**:沿 parent 上爬,只要当前节点是父节点的**右**孩子就继续;第一个"我是左孩子"的父节点即后继。爬到顶仍是右孩子 → null。

时间 O(h),空间 O(1)。
