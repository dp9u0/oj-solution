# [2506] Count Pairs Of Similar Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-pairs-of-similar-strings/description/)

* algorithms
* Easy (73.70%)
* Likes:    589
* Dislikes: 41
* Testcase Example:  '["aba","aabb","abcd","bac","aabc"]'

```md
You are given a 0-indexed string array words.
Two strings are similar if they consist of the same characters.

For example, 'abca' and 'cba' are similar since both consist of characters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.
However, 'abacba' and 'bcfd' are not similar since they do not consist of the same characters.

Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

Example 1:

Input: words = ['aba','aabb','abcd','bac','aabc']
Output: 2
Explanation: There are 2 pairs that satisfy the conditions:
- i = 0 and j = 1 : both words[0] and words[1] only consist of characters &#39;a&#39; and &#39;b&#39;.
- i = 3 and j = 4 : both words[3] and words[4] only consist of characters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.

Example 2:

Input: words = ['aabb','ab','ba']
Output: 3
Explanation: There are 3 pairs that satisfy the conditions:
- i = 0 and j = 1 : both words[0] and words[1] only consist of characters &#39;a&#39; and &#39;b&#39;.
- i = 0 and j = 2 : both words[0] and words[2] only consist of characters &#39;a&#39; and &#39;b&#39;.
- i = 1 and j = 2 : both words[1] and words[2] only consist of characters &#39;a&#39; and &#39;b&#39;.

Example 3:

Input: words = ['nba','cba','dba']
Output: 0
Explanation: Since there does not exist any pair that satisfies the conditions, we return 0.

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consist of only lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定字符串数组 words，两个字符串相似当且仅当它们包含相同的字符集合。求满足 i < j 且 words[i] 与 words[j] 相似的配对数。

## 解题思路

对每个单词提取去重排序后的字符集作为签名（key），用 Map 统计每个签名出现的次数。对每组大小为 k 的签名，配对数为 C(k,2) = k*(k-1)/2。
