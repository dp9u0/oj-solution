# [767] Reorganize String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reorganize-string/description/)

* algorithms
* Medium (56.96%)
* Likes:    9235
* Dislikes: 285
* Testcase Example:  '"aab"'

```md
Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
Return any possible rearrangement of s or return '' if not possible.

Example 1:
Input: s = "aab"
Output: "aba"
Example 2:
Input: s = "aaab"
Output: ""


Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.


```

## 翻译

给定字符串 `s`，重新排列字符使得任意相邻字符不同。返回任意合法排列，若不可能返回空串。

## Approach

**贪心 + 最大堆。** 统计字符频率，每次取频率最高的两个不同字符交替放置。若某个字符频率超过 `(n+1)/2` 则不可能。

用数组模拟：按频率降序排列字符，先填偶数位再填奇数位。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
