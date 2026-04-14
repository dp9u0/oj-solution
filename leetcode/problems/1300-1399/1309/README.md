# [1309] Decrypt String from Alphabet to Integer Mapping

## Description

[LeetCode Problem Description](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/description/)

* algorithms
* Easy (80.56%)
* Likes:    1610
* Dislikes: 120
* Testcase Example:  '"10#11#12"'

```md
You are given a string s formed by digits and &#39;#&#39;. We want to map s to English lowercase characters as follows:

Characters (&#39;a&#39; to &#39;i&#39;) are represented by (&#39;1&#39; to &#39;9&#39;) respectively.
Characters (&#39;j&#39; to &#39;z&#39;) are represented by (&#39;10#&#39; to &#39;26#&#39;) respectively.

Return the string formed after mapping.
The test cases are generated so that a unique mapping will always exist.

Example 1:

Input: s = '10#11#12'
Output: 'jkab'
Explanation: 'j' -> '10#' , 'k' -> '11#' , 'a' -> '1' , 'b' -> '2'.

Example 2:

Input: s = '1326#'
Output: 'acz'


Constraints:

1 <= s.length <= 1000
s consists of digits and the &#39;#&#39; letter.
s will be a valid string such that mapping is always possible.


```

## 翻译

1-9 映射到 a-i，10#-26# 映射到 j-z。解密字符串。

## Approach

从右往左扫描：如果当前位置是 #，则取前两个数字组成 10-26；否则取当前数字 1-9。转换后加到结果前。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
