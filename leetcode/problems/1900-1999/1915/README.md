# [1915] Number of Wonderful Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-wonderful-substrings/description/)

* algorithms
* Medium (66.59%)
* Likes:    1833
* Dislikes: 284
* Testcase Example:  '"aba"'

```md
A wonderful string is a string where at most one letter appears an odd number of times.

For example, 'ccjjc' and 'abab' are wonderful, but 'ab' is not.

Given a string word that consists of the first ten lowercase English letters (&#39;a&#39; through &#39;j&#39;), return the number of wonderful non-empty substrings in word. If the same substring appears multiple times in word, then count each occurrence separately.
A substring is a contiguous sequence of characters in a string.

Example 1:

Input: word = 'aba'
Output: 4
Explanation: The four wonderful substrings are underlined below:
- 'aba' -> 'a'
- 'aba' -> 'b'
- 'aba' -> 'a'
- 'aba' -> 'aba'

Example 2:

Input: word = 'aabb'
Output: 9
Explanation: The nine wonderful substrings are underlined below:
- 'aabb' -> 'a'
- 'aabb' -> 'aa'
- 'aabb' -> 'aab'
- 'aabb' -> 'aabb'
- 'aabb' -> 'a'
- 'aabb' -> 'abb'
- 'aabb' -> 'b'
- 'aabb' -> 'bb'
- 'aabb' -> 'b'

Example 3:

Input: word = 'he'
Output: 2
Explanation: The two wonderful substrings are underlined below:
- 'he' -> 'h'
- 'he' -> 'e'


Constraints:

1 <= word.length <= 105
word consists of lowercase English letters from &#39;a&#39;to &#39;j&#39;.


```

## 中文翻译

给定由前 10 个小写字母 (a-j) 组成的字符串 word，返回其中"奇妙子串"的数量。奇妙字符串指最多只有一个字母出现奇数次。相同子串出现多次需分别计数。

## 解题思路

前缀异或 + 状态计数。用 10 位 bitmask 表示 a-j 各字母出现奇偶性。遍历字符串维护前缀 mask，对每个位置统计之前出现过的 mask 数量（所有字母偶数次）以及翻转任意一位后的 mask 数量（恰好一个字母奇数次）。用数组计数代替 HashMap 提高效率（mask 范围 0-1023）。

时间复杂度：O(n * 10)，空间复杂度：O(2^10) = O(1024)

## Solution

[SourceCode](./solution.js)
