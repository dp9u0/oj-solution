# [916] Word Subsets

## Description

[LeetCode Problem Description](https://leetcode.com/problems/word-subsets/description/)

* algorithms
* Medium (55.91%)
* Likes:    3538
* Dislikes: 317
* Testcase Example:  '["amazon","apple","facebook","google","leetcode"]\n["e","o"]'

```md
You are given two string arrays words1 and words2.
A string b is a subset of string a if every letter in b occurs in a including multiplicity.

For example, 'wrr' is a subset of 'warrior' but is not a subset of 'world'.

A string a from words1 is universal if for every string b in words2, b is a subset of a.
Return an array of all the universal strings in words1. You may return the answer in any order.

Example 1:

Input: words1 = ['amazon','apple','facebook','google','leetcode'], words2 = ['e','o']
Output: ['facebook','google','leetcode']

Example 2:

Input: words1 = ['amazon','apple','facebook','google','leetcode'], words2 = ['lc','eo']
Output: ['leetcode']

Example 3:

Input: words1 = ['acaac','cccbb','aacbb','caacc','bcbbb'], words2 = ['c','cc','b']
Output: ['cccbb']


Constraints:

1 <= words1.length, words2.length <= 104
1 <= words1[i].length, words2[i].length <= 10
words1[i] and words2[i] consist only of lowercase English letters.
All the strings of words1 are unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 words1 和 words2，找出 words1 中所有"通用"字符串：对 words2 中每个字符串 b，b 的每个字母（含重复次数）都出现在 a 中。

## 解题思路

**Approach: 合并字母计数**

1. 先将 words2 合并为一个统一要求：对每个字母取 words2 中所有字符串该字母计数的最大值
2. 遍历 words1，统计每个字符串的字母计数，与统一要求逐字母比较
3. 满足所有要求的加入结果
4. 复杂度 O((n+m) * L)，L 为字符串最大长度
