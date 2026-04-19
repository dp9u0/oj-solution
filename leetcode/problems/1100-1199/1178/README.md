# [1178] Number of Valid Words for Each Puzzle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/description/)

* algorithms
* Hard (47.80%)
* Likes:    1305
* Dislikes: 89
* Testcase Example:  '["aaaa","asas","able","ability","actt","actor","access"]\n' +

```md
'["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]'
With respect to a given puzzle string, a word is valid if both the following conditions are satisfied:

word contains the first letter of puzzle.
For each letter in word, that letter is in puzzle.

For example, if the puzzle is 'abcdefg', then valid words are 'faced', 'cabbage', and 'baggage', while
invalid words are 'beefed' (does not include &#39;a&#39;) and 'based' (includes &#39;s&#39; which is not in the puzzle).



Return an array answer, where answer[i] is the number of words in the given word list words that is valid with respect to the puzzle puzzles[i].

Example 1:

Input: words = ['aaaa','asas','able','ability','actt','actor','access'], puzzles = ['aboveyz','abrodyz','abslute','absoryz','actresz','gaswxyz']
Output: [1,1,3,2,4,0]
Explanation:
1 valid word for 'aboveyz' : 'aaaa'
1 valid word for 'abrodyz' : 'aaaa'
3 valid words for 'abslute' : 'aaaa', 'asas', 'able'
2 valid words for 'absoryz' : 'aaaa', 'asas'
4 valid words for 'actresz' : 'aaaa', 'asas', 'actt', 'access'
There are no valid words for 'gaswxyz' cause none of the words in the list contains letter &#39;g&#39;.

Example 2:

Input: words = ['apple','pleas','please'], puzzles = ['aelwxyz','aelpxyz','aelpsxy','saelpxy','xaelpsy']
Output: [0,1,3,2,0]


Constraints:

1 <= words.length <= 105
4 <= words[i].length <= 50
1 <= puzzles.length <= 104
puzzles[i].length == 7
words[i] and puzzles[i] consist of lowercase English letters.
Each puzzles[i] does not contain repeated characters.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定单词列表和谜题列表。对每个谜题，统计满足以下条件的单词数：(1) 单词包含谜题首字母；(2) 单词的每个字母都在谜题中出现。谜题恰好 7 个不重复字母。

## 解题思路

将每个单词转为 26 位字母掩码，统计每种掩码的频率。对每个谜题，枚举其 7 个字母的所有包含首字母的子集掩码（共 2^6=64 个），对每个子集掩码查表累加频率。
