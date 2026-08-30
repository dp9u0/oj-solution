# [3939] Count Non Adjacent Subsets in a Rooted Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-non-adjacent-subsets-in-a-rooted-tree/description/)

* algorithms
* Hard (51.87%)
* Likes:    31
* Dislikes: 3
* Testcase Example:  '[-1,0,1]\n[1,2,3]\n3'

```md
You are given a rooted tree with n nodes labeled from 0 to n - 1, represented by an integer array parent of length n, where:

parent[0] = -1 (node 0 is the root).
For each 1 <= i < n, parent[i] is the parent of node i (0 <= parent[i] < i).

You are also given an integer array nums of length n, where nums[i] is the value of node i, and an integer k.
A non-empty subset of nodes is called valid if:

The sum of the values of the selected nodes is divisible by k.
No two selected nodes are adjacent in the tree (no node and its direct parent are both included in the subset).

Return the number of valid subsets modulo 109 + 7.

Example 1:

Input: parent = [-1,0,1], nums = [1,2,3], k = 3
Output: 1
Explanation:
​​​​​​​
The only valid subset is {2}. It contains node 2 with value 3, which is divisible by 3.

Example 2:

Input: parent = [-1,0,0,0], nums = [2,1,2,1], k = 3
Output: 2
Explanation:
​​​​​​​​​​​​​​
The valid subsets are:

{1, 2}: Nodes 1 and 2 are both children of node 0 and not directly connected to each other. Their values sum to 1 + 2 = 3, which is divisible by 3.
{2, 3}: Nodes 2 and 3 are also non-adjacent. Their values sum to 2 + 1 = 3, which is divisible by 3.

No other subset satisfies both conditions. Therefore, the answer is 2.


Constraints:

n == parent.length == nums.length
1 <= n <= 1000
parent[0] == -1
For all 1 <= i < n:

0 <= parent[i] < i


1 <= nums[i] <= 109
1 <= k <= 100​​​​​​​​​​​​​​​​​​​​​
parent describes a valid rooted tree.


```

## 题目翻译

给定一棵有根树，共 n 个节点，编号 0 到 n-1，用长度为 n 的整数数组 parent 表示：

- parent[0] = -1（节点 0 是根）。
- 对于 1 <= i < n，parent[i] 是节点 i 的父节点（0 <= parent[i] < i）。

再给定长度为 n 的整数数组 nums，其中 nums[i] 是节点 i 的值，以及一个整数 k。
一个非空节点子集称为**合法子集**，如果满足：

1. 所选节点的值之和能被 k 整除。
2. 所选节点在树中互不相邻（不能同时包含某个节点和它的直接父节点）。

返回合法子集的数量，对 10^9 + 7 取模。

**约束：**

- n == parent.length == nums.length，1 <= n <= 1000
- parent[0] == -1，对所有 1 <= i < n 有 0 <= parent[i] < i
- 1 <= nums[i] <= 10^9，1 <= k <= 100

## 解题思路

**树形 DP + 按余数分组的计数卷积。**

关键观察：k <= 100，所以节点权值和的"状态"只需记录对 k 取模的余数（0 ~ k-1）。每个节点只关心两件事——自己选不选，以及子树内所选集合的和模 k 的余数。

对每个节点 u 定义两个长度为 k 的数组：

- f[u][r]：子树 u 中、**不选** u 的独立集里，权值和 ≡ r (mod k) 的方案数。
- g[u][r]：子树 u 中、**选** u 的独立集里，权值和 ≡ r (mod k) 的方案数。

初始化：f[u] = [1, 0, ..., 0]（空集），g[u][nums[u] % k] = 1（只含 u 自己）。

合并（把子节点 c 逐一并入 u）：

- 不选 u 时，c 可选可不选：f[u] = f[u] ⊛ (f[c] + g[c])（⊛ 为模 k 余数卷积）。
- 选 u 时，c 不能选：g[u] = g[u] ⊛ f[c]。

由于 parent[i] < i，按编号从大到小（逆序）处理即可保证子节点先于父节点完成，无需递归。

答案：(f[0][0] + g[0][0] - 1) mod (10^9+7)，减 1 是去掉空集。

复杂度：每次合并是 O(k²) 卷积，共 n-1 次合并，总复杂度 O(n·k²) ≈ 10^7，空间 O(n·k)。

## Solution

[SourceCode](./solution.js)
