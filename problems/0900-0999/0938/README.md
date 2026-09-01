# [938] Range Sum of BST

## Description

[LeetCode Problem Description](https://leetcode.com/problems/range-sum-of-bst/description/)

* algorithms
* Medium (80.50%)
* Testcase Example:  '[10,5,15,3,7,null,18]\n7\n15'

```md
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
The binary search tree is guaranteed to have unique values.

Example 1:
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23

Note:
The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.

```

## Solution

dfs,需要注意的是这个BST,因此,如果`node.val < L`(node have unique values), 只需要`dfs` `node.right`了,同理 `node.left` 也是类似的

[SourceCode](./solution.js)