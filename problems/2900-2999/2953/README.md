# [2953] Count Complete Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-complete-substrings/description/)

* algorithms
* Hard (30.23%)
* Likes:    262
* Dislikes: 41
* Testcase Example:  '"igigee"\n2'

```md
You are given a string word and an integer k.
A substring s of word is complete if:

Each character in s occurs exactly k times.
The difference between two adjacent characters is at most 2. That is, for any two adjacent characters c1 and c2 in s, the absolute difference in their positions in the alphabet is at most 2.

Return the number of complete substrings of word.
A substring is a non-empty contiguous sequence of characters in a string.

Example 1:

Input: word = 'igigee', k = 2
Output: 3
Explanation: The complete substrings where each character appears exactly twice and the difference between adjacent characters is at most 2 are: igigee, igigee, igigee.

Example 2:

Input: word = 'aaabbbccc', k = 3
Output: 6
Explanation: The complete substrings where each character appears exactly three times and the difference between adjacent characters is at most 2 are: aaabbbccc, aaabbbccc, aaabbbccc, aaabbbccc, aaabbbccc, aaabbbccc.


Constraints:

1 <= word.length <= 105
word consists only of lowercase English letters.
1 <= k <= word.length


```

## 翻译

给定一个字符串 `word` 和一个整数 `k`。如果一个子串 `s` 满足以下条件，则称其为"完全子串"：
1. 子串中每个字符恰好出现 `k` 次。
2. 子串中任意两个相邻字符在字母表中的位置差不超过 2。

返回 `word` 中完全子串的数量。

## 解题思路

1. **分割段**：首先根据相邻字符差值 > 2 的位置将字符串分成若干段，完全子串不可能跨越断点。
2. **枚举字符种类数 t**：在每个段内，枚举 t（1 到 min(26, len/k)），子串长度为 t*k。
3. **滑动窗口**：对每个 t，用大小为 t*k 的滑动窗口遍历段，用频率数组统计字符出现次数，用 `validCount` 记录频率恰好等于 k 的字符数。当 `validCount == t` 时，说明所有非零频率都等于 k，窗口有效。

时间复杂度：O(26n) = O(n)，空间复杂度：O(26) = O(1)。

## Solution

[SourceCode](./solution.js)
