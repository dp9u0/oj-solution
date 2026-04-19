# [1042] Flower Planting With No Adjacent

## Description

[LeetCode Problem Description](https://leetcode.com/problems/flower-planting-with-no-adjacent/description/)

* algorithms
* Medium (53.55%)
* Likes:    1572
* Dislikes: 727
* Testcase Example:  '3\n[[1,2],[2,3],[3,1]]'

```md
You have n gardens, labeled from 1 to n, and an array paths where paths[i] = [xi, yi] describes a bidirectional path between garden xi to garden yi. In each garden, you want to plant one of 4 types of flowers.
All gardens have at most 3 paths coming into or leaving it.
Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.
Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)th garden. The flower types are denoted 1, 2, 3, or 4. It is guaranteed an answer exists.

Example 1:

Input: n = 3, paths = [[1,2],[2,3],[3,1]]
Output: [1,2,3]
Explanation:
Gardens 1 and 2 have different types.
Gardens 2 and 3 have different types.
Gardens 3 and 1 have different types.
Hence, [1,2,3] is a valid answer. Other valid answers include [1,2,4], [1,4,2], and [3,2,1].

Example 2:

Input: n = 4, paths = [[1,2],[3,4]]
Output: [1,2,1,2]

Example 3:

Input: n = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
Output: [1,2,3,4]


Constraints:

1 <= n <= 104
0 <= paths.length <= 2 * 104
paths[i].length == 2
1 <= xi, yi <= n
xi != yi
Every garden has at most 3 paths coming into or leaving it.


```

## 中文翻译

有 n 个花园（编号 1~n），paths 给出双向路径。每个花园种 4 种花之一，要求相邻花园花种类不同。每个花园最多 3 条边，保证有解。返回任意合法方案。

## 解题思路

贪心图着色。关键性质：每个节点度数最多 3，而颜色有 4 种，所以贪心必然能选到颜色。对每个花园，查看已着色邻居用了哪些颜色，从 {1,2,3,4} 中选一个未使用的即可。

## Solution

[SourceCode](./solution.js)
