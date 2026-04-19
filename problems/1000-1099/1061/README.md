# [1061] Lexicographically Smallest Equivalent String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/description/)

* algorithms
* Medium (81.14%)
* Likes:    2880
* Dislikes: 186
* Testcase Example:  '"parker"\n"morris"\n"parser"'

```md
You are given two strings of the same length s1 and s2 and a string baseStr.
We say s1[i] and s2[i] are equivalent characters.

For example, if s1 = 'abc' and s2 = 'cde', then we have &#39;a&#39; == &#39;c&#39;, &#39;b&#39; == &#39;d&#39;, and &#39;c&#39; == &#39;e&#39;.

Equivalent characters follow the usual rules of any equivalence relation:

Reflexivity: &#39;a&#39; == &#39;a&#39;.
Symmetry: &#39;a&#39; == &#39;b&#39; implies &#39;b&#39; == &#39;a&#39;.
Transitivity: &#39;a&#39; == &#39;b&#39; and &#39;b&#39; == &#39;c&#39; implies &#39;a&#39; == &#39;c&#39;.

For example, given the equivalency information from s1 = 'abc' and s2 = 'cde', 'acd' and 'aab' are equivalent strings of baseStr = 'eed', and 'aab' is the lexicographically smallest equivalent string of baseStr.
Return the lexicographically smallest equivalent string of baseStr by using the equivalency information from s1 and s2.

Example 1:

Input: s1 = 'parker', s2 = 'morris', baseStr = 'parser'
Output: 'makkek'
Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [m,p], [a,o], [k,r,s], [e,i].
The characters in each group are equivalent and sorted in lexicographical order.
So the answer is 'makkek'.

Example 2:

Input: s1 = 'hello', s2 = 'world', baseStr = 'hold'
Output: 'hdld'
Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [h,w], [d,e,o], [l,r].
So only the second letter &#39;o&#39; in baseStr is changed to &#39;d&#39;, the answer is 'hdld'.

Example 3:

Input: s1 = 'leetcode', s2 = 'programs', baseStr = 'sourcecode'
Output: 'aauaaaaada'
Explanation: We group the equivalent characters in s1 and s2 as [a,o,e,r,s,c], [l,p], [g,t] and [d,m], thus all letters in baseStr except &#39;u&#39; and &#39;d&#39; are transformed to &#39;a&#39;, the answer is 'aauaaaaada'.


Constraints:

1 <= s1.length, s2.length, baseStr <= 1000
s1.length == s2.length
s1, s2, and baseStr consist of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定等长字符串 s1、s2 和 baseStr。s1[i] 和 s2[i] 等价，等价关系满足自反、对称、传递性。返回 baseStr 的字典序最小等价字符串。

## 解题思路

并查集。对每对 (s1[i], s2[i]) 合并。合并时始终将较小的字符作为根，这样 find(x) 直接返回该连通分量中最小的字符。最后对 baseStr 每个字符查找其根即可。

时间复杂度 O(n × α(26))。
