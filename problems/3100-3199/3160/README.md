# [3160] Find the Number of Distinct Colors Among the Balls

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/description/)

* algorithms
* Medium (54.14%)
* Likes:    768
* Dislikes: 94
* Testcase Example:  '4\n[[1,4],[2,5],[1,3],[3,4]]'

```md
You are given an integer limit and a 2D array queries of size n x 2.
There are limit + 1 balls with distinct labels in the range [0, limit]. Initially, all balls are uncolored. For every query in queries that is of the form [x, y], you mark ball x with the color y. After each query, you need to find the number of colors among the balls.
Return an array result of length n, where result[i] denotes the number of colors after ith query.
Note that when answering a query, lack of a color will not be considered as a color.

Example 1:

Input: limit = 4, queries = [[1,4],[2,5],[1,3],[3,4]]
Output: [1,2,2,3]
Explanation:


After query 0, ball 1 has color 4.
After query 1, ball 1 has color 4, and ball 2 has color 5.
After query 2, ball 1 has color 3, and ball 2 has color 5.
After query 3, ball 1 has color 3, ball 2 has color 5, and ball 3 has color 4.


Example 2:

Input: limit = 4, queries = [[0,1],[1,2],[2,2],[3,4],[4,5]]
Output: [1,2,2,3,4]
Explanation:


After query 0, ball 0 has color 1.
After query 1, ball 0 has color 1, and ball 1 has color 2.
After query 2, ball 0 has color 1, and balls 1 and 2 have color 2.
After query 3, ball 0 has color 1, balls 1 and 2 have color 2, and ball 3 has color 4.
After query 4, ball 0 has color 1, balls 1 and 2 have color 2, ball 3 has color 4, and ball 4 has color 5.



Constraints:

1 <= limit <= 109
1 <= n == queries.length <= 105
queries[i].length == 2
0 <= queries[i][0] <= limit
1 <= queries[i][1] <= 109


```

## 翻译

给定 limit 和 queries 数组。初始有 limit+1 个球（编号 0~limit），均无颜色。每次查询将球 x 涂上颜色 y（覆盖之前的颜色）。每次查询后返回当前有多少种不同颜色。

## Approach

HashMap 模拟。用 ballColor Map 记录每个球当前颜色，colorCount Map 记录每种颜色有多少个球，distinct 记录颜色种类数。

每次查询：
1. 如果球 x 已有旧颜色，减少旧颜色计数，若变为 0 则 distinct--
2. 设置新颜色，增加新颜色计数，若从 0 变为 1 则 distinct++

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
