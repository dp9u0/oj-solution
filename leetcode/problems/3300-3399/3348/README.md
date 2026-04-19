# [3348] Smallest Divisible Digit Product II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-divisible-digit-product-ii/description/)

* algorithms
* Hard (14.56%)
* Likes:    58
* Dislikes: 18
* Testcase Example:  '"1234"\n256'

```md
You are given a string num which represents a positive integer, and an integer t.
A number is called zero-free if none of its digits are 0.
Return a string representing the smallest zero-free number greater than or equal to num such that the product of its digits is divisible by t. If no such number exists, return '-1'.

Example 1:

Input: num = '1234', t = 256
Output: '1488'
Explanation:
The smallest zero-free number that is greater than 1234 and has the product of its digits divisible by 256 is 1488, with the product of its digits equal to 256.

Example 2:

Input: num = '12355', t = 50
Output: '12355'
Explanation:
12355 is already zero-free and has the product of its digits divisible by 50, with the product of its digits equal to 150.

Example 3:

Input: num = '11111', t = 26
Output: '-1'
Explanation:
No number greater than 11111 has the product of its digits divisible by 26.


Constraints:

2 <= num.length <= 2 * 105
num consists only of digits in the range [&#39;0&#39;, &#39;9&#39;].
num does not contain leading zeros.
1 <= t <= 1014


```

## 翻译

给定正整数 num（字符串）和 t，找最小的 >= num 的无零数字（各位均非0），使得各位数字之积能被 t 整除。

## 解题思路

将 t 分解为 2^a * 3^b * 5^c * 7^d（若有 >7 的质因子则返回 -1）。数字 1-9 只含这些质因子。预处理前缀 needs，从右往左尝试在位置 i 增大数字，用贪心填充后缀。可行性检查：k 个位置能否覆盖 (a',b',c',d')。O(n)。

## Solution

[SourceCode](./solution.js)
