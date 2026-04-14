# [1525] Number of Good Ways to Split a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/description/)

* algorithms
* Medium (68.43%)
* Likes:    2123
* Dislikes: 54
* Testcase Example:  '"aacaba"'

```md
You are given a string s.
A split is called good if you can split s into two non-empty strings sleft and sright where their concatenation is equal to s (i.e., sleft + sright = s) and the number of distinct letters in sleft and sright is the same.
Return the number of good splits you can make in s.

Example 1:

Input: s = 'aacaba'
Output: 2
Explanation: There are 5 ways to split 'aacaba' and 2 of them are good.
('a', 'acaba') Left string and right string contains 1 and 3 different letters respectively.
('aa', 'caba') Left string and right string contains 1 and 3 different letters respectively.
('aac', 'aba') Left string and right string contains 2 and 2 different letters respectively (good split).
('aaca', 'ba') Left string and right string contains 2 and 2 different letters respectively (good split).
('aacab', 'a') Left string and right string contains 3 and 1 different letters respectively.

Example 2:

Input: s = 'abcd'
Output: 1
Explanation: Split the string as follows ('ab', 'cd').


Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.


```

## 翻译

给定字符串 s，将其分成左右两个非空子串，如果左右两部分的不同字符数相同则为 good split。求 good split 的个数。

## Approach

先统计每个字符的总频率。从左到右遍历，维护左边的字符集合和右边剩余的字符种类数。当左边种类数等于右边种类数时计数。

用 leftSet 和 rightCount 数组。预计算 rightCount（总频率），遍历时逐步移动字符从右到左。

时间复杂度 O(n)，空间复杂度 O(26) = O(1)。

## Solution

[SourceCode](./solution.js)
