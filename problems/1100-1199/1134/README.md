# [1134] 阿姆斯特朗数

## Description


```md
https://leetcode.cn/problems/armstrong-number/description/
* algorithms
* Easy (77.81%)
* Likes:    17
* Dislikes: -
* Testcase Example:  '153'
给你一个整数 n ，让你来判定他是否是 阿姆斯特朗数，是则返回 true，不是则返回 false。
假设存在一个 k 位数 n ，其每一位上的数字的 k 次幂的总和也是 n ，那么这个数是阿姆斯特朗数 。

示例 1：
输入：n = 153
输出：true
解释：
153 是一个 3 位数，且 153 = 13 + 53 + 33。
示例 2：
输入：n = 123
输出：false
解释：123 是一个 3 位数，且 123 != 13 + 23 + 33 = 36。

提示：
1 <= n <= 108
Hint 1: Check if the given k-digit number equals the sum of the k-th power of it's digits.
Hint 2: How to compute the sum of the k-th power of the digits of a number ? Can you divide the number into digits using division and modulus operations ?
Hint 3: You can find the least significant digit of a number by taking it modulus 10. And you can remove it by dividing the number by 10 (integer division). Once you have a digit, you can raise it to the power of k and add it to the sum.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an integer `n`, return `true` if it is an Armstrong number: an k-digit number equal to the sum of the k-th powers of its digits.

**Example 1:**
n = 153 → true (153 = 1^3 + 5^3 + 3^3)

**Constraints:**
- 1 <= n <= 10^8

## Approach

先取位数 k,再逐位取模累加 d^k,与原数比较。

时间 O(位数),空间 O(1)。
