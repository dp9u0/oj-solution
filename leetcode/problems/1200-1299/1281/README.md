# [1281] Subtract the Product and Sum of Digits of an Integer

## Description

[LeetCode Problem Description](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/)

* algorithms
* Easy (86.55%)
* Likes:    2839
* Dislikes: 255
* Testcase Example:  '234'

```md
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Example 1:

Input: n = 234
Output: 15
Explanation:
Product of digits = 2 * 3 * 4 = 24
Sum of digits = 2 + 3 + 4 = 9
Result = 24 - 9 = 15

Example 2:

Input: n = 4421
Output: 21
Explanation:
Product of digits = 4 * 4 * 2 * 1 = 32
Sum of digits = 4 + 4 + 2 + 1 = 11
Result = 32 - 11 = 21


Constraints:

1 <= n <= 10^5


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定一个整数 `n`，返回其各位数字的乘积与各位数字之和的差值。

**示例 1：**
- 输入：n = 234
- 输出：15
- 解释：各位数字乘积 = 2 × 3 × 4 = 24，各位数字之和 = 2 + 3 + 4 = 9，结果 = 24 - 9 = 15

**示例 2：**
- 输入：n = 4421
- 输出：21
- 解释：各位数字乘积 = 4 × 4 × 2 × 1 = 32，各位数字之和 = 4 + 4 + 2 + 1 = 11，结果 = 32 - 11 = 21

**约束：** 1 <= n <= 10^5

## Approach

遍历 n 的每一位数字，同时计算乘积和之和，最后返回 product - sum。

- 初始化 product = 1, sum = 0
- 每次 n % 10 取最后一位数字 d，product *= d, sum += d，然后 n = Math.floor(n / 10)
- 当 n === 0 时停止
- 返回 product - sum

时间复杂度 O(log n)，空间复杂度 O(1)。
