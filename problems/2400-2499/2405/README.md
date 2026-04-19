# [2405] Optimal Partition of String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/optimal-partition-of-string/description/)

* algorithms
* Medium (78.38%)
* Likes:    2812
* Dislikes: 114
* Testcase Example:  '"abacaba"'

```md
Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.
Return the minimum number of substrings in such a partition.
Note that each character should belong to exactly one substring in a partition.

Example 1:

Input: s = 'abacaba'
Output: 4
Explanation:
Two possible partitions are ('a','ba','cab','a') and ('ab','a','ca','ba').
It can be shown that 4 is the minimum number of substrings needed.

Example 2:

Input: s = 'ssssss'
Output: 6
Explanation:
The only valid partition is ('s','s','s','s','s','s').


Constraints:

1 <= s.length <= 105
s consists of only English lowercase letters.


```

## 翻译

给定字符串 `s`，将其分割为一个或多个子串，使得每个子串中的字符都是唯一的（不重复）。返回最少需要分割成多少个子串。

## Approach

贪心：从左到右遍历，用集合记录当前子串中出现过的字符。遇到重复字符时，开始新的子串并重置集合。用位运算（26位整数）替代集合可进一步优化。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
