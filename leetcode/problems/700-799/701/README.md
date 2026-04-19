# [701] Insert into a Binary Search Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/insert-into-a-binary-search-tree/description/)

* algorithms
* Medium (73.42%)
* Likes:    6463
* Dislikes: 189
* Testcase Example:  '[4,2,7,1,3]\n5'

```md
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
Noticethat there may existmultiple valid ways for theinsertion, as long as the tree remains a BST after insertion. You can return any of them.

Example 1:


Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree is:


Example 2:

Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]

Example 3:

Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]


Constraints:

The number of nodes inthe tree will be in the range [0,104].
-108 <= Node.val <= 108
All the values Node.val are unique.
-108 <= val <= 108
It&#39;s guaranteed that val does not exist in the original BST.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一个二叉搜索树（BST）的根节点和一个要插入的值，返回插入后的 BST 根节点。保证新值不存在于原始 BST 中。可能有多种合法的插入方式，只要插入后仍然是 BST 即可。

## 解题思路

迭代法：从根节点开始，根据 val 与当前节点值的大小关系，向左或向右子树移动。当遇到空指针时，在该位置创建新节点即可。
