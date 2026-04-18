# [3575] Maximum Good Subtree Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-good-subtree-score/description/)

* algorithms
* Hard (45.37%)
* Likes:    54
* Dislikes: 8
* Testcase Example:  '[2,3]\n[-1,0]'

```md
You are given an undirected tree rooted at node 0 with n nodes numbered from 0 to n - 1. Each node i has an integer value vals[i], and its parent is given by par[i].
A subset of nodes within the subtree of a node is called good if every digit from 0 to 9 appears at most once in the decimal representation of the values of the selected nodes.
The score of a good subset is the sum of the values of its nodes.
Define an array maxScore of length n, where maxScore[u] represents the maximum possible sum of values of a good subset of nodes that belong to the subtree rooted at node u, including u itself and all its descendants.
Return the sum of all values in maxScore.
Since the answer may be large, return it modulo 109 + 7.

Example 1:

Input: vals = [2,3], par = [-1,0]
Output: 8
Explanation:


The subtree rooted at node 0 includes nodes {0, 1}. The subset {2, 3} is good as the digits 2 and 3 appear only once. The score of this subset is 2 + 3 = 5.
The subtree rooted at node 1 includes only node {1}. The subset {3} is good. The score of this subset is 3.
The maxScore array is [5, 3], and the sum of all values in maxScore is 5 + 3 = 8. Thus, the answer is 8.


Example 2:

Input: vals = [1,5,2], par = [-1,0,0]
Output: 15
Explanation:


The subtree rooted at node 0 includes nodes {0, 1, 2}. The subset {1, 5, 2} is good as the digits 1, 5 and 2 appear only once. The score of this subset is 1 + 5 + 2 = 8.
The subtree rooted at node 1 includes only node {1}. The subset {5} is good. The score of this subset is 5.
The subtree rooted at node 2 includes only node {2}. The subset {2} is good. The score of this subset is 2.
The maxScore array is [8, 5, 2], and the sum of all values in maxScore is 8 + 5 + 2 = 15. Thus, the answer is 15.


Example 3:

Input: vals = [34,1,2], par = [-1,0,1]
Output: 42
Explanation:


The subtree rooted at node 0 includes nodes {0, 1, 2}. The subset {34, 1, 2} is good as the digits 3, 4, 1 and 2 appear only once. The score of this subset is 34 + 1 + 2 = 37.
The subtree rooted at node 1 includes node {1, 2}. The subset {1, 2} is good as the digits 1 and 2 appear only once. The score of this subset is 1 + 2 = 3.
The subtree rooted at node 2 includes only node {2}. The subset {2} is good. The score of this subset is 2.
The maxScore array is [37, 3, 2], and the sum of all values in maxScore is 37 + 3 + 2 = 42. Thus, the answer is 42.


Example 4:

Input: vals = [3,22,5], par = [-1,0,1]
Output: 18
Explanation:

The subtree rooted at node 0 includes nodes {0, 1, 2}. The subset {3, 22, 5} is not good, as digit 2 appears twice. Therefore, the subset {3, 5} is valid. The score of this subset is 3 + 5 = 8.
The subtree rooted at node 1 includes nodes {1, 2}. The subset {22, 5} is not good, as digit 2 appears twice. Therefore, the subset {5} is valid. The score of this subset is 5.
The subtree rooted at node 2 includes {2}. The subset {5} is good. The score of this subset is 5.
The maxScore array is [8, 5, 5], and the sum of all values in maxScore is 8 + 5 + 5 = 18. Thus, the answer is 18.





Constraints:

1 <= n == vals.length <= 500
1 <= vals[i] <= 109
par.length == n
par[0] == -1
0 <= par[i] < n for i in [1, n - 1]
The input is generated such that the parent array par represents a valid tree.


```

## 题目翻译

给定一棵以节点0为根的树，每个节点有一个值vals[i]。"好子集"是指子集中所有节点的值的十进制表示中，0-9每个数字最多出现一次。好子集的分数是节点值之和。对每个节点u，maxScore[u]是其子树（含u及所有后代）中好子集的最大分数。求maxScore数组所有元素之和对10^9+7取模。

## 解题思路

树形DP + 状态压缩。每个数的数字构成可用10位bitmask表示（0-9各一位）。对于节点自身值，如果某个数字出现多次，该节点不可选（mask=-1）。

对每个节点u，维护dp[mask] = 子树中选取的节点数字掩码为mask时的最大和。合并子树时，类似背包：对每个子树的dp和当前节点的dp，枚举不相交的mask组合进行合并。

节点u的maxScore = max(dp[mask]) over all masks。

由于mask只有1024种状态，n=500，总复杂度O(n * 1024^2)可能偏大。优化：用Map存储非零状态，合并时枚举两个Map的key。

## Solution

[SourceCode](./solution.js)
