# [3579] Minimum Steps to Convert String with Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-steps-to-convert-string-with-operations/description/)

* algorithms
* Hard (43.29%)
* Likes:    45
* Dislikes: 3
* Testcase Example:  '"abcdf"\n"dacbe"'

```md
You are given two strings, word1 and word2, of equal length. You need to transform word1 into word2.
For this, divide word1 into one or more contiguous substrings. For each substring substr you can perform the following operations:


Replace: Replace the character at any one index of substr with another lowercase English letter.


Swap: Swap any two characters in substr.


Reverse Substring: Reverse substr.


Each of these counts as one operation and each character of each substring can be used in each type of operation at most once (i.e. no single index may be involved in more than one replace, one swap, or one reverse).
Return the minimum number of operations required to transform word1 into word2.

Example 1:

Input: word1 = 'abcdf', word2 = 'dacbe'
Output: 4
Explanation:
Divide word1 into 'ab', 'c', and 'df'. The operations are:

For the substring 'ab',

Perform operation of type 3 on 'ab' -> 'ba'.
Perform operation of type 1 on 'ba' -> 'da'.


For the substring 'c' do no operations.
For the substring 'df',

Perform operation of type 1 on 'df' -> 'bf'.
Perform operation of type 1 on 'bf' -> 'be'.




Example 2:

Input: word1 = 'abceded', word2 = 'baecfef'
Output: 4
Explanation:
Divide word1 into 'ab', 'ce', and 'ded'. The operations are:

For the substring 'ab',

Perform operation of type 2 on 'ab' -> 'ba'.


For the substring 'ce',

Perform operation of type 2 on 'ce' -> 'ec'.


For the substring 'ded',

Perform operation of type 1 on 'ded' -> 'fed'.
Perform operation of type 1 on 'fed' -> 'fef'.




Example 3:

Input: word1 = 'abcdef', word2 = 'fedabc'
Output: 2
Explanation:
Divide word1 into 'abcdef'. The operations are:

For the substring 'abcdef',

Perform operation of type 3 on 'abcdef' -> 'fedcba'.
Perform operation of type 2 on 'fedcba' -> 'fedabc'.





Constraints:

1 <= word1.length == word2.length <= 100
word1 and word2 consist only of lowercase English letters.


```

## 翻译

给定两个等长字符串 word1 和 word2，将 word1 划分为若干连续子串。对每个子串可执行：Replace（替换一个字符）、Swap（交换两个字符）、Reverse（反转子串）。每种操作每个位置最多参与一次。求将 word1 变为 word2 的最少操作数。

## 解题思路

区间DP。dp[i] = 将 word1[0..i-1] 变为 word2[0..i-1] 的最少操作数。转移：dp[i] = min(dp[j] + cost(j, i-1))。

对每个子串 [l,r]，两种策略取最小值：
- 不翻转：直接统计不匹配位置，用 swap 配对互补字符对，剩余 replace。cost = mismatches - maxSwaps。
- 翻转（+1次操作）：翻转后每个位置 p 的字符变为 word1[l+r-p]，再同样统计不匹配和 swap 配对。

swap 配对：按 (startChar, targetChar) 分组，互补对 (c1,c2) 与 (c2,c1) 可形成 min(cnt1, cnt2) 个 swap。时间 O(n^3)，n≤100。

## Solution

[SourceCode](./solution.js)
