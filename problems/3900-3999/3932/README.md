# [3932] Count K-th Roots in a Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-k-th-roots-in-a-range/description/)

* algorithms
* Medium (24.65%)
* Likes:    51
* Dislikes: 7
* Testcase Example:  '1\n9\n3'

```md
You are given three integers l, r, and k.
An integer y is said to be a perfect kth power if there exists an integer x such that y = xk.
Return the number of integers y in the range [l, r] (inclusive) that are perfect kth powers.

Example 1:
Input: l = 1, r = 9, k = 3
Output: 2
Explanation:
The perfect cubes in the range [1, 9] are:
1 = 13
8 = 23
Hence, the answer is 2.
Example 2:
Input: l = 8, r = 30, k = 2
Output: 3
Explanation:
The perfect squares in the range [8, 30] are:
9 = 32
16 = 42
25 = 52
Hence, the answer is 3.

Constraints:
0 <= l <= r <= 109
1 <= k <= 30
Hint 1: Count how many perfect kth powers are at most r, then subtract how many are less than l.
Hint 2: For k >= 2, we can bruteforce the largest x such that xk <= r .
Hint 3: Be careful of edge case: k == 1.
Hint 4: Be careful of this edge case: l == 0.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定三个整数 l、r、k。

如果存在整数 x 使得 y = x^k，则称整数 y 是一个完全 k 次幂。

返回区间 [l, r]（闭区间）中是完全 k 次幂的整数 y 的个数。

示例 1：
输入：l = 1, r = 9, k = 3
输出：2
解释：区间 [1, 9] 中的完全立方数有：1 = 1³、8 = 2³，所以答案是 2。

示例 2：
输入：l = 8, r = 30, k = 2
输出：3
解释：区间 [8, 30] 中的完全平方数有：9 = 3²、16 = 4²、25 = 5²，所以答案是 3。

约束：
- 0 <= l <= r <= 10^9
- 1 <= k <= 30

## 解题思路

前缀计数：设 g(n) 表示 [0, n] 中完全 k 次幂的个数，则答案为 g(r) - g(l-1)。

由于 l >= 0，负底数的奇次幂为负数不在范围内，只需考虑 x >= 0（注意 0 = 0^k 也是完全 k 次幂）。

- k == 1 时，任意非负整数都是完全 1 次幂，g(n) = n + 1。
- k >= 2 时，由于 r <= 10^9，底数 x 最大约 31623（k=2 时），直接从 x = 0 开始暴力枚举，逐次乘 x 计算 x^k，一旦超过 n 即停止（每步乘后立即判断，数值不会超过 n * x < 2^53，无精度问题）。

边界：l == 0 时 g(l-1) = g(-1) = 0。

时间复杂度：O(r^(1/k))，最坏约 31624 次循环。
