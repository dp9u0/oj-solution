# [2514] Count Anagrams

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-anagrams/description/)

* algorithms
* Hard (37.41%)
* Likes:    478
* Dislikes: 45
* Testcase Example:  '"too hot"'

```md
You are given a string s containing one or more words. Every consecutive pair of words is separated by a single space &#39; &#39;.
A string t is an anagram of string s if the ith word of t is a permutation of the ith word of s.

For example, 'acb dfe' is an anagram of 'abc def', but 'def cab'and 'adc bef' are not.

Return the number of distinct anagrams of s. Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: s = 'too hot'
Output: 18
Explanation: Some of the anagrams of the given string are 'too hot', 'oot hot', 'oto toh', 'too toh', and 'too oht'.

Example 2:

Input: s = 'aa'
Output: 1
Explanation: There is only one anagram possible for the given string.

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters and spaces &#39; &#39;.
There is single space between consecutive words.


```

## 翻译

给定字符串 s（多个单词，空格分隔），统计 s 的不同 anagram 数量。anagram 定义为每个单词都是原对应单词的排列。

## 解题思路

每个单词的独立排列数为 len! / ∏(count[c]!)。

总答案为所有单词排列数的乘积，模 10^9+7。

预计算阶乘和逆阶fact/invFact（Fermat 小定理求逆元），O(n) 预处理 + O(n) 查询。

## Solution

[SourceCode](./solution.js)
