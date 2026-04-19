# [1003] Check If Word Is Valid After Substitutions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/description/)

* algorithms
* Medium (60.33%)
* Likes:    1016
* Dislikes: 470
* Testcase Example:  '"aabcbc"'

```md
Given a string s, determine if it is valid.
A string s is valid if, starting with an empty string t = '', you can transform t into s after performing the following operation any number of times:

Insert string 'abc' into any position in t. More formally, t becomes tleft + 'abc' + tright, where t == tleft + tright. Note that tleft and tright may be empty.

Return true if s is a valid string, otherwise, return false.

Example 1:

Input: s = 'aabcbc'
Output: true
Explanation:
'' -> 'abc' -> 'aabcbc'
Thus, 'aabcbc' is valid.
Example 2:

Input: s = 'abcabcababcc'
Output: true
Explanation:
'' -> 'abc' -> 'abcabc' -> 'abcabcabc' -> 'abcabcababcc'
Thus, 'abcabcababcc' is valid.

Example 3:

Input: s = 'abccba'
Output: false
Explanation: It is impossible to get 'abccba' using the operation.


Constraints:

1 <= s.length <= 2 * 104
s consists of letters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;


```

## 翻译

给定字符串s，判断是否可以通过在空串中反复插入"abc"得到。等价于判断s是否能通过反复消除"abc"子串变为空串。

## 解题思路

用栈模拟。遍历s，将字符压栈，每当栈顶三个字符为"abc"时弹出。最终栈为空则有效。

## Solution

[SourceCode](./solution.js)
