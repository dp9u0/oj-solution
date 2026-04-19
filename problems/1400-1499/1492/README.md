# [1492] The kth Factor of n

## Description

[LeetCode Problem Description](https://leetcode.com/problems/the-kth-factor-of-n/description/)

* algorithms
* Medium (70.28%)
* Likes:    1934
* Dislikes: 314
* Testcase Example:  '12\n3'

```md
You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.
Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

Example 1:

Input: n = 12, k = 3
Output: 3
Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

Example 2:

Input: n = 7, k = 2
Output: 7
Explanation: Factors list is [1, 7], the 2nd factor is 7.

Example 3:

Input: n = 4, k = 4
Output: -1
Explanation: Factors list is [1, 2, 4], there is only 3 factors. We should return -1.


Constraints:

1 <= k <= n <= 1000


Follow up:
Could you solve this problem in less than O(n) complexity?

```

## 中文翻译

给定正整数 n 和 k，返回 n 的所有因子升序排列后的第 k 个，不足 k 个返回 -1。

## 解题思路

**枚举到 sqrt(n)**

遍历 i = 1 到 sqrt(n)，若 i 整除 n：
- i 是小因子
- n/i 是大因子（若 i ≠ n/i）

收集后排序，取第 k 个。也可直接遍历 1..n 计数。

时间复杂度：O(sqrt(n))，空间复杂度：O(sqrt(n))

## Solution

[SourceCode](./solution.js)
