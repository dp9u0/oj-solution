# [399] Evaluate Division

## Description

[LeetCode Problem Description](https://leetcode.com/problems/evaluate-division/description/)

* algorithms
* Medium (64.10%)
* Likes:    10206
* Dislikes: 1098
* Testcase Example:  '[["a","b"],["b","c"]]\n' +

```md
'[2.0,3.0]\n' +
'[["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]'
You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.
You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.
Return the answers to all queries. If a single answer cannot be determined, return -1.0.
Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.
Note:The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

Example 1:

Input: equations = [['a','b'],['b','c']], values = [2.0,3.0], queries = [['a','c'],['b','a'],['a','e'],['a','a'],['x','x']]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation:
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
note: x is undefined => -1.0
Example 2:

Input: equations = [['a','b'],['b','c'],['bc','cd']], values = [1.5,2.5,5.0], queries = [['a','c'],['c','b'],['bc','cd'],['cd','bc']]
Output: [3.75000,0.40000,5.00000,0.20000]

Example 3:

Input: equations = [['a','b']], values = [0.5], queries = [['a','b'],['b','a'],['a','c'],['x','y']]
Output: [0.50000,2.00000,-1.00000,-1.00000]


Constraints:

1 <= equations.length <= 20
equations[i].length == 2
1 <= Ai.length, Bi.length <= 5
values.length == equations.length
0.0 < values[i] <= 20.0
1 <= queries.length <= 20
queries[i].length == 2
1 <= Cj.length, Dj.length <= 5
Ai, Bi, Cj, Dj consist of lower case English letters and digits.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定变量对的方程组 equations 和对应的值 values，其中 equations[i] = [Ai, Bi] 表示 Ai / Bi = values[i]。再给定一组查询 queries，queries[j] = [Cj, Dj] 表示求 Cj / Dj 的值。如果无法确定，返回 -1.0。

## 解题思路

**并查集（Union-Find）带权路径压缩**

将每个变量看作图中的节点，equations 建立边：a/b=2.0 表示 a 到 b 的边权重为 2.0，b 到 a 的边权重为 1/2.0。

使用带权并查集，每个节点维护到父节点的权重比值。查询 a/b 时，如果 a 和 b 在同一集合，结果 = a 到根的权重 / b 到根的权重。

- find 操作：带路径压缩，同时更新权重
- union 操作：按权重合并两棵树

时间复杂度近似 O((E+Q) * α(N))，空间复杂度 O(N)。
