# [3490] Count Beautiful Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-beautiful-numbers/description/)

* algorithms
* Hard (23.59%)
* Likes:    52
* Dislikes: 3
* Testcase Example:  '10\n20'

```md
You are given two positive integers, l and r. A positive integer is called beautiful if the product of its digits is divisible by the sum of its digits.
Return the count of beautiful numbers between l and r, inclusive.

Example 1:

Input: l = 10, r = 20
Output: 2
Explanation:
The beautiful numbers in the range are 10 and 20.

Example 2:

Input: l = 1, r = 15
Output: 10
Explanation:
The beautiful numbers in the range are 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10.


Constraints:

1 <= l <= r < 109


```

## 题目翻译

给定两个正整数 l 和 r。如果一个正整数的各位数字之积能被各位数字之和整除，则称其为"美丽数"。返回 [l, r] 范围内美丽数的个数。

## 解题思路

**数位 DP**。

- 答案 = count(r) - count(l-1)。
- 对每个上限 n，用数位 DP 统计 [1, n] 中美丽数的个数。
- 状态：位置 pos、各位数字之和 sum、各位数字之积 prod、是否紧贴上限 tight、是否有前导零 hasZero。
- 如果有前导零（即数字为空），跳过；否则检查 prod % sum == 0。
- 由于 prod 可能很大（最大 9^9 ≈ 387M），但 sum 最大为 9*9=81，prod 最大 9^9。prod 可以用 sum 的倍数表示——只记录 lcm 倍数关系不现实，直接记录 prod 值。
- 实际上 prod 最大值在 r < 10^9 时为 9^9 = 387420489，状态空间太大。
- 优化：只记录 prod / gcd(prod, sum) 的部分不行，换个思路——用 memo[pos][sum][prodIndex] 记录，但 prod 值太多。
- 更好的方案：将 prod 离散化，用 Map 记录。或者注意到 sum 最大 81，prod 必须 <= 9^9 但非零位最多 9 位。
- 实际做法：用 DFS + memo，状态为 (pos, sum, prod, tight, hasZero)，prod 用实际的值存储，用 Map 做 memoization。因为 prod 的取值虽然理论上很大，但实际有效值不会太多（很多 prod 值不会出现）。

## Solution

[SourceCode](./solution.js)
