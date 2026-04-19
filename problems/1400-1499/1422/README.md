# [1422] Maximum Score After Splitting a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/)

* algorithms
* Easy (65.04%)
* Likes:    2198
* Dislikes: 91
* Testcase Example:  '"011101"'

```md
Given astring sof zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).
The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

Example 1:

Input: s = '011101'
Output: 5
Explanation:
All possible ways of splitting s into two non-empty substrings are:
left = '0' and right = '11101', score = 1 + 4 = 5
left = '01' and right = '1101', score = 1 + 3 = 4
left = '011' and right = '101', score = 1 + 2 = 3
left = '0111' and right = '01', score = 1 + 1 = 2
left = '01110' and right = '1', score = 2 + 1 = 3

Example 2:

Input: s = '00111'
Output: 5
Explanation: When left = '00' and right = '111', we get the maximum score = 2 + 3 = 5

Example 3:

Input: s = '1111'
Output: 3


Constraints:

2 <= s.length <= 500
The string s consists of characters &#39;0&#39; and &#39;1&#39; only.


```

## 翻译

给定一个由 '0' 和 '1' 组成的字符串 `s`，将其分成两个非空子串（左子串和右子串），分数 = 左子串中 '0' 的个数 + 右子串中 '1' 的个数。返回最大分数。

## Approach

遍历所有分割点（1 到 n-1），维护左侧 0 的计数和右侧 1 的计数。先统计整个字符串中 1 的总数作为右侧初始值，然后从左到右遍历，遇到 '0' 左侧计数+1，遇到 '1' 右侧计数-1，在每个分割点更新最大分数。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
