# [761] Special Binary String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/special-binary-string/description/)

* algorithms
* Hard (79.42%)
* Likes:    1180
* Dislikes: 303
* Testcase Example:  '"11011000"'

```md
Special binary strings are binary strings with the following two properties:

The number of 0&#39;s is equal to the number of 1&#39;s.
Every prefix of the binary string has at least as many 1&#39;s as 0&#39;s.

You are given a special binary string s.
A move consists of choosing two consecutive, non-empty, special substrings of s, and swapping them. Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.
Return the lexicographically largest resulting string possible after applying the mentioned operations on the string.

Example 1:

Input: s = '11011000'
Output: '11100100'
Explanation: The strings '10' [occuring at s[1]] and '1100' [at s[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.

Example 2:

Input: s = '10'
Output: '10'


Constraints:

1 <= s.length <= 50
s[i] is either &#39;0&#39; or &#39;1&#39;.
s is a special binary string.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

"特殊二进制串"：0/1 数量相等且任意前缀 1 数 ≥ 0 数（平衡括号串的 1=左括号）。操作：交换两个**相邻的**特殊子串。返回能得到的最字典序最大结果。

示例 1：`'11011000'` → `'11100100'`；示例 2：`'10'` → `'10'`

## 解题思路

经典递归：特殊串可分解为若干**不可分特殊段**（前缀平衡首次归零处切分），每段形如 `1 <inner> 0`（inner 递归处理），段与段相邻可任意重排 → 各段递归最优后**降序排序拼接**即全局最大。O(n²) 级别。