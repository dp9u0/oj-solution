# [395] Longest Substring with At Least K Repeating Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/)

* algorithms
* Medium (46.21%)
* Likes:    6742
* Dislikes: 571
* Testcase Example:  '"aaabb"\n3'

```md
Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.
if no such substring exists, return 0.

Example 1:

Input: s = 'aaabb', k = 3
Output: 3
Explanation: The longest substring is 'aaa', as &#39;a&#39; is repeated 3 times.

Example 2:

Input: s = 'ababbc', k = 2
Output: 5
Explanation: The longest substring is 'ababb', as &#39;a&#39; is repeated 2 times and &#39;b&#39; is repeated 3 times.


Constraints:

1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 s 和整数 k，找到最长的子串，使得子串中每个字符的出现次数都 >= k。返回该子串的长度。

## 解题思路

**分治 / 枚举不同字符数**

方法：枚举子串中包含的不同字符数 unique（1 到 26），用滑动窗口找到恰好包含 unique 种不同字符且每种出现次数都 >= k 的最长子串。

对每个 unique 值，维护窗口内的字符频率、不同字符数 countUnique、满足 >= k 的字符数 countK。当 countUnique > unique 时收缩左边界。当 countUnique == unique 且 countK == unique 时更新答案。

时间复杂度 O(26 * n)，空间复杂度 O(26)。
