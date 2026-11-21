# [2067] 等计数子串的数量

## Description


```md
https://leetcode.cn/problems/number-of-equal-count-substrings/description/
* algorithms
* Medium (55.15%)
* Likes:    12
* Dislikes: -
* Testcase Example:  '"aaabcbbcc"\n3'
给你一个下标从 0 开始的字符串 s，只包含小写英文字母和一个整数 count。如果 s 的 子串 中的每种字母在子串中恰好出现 count 次，这个子串就被称为 等计数子串。
返回 s 中 等计数子串 的个数。
子串 是字符串中连续的非空字符序列。

示例 1:
输入: s = "aaabcbbcc", count = 3
输出: 3
解释:
从下标 0 开始到下标 2 结束的子串是 "aaa"。
字母 “a” 在子串中恰好出现了 3 次。
从下标 3 开始到下标 8 结束的子串是 "bcbbcc"。
字母 “b” 和 “c” 在子串中恰好出现了 3 次。
从下标 0 开始到下标 8 结束的子串是 "aaabcbbcc"。
字母 “a”、“b” 和 “c” 在子串中恰好出现了 3 次。
示例 2:
输入: s = "abcd", count = 2
输出: 0
解释:
每种字母在 s 中出现的次数小于 count。
因此，s 中没有子串是等计数子串，返回 0。
示例 3:
输入: s = "a", count = 5
输出: 0
解释:
每种字母在 s 中出现的次数小于 count。
因此，s 中没有子串是等计数子串，返回 0。

提示:
1 <= s.length <= 3 * 104
1 <= count <= 3 * 104
s 只由小写英文字母组成。
Hint 1: The brute force solution is to check every substring, which would TLE. How can we improve this solution?
Hint 2: In an equal count substring, the first character appears count times, the second character appears count times, and so on.
Hint 3: The length of an equal count substring is the number of unique characters multiplied by count.
Hint 4: The length of all equal count substrings are multiples of count.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given a lowercase string `s` and an integer `count`, a substring is an equal-count substring if every letter present in it occurs exactly `count` times. Return the number of equal-count substrings.

Example 1:
Input: s = "aaabcbbcc", count = 3
Output: 3 ("aaa", "bcbbcc", "aaabcbbcc")

Example 2:
Input: s = "abcd", count = 2
Output: 0

Example 3:
Input: s = "a", count = 5
Output: 0

Constraints: 1 <= s.length <= 3 * 10^4, 1 <= count <= 3 * 10^4.

## Approach

An equal-count substring with k distinct letters has length exactly k * count. Enumerate k = 1..26; for each, slide a fixed-length window of size k * count while maintaining per-letter counts, the number of distinct letters, and the number of letters exceeding count. A window qualifies iff distinct == k and no letter exceeds count.

Time O(26 * n).
