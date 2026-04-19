# [2047] Number of Valid Words in a Sentence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/description/)

* algorithms
* Easy (31.08%)
* Likes:    355
* Dislikes: 829
* Testcase Example:  '"cat and  dog"'

```md
A sentence consists of lowercase letters (&#39;a&#39; to &#39;z&#39;), digits (&#39;0&#39; to &#39;9&#39;), hyphens (&#39;-&#39;), punctuation marks (&#39;!&#39;, &#39;.&#39;, and &#39;,&#39;), and spaces (&#39; &#39;) only. Each sentence can be broken down into one or more tokens separated by one or more spaces &#39; &#39;.
A token is a valid word if all three of the following are true:

It only contains lowercase letters, hyphens, and/or punctuation (no digits).
There is at most one hyphen &#39;-&#39;. If present, it must be surrounded by lowercase characters ('a-b' is valid, but '-ab' and 'ab-' are not valid).
There is at most one punctuation mark. If present, it must be at the end of the token ('ab,', 'cd!', and '.' are valid, but 'a!b' and 'c.,' are not valid).

Examples of valid words include 'a-b.', 'afad', 'ba-c', 'a!', and '!'.
Given a string sentence, return the number of valid words in sentence.

Example 1:

Input: sentence = 'cat and  dog'
Output: 3
Explanation: The valid words in the sentence are 'cat', 'and', and 'dog'.

Example 2:

Input: sentence = '!this  1-s b8d!'
Output: 0
Explanation: There are no valid words in the sentence.
'!this' is invalid because it starts with a punctuation mark.
'1-s' and 'b8d' are invalid because they contain digits.

Example 3:

Input: sentence = 'alice and  bob are playing stone-game10'
Output: 5
Explanation: The valid words in the sentence are 'alice', 'and', 'bob', 'are', and 'playing'.
'stone-game10' is invalid because it contains digits.


Constraints:

1 <= sentence.length <= 1000
sentence only contains lowercase English letters, digits, &#39; &#39;, &#39;-&#39;, &#39;!&#39;, &#39;.&#39;, and &#39;,&#39;.
There will be at least1 token.


```

## 翻译

给定句子，按空格分割为 token，统计合法单词数。合法条件：不含数字、至多一个连字符且两侧为小写字母、至多一个标点且在末尾。

## Approach

按空格分割，对每个 token 逐字符验证三条规则：无数字、连字符最多一个且前后为字母、标点最多一个且仅在末尾。

## Solution

[SourceCode](./solution.js)
