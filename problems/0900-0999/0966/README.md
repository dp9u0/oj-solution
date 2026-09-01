# [966] Vowel Spellchecker

## Description

[LeetCode Problem Description](https://leetcode.com/problems/vowel-spellchecker/description/)

* algorithms
* Medium (61.41%)
* Likes:    853
* Dislikes: 1003
* Testcase Example:  '["KiTe","kite","hare","Hare"]\n' +

```md
'["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]'
Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word.
For a given query word, the spell checker handles two categories of spelling mistakes:

Capitalization: If the query matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the case in the wordlist.

Example: wordlist = ['yellow'], query = 'YellOw': correct = 'yellow'
Example: wordlist = ['Yellow'], query = 'yellow': correct = 'Yellow'
Example: wordlist = ['yellow'], query = 'yellow': correct = 'yellow'


Vowel Errors: If after replacing the vowels (&#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, &#39;u&#39;) of the query word with any vowel individually, it matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the match in the wordlist.

Example: wordlist = ['YellOw'], query = 'yollow': correct = 'YellOw'
Example: wordlist = ['YellOw'], query = 'yeellow': correct = '' (no match)
Example: wordlist = ['YellOw'], query = 'yllw': correct = '' (no match)



In addition, the spell checker operates under the following precedence rules:

When the query exactly matches a word in the wordlist (case-sensitive), you should return the same word back.
When the query matches a word up to capitalization, you should return the first such match in the wordlist.
When the query matches a word up to vowel errors, you should return the first such match in the wordlist.
If the query has no matches in the wordlist, you should return the empty string.

Given some queries, return a list of words answer, where answer[i] is the correct word for query = queries[i].

Example 1:
Input: wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
Example 2:
Input: wordlist = ["yellow"], queries = ["YellOw"]
Output: ["yellow"]


Constraints:

1 <= wordlist.length, queries.length <= 5000
1 <= wordlist[i].length, queries[i].length <= 7
wordlist[i] and queries[i] consist only of only English letters.


```

## 中文翻译

给定单词表和查询列表，实现拼写检查器。匹配优先级：1) 精确匹配（大小写敏感）；2) 大小写不敏感匹配，返回 wordlist 中第一个；3) 忽略元音差异匹配（元音可互相替换），返回第一个；4) 无匹配返回空串。

## 解题思路

三个哈希表：
1. `exactSet`：精确匹配，存原始单词。
2. `caseMap`：key 为小写形式，value 为 wordlist 中第一个出现该小写形式的原始单词。
3. `vowelMap`：key 为将所有元音替换为 `#` 后的小写形式，value 为第一个匹配的原始单词。

对每个 query 按优先级依次查找。

## Solution

[SourceCode](./solution.js)
