# [3223] Minimum Length of String After Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-length-of-string-after-operations/description/)

* algorithms
* Medium (75.03%)
* Likes:    727
* Dislikes: 53
* Testcase Example:  '"abaacbcbb"'

```md
You are given a string s.
You can perform the following process on s any number of times:

Choose an index i in the string such that there is at least one character to the left of index i that is equal to s[i], and at least one character to the right that is also equal to s[i].
Delete the closest occurrence of s[i] located to the left of i.
Delete the closest occurrence of s[i] located to the right of i.

Return the minimum length of the final string s that you can achieve.

Example 1:

Input: s = 'abaacbcbb'
Output: 5
Explanation:
We do the following operations:

Choose index 2, then remove the characters at indices 0 and 3. The resulting string is s = 'bacbcbb'.
Choose index 3, then remove the characters at indices 0 and 5. The resulting string is s = 'acbcb'.


Example 2:

Input: s = 'aa'
Output: 2
Explanation:
We cannot perform any operations, so we return the length of the original string.


Constraints:

1 <= s.length <= 2 * 105
s consists only of lowercase English letters.


```

## 翻译

给定字符串 `s`，每次操作选一个位置 i，若其左右各有至少一个相同字符，则删除左右最近的相同字符。返回最终字符串的最小长度。

## Approach

**字符频率统计。** 每次操作对某个字符消耗 3 个（左边删 1、中间留 1、右边删 1）。对于每个字符，如果频率为偶数，最终剩 2 个；如果频率为奇数，最终剩 1 个。但频率 <= 2 的无法操作，保持原样。

具体：对每个字符频率 `freq`，最终剩余 `freq % 2 === 0 ? 2 : 1`（当 freq >= 1 时）。

时间复杂度：O(n)，空间复杂度：O(26) = O(1)

## Solution

[SourceCode](./solution.js)
