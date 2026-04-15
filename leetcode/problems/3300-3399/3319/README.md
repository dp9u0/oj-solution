# [3319] K-th Largest Perfect Subtree Size in Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/description/)

* algorithms
* Medium (62.20%)
* Likes:    158
* Dislikes: 15
* Testcase Example:  '[5,3,6,5,2,5,7,1,8,null,null,6,8]\n2'

```md
You are given the root of a binary tree and an integer k.
Return an integer denoting the size of the kth largest perfect binary subtree, or -1 if it doesn&#39;t exist.
A perfect binary tree is a tree where all leaves are on the same level, and every parent has two children.

Example 1:

Input: root = [5,3,6,5,2,5,7,1,8,null,null,6,8], k = 2
Output: 3
Explanation:

The roots of the perfect binary subtrees are highlighted in black. Their sizes, in non-increasing order are [3, 3, 1, 1, 1, 1, 1, 1].
The 2nd largest size is 3.

Example 2:

Input: root = [1,2,3,4,5,6,7], k = 1
Output: 7
Explanation:

The sizes of the perfect binary subtrees in non-increasing order are [7, 3, 3, 1, 1, 1, 1]. The size of the largest perfect binary subtree is 7.

Example 3:

Input: root = [1,2,3,null,4], k = 3
Output: -1
Explanation:

The sizes of the perfect binary subtrees in non-increasing order are [1, 1]. There are fewer than 3 perfect binary subtrees.


Constraints:

The number of nodes in the tree is in the range [1, 2000].
1 <= Node.val <= 2000
1 <= k <= 1024


```

## 中文翻译

给定二叉树和 k，找第 k 大的完美二叉子树的大小。完美二叉树要求所有叶子在同一层，每个父节点有两个子节点。

## 解题思路

DFS 递归判断每个子树是否为完美二叉树。返回 (depth, isPerfect)：
- 叶子节点：depth=1, isPerfect=true
- 非空节点：左右子树都是完美且深度相同，则当前也是完美，depth=leftDepth+1
- 收集所有完美子树的大小，排序后取第 k 大。

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
