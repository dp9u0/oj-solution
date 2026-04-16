# [3746] Minimum String Length After Balanced Removals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-string-length-after-balanced-removals/description/)

* algorithms
* Medium (78.36%)
* Likes:    60
* Dislikes: 8
* Testcase Example:  '"aabbab"'

```md
You are given a string s consisting only of the characters &#39;a&#39; and &#39;b&#39;.
You are allowed to repeatedly remove any substring where the number of &#39;a&#39; characters is equal to the number of &#39;b&#39; characters. After each removal, the remaining parts of the string are concatenated together without gaps.
Return an integer denoting the minimum possible length of the string after performing any number of such operations.

Example 1:

Input: s = 'aabbab'
Output: 0
Explanation:
The substring 'aabbab' has three &#39;a&#39; and three &#39;b&#39;. Since their counts are equal, we can remove the entire string directly. The minimum length is 0.

Example 2:

Input: s = 'aaaa'
Output: 4
Explanation:
Every substring of 'aaaa' contains only &#39;a&#39; characters. No substring can be removed as a result, so the minimum length remains 4.

Example 3:

Input: s = 'aaabb'
Output: 1
Explanation:
First, remove the substring 'ab', leaving 'aab'. Next, remove the new substring 'ab', leaving 'a'. No further removals are possible, so the minimum length is 1.


Constraints:

1 <= s.length <= 105
s[i] is either &#39;a&#39; or &#39;b&#39;.


```

## 中文翻译

给定仅含 'a' 和 'b' 的字符串 s，可以反复删除任意 a 和 b 数量相等的子串。返回最终字符串的最小长度。

## 解题思路

关键观察：可以删除的字符数量等于 min(countA, countB) * 2。因为每个可删除的子串含相同数量的 a 和 b，最多能配对的数量由较少者决定。因此结果为 |countA - countB|。

## Solution

[SourceCode](./solution.js)
