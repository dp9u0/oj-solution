# [2781] Length of the Longest Valid Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/length-of-the-longest-valid-substring/description/)

* algorithms
* Hard (38.35%)
* Likes:    618
* Dislikes: 32
* Testcase Example:  '"cbaaaabc"\n["aaa","cb"]'

```md
You are given a string word and an array of strings forbidden.
A string is called valid if none of its substrings are present in forbidden.
Return the length of the longest valid substring of the string word.
A substring is a contiguous sequence of characters in a string, possibly empty.

Example 1:

Input: word = 'cbaaaabc', forbidden = ['aaa','cb']
Output: 4
Explanation: There are 11 valid substrings in word: 'c', 'b', 'a', 'ba', 'aa', 'bc', 'baa', 'aab', 'ab', 'abc' and 'aabc'. The length of the longest valid substring is 4.
It can be shown that all other substrings contain either 'aaa' or 'cb' as a substring.
Example 2:

Input: word = 'leetcode', forbidden = ['de','le','e']
Output: 4
Explanation: There are 11 valid substrings in word: 'l', 't', 'c', 'o', 'd', 'tc', 'co', 'od', 'tco', 'cod', and 'tcod'. The length of the longest valid substring is 4.
It can be shown that all other substrings contain either 'de', 'le', or 'e' as a substring.


Constraints:

1 <= word.length <= 105
word consists only of lowercase English letters.
1 <= forbidden.length <= 105
1 <= forbidden[i].length <= 10
forbidden[i] consists only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定字符串 word 和禁止字符串数组 forbidden。如果一个字符串不包含任何 forbidden 中的子串，则称其为有效的。返回 word 的最长有效子串的长度。

## 解题思路

滑动窗口 + 哈希集合。将 forbidden 放入 Set。用双指针维护窗口 [left, right]，每次右指针扩展时，检查所有以 right 结尾、长度 ≤ 10 的子串是否在 forbidden 中。若命中，则将 left 移到该禁止子串起始位置的下一个位置。由于 forbidden 子串最长 10，内层最多检查 10 次，总体 O(10n) = O(n)。
