# [2445] 值为 1 的节点数

## Description


```md
https://leetcode.cn/problems/number-of-nodes-with-value-one/description/
* algorithms
* Medium (64.09%)
* Likes:    6
* Dislikes: -
* Testcase Example:  '5\n[1,2,5]'
有一个 无向 树，有 n 个节点，节点标记为从 1 到 n ，还有 n - 1 条边。给定整数 n。标记为 v 的节点的父节点是标记为 floor (v / 2) 的节点。树的根节点是标记为 1 的节点。
例如，如果 n = 7，那么标记为 3 的节点将标记 floor(3 / 2) = 1 的节点作为其父节点，标记为 7 的节点将标记 floor(7 / 2) = 3 的节点作为其父节点。
你还得到一个整数数组 queries。最初，每个节点的值都是 0。对于每个查询 queries[i]，您应该翻转节点标记为 queries[i] 的子树中的所有值。
在 处理完所有查询后，返回值为 1 的节点总数。
注意:
翻转节点的值意味着值为 0 的节点变为 1，反之亦然。
floor(x) 相当于将 x 舍入到最接近的整数。

示例 1:
输入: n = 5 , queries = [1,2,5]
输出: 3
解释: 上图显示了执行查询后的树结构及其状态。蓝色节点表示值 0，红色节点表示值 1。
在处理查询之后，有三个红色节点 (值为 1 的节点): 1、3、5。
示例 2:
输入: n = 3, queries = [2,3,3]
输出: 1
解释: 上图显示了执行查询后的树结构及其状态。蓝色节点表示值 0，红色节点表示值 1。
在处理查询之后，有一个红色节点 (值为 1 的节点): 2。

提示:
1 <= n <= 105
1 <= queries.length <= 105
1 <= queries[i] <= n
Hint 1: The relative order of processing queries does not matter.
Hint 2: If we know that for some node v, its parent was updated some number of times, then we know that node v was also updated that number of times.
Hint 3: Iterate on nodes from highest to lowest and count the number of times the query was performed on that node and the number of times this node was updated from its parent (direct or indirect). The parity of that number is the answer.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Complete binary tree indexed 1..n with parent(v) = floor(v/2). All values start 0; each query [q] flips the whole subtree of q. After all queries, count nodes with value 1.

Example 1:
Input: n = 5, queries = [1,2,5]
Output: 3

Example 2:
Input: n = 3, queries = [2,3,3]
Output: 1

Constraints: n, queries <= 10^5.

## Approach

Order of queries doesn't matter, only parities. Let cnt[v] = number of queries at v. Node v is flipped once for every query at any ancestor (including itself): T[v] = cnt[v] + T[floor(v/2)], computed in increasing v order (parent index < v). Count v with T[v] odd.

O(n + q).
