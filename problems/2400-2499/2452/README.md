# [2452] Words Within Two Edits of Dictionary

## Description

[LeetCode Problem Description](https://leetcode.com/problems/words-within-two-edits-of-dictionary/description/)

* algorithms
* Medium (61.78%)
* Likes:    326
* Dislikes: 25
* Testcase Example:  '["word","note","ants","wood"]\n["wood","joke","moat"]'

```md
You are given two string arrays, queries and dictionary. All words in each array comprise of lowercase English letters and have the same length.
In one edit you can take a word from queries, and change any letter in it to any other letter. Find all words from queries that, after a maximum of two edits, equal some word from dictionary.
Return a list of all words from queries, that match with some word from dictionary after a maximum of two edits. Return the words in the same order they appear in queries.

Example 1:

Input: queries = ['word','note','ants','wood'], dictionary = ['wood','joke','moat']
Output: ['word','note','wood']
Explanation:
- Changing the &#39;r&#39; in 'word' to &#39;o&#39; allows it to equal the dictionary word 'wood'.
- Changing the &#39;n&#39; to &#39;j&#39; and the &#39;t&#39; to &#39;k&#39; in 'note' changes it to 'joke'.
- It would take more than 2 edits for 'ants' to equal a dictionary word.
- 'wood' can remain unchanged (0 edits) and match the corresponding dictionary word.
Thus, we return ['word','note','wood'].

Example 2:

Input: queries = ['yes'], dictionary = ['not']
Output: []
Explanation:
Applying any two edits to 'yes' cannot make it equal to 'not'. Thus, we return an empty array.


Constraints:

1 <= queries.length, dictionary.length <= 100
n == queries[i].length == dictionary[j].length
1 <= n <= 100
All queries[i] and dictionary[j] are composed of lowercase English letters.


```

## 题目翻译

给定 queries 和 dictionary 两个等长字符串数组。对每个 query，判断是否存在一个 dictionary 词使两者不同字符数 ≤ 2。返回所有满足条件的 query，保持原顺序。

## 解题思路

暴力枚举：对每个 query，遍历所有 dictionary 词，统计不同字符数 ≤ 2 即匹配。约束小（100×100×100），O(n²·len) 可过。

## Solution

[SourceCode](./solution.js)
