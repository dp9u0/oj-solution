# [331] Verify Preorder Serialization of a Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/description/)

* algorithms
* Medium (45.71%)
* Likes:    2382
* Dislikes: 126
* Testcase Example:  '"9,3,4,#,#,1,#,#,2,#,6,#,#"'

```md
One way to serialize a binary tree is to use preorder traversal. When we encounter a non-null node, we record the node&#39;s value. If it is a null node, we record using a sentinel value such as &#39;#&#39;.

For example, the above binary tree can be serialized to the string '9,3,4,#,#,1,#,#,2,#,6,#,#', where &#39;#&#39; represents a null node.
Given a string of comma-separated values preorder, return true if it is a correct preorder traversal serialization of a binary tree.
It is guaranteed that each comma-separated value in the string must be either an integer or a character &#39;#&#39; representing null pointer.
You may assume that the input format is always valid.

For example, it could never contain two consecutive commas, such as '1,,3'.

Note:You are not allowed to reconstruct the tree.

Example 1:
Input: preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true
Example 2:
Input: preorder = "1,#"
Output: false
Example 3:
Input: preorder = "9,#,#,1"
Output: false


Constraints:

1 <= preorder.length <= 104
preorder consist of integers in the range [0, 100] and &#39;#&#39; separated by commas &#39;,&#39;.


```

## 题目翻译

序列化二叉树的一种方法是使用前序遍历。当我们遇到一个非空节点时，我们记录该节点的值。如果遇到空节点，我们使用一个标记值如'#'来记录。

例如，一个二叉树可以被序列化为字符串'9,3,4,#,#,1,#,#,2,#,6,#,#'，其中'#'表示空节点。
给定一个由逗号分隔的值组成的前序遍历字符串preorder，判断它是否是一个二叉树的正确前序遍历序列化。
保证字符串中的每个逗号分隔的值要么是整数，要么是表示空指针的字符'#'。
你可以假设输入格式始终有效。

例如，输入字符串永远不会包含两个连续的逗号，如'1,,3'。

注意：你不允许重建二叉树。

## 解题思路

这道题可以通过槽位（slots）的概念来解决：

1. 初始时有一个槽位，用于放置根节点
2. 当遇到一个数字（非空节点）时：
   - 消耗一个槽位
   - 提供两个新的槽位（给左右子节点）
3. 当遇到'#'（空节点）时：
   - 只消耗一个槽位
   - 不产生新的槽位
4. 遍历过程中：
   - 槽位数不能小于0
   - 遍历结束时槽位数必须为0

使用这种方法，我们可以在O(n)的时间复杂度内解决问题，且只需要O(1)的额外空间。

## Solution

[SourceCode](./solution.js)
