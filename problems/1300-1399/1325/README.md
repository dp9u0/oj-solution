# [1325] Delete Leaves With a Given Value

## Description

[LeetCode Problem Description](https://leetcode.com/problems/delete-leaves-with-a-given-value/description/)

* algorithms
* Medium (77.25%)
* Likes:    2905
* Dislikes: 59
* Testcase Example:  '[1,2,3,2,null,2,4]\n2'

```md
Given a binary tree root and an integer target, delete all the leaf nodes with value target.
Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you cannot).

Example 1:


Input: root = [1,2,3,2,null,2,4], target = 2
Output: [1,null,3,null,4]
Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left).
After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).

Example 2:


Input: root = [1,3,3,3,2], target = 3
Output: [1,3,null,null,2]

Example 3:


Input: root = [1,2,null,2,null,2], target = 2
Output: [1]
Explanation: Leaf nodes in green with value (target = 2) are removed at each step.


Constraints:

The number of nodes in the tree is in the range [1, 3000].
1 <= Node.val, target <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定二叉树根节点 root 和整数 target，删除所有值为 target 的叶子节点。删除后如果父节点变为叶子节点且值也为 target，则继续删除，直到无法再删除。

## 解题思路

**递归后序遍历**

自底向上处理：先递归处理左右子树，返回处理后的子树根节点。如果当前节点变为叶子节点且值为 target，则返回 null（删除该节点）。

时间复杂度 O(n)，空间复杂度 O(h)（递归栈）。
