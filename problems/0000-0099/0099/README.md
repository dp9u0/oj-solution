# [99] Recover Binary Search Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/recover-binary-search-tree/description/)

* algorithms
* Hard (38.26%)
* Testcase Example:  '[1,3,null,null,2]'

```md
Two elements of a binary search tree (BST) are swapped by mistake.
Recover the tree without changing its structure.
Example 1:
Input: [1,3,null,null,2]
1
/
3
\
2
Output: [3,1,null,null,2]
3
/
1
\
2
Example 2:
Input: [3,1,4,null,null,2]
3
/ \
1   4
/
2
Output: [2,1,4,null,null,3]
2
/ \
1   4
/
3
Follow up:
A solution using O(n) space is pretty straight forward.
Could you devise a constant space solution?

```

## Solution

* 二叉搜索树中的两个节点被错误地交换
* 只使用常数空间的解决方案

[SourceCode](./solution.js)
