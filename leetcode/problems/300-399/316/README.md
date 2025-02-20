# [316] Remove Duplicate Letters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-duplicate-letters/description/)

* algorithms
* Medium (50.49%)
* Likes:    8850
* Dislikes: 651
* Testcase Example:  '"bcabc"'

```md
Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Example 1:

Input: s = 'bcabc'
Output: 'abc'

Example 2:

Input: s = 'cbacdcbc'
Output: 'acdb'


Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.


Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

```

## 题目翻译

给定一个字符串 s，去除字符串中的重复字母，使得每个字母只出现一次。需要确保返回结果的字典序最小（不能打乱其他字符的相对位置）。

示例 1：
输入：s = "bcabc"
输出："abc"

示例 2：
输入：s = "cbacdcbc"
输出："acdb"

提示：
1. 1 <= s.length <= 104
2. s 仅由小写英文字母组成

注意：本题与 1081 题相同：https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

## Solution

[SourceCode](./solution.js)
