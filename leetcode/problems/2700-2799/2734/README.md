# [2734] Lexicographically Smallest String After Substring Operation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/description/)

* algorithms
* Medium (34.78%)
* Likes:    281
* Dislikes: 195
* Testcase Example:  '"cbabc"'

```md
Given a string s consisting of lowercase English letters. Perform the following operation:

Select any non-empty substring then replace every letter of the substring with the preceding letter of the English alphabet. For example, &#39;b&#39; is converted to &#39;a&#39;, and &#39;a&#39; is converted to &#39;z&#39;.

Return the lexicographically smallest string after performing the operation.

Example 1:

Input: s = 'cbabc'
Output: 'baabc'
Explanation:
Perform the operation on the substring starting at index 0, and ending at index 1 inclusive.

Example 2:

Input: s = 'aa'
Output: 'az'
Explanation:
Perform the operation on the last letter.

Example 3:

Input: s = 'acbbc'
Output: 'abaab'
Explanation:
Perform the operation on the substring starting at index 1, and ending at index 4 inclusive.

Example 4:

Input: s = 'leetcode'
Output: 'kddsbncd'
Explanation:
Perform the operation on the entire string.


Constraints:

1 <= s.length <= 3 * 105
s consists of lowercase English letters


```

## 题目翻译

给定小写字母字符串，选一个非空子串，每个字符变为前一个字母（a→z）。求操作后字典序最小的字符串。

## 解题思路

贪心。找到第一个不是 'a' 的字符开始，对连续的非 'a' 字符执行操作（每个减 1）。如果全是 'a'，则只把最后一个 'a' 变成 'z'。

关键：操作不应该包含 'a'（因为 a→z 会变大），所以操作区间是第一个连续的非 'a' 段。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
