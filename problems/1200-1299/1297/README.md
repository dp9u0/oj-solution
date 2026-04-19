# [1297] Maximum Number of Occurrences of a Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/description/)

* algorithms
* Medium (54.39%)
* Likes:    1241
* Dislikes: 426
* Testcase Example:  '"aababcaab"\n2\n3\n4'

```md
Given a string s, return the maximum number of occurrences of any substring under the following rules:

The number of unique characters in the substring must be less than or equal to maxLetters.
The substring size must be between minSize and maxSize inclusive.


Example 1:

Input: s = 'aababcaab', maxLetters = 2, minSize = 3, maxSize = 4
Output: 2
Explanation: Substring 'aab' has 2 occurrences in the original string.
It satisfies the conditions, 2 unique letters and size 3 (between minSize and maxSize).

Example 2:

Input: s = 'aaaa', maxLetters = 1, minSize = 3, maxSize = 3
Output: 2
Explanation: Substring 'aaa' occur 2 times in the string. It can overlap.


Constraints:

1 <= s.length <= 105
1 <= maxLetters <= 26
1 <= minSize <= maxSize <= min(26, s.length)
s consists of only lowercase English letters.


```

## 翻译

给定字符串s，找满足条件的子串的最大出现次数：不同字符数<=maxLetters，长度在[minSize, maxSize]之间。

## 解题思路

关键观察：长子串的每次出现都包含一个minSize的短子串，所以只需检查长度为minSize的子串。用滑动窗口+哈希表计数。

## Solution

[SourceCode](./solution.js)
