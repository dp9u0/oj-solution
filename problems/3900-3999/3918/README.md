# [3918] Sum of Primes Between Number and Its Reverse

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-primes-between-number-and-its-reverse/description/)

* algorithms
* Medium (76.56%)
* Likes:    35
* Dislikes: 3
* Testcase Example:  '13'

```md
You are given an integer n.
Let r be the integer formed by reversing the digits of n.
Return the sum of all prime numbers between min(n, r) and max(n, r), inclusive.

Example 1:
Input: n = 13
Output: 132
Explanation:
The reverse of 13 is 31. Thus, the range is [13, 31].
The prime numbers in this range are 13, 17, 19, 23, 29, and 31.
The sum of these prime numbers is 13 + 17 + 19 + 23 + 29 + 31 = 132.
Example 2:
Input: n = 10
Output: 17
Explanation:
The reverse of 10 is 1. Thus, the range is [1, 10].
The prime numbers in this range are 2, 3, 5, and 7.
The sum of these prime numbers is 2 + 3 + 5 + 7 = 17.
Example 3:
Input: n = 8
Output: 0
Explanation:
The reverse of 8 is 8. Thus, the range is [8, 8].
There are no prime numbers in this range, so the sum is 0.

Constraints:
1
Hint 1: Simulate as described

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译（中文）

给定一个整数 `n`。

设 `r` 为将 `n` 的数字反转后得到的整数。

返回 `min(n, r)` 到 `max(n, r)` 之间（包含边界）所有素数的和。

示例 1：
输入：n = 13
输出：132
解释：
13 的反转是 31，因此区间为 [13, 31]。
区间内的素数为 13, 17, 19, 23, 29, 31。
它们的和为 13 + 17 + 19 + 23 + 29 + 31 = 132。

示例 2：
输入：n = 10
输出：17
解释：
10 的反转是 1（前导零被去掉），因此区间为 [1, 10]。
区间内的素数为 2, 3, 5, 7，和为 17。

示例 3：
输入：n = 8
输出：0
解释：
8 的反转是 8，区间为 [8, 8]，区间内没有素数，返回 0。

约束：
1 <= n（题目页面约束被截断，按提示"Simulate as described"直接模拟即可，n 规模不大）

提示 1：按题目描述直接模拟。

## 解题思路

1. **反转数字**：通过不断对 10 取模和整除，逐位取出 `n` 的数字构造出反转数 `r`（前导零自然被去掉，如 10 → 1）。
2. **确定区间**：`lo = min(n, r)`，`hi = max(n, r)`。
3. **埃拉托斯特尼筛法（Sieve of Eratosthenes）**：一次性筛出 `[0, hi]` 内的所有素数，比逐个数做素性判断更高效。
4. **求和**：遍历 `[max(lo, 2), hi]`，累加所有素数，即为答案。

时间复杂度：O(hi · log(log(hi)))（筛法）+ O(hi)（求和）。
空间复杂度：O(hi)，用于筛法标记数组。
