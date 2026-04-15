# [3333] Find the Original Typed String II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-original-typed-string-ii/description/)

* algorithms
* Hard (45.52%)
* Likes:    503
* Dislikes: 78
* Testcase Example:  '"aabbccdd"\n7'

```md
Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for too long, resulting in a character being typed multiple times.
You are given a string word, which represents the final output displayed on Alice&#39;s screen. You are also given a positive integer k.
Return the total number of possible original strings that Alice might have intended to type, if she was trying to type a string of size at least k.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: word = 'aabbccdd', k = 7
Output: 5
Explanation:
The possible strings are: 'aabbccdd', 'aabbccd', 'aabbcdd', 'aabccdd', and 'abbccdd'.

Example 2:

Input: word = 'aabbccdd', k = 8
Output: 1
Explanation:
The only possible string is 'aabbccdd'.

Example 3:

Input: word = 'aaabbb', k = 3
Output: 8


Constraints:

1 <= word.length <= 5 * 105
word consists only of lowercase English letters.
1 <= k <= 2000


```

## 中文翻译

Alice 打字可能多按了键。给定最终输出 word 和最小长度 k，求原始字符串的可能数量（长度 >= k），结果 mod 10^9+7。

## 解题思路

先将 word 分组为连续相同字符的长度数组 cnt[]。每组可以选择 1 到 cnt[i] 个字符。总可能数 = prod(cnt[i])（每组至少选 1 个）。减去长度 < k 的情况。

用排除法：answer = 总数 - 长度 < k 的方案数。长度 < k 即 sum < k，用 DP 计算前 m 组选取后总长度 < k 的方案数，用前缀和优化。

## Solution

[SourceCode](./solution.js)
