# [2207] Maximize Number of Subsequences in a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/description/)

* algorithms
* Medium (36.03%)
* Likes:    533
* Dislikes: 37
* Testcase Example:  '"abdcdbc"\n"ac"'

```md
You are given a 0-indexed string text and another 0-indexed string pattern of length 2, both of which consist of only lowercase English letters.
You can add either pattern[0] or pattern[1] anywhere in text exactly once. Note that the character can be added even at the beginning or at the end of text.
Return the maximum number of times pattern can occur as a subsequence of the modified text.
A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

Example 1:

Input: text = 'abdcdbc', pattern = 'ac'
Output: 4
Explanation:
If we add pattern[0] = &#39;a&#39; in between text[1] and text[2], we get 'abadcdbc'. Now, the number of times 'ac' occurs as a subsequence is 4.
Some other strings which have 4 subsequences 'ac' after adding a character to text are 'aabdcdbc' and 'abdacdbc'.
However, strings such as 'abdcadbc', 'abdccdbc', and 'abdcdbcc', although obtainable, have only 3 subsequences 'ac' and are thus suboptimal.
It can be shown that it is not possible to get more than 4 subsequences 'ac' by adding only one character.

Example 2:

Input: text = 'aabb', pattern = 'ab'
Output: 6
Explanation:
Some of the strings which can be obtained from text and have 6 subsequences 'ab' are 'aaabb', 'aaabb', and 'aabbb'.


Constraints:

1 <= text.length <= 105
pattern.length == 2
text and pattern consist only of lowercase English letters.


```

## 翻译

给定text和长度为2的pattern。可以向text中任意位置添加pattern[0]或pattern[1]恰好一次，使pattern作为子序列出现的次数最大。

## 解题思路

计算原始子序列计数（遍历text，对每个pattern[1]累加前面pattern[0]的数量）。最优策略：添加pattern[0]在开头（额外增加pattern[1]的数量）或添加pattern[1]在末尾（额外增加pattern[0]的数量），取较大值。

## Solution

[SourceCode](./solution.js)
