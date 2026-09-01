# [829] Consecutive Numbers Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/consecutive-numbers-sum/description/)

* algorithms
* Hard (42.87%)
* Likes:    1462
* Dislikes: 1394
* Testcase Example:  '5'

```md
Given an integer n, return the number of ways you can write n as the sum of consecutive positive integers.

Example 1:

Input: n = 5
Output: 2
Explanation: 5 = 2 + 3

Example 2:

Input: n = 9
Output: 3
Explanation: 9 = 4 + 5 = 2 + 3 + 4

Example 3:

Input: n = 15
Output: 4
Explanation: 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5


Constraints:

1 <= n <= 109


```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译

给定一个整数 n，返回将 n 写成若干个连续正整数之和的方案数。

示例 1：
输入：n = 5
输出：2
解释：5 = 2 + 3

示例 2：
输入：n = 9
输出：3
解释：9 = 4 + 5 = 2 + 3 + 4

示例 3：
输入：n = 15
输出：4
解释：15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5

约束：
1 <= n <= 10^9

---

## 解题思路

设 n 可以表示为以 a（a ≥ 1）开头、共 k 项的连续正整数之和：

```
n = a + (a+1) + ... + (a+k-1) = k*a + k*(k-1)/2
```

移项得：

```
k*a = n - k*(k-1)/2
```

因此对每个项数 k，只要满足：

1. `m = n - k*(k-1)/2 > 0`（保证首项 a ≥ 1）
2. `m % k === 0`（保证 a 为正整数）

就存在一种合法方案。

由于 `k*(k-1)/2 < n`，k 的上界约为 O(√(2n))（n ≤ 10^9 时 k ≤ ~44721），从 k = 1 开始枚举计数即可，总时间复杂度 O(√n)，空间 O(1)。

注意 k = 1 时恒成立（n 本身就是一项），所以答案至少为 1。
