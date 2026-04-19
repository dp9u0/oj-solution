# [1735] Count Ways to Make Array With Product

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-ways-to-make-array-with-product/description/)

* algorithms
* Hard (54.20%)
* Likes:    323
* Dislikes: 36
* Testcase Example:  '[[2,6],[5,1],[73,660]]'

```md
You are given a 2D integer array, queries. For each queries[i], where queries[i] = [ni, ki], find the number of different ways you can place positive integers into an array of size ni such that the product of the integers is ki. As the number of ways may be too large, the answer to the ith query is the number of ways modulo 109 + 7.
Return an integer array answer where answer.length == queries.length, and answer[i] is the answer to the ith query.

Example 1:

Input: queries = [[2,6],[5,1],[73,660]]
Output: [4,1,50734910]
Explanation:Each query is independent.
[2,6]: There are 4 ways to fill an array of size 2 that multiply to 6: [1,6], [2,3], [3,2], [6,1].
[5,1]: There is 1 way to fill an array of size 5 that multiply to 1: [1,1,1,1,1].
[73,660]: There are 1050734917 ways to fill an array of size 73 that multiply to 660. 1050734917 modulo 109 + 7 = 50734910.

Example 2:

Input: queries = [[1,1],[2,2],[3,3],[4,4],[5,5]]
Output: [1,2,3,10,5]


Constraints:

1 <= queries.length <= 104
1 <= ni, ki <= 104


```

## 中文翻译

给定 queries 数组，每个 query 为 [n, k]。求在长度为 n 的数组中放入正整数使其乘积为 k 的方案数，对 10^9+7 取模。

约束：queries.length <= 10^4, n, k <= 10^4

## 解题思路

**质因子分解 + 隔板法（Stars and Bars）**

1. 将 k 分解为 p1^a1 * p2^a2 * ... * pm^am。
2. 对每个质因子 pi（指数 ai），将 ai 个相同物品分给 n 个位置：C(ai + n - 1, n - 1)。
3. 总方案数 = 各质因子方案数之积。
4. 预处理：最小质因子筛（SPF）用于快速分解，阶乘和逆阶乘用于计算组合数。
5. 注意 BigInt 防止乘法溢出。

## Solution

[SourceCode](./solution.js)
