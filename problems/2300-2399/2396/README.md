# [2396] Strictly Palindromic Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/strictly-palindromic-number/description/)

* algorithms
* Medium (90.29%)
* Likes:    830
* Dislikes: 1767
* Testcase Example:  '9'

```md
An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.
Given an integer n, return true if n is strictly palindromic and false otherwise.
A string is palindromic if it reads the same forward and backward.

Example 1:

Input: n = 9
Output: false
Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
In base 3: 9 = 100 (base 3), which is not palindromic.
Therefore, 9 is not strictly palindromic so we return false.
Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

Example 2:

Input: n = 4
Output: false
Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
Therefore, we return false.


Constraints:

4 <= n <= 105


```

## 中文翻译

如果一个整数 n 在 2 到 n-2（含）之间的每一个进制 b 下，其字符串表示都是回文的，则称 n 是严格回文数。
给定一个整数 n，如果 n 是严格回文数则返回 true，否则返回 false。

## 解题思路

数学证明：对于任意 n >= 4，n 在 base n-2 下的表示总是 "12"（即 1*(n-2) + 2 = n），而 "12" 不是回文串。
因此不存在任何 n >= 4 满足严格回文的条件，直接返回 false 即可。

## Solution

[SourceCode](./solution.js)
