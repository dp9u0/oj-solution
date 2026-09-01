# [424] Longest Repeating Character Replacement

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-repeating-character-replacement/description/)

* algorithms
* Medium (59.37%)
* Likes:    13060
* Dislikes: 764
* Testcase Example:  '"ABAB"\n2'

```md
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = 'ABAB', k = 2
Output: 4
Explanation: Replace the two &#39;A&#39;s with two &#39;B&#39;s or vice versa.

Example 2:

Input: s = 'AABABBA', k = 1
Output: 4
Explanation: Replace the one &#39;A&#39; in the middle with &#39;B&#39; and form 'AABBBBA'.
The substring 'BBBB' has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 s 和整数 k，最多可将 k 个字符替换为任意大写字母。返回替换后包含相同字母的最长子串长度。

## 解题思路

滑动窗口。维护窗口内各字符频率和最大频率 maxFreq。窗口有效条件：窗口长度 - maxFreq ≤ k（即需要替换的字符不超过 k 个）。

右端扩展，若无效则左端收缩。maxFreq 不需要在收缩时更新，因为更大的 maxFreq 对应更长的窗口，不影响最终结果。

时间复杂度 O(n)。
