# [3398] Smallest Substring With Identical Characters I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-substring-with-identical-characters-i/description/)

* algorithms
* Hard (20.46%)
* Likes:    97
* Dislikes: 5
* Testcase Example:  '"000001"\n1'

```md
You are given a binary string s of length n and an integer numOps.
You are allowed to perform the following operation on s at most numOps times:

Select any index i (where 0 <= i < n) and flip s[i]. If s[i] == &#39;1&#39;, change s[i] to &#39;0&#39; and vice versa.

You need to minimize the length of the longest substring of s such that all the characters in the substring are identical.
Return the minimum length after the operations.

Example 1:

Input: s = '000001', numOps = 1
Output: 2
Explanation:
By changing s[2] to &#39;1&#39;, s becomes '001001'. The longest substrings with identical characters are s[0..1] and s[3..4].

Example 2:

Input: s = '0000', numOps = 2
Output: 1
Explanation:
By changing s[0] and s[2] to &#39;1&#39;, s becomes '1010'.

Example 3:

Input: s = '0101', numOps = 0
Output: 1


Constraints:

1 <= n == s.length <= 1000
s consists only of &#39;0&#39; and &#39;1&#39;.
0 <= numOps <= n


```

## 翻译

给定01串 s 和最多 numOps 次翻转操作（翻转单个字符），求操作后最长全相同字符子串的最小可能长度。

## 解题思路

二分答案 + 贪心验证。二分最长子串长度 len。验证：对每段连续相同字符的 run，长度为 runLen，需要 ceil(runLen / (len+1)) 次操作将其拆成最长不超过 len 的段。若总操作数 <= numOps 则 len 可行。O(n log n)。

## Solution

[SourceCode](./solution.js)
