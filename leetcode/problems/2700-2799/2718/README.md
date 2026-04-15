# [2718] Sum of Matrix After Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-matrix-after-queries/description/)

* algorithms
* Medium (32.06%)
* Likes:    733
* Dislikes: 28
* Testcase Example:  '3\n[[0,0,1],[1,2,2],[0,2,3],[1,0,4]]'

```md
You are given an integer n and a 0-indexed2D array queries where queries[i] = [typei, indexi, vali].
Initially, there is a 0-indexed n x n matrix filled with 0&#39;s. For each query, you must apply one of the following changes:

if typei == 0, set the values in the row with indexi to vali, overwriting any previous values.
if typei == 1, set the values in the column with indexi to vali, overwriting any previous values.

Return the sum of integers in the matrix after all queries are applied.

Example 1:


Input: n = 3, queries = [[0,0,1],[1,2,2],[0,2,3],[1,0,4]]
Output: 23
Explanation: The image above describes the matrix after each query. The sum of the matrix after all queries are applied is 23.

Example 2:


Input: n = 3, queries = [[0,0,4],[0,1,2],[1,0,1],[0,2,3],[1,2,1]]
Output: 17
Explanation: The image above describes the matrix after each query. The sum of the matrix after all queries are applied is 17.


Constraints:

1 <= n <= 104
1 <= queries.length <= 5 * 104
queries[i].length == 3
0 <= typei <= 1
0 <= indexi< n
0 <= vali <= 105


```

## 中文翻译

给定整数 n 和查询数组 queries。初始 n x n 矩阵全为 0。每次查询：type=0 设置整行为 vali，type=1 设置整列为 vali（覆盖之前值）。返回所有查询后矩阵元素之和。

## 解题思路

**倒序处理：**

1. 从后往前处理查询，后面的操作会覆盖前面的
2. 维护已设置的行数和列数
3. 设置某行时，该行有效格子数为 n - 已设置列数；设置某列时同理
4. 用 Set 记录已处理的行/列索引，跳过重复

时间复杂度：O(q)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
