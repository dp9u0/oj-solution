# [2375] Construct Smallest Number From DI String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-smallest-number-from-di-string/description/)

* algorithms
* Medium (85.61%)
* Likes:    1667
* Dislikes: 89
* Testcase Example:  '"IIIDIDDD"'

```md
You are given a 0-indexed string pattern of length n consisting of the characters &#39;I&#39; meaning increasing and &#39;D&#39; meaning decreasing.
A 0-indexed string num of length n + 1 is created using the following conditions:

num consists of the digits &#39;1&#39; to &#39;9&#39;, where each digit is used at most once.
If pattern[i] == &#39;I&#39;, then num[i] < num[i + 1].
If pattern[i] == &#39;D&#39;, then num[i] > num[i + 1].

Return the lexicographically smallest possible string num that meets the conditions.

Example 1:

Input: pattern = 'IIIDIDDD'
Output: '123549876'
Explanation:
At indices 0, 1, 2, and 4 we must have that num[i] < num[i+1].
At indices 3, 5, 6, and 7 we must have that num[i] > num[i+1].
Some possible values of num are '245639871', '135749862', and '123849765'.
It can be proven that '123549876' is the smallest possible num that meets the conditions.
Note that '123414321' is not possible because the digit &#39;1&#39; is used more than once.
Example 2:

Input: pattern = 'DDD'
Output: '4321'
Explanation:
Some possible values of num are '9876', '7321', and '8742'.
It can be proven that '4321' is the smallest possible num that meets the conditions.


Constraints:

1 <= pattern.length <= 8
pattern consists of only the letters &#39;I&#39; and &#39;D&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定一个由 'I'（递增）和 'D'（递减）组成的字符串 pattern，长度为 n。构造一个长度为 n+1 的数字字符串 num，使用数字 1-9 各最多一次，满足 pattern[i]='I' 时 num[i] < num[i+1]，pattern[i]='D' 时 num[i] > num[i+1]。返回字典序最小的 num。

## 解题思路

贪心 + 区间反转。初始构造 "123...n+1"（字典序最小）。然后找出所有连续 'D' 段 [l, r]，对每段反转 result[l..r+1]。这是因为连续 'D' 要求递减，反转递增序列对应区间即可得到最小的递减序列。
