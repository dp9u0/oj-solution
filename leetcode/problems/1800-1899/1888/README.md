# [1888] Minimum Number of Flips to Make the Binary String Alternating

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/description/)

* algorithms
* Medium (53.52%)
* Likes:    1811
* Dislikes: 122
* Testcase Example:  '"111000"'

```md
You are given a binary string s. You are allowed to perform two types of operations on the string in any sequence:

Type-1: Remove the character at the start of the string s and append it to the end of the string.
Type-2: Pick any character in s and flip its value, i.e., if its value is &#39;0&#39; it becomes &#39;1&#39; and vice-versa.

Return the minimum number of type-2 operations you need to perform such that s becomes alternating.
The string is called alternating if no two adjacent characters are equal.

For example, the strings '010' and '1010' are alternating, while the string '0100' is not.


Example 1:

Input: s = '111000'
Output: 2
Explanation: Use the first operation two times to make s = '100011'.
Then, use the second operation on the third and sixth elements to make s = '101010'.

Example 2:

Input: s = '010'
Output: 0
Explanation: The string is already alternating.

Example 3:

Input: s = '1110'
Output: 1
Explanation: Use the second operation on the second element to make s = '1010'.


Constraints:

1 <= s.length <= 105
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个二进制字符串 s，可以进行两种操作：Type-1 将首字符移到末尾（旋转）；Type-2 翻转任意字符。求最少 Type-2 操作次数，使字符串变为交替字符串（无相邻相同字符）。

## Approach

将 s 拼接为 ss = s + s，用长度为 n 的滑动窗口枚举所有旋转。交替串有两种模式："0101..." 和 "1010..."。

预处理 ss 中每个位置与两种模式不匹配的前缀和 diff0[i] 和 diff1[i]。对于窗口 [i, i+n)，操作数为 min(diff0[i+n] - diff0[i], diff1[i+n] - diff1[i])。

遍历所有窗口取最小值。

时间复杂度 O(n)，空间 O(n)。
