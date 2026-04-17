# [2438] Range Product Queries of Powers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/range-product-queries-of-powers/description/)

* algorithms
* Medium (61.41%)
* Likes:    688
* Dislikes: 153
* Testcase Example:  '15\n[[0,1],[2,2],[0,3]]'

```md
Given a positive integer n, there exists a 0-indexed array called powers, composed of the minimum number of powers of 2 that sum to n. The array is sorted in non-decreasing order, and there is only one way to form the array.
You are also given a 0-indexed 2D integer array queries, where queries[i] = [lefti, righti]. Each queries[i] represents a query where you have to find the product of all powers[j] with lefti <= j <= righti.
Return an array answers, equal in length to queries, where answers[i] is the answer to the ith query. Since the answer to the ith query may be too large, each answers[i] should be returned modulo 109 + 7.

Example 1:

Input: n = 15, queries = [[0,1],[2,2],[0,3]]
Output: [2,4,64]
Explanation:
For n = 15, powers = [1,2,4,8]. It can be shown that powers cannot be a smaller size.
Answer to 1st query: powers[0] * powers[1] = 1 * 2 = 2.
Answer to 2nd query: powers[2] = 4.
Answer to 3rd query: powers[0] * powers[1] * powers[2] * powers[3] = 1 * 2 * 4 * 8 = 64.
Each answer modulo 109 + 7 yields the same answer, so [2,4,64] is returned.

Example 2:

Input: n = 2, queries = [[0,0]]
Output: [2]
Explanation:
For n = 2, powers = [2].
The answer to the only query is powers[0] = 2. The answer modulo 109 + 7 is the same, so [2] is returned.


Constraints:

1 <= n <= 109
1 <= queries.length <= 105
0 <= starti <= endi < powers.length


```

## 题目翻译

给定正整数 n，将其分解为最少的 2 的幂之和得到有序数组 powers。对每个查询 [left, right]，求 powers[left..right] 的乘积模 10^9+7。

## 解题思路

**二进制分解 + 前缀指数和 + 快速幂**

n 的二进制表示即 powers 数组。powers[i] = 2^e[i]，区间乘积 = 2^(sum(e[l..r]))。用前缀和维护指数和，快速幂求 2^exp mod (10^9+7)。

n ≤ 10^9 最多 30 位，指数和最大约 435，查询 O(log exp)。

## Solution

[SourceCode](./solution.js)
