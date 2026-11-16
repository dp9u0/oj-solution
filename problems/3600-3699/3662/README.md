# [3662] 按频率筛选字符

## Description


```md
https://leetcode.cn/problems/filter-characters-by-frequency/description/
* algorithms
* Easy (85.86%)
* Dislikes: -
* Testcase Example:  '"aadbbcccca"\n3'
给定一个包含小写英文字母的字符串 s 和一个整数 k。
你的任务是构造一个新的字符串，其中只包含在整个字符串 s 中出现次数 少于 k 次的字符。新字符串中字符的顺序必须与 s 中的 顺序相同。
返回结果字符串。如果没有字符满足，返回一个空字符串。
注意：出现次数少于 k 次的字符的每次出现都被保留。

示例 1：
输入：s = "aadbbcccca", k = 3
输出："dbb"
解释：
s 中字符出现的频率：
'a' 出现 3 次
'd' 出现 1 次
'b' 出现 2 次
'c' 出现 4 次
只有 'd' 和 'b' 出现少于 3 次。保持它们的顺序，结果是 "dbb"。
示例 2：
输入：s = "xyz", k = 2
输出："xyz"
解释：
所有字符（'x'，'y'，'z'）只出现一次，比 2 少。因此返回整个字符串。

提示：
1 <= s.length <= 100
s 只包含小写英文字母。
1 <= k <= s.length
Hint 1: Count the frequency of each character using a 26-entry array or a frequency map, then iterate through the string and append each character whose frequency is less than k to the result.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given a string `s` of lowercase English letters and an integer `k`. Build a new string containing only the characters that appear **fewer than** `k` times in `s`, preserving their original order. Every occurrence of such a character is kept. If no character qualifies, return an empty string.

**Example 1:**
Input: s = "aadbbcccca", k = 3
Output: "dbb"
Explanation: 'a' appears 3 times, 'd' 1 time, 'b' 2 times, 'c' 4 times; only 'd' and 'b' appear fewer than 3 times.

**Constraints:**
- 1 <= s.length <= 100
- s consists of lowercase English letters.
- 1 <= k <= s.length

## Approach

两遍扫描:第一遍 26 长度数组统计频率;第二遍按原序拼接频率 < k 的字符。

时间 O(n),空间 O(26)。
