# [2246] Longest Path With Different Adjacent Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/description/)

* algorithms
* Hard (53.97%)
* Likes:    2549
* Dislikes: 61
* Testcase Example:  '[-1,0,0,1,1,2]\n"abacbe"'

```md
You are given a tree (i.e. a connected, undirected graph that has no cycles) rooted at node 0 consisting of n nodes numbered from 0 to n - 1. The tree is represented by a 0-indexed array parent of size n, where parent[i] is the parent of node i. Since node 0 is the root, parent[0] == -1.
You are also given a string s of length n, where s[i] is the character assigned to node i.
Return the length of the longest path in the tree such that no pair of adjacent nodes on the path have the same character assigned to them.

Example 1:


Input: parent = [-1,0,0,1,1,2], s = 'abacbe'
Output: 3
Explanation: The longest path where each two adjacent nodes have different characters in the tree is the path: 0 -> 1 -> 3. The length of this path is 3, so 3 is returned.
It can be proven that there is no longer path that satisfies the conditions.

Example 2:


Input: parent = [-1,0,0,0], s = 'aabc'
Output: 3
Explanation: The longest path where each two adjacent nodes have different characters is the path: 2 -> 0 -> 3. The length of this path is 3, so 3 is returned.


Constraints:

n == parent.length == s.length
1 <= n <= 105
0 <= parent[i] <= n - 1 for all i >= 1
parent[0] == -1
parent represents a valid tree.
s consists of only lowercase English letters.


```

## 中文翻译

给定一棵以节点 0 为根的树（parent 数组表示）和每个节点的字符 s[i]，求树中最长路径使得路径上相邻节点字符不同。

## 解题思路

树形 DP。对每个节点，DFS 求各子树的最长异字符下行路径长度。只取字符不同于当前节点的子节点中前两长的路径，组合成经过当前节点的最长路径。全局取最大值。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
