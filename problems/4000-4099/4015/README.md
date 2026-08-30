# [4015] Weighted Sum of a Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/weighted-sum-of-a-tree/description/)

* algorithms
* Medium (42.00%)
* Likes:    59
* Dislikes: 3
* Testcase Example:  '[-1,0,0,0,2,2]\n[5,2,3,1,4,6]'

```md
You are given an integer array parent of length n representing a rooted tree with nodes labeled from 0 to n - 1.
The tree is rooted at node 0, so parent[0] = -1. For each node i where 1 <= i <= n - 1, parent[i] denotes the parent of node i.
You are also given an integer array nums of length n, where nums[i] denotes the value of node i.
The weight of a node i at depth d is nums[i] * (h - d + 1), where h is the height of the tree.
Return the sum of the weights of all nodes in the tree.
The depth of a node is the number of nodes on the path from the root to that node, inclusive, with the root having depth 1.
The height of the tree is the maximum depth among all nodes in the tree.

Example 1:
​​​​​​​
Input: parent = [-1,0,0,0,2,2], nums = [5,2,3,1,4,6]
Output: 37
Explanation:
The height of the tree is 3.


Node
nums[i]
Depth (d)
Weight


0
5
1
5 * (3 - 1 + 1) = 15


1
2
2
2 * (3 - 2 + 1) = 4


2
3
2
3 * (3 - 2 + 1) = 6


3
1
2
1 * (3 - 2 + 1) = 2


4
4
3
4 * (3 - 3 + 1) = 4


5
6
3
6 * (3 - 3 + 1) = 6


The sum of all node weights is 15 + 4 + 6 + 2 + 4 + 6 = 37.
Example 2:
​​​​​​​​​​​​​​
Input: parent = [-1,0,1,2], nums = [1,2,3,4]
Output: 20
Explanation:
The height of the tree is 4.


Node
nums[i]
Depth (d)
Weight


0
1
1
1 * (4 - 1 + 1) = 4


1
2
2
2 * (4 - 2 + 1) = 6


2
3
3
3 * (4 - 3 + 1) = 6


3
4
4
4 * (4 - 4 + 1) = 4


The sum of all node weights is 4 + 6 + 6 + 4 = 20.

Constraints:
1 <= n <= 105
n == parent.length == nums.length
parent[0] == -1
0 <= parent[i] <= n - 1 for all i in [1, n - 1]
1 <= nums[i] <= 106
The input is generated such that the array parent represents a valid tree rooted at node 0.
Hint 1: Build the tree and traverse it from the root to determine the depth of every node and the height h.
Hint 2: Once h is known, calculate and sum nums[i] * (h - depth[i] + 1) for every node i.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个长度为 n 的整数数组 `parent`，表示一棵以节点 0 为根的有根树，节点编号从 0 到 n - 1。树根为节点 0，因此 `parent[0] = -1`；对于每个节点 `1 <= i <= n - 1`，`parent[i]` 表示节点 i 的父节点。

再给定一个长度为 n 的整数数组 `nums`，其中 `nums[i]` 表示节点 i 的值。

深度为 d 的节点 i 的权重定义为 `nums[i] * (h - d + 1)`，其中 h 是树的高度。返回树中所有节点的权重之和。

- 节点的深度是从根到该节点路径上的节点数（包含两端），根节点深度为 1。
- 树的高度是所有节点深度的最大值。

示例 1：
输入：`parent = [-1,0,0,0,2,2]`, `nums = [5,2,3,1,4,6]`
输出：`37`
解释：树高为 3。各节点权重分别为 15, 4, 6, 2, 4, 6，总和为 37。

示例 2：
输入：`parent = [-1,0,1,2]`, `nums = [1,2,3,4]`
输出：`20`
解释：树高为 4。各节点权重分别为 4, 6, 6, 4，总和为 20。

约束：
- 1 <= n <= 10^5
- n == parent.length == nums.length
- parent[0] == -1
- 0 <= parent[i] <= n - 1（对于所有 1 <= i <= n - 1）
- 1 <= nums[i] <= 10^6
- 输入保证 `parent` 数组表示一棵以节点 0 为根的有效树。

## 解题思路

两次线性扫描，O(n) 时间 / O(n) 空间：

1. **建图求深度**：根据 `parent` 数组构建孩子邻接表，从根节点 0 开始 BFS，`depth[0] = 1`，每个孩子的深度为其父节点深度加 1。遍历过程中记录最大深度即树高 h。
2. **累加权重**：已知 h 后，遍历所有节点，累加 `nums[i] * (h - depth[i] + 1)`。

溢出说明：最坏情况（10^5 长链 × 10^6 权值）总和约为 5×10^15，小于 2^53（约 9×10^15），JavaScript Number 可精确表示，无需 BigInt。
