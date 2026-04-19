# [2673] Make Costs of Paths Equal in a Binary Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/description/)

* algorithms
* Medium (58.34%)
* Likes:    668
* Dislikes: 16
* Testcase Example:  '7\n[1,5,2,2,3,3,1]'

```md
You are given an integer n representing the number of nodes in a perfect binary tree consisting of nodes numbered from 1 to n. The root of the tree is node 1 and each node i in the tree has two children where the left child is the node 2 * i and the right child is 2 * i + 1.
Each node in the tree also has a cost represented by a given 0-indexed integer array cost of size n where cost[i] is the cost of node i + 1. You are allowed to increment the cost of any node by 1 any number of times.
Return the minimum number of increments you need to make the cost of paths from the root to each leaf node equal.
Note:

A perfect binary tree is a tree where each node, except the leaf nodes, has exactly 2 children.
The cost of a path is the sum of costs of nodes in the path.


Example 1:


Input: n = 7, cost = [1,5,2,2,3,3,1]
Output: 6
Explanation: We can do the following increments:
- Increase the cost of node 4 one time.
- Increase the cost of node 3 three times.
- Increase the cost of node 7 two times.
Each path from the root to a leaf will have a total cost of 9.
The total increments we did is 1 + 3 + 2 = 6.
It can be shown that this is the minimum answer we can achieve.

Example 2:


Input: n = 3, cost = [5,3,3]
Output: 0
Explanation: The two paths already have equal total costs, so no increments are needed.


Constraints:

3 <= n <= 105
n + 1 is a power of 2
cost.length == n
1 <= cost[i] <= 104


```

## 翻译

给定一个 n 个节点的完全二叉树（节点 1 编号，左孩子 2i，右孩子 2i+1），每个节点有 cost。可以将任意节点的 cost 加 1 任意次。返回使所有根到叶子路径的 cost 和相等的最少增加次数。

## Approach

自底向上贪心：对每个非叶节点 i，计算左右子树的最大路径和（左 maxL，右 maxR），需要将较小的补到较大的，增加量 = |maxL - maxR|。更新当前节点的路径和为 cost[i] + max(maxL, maxR)。从 n/2（最后一个非叶节点）到 1 遍历。

## Solution

[SourceCode](./solution.js)
