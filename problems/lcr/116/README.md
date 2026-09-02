# [LCR 116] 省份数量

## Description


```md
https://leetcode.cn/problems/bLyHh0/description/
* algorithms
* Medium (66.89%)
* Likes:    69
* Dislikes: -
* Testcase Example:  '[[1,1,0],[1,1,0],[0,0,1]]'
有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。
返回矩阵中 省份 的数量。

示例 1：
输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
输出：2
示例 2：
输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
输出：3

提示：
1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] 为 1 或 0
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]

注意：本题与主站 547 题相同： https://leetcode.cn/problems/number-of-provinces/

```

## English Description

There are `n` cities. Some of them are connected, while some are not. If city `a` is connected directly with city `b`, and city `b` is connected directly with city `c`, then city `a` is connected indirectly with city `c`.

A **province** is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `i`th city and the `j`th city are directly connected, and `isConnected[i][j] = 0` otherwise.

Return the total number of **provinces**.

**Example 1:**
```
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
```

**Example 2:**
```
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
```

**Constraints:**
- `1 <= n <= 200`
- `n == isConnected.length`
- `n == isConnected[i].length`
- `isConnected[i][j]` is `1` or `0`.
- `isConnected[i][i] == 1`
- `isConnected[i][j] == isConnected[j][i]`

## Approach

`isConnected` 是一个 n×n 的邻接矩阵,省份即无向图中的连通分量。求连通分量个数。

**解法一:DFS 遍历**
- 维护 `visited` 数组标记已访问的城市。
- 遍历每个城市 i,若未访问,则 province 计数 +1,并以 i 为起点 DFS 递归访问所有与 i 直接或间接相连的城市(即 isConnected[i][j] === 1 且 j 未访问的节点)。
- 复杂度:O(n²)(需扫描矩阵),空间 O(n)。

**解法二:并查集 (Union-Find)**
- 每个城市自成一个集合;对每一对 i < j,若 isConnected[i][j] === 1 则 union(i, j)。
- 最后统计根节点数量(每个 root[i] === i 代表一个集合)即省份数。
- 复杂度:O(n² · α(n)),空间 O(n)。

本题采用解法二并查集实现(路径压缩 + 按秩合并),迭代方式比递归更稳。

## Solution

[SourceCode](./solution.js)
