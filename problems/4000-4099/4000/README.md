# [4000] Largest Integer With Given Digit Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-integer-with-given-digit-sum/description/)

* algorithms
* Easy (61.36%)
* Likes:    72
* Dislikes: 1
* Testcase Example:  '2\n9'

```md
You are given two non-negative integers n and s.
Return the largest integer that has at most n digits and whose sum of digits is s. If no such integer exists, return -1.

Example 1:
Input: n = 2, s = 9
Output: 90
Explanation:
The largest integer with at most 2 digits that has a sum of digits of 9 is 90.
Example 2:
Input: n = 2, s = 19
Output: -1
Explanation:
There is no integer with at most 2 digits that has a sum of digits of 19, so the answer is -1.
Example 3:
Input: n = 5, s = 0
Output: 0
Explanation:
The only non-negative integer whose digits sum to 0 is 0.

Constraints:
1 <= n <= 5
0 <= s <= 100
Hint 1: 1a (Brute Force). Since n <= 5, there are at most 105 non-negative integers with at most n digits.
Hint 2: 1b (Brute Force). Check every integer from 0 to 10n - 1, and keep the largest one whose digit sum is s.
Hint 3: 2a (Greedy). If s > 9 * n, no valid integer exists.
Hint 4: 2b (Greedy). To maximize the integer, assign as much of the remaining digit sum as possible to each digit from left to right.
Hint 5: 2c (Greedy). Handle s == 0 separately: the answer is 0.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定两个非负整数 `n` 和 `s`。

返回**至多有 n 位数字**且**各位数字之和等于 s** 的最大整数。如果不存在这样的整数，返回 -1。

示例 1：
输入：n = 2, s = 9
输出：90
解释：至多 2 位数字且数字和为 9 的最大整数是 90。

示例 2：
输入：n = 2, s = 19
输出：-1
解释：不存在至多 2 位数字且数字和为 19 的整数，返回 -1。

示例 3：
输入：n = 5, s = 0
输出：0
解释：唯一一个数字和为 0 的非负整数是 0。

约束：
- 1 <= n <= 5
- 0 <= s <= 100

## 解题思路

**贪心构造**：

1. **特判 s = 0**：数字和为 0 的非负整数只有 0，直接返回 0。
2. **可行性判断**：n 位数字的数字和最大为 9n，若 s > 9n 则无解，返回 -1。
3. **贪心填位**：从最高位到最低位，每一位尽量填大——当前位填 `min(9, 剩余和 s)`。因为高位数字对数值的贡献最大，高位取尽可能大的值必然得到最大整数。填完 n 位后剩余和恰好为 0（由可行性保证）。

例如 n=2, s=9：最高位填 min(9,9)=9，剩余 0，次位填 0，得 90。

时间复杂度 O(n)，空间复杂度 O(1)。由于 n <= 5，结果最大 99999，不会超出安全整数范围。
