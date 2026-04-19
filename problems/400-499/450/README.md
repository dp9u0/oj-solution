# [450] Delete Node in a BST

## Description

[LeetCode Problem Description](https://leetcode.com/problems/delete-node-in-a-bst/description/)

* algorithms
* Medium (54.45%)
* Likes:    10446
* Dislikes: 385
* Testcase Example:  '[5,3,6,2,4,null,7]\n3'

```md
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.


Example 1:


Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it&#39;s also accepted.


Example 2:

Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.

Example 3:

Input: root = [], key = 0
Output: []


Constraints:

The number of nodes in the tree is in the range [0, 104].
-105 <= Node.val <= 105
Each node has a unique value.
root is a valid binary search tree.
-105 <= key <= 105


Follow up: Could you solve it with time complexity O(height of tree)?

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 BST 的根节点和一个 key，删除 BST 中值为 key 的节点，并返回（可能更新的）根节点引用。

## Approach

递归删除。分三种情况：
1. key < root.val：在左子树递归删除。
2. key > root.val：在右子树递归删除。
3. key == root.val（找到目标节点）：
   - 无左子树：返回右子树。
   - 无右子树：返回左子树。
   - 左右子树都有：找到右子树的最小值节点（后继），用其值替换 root.val，然后在右子树中递归删除该后继节点。

时间复杂度 O(h)，h 为树高。
