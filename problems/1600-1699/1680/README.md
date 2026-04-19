# [1680] Concatenation of Consecutive Binary Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/description/)

* algorithms
* Medium (66.58%)
* Likes:    1773
* Dislikes: 450
* Testcase Example:  '1'

```md
Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations of 1 to n in order, modulo 109 + 7.

Example 1:

Input: n = 1
Output: 1
Explanation: '1' in binary corresponds to the decimal value 1.

Example 2:

Input: n = 3
Output: 27
Explanation: In binary, 1, 2, and 3 corresponds to '1', '10', and '11'.
After concatenating them, we have '11011', which corresponds to the decimal value 27.

Example 3:

Input: n = 12
Output: 505379714
Explanation: The concatenation results in '1101110010111011110001001101010111100'.
The decimal value of that is 118505380540.
After modulo 109 + 7, the result is 505379714.


Constraints:

1 <= n <= 105


```

## 翻译

拼接1到n的二进制表示，返回十进制值mod 10^9+7。

## 解题思路

迭代1到n，每次左移bitLength位再拼接当前值。用BigInt防溢出。

## Solution

[SourceCode](./solution.js)
