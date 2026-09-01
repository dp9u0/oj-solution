# [906] Super Palindromes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/super-palindromes/description/)

* algorithms
* Hard (40.35%)
* Likes:    380
* Dislikes: 424
* Testcase Example:  '"4"\n"1000"'

```md
Let's say a positive integer is a super-palindrome if it is a palindrome, and it is also the square of a palindrome.
Given two positive integers left and right represented as strings, return the number of super-palindromes integers in the inclusive range [left, right].

Example 1:
Input: left = "4", right = "1000"
Output: 4
Explanation: 4, 9, 121, and 484 are superpalindromes.
Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26 is not a palindrome.
Example 2:
Input: left = "1", right = "2"
Output: 1

Constraints:
1
left and right consist of only digits.
left and right cannot have leading zeros.
left and right represent integers in the range [1, 1018 - 1].
left is less than or equal to right.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

如果一个正整数本身是回文数，并且它还是一个回文数的平方，我们就称它为**超级回文数**。

给定两个用字符串表示的正整数 `left` 和 `right`，返回闭区间 `[left, right]` 内超级回文数的个数。

示例 1：
输入：left = "4", right = "1000"
输出：4
解释：4、9、121 和 484 是超级回文数。
注意 676 不是超级回文数：26 * 26 = 676，但 26 不是回文数。

示例 2：
输入：left = "1", right = "2"
输出：1

约束：
- left 和 right 只包含数字。
- left 和 right 没有前导零。
- left 和 right 表示 [1, 10^18 - 1] 范围内的整数。
- left 小于等于 right。

## 解题思路

关键观察：由于 `right ≤ 10^18 - 1`，超级回文数的**平方根**必然 `< 10^9`，即平方根最多 9 位。而回文数由其前半部分唯一决定，所以不需要枚举所有数，只需枚举所有可能的回文根：

1. 枚举前半部分 `h ∈ [1, 99999]`（`s = String(h)`），构造两种回文数：
   - 奇数长度：`s + reverse(s 去掉末位)`，覆盖 1、3、5、7、9 位回文；
   - 偶数长度：`s + reverse(s)`，覆盖 2、4、6、8 位回文（10 位的平方超出范围，直接跳过）。
2. 对每个回文根 `p`，用 **BigInt** 计算 `sq = p * p`（10^18 超出 `Number.MAX_SAFE_INTEGER`，必须用 BigInt 避免精度丢失）。
3. 若 `left ≤ sq ≤ right` 且 `sq` 的十进制字符串是回文，则计数。

这样只需检查约 11 万个候选根，而非 10^9 个数。

- 时间复杂度：O(N·logN)，N ≈ 10^5 为候选回文根数量，每个根做一次平方与回文判断。
- 空间复杂度：O(logN)，仅字符串临时空间。
