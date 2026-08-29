# [3926] Count Valid Word Occurrences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-valid-word-occurrences/description/)

* algorithms
* Medium (47.88%)
* Likes:    49
* Dislikes: 50
* Testcase Example:  '["hello wor","ld hello"]\n["hello","world","wor"]'

```md
You are given an array of strings chunks. Concatenate all strings in chunks in order to form a string s.
You are also given an array of strings queries.
A joiner hyphen is a hyphen character &#39;-&#39; in s whose previous and next characters both exist and are lowercase English letters.
A word is a maximal substring of s consisting only of lowercase English letters and joiner hyphens.
All other characters, including spaces and hyphens that are not joiner hyphens, are treated as separators.
Return an integer array ans, where ans[i] is the number of times queries[i] appears as a word in s.

Example 1:

Input: chunks = ['hello wor','ld hello'], queries = ['hello','world','wor']
Output: [2,1,0]
Explanation:

After concatenating all strings in chunks, s = 'hello world hello'.
The words are 'hello', 'world', and 'hello'.
The substring 'wor' appears inside 'world', but it is not a full word.


Example 2:

Input: chunks = ['a-b a--b ','a-','b'], queries = ['a-b','a','b']
Output: [2,1,1]
Explanation:

After concatenating all strings in chunks, s = 'a-b a--b a-b'.
In 'a-b', the hyphen is a joiner hyphen because it is between two lowercase English letters, so 'a-b' is one word.
In 'a--b', neither hyphen is a joiner hyphen, so it is split into the words 'a' and 'b'.
Therefore, the words are 'a-b', 'a', 'b', and 'a-b'.


Example 3:

Input: chunks = ['-cat dog- mouse'], queries = ['cat','dog','mouse','cat-dog']
Output: [1,1,1,0]
Explanation:

After concatenating all strings in chunks, s = '-cat dog- mouse'.
The leading hyphen before 'cat' and the trailing hyphen after 'dog' are not joiner hyphens, so they are separators.
The words are 'cat', 'dog', and 'mouse'.



Constraints:

1 <= chunks.length <= 105
1 <= chunks[i].length <= 105
The total length of all strings in chunks does not exceed 105.
chunks[i] consists only of lowercase English letters, spaces, and &#39;-&#39;.
1 <= queries.length <= 105
1 <= queries[i].length <= 105
The total length of all strings in queries does not exceed 105.
queries[i] consists only of lowercase English letters and &#39;-&#39;.
queries[i] is a valid word: it does not start or end with &#39;-&#39;, and it does not contain two consecutive hyphens.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

把 `chunks` 按序拼接成 `s`。**连接符连字符** = 前一个和后一个字符都存在且都是小写字母的 `'-'`。**单词** = 仅由小写字母和连接符连字符组成的极大子串；其余字符（含空格与非连接符连字符）都是分隔符。对每个 `queries[i]` 返回它作为**完整单词**出现的次数。

示例 1：`['hello wor','ld hello'], ['hello','world','wor']` → `[2,1,0]`（注意 chunk 拼接跨越，`wor` 只是子串不算）
示例 2：`['a-b a--b ','a-','b'], ['a-b','a','b']` → `[2,1,1]`（`a-b` 是一个词，`a--b` 拆成 `a`、`b`）
示例 3：`['-cat dog- mouse'], ['cat','dog','mouse','cat-dog']` → `[1,1,1,0]`

约束：总长 ≤ 10^5，只含小写字母、空格、`'-'`

## 解题思路

一遍扫描分词 + 哈希计数：

- 先 `chunks.join('')`（查询必须在完整 s 上做，词可能跨越 chunk 边界）；
- 字符 c 属于词当且仅当：是小写字母，或 c === '-' 且 `s[i-1]`、`s[i+1]` 都是小写字母（按 s 全局判断，边界不存在则不是）；
- 非词字符即分隔符，结束当前词入 Map；最后查询直接查表。

复杂度 O(|s| + |queries|)。
