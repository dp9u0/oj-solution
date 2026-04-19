# [1170] Compare Strings by Frequency of the Smallest Character

## Description

[LeetCode Problem Description](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/description/)

* algorithms
* Medium (63.29%)
* Likes:    753
* Dislikes: 982
* Testcase Example:  '["cbd"]\n["zaaaz"]'

```md
Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = 'dcce' then f(s) = 2 because the lexicographically smallest character is &#39;c&#39;, which has a frequency of 2.
You are given an array of strings words and another array of query strings queries. For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words.
Return an integer array answer, where each answer[i] is the answer to the ith query.

Example 1:

Input: queries = ['cbd'], words = ['zaaaz']
Output: [1]
Explanation: On the first query we have f('cbd') = 1, f('zaaaz') = 3 so f('cbd') < f('zaaaz').

Example 2:

Input: queries = ['bbb','cc'], words = ['a','aa','aaa','aaaa']
Output: [1,2]
Explanation: On the first query only f('bbb') < f('aaaa'). On the second query both f('aaa') and f('aaaa') are both > f('cc').


Constraints:

1 <= queries.length <= 2000
1 <= words.length <= 2000
1 <= queries[i].length, words[i].length <= 10
queries[i][j], words[i][j] consist of lowercase English letters.


```

## 中文翻译

f(s) 定义为字符串 s 中字典序最小字符的出现次数。对每个 query，统计 words 中 f 值大于 f(query) 的个数。

## 解题思路

计算所有 words 的 f 值并排序，对每个 query 的 f 值二分查找大于它的个数。

## Solution

[SourceCode](./solution.js)
