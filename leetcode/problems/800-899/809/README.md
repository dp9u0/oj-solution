# [809] Expressive Words

## Description

[LeetCode Problem Description](https://leetcode.com/problems/expressive-words/description/)

* algorithms
* Medium (46.76%)
* Likes:    918
* Dislikes: 1951
* Testcase Example:  '"heeellooo"\n["hello", "hi", "helo"]'

```md
Sometimes people repeat letters to represent extra feeling. For example:

'hello' -> 'heeellooo'
'hi' -> 'hiiii'

In these strings like 'heeellooo', we have groups of adjacent letters that are all the same: 'h', 'eee', 'll', 'ooo'.
You are given a string s and an array of query strings words. A query word is stretchy if it can be made to be equal to s by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is three or more.

For example, starting with 'hello', we could do an extension on the group 'o' to get 'hellooo', but we cannot get 'helloo' since the group 'oo' has a size less than three. Also, we could do another extension like 'll' -> 'lllll' to get 'helllllooo'. If s = 'helllllooo', then the query word 'hello' would be stretchy because of these two extension operations: query = 'hello' -> 'hellooo' -> 'helllllooo' = s.

Return the number of query strings that are stretchy.

Example 1:

Input: s = 'heeellooo', words = ['hello', 'hi', 'helo']
Output: 1
Explanation:
We can extend 'e' and 'o' in the word 'hello' to get 'heeellooo'.
We can&#39;t extend 'helo' to get 'heeellooo' because the group 'll' is not size 3 or more.

Example 2:

Input: s = 'zzzzzyyyyy', words = ['zzyy','zy','zyy']
Output: 3


Constraints:

1 <= s.length, words.length <= 100
1 <= words[i].length <= 100
s and words[i] consist of lowercase letters.


```

## 题目翻译

给定字符串 s 和单词数组 words。扩展操作：将某组相同字符扩展到至少 3 个。判断每个单词能否通过扩展变成 s。返回可扩展的单词数。

## 解题思路

游程编码：将 s 和每个 word 转为 (字符, 计数) 序列。单词可扩展的条件：1) 字符序列完全相同；2) 对每组，若 s 计数 < 3 则必须相等，若 s 计数 >= 3 则 s 计数 >= word 计数。

## Solution

[SourceCode](./solution.js)
