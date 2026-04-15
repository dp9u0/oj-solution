# [1417] Reformat The String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reformat-the-string/description/)

* algorithms
* Easy (52.14%)
* Likes:    622
* Dislikes: 110
* Testcase Example:  '"a0b1c2"'

```md
You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).
You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.
Return the reformatted string or return an empty string if it is impossible to reformat the string.

Example 1:

Input: s = 'a0b1c2'
Output: '0a1b2c'
Explanation: No two adjacent characters have the same type in '0a1b2c'. 'a0b1c2', '0a1b2c', '0c2a1b' are also valid permutations.

Example 2:

Input: s = 'leetcode'
Output: ''
Explanation: 'leetcode' has only characters so we cannot separate them by digits.

Example 3:

Input: s = '1229857369'
Output: ''
Explanation: '1229857369' has only digits so we cannot separate them by characters.


Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and/or digits.


```

## 中文翻译

给定字母数字字符串 s，将其重新排列使得相邻字符类型不同（字母和数字交替）。不可能则返回空串。

## 解题思路

分离字母和数字，若两者数量差超过 1 则不可能。数量多的放奇数位（或第一位），交替拼入即可。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
