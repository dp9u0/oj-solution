# [1844] Replace All Digits with Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/replace-all-digits-with-characters/description/)

* algorithms
* Easy (82.69%)
* Likes:    899
* Dislikes: 117
* Testcase Example:  '"a1c1e1"'

```md
You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
You must perform an operation shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift(&#39;a&#39;, 5) = &#39;f&#39; and shift(&#39;x&#39;, 0) = &#39;x&#39;.

For every odd index i, you want to replace the digit s[i] with the result of the shift(s[i-1], s[i]) operation.
Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed &#39;z&#39;.
Note that shift(c, x) is not a preloaded function, but an operation to be implemented as part of the solution.

Example 1:

Input: s = 'a1c1e1'
Output: 'abcdef'
Explanation: The digits are replaced as follows:
- s[1] -> shift(&#39;a&#39;,1) = &#39;b&#39;
- s[3] -> shift(&#39;c&#39;,1) = &#39;d&#39;
- s[5] -> shift(&#39;e&#39;,1) = &#39;f&#39;
Example 2:

Input: s = 'a1b2c3d4e'
Output: 'abbdcfdhe'
Explanation: The digits are replaced as follows:
- s[1] -> shift(&#39;a&#39;,1) = &#39;b&#39;
- s[3] -> shift(&#39;b&#39;,2) = &#39;d&#39;
- s[5] -> shift(&#39;c&#39;,3) = &#39;f&#39;
- s[7] -> shift(&#39;d&#39;,4) = &#39;h&#39;

Constraints:

1 <= s.length <= 100
s consists only of lowercase English letters and digits.
shift(s[i-1], s[i]) <= &#39;z&#39; for all odd indices i.


```

## 题目翻译

给定字符串 s（偶数位为小写字母，奇数位为数字），将每个奇数位的数字替换为 shift(前一个字符, 该数字)，即前一个字符后移 x 位。

## 解题思路

**模拟**

遍历奇数位，用 charCode 偏移替换。O(n)。

## Solution

[SourceCode](./solution.js)
