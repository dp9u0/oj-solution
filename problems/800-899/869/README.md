# [869] Reordered Power of 2

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reordered-power-of-2/description/)

* algorithms
* Medium (65.95%)
* Likes:    2542
* Dislikes: 499
* Testcase Example:  '1'

```md
You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.
Return true if and only if we can do this so that the resulting number is a power of two.

Example 1:

Input: n = 1
Output: true

Example 2:

Input: n = 10
Output: false


Constraints:

1 <= n <= 109


```

## 中文翻译

给定整数 n，能否将其数字重排（前导非零）使结果为 2 的幂。

## 解题思路

**数字计数签名匹配**

1. 预计算所有 2 的幂（2^0 ~ 2^29）的数字计数签名（每个数字 0-9 出现次数）
2. 计算 n 的数字计数签名
3. 比较是否与某个 2 的幂的签名相同

时间复杂度：O(30 * 10)，空间复杂度：O(30 * 10)

## Solution

[SourceCode](./solution.js)
