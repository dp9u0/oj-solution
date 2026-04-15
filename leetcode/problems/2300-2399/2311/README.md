# [2311] Longest Binary Subsequence Less Than or Equal to K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/description/)

* algorithms
* Medium (52.79%)
* Likes:    1144
* Dislikes: 79
* Testcase Example:  '"1001010"\n5'

```md
You are given a binary string s and a positive integer k.
Return the length of the longest subsequence of s that makes up a binary number less than or equal to k.
Note:

The subsequence can contain leading zeroes.
The empty string is considered to be equal to 0.
A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.


Example 1:

Input: s = '1001010', k = 5
Output: 5
Explanation: The longest subsequence of s that makes up a binary number less than or equal to 5 is '00010', as this number is equal to 2 in decimal.
Note that '00100' and '00101' are also possible, which are equal to 4 and 5 in decimal, respectively.
The length of this subsequence is 5, so 5 is returned.

Example 2:

Input: s = '00101001', k = 1
Output: 6
Explanation: '000001' is the longest subsequence of s that makes up a binary number less than or equal to 1, as this number is equal to 1 in decimal.
The length of this subsequence is 6, so 6 is returned.


Constraints:

1 <= s.length <= 1000
s[i] is either &#39;0&#39; or &#39;1&#39;.
1 <= k <= 109


```

## 中文翻译

给定二进制字符串 s 和正整数 k，求 s 的最长子序列使得其对应的二进制数值 ≤ k。子序列可以有前导零。

## 解题思路

贪心：尽可能多地取 '0'，然后从右向左尝试添加 '1'，维护当前值 val，若 val + 2^bit ≤ k 则添加。具体：先取所有 '0'，再从右往左扫描，对于每个 '1'，若加入后值不超过 k 则加入。

实现：用 val 记录当前子序列的数值，bit 记录当前位。从右向左遍历，'0' 直接加入（不改变值），'1' 需检查 val + (1 << bit) ≤ k。

## Solution

[SourceCode](./solution.js)
