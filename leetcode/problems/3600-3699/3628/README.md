# [3628] Maximum Number of Subsequences After One Inserting

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-subsequences-after-one-inserting/description/)

* algorithms
* Medium (31.84%)
* Likes:    136
* Dislikes: 5
* Testcase Example:  '"LMCT"'

```md
You are given a string s consisting of uppercase English letters.
You are allowed to insert at most one uppercase English letter at any position (including the beginning or end) of the string.
Return the maximum number of 'LCT' subsequences that can be formed in the resulting string after at most one insertion.

Example 1:

Input: s = 'LMCT'
Output: 2
Explanation:
We can insert a 'L' at the beginning of the string s to make 'LLMCT', which has 2 subsequences, at indices [0, 3, 4] and [1, 3, 4].

Example 2:

Input: s = 'LCCT'
Output: 4
Explanation:
We can insert a 'L' at the beginning of the string s to make 'LLCCT', which has 4 subsequences, at indices [0, 2, 4], [0, 3, 4], [1, 2, 4] and [1, 3, 4].

Example 3:

Input: s = 'L'
Output: 0
Explanation:
Since it is not possible to obtain the subsequence 'LCT' by inserting a single letter, the result is 0.


Constraints:

1 <= s.length <= 105
s consists of uppercase English letters.


```

## 翻译

给定大写字母字符串s，可插入最多一个字符。求插入后能形成的"LCT"子序列的最大数量。

## 解题思路

分别考虑插入L、C、T的最优位置：插L在最前面新增所有CT子序列数；插T在最后面新增所有LC子序列数；插C在位置p新增prefix_L[p]*suffix_T[p]。原始LCT数+三者最大值即为答案。

## Solution

[SourceCode](./solution.js)
