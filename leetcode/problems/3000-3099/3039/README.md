# [3039] Apply Operations to Make String Empty

## Description

[LeetCode Problem Description](https://leetcode.com/problems/apply-operations-to-make-string-empty/description/)

* algorithms
* Medium (57.51%)
* Likes:    167
* Dislikes: 8
* Testcase Example:  '"aabcbbca"'

```md
You are given a string s.
Consider performing the following operation until s becomes empty:

For every alphabet character from &#39;a&#39; to &#39;z&#39;, remove the first occurrence of that character in s (if it exists).

For example, let initially s = 'aabcbbca'. We do the following operations:

Remove the underlined characters s = 'aabcbbca'. The resulting string is s = 'abbca'.
Remove the underlined characters s = 'abbca'. The resulting string is s = 'ba'.
Remove the underlined characters s = 'ba'. The resulting string is s = ''.

Return the value of the string s right before applying the last operation. In the example above, answer is 'ba'.

Example 1:

Input: s = 'aabcbbca'
Output: 'ba'
Explanation: Explained in the statement.

Example 2:

Input: s = 'abcd'
Output: 'abcd'
Explanation: We do the following operation:
- Remove the underlined characters s = 'abcd'. The resulting string is s = ''.
The string just before the last operation is 'abcd'.


Constraints:

1 <= s.length <= 5 * 105
s consists only of lowercase English letters.


```

## 中文翻译

给定字符串 s，重复执行以下操作直到 s 为空：对 'a' 到 'z' 每个字符，删除 s 中该字符的第一次出现。返回最后一次操作前的字符串。

## 解题思路

统计每个字符的出现频率，最大频率即为操作轮数。最后一轮中出现的字符就是结果，需按原始顺序排列。具体：先统计频率找最大值 maxFreq，然后遍历 s，对于频率等于 maxFreq 的字符，记录其在最后一轮的出现位置，按原始顺序输出。

## Solution

[SourceCode](./solution.js)
