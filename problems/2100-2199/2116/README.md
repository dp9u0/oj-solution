# [2116] Check if a Parentheses String Can Be Valid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/description/)

* algorithms
* Medium (45.12%)
* Likes:    2033
* Dislikes: 134
* Testcase Example:  '"))()))"\n"010100"'

```md
A parentheses string is a non-empty string consisting only of &#39;(&#39; and &#39;)&#39;. It is valid if any of the following conditions is true:

It is ().
It can be written as AB (A concatenated with B), where A and B are valid parentheses strings.
It can be written as (A), where A is a valid parentheses string.

You are given a parentheses string s and a string locked, both of length n. locked is a binary string consisting only of &#39;0&#39;s and &#39;1&#39;s. For each index i of locked,

If locked[i] is &#39;1&#39;, you cannot change s[i].
But if locked[i] is &#39;0&#39;, you can change s[i] to either &#39;(&#39; or &#39;)&#39;.

Return true if you can make s a valid parentheses string. Otherwise, return false.

Example 1:


Input: s = '))()))', locked = '010100'
Output: true
Explanation: locked[1] == &#39;1&#39; and locked[3] == &#39;1&#39;, so we cannot change s[1] or s[3].
We change s[0] and s[4] to &#39;(&#39; while leaving s[2] and s[5] unchanged to make s valid.
Example 2:

Input: s = '()()', locked = '0000'
Output: true
Explanation: We do not need to make any changes because s is already valid.

Example 3:

Input: s = ')', locked = '0'
Output: false
Explanation: locked permits us to change s[0].
Changing s[0] to either &#39;(&#39; or &#39;)&#39; will not make s valid.

Example 4:

Input: s = '(((())(((())', locked = '111111010111'
Output: true
Explanation: locked permits us to change s[6] and s[8].
We change s[6] and s[8] to &#39;)&#39; to make s valid.


Constraints:

n == s.length == locked.length
1 <= n <= 105
s[i] is either &#39;(&#39; or &#39;)&#39;.
locked[i] is either &#39;0&#39; or &#39;1&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定括号字符串 s 和锁定字符串 locked。locked[i]='1' 表示 s[i] 不可变，'0' 表示可以变为 '(' 或 ')'。判断能否将 s 变为合法括号字符串。

## 解题思路

贪心扫描两次。从左到右：把可变和 '(' 都当作可能的 '('，统计最大可能的 '(' 数量，任何时候右括号（锁定的 ')'）太多则 false。从右到左同理：把可变和 ')' 当作可能的 ')'。最后还需要检查长度是否为偶数。O(n)。
