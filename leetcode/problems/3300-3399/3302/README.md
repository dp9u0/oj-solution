# [3302] Find the Lexicographically Smallest Valid Sequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/description/)

* algorithms
* Medium (21.77%)
* Likes:    161
* Dislikes: 33
* Testcase Example:  '"vbcca"\n"abc"'

```md
You are given two strings word1 and word2.
A string x is called almost equal to y if you can change at most one character in x to make it identical to y.
A sequence of indices seq is called valid if:

The indices are sorted in ascending order.
Concatenating the characters at these indices in word1 in the same order results in a string that is almost equal to word2.

Return an array of size word2.length representing the lexicographically smallest valid sequence of indices. If no such sequence of indices exists, return an empty array.
Note that the answer must represent the lexicographically smallest array, not the corresponding string formed by those indices.

Example 1:

Input: word1 = 'vbcca', word2 = 'abc'
Output: [0,1,2]
Explanation:
The lexicographically smallest valid sequence of indices is [0, 1, 2]:

Change word1[0] to &#39;a&#39;.
word1[1] is already &#39;b&#39;.
word1[2] is already &#39;c&#39;.


Example 2:

Input: word1 = 'bacdc', word2 = 'abc'
Output: [1,2,4]
Explanation:
The lexicographically smallest valid sequence of indices is [1, 2, 4]:

word1[1] is already &#39;a&#39;.
Change word1[2] to &#39;b&#39;.
word1[4] is already &#39;c&#39;.


Example 3:

Input: word1 = 'aaaaaa', word2 = 'aaabc'
Output: []
Explanation:
There is no valid sequence of indices.

Example 4:

Input: word1 = 'abc', word2 = 'ab'
Output: [0,1]


Constraints:

1 <= word2.length < word1.length <= 3 * 105
word1 and word2 consist only of lowercase English letters.


```

## 翻译

给定word1和word2，找字典序最小的递增索引序列，使word1中对应字符拼接后与word2几乎相等（至多改一个字符）。

## 解题思路

预处理suf[i]=word1[i:]能匹配word2后缀的最大长度。贪心匹配：对word2每个位置，优先找word1中匹配的字符；若不匹配且未用过修改，检查剩余部分能否完全匹配（用suf判断），可以则用修改。

## Solution

[SourceCode](./solution.js)
