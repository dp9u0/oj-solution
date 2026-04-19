# [2559] Count Vowel Strings in Ranges

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-vowel-strings-in-ranges/description/)

* algorithms
* Medium (67.82%)
* Likes:    1181
* Dislikes: 72
* Testcase Example:  '["aba","bcb","ece","aa","e"]\n[[0,2],[1,4],[1,1]]'

```md
You are given a 0-indexed array of strings words and a 2D array of integers queries.
Each query queries[i] = [li, ri] asks us to find the number of strings present at the indices ranging from li to ri (both inclusive) of words that start and end with a vowel.
Return an array ans of size queries.length, where ans[i] is the answer to the ith query.
Note that the vowel letters are &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39;.

Example 1:

Input: words = ['aba','bcb','ece','aa','e'], queries = [[0,2],[1,4],[1,1]]
Output: [2,3,0]
Explanation: The strings starting and ending with a vowel are 'aba', 'ece', 'aa' and 'e'.
The answer to the query [0,2] is 2 (strings 'aba' and 'ece').
to query [1,4] is 3 (strings 'ece', 'aa', 'e').
to query [1,1] is 0.
We return [2,3,0].

Example 2:

Input: words = ['a','e','i'], queries = [[0,2],[0,1],[2,2]]
Output: [3,2,1]
Explanation: Every string satisfies the conditions, so we return [3,2,1].

Constraints:

1 <= words.length <= 105
1 <= words[i].length <= 40
words[i] consists only of lowercase English letters.
sum(words[i].length) <= 3 * 105
1 <= queries.length <= 105
0 <= li <= ri <words.length


```

## 题目翻译

给定字符串数组 words 和查询数组 queries，每个查询 [l, r] 问 words[l..r] 中有多少个字符串以元音开头且以元音结尾。

## 解题思路

**前缀和**

预处理每个位置是否满足条件，构建前缀和数组，每个查询 O(1) 回答。

## Solution

[SourceCode](./solution.js)
