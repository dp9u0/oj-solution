# [2842] Count K-Subsequences of a String With Maximum Beauty

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-k-subsequences-of-a-string-with-maximum-beauty/description/)

* algorithms
* Hard (30.31%)
* Likes:    361
* Dislikes: 37
* Testcase Example:  '"bcca"\n2'

```md
You are given a string s and an integer k.
A k-subsequence is a subsequence of s, having length k, and all its characters are unique, i.e., every character occurs once.
Let f(c) denote the number of times the character c occurs in s.
The beauty of a k-subsequence is the sum of f(c) for every character c in the k-subsequence.
For example, consider s = 'abbbdd' and k = 2:

f(&#39;a&#39;) = 1, f(&#39;b&#39;) = 3, f(&#39;d&#39;) = 2
Some k-subsequences of s are:

'abbbdd' -> 'ab' having a beauty of f(&#39;a&#39;) + f(&#39;b&#39;) = 4
'abbbdd' -> 'ad' having a beauty of f(&#39;a&#39;) + f(&#39;d&#39;) = 3
'abbbdd' -> 'bd' having a beauty of f(&#39;b&#39;) + f(&#39;d&#39;) = 5



Return an integer denoting the number of k-subsequences whose beauty is the maximum among all k-subsequences. Since the answer may be too large, return it modulo 109 + 7.
A subsequence of a string is a new string formed from the original string by deleting some (possibly none) of the characters without disturbing the relative positions of the remaining characters.
Notes

f(c) is the number of times a character c occurs in s, not a k-subsequence.
Two k-subsequences are considered different if one is formed by an index that is not present in the other. So, two k-subsequences may form the same string.


Example 1:

Input: s = 'bcca', k = 2
Output: 4
Explanation: From s we have f(&#39;a&#39;) = 1, f(&#39;b&#39;) = 1, and f(&#39;c&#39;) = 2.
The k-subsequences of s are:
bcca having a beauty of f(&#39;b&#39;) + f(&#39;c&#39;) = 3
bcca having a beauty of f(&#39;b&#39;) + f(&#39;c&#39;) = 3
bcca having a beauty of f(&#39;b&#39;) + f(&#39;a&#39;) = 2
bcca having a beauty of f(&#39;c&#39;) + f(&#39;a&#39;) = 3
bcca having a beauty of f(&#39;c&#39;) + f(&#39;a&#39;) = 3
There are 4 k-subsequences that have the maximum beauty, 3.
Hence, the answer is 4.

Example 2:

Input: s = 'abbcd', k = 4
Output: 2
Explanation: From s we have f(&#39;a&#39;) = 1, f(&#39;b&#39;) = 2, f(&#39;c&#39;) = 1, and f(&#39;d&#39;) = 1.
The k-subsequences of s are:
abbcd having a beauty of f(&#39;a&#39;) + f(&#39;b&#39;) + f(&#39;c&#39;) + f(&#39;d&#39;) = 5
abbcd having a beauty of f(&#39;a&#39;) + f(&#39;b&#39;) + f(&#39;c&#39;) + f(&#39;d&#39;) = 5
There are 2 k-subsequences that have the maximum beauty, 5.
Hence, the answer is 2.


Constraints:

1 <= s.length <= 2 * 105
1 <= k <= s.length
s consists only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 s 和整数 k。k-子序列是 s 的长度为 k 的子序列，且所有字符各不相同。f(c) 是字符 c 在 s 中出现的次数。k-子序列的美丽值是其中每个字符 c 的 f(c) 之和。求美丽值最大的 k-子序列的数量，对 10^9+7 取模。

## 解题思路

**贪心 + 组合计数**

关键观察：对于任意一组互不相同的字符 C = {c1, ..., ck}，使用这些字符的 k-子序列数量恰好等于 Π f(ci)。这是因为每个字符选一个出现位置，不同字符的位置天然不同，总能构成合法子序列。

因此：
1. 最大美丽值通过选取频率最高的 k 个字符获得
2. 按频率降序排列，确定边界频率（第 k 高的频率）
3. 频率大于边界的字符必须全部选取，频率等于边界的字符需要从中选择
4. 设频率 > 边界的字符有 p 个（乘积 P），频率 = 边界的字符有 q 个，需从中选 r = k-p 个
5. 答案 = C(q, r) × P × boundary^r mod (10^9+7)
