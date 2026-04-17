# [2272] Substring With Largest Variance

## Description

[LeetCode Problem Description](https://leetcode.com/problems/substring-with-largest-variance/description/)

* algorithms
* Hard (46.01%)
* Likes:    1921
* Dislikes: 213
* Testcase Example:  '"aababbb"'

```md
The variance of a string is defined as the largest difference between the number of occurrences of any 2 characters present in the string. Note the two characters may or may not be the same.
Given a string s consisting of lowercase English letters only, return the largest variance possible among all substrings of s.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = 'aababbb'
Output: 3
Explanation:
All possible variances along with their respective substrings are listed below:
- Variance 0 for substrings 'a', 'aa', 'ab', 'abab', 'aababb', 'ba', 'b', 'bb', and 'bbb'.
- Variance 1 for substrings 'aab', 'aba', 'abb', 'aabab', 'ababb', 'aababbb', and 'bab'.
- Variance 2 for substrings 'aaba', 'ababbb', 'abbb', and 'babb'.
- Variance 3 for substring 'babbb'.
Since the largest possible variance is 3, we return it.

Example 2:

Input: s = 'abcde'
Output: 0
Explanation:
No letter occurs more than once in s, so the variance of every substring is 0.


Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.


```

## 中文翻译

字符串的方差定义为任意两个出现字符次数的最大差值。给定字符串 s，返回所有子串中可能的最大方差。

## 解题思路

**枚举字符对 + 修改版 Kadane**：

1. 方差由某对字符 (a, b) 的 |count(a)-count(b)| 决定
2. 枚举所有有序字符对 (major, minor)，major=+1, minor=-1
3. 修改版 Kadane：f0=任意子数组最大和，f1=必须包含至少一个 minor 的最大和
4. 遇到 minor 时 f1 = max(f1-1, f0-1)，用旧 f0 避免更新顺序问题
5. 时间 O(U²×n)，U 为不同字符数（≤26）

## Solution

[SourceCode](./solution.js)
