# [3760] Maximum Substrings With Distinct Start

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-substrings-with-distinct-start/description/)

* algorithms
* Medium (91.40%)
* Likes:    80
* Dislikes: 16
* Testcase Example:  '"abab"'

```md
You are given a string s consisting of lowercase English letters.
Return an integer denoting the maximum number of substrings you can split s into such that each substring starts with a distinct character (i.e., no two substrings start with the same character).

Example 1:

Input: s = 'abab'
Output: 2
Explanation:

Split 'abab' into 'a' and 'bab'.
Each substring starts with a distinct character i.e &#39;a&#39; and &#39;b&#39;. Thus, the answer is 2.


Example 2:

Input: s = 'abcd'
Output: 4
Explanation:

Split 'abcd' into 'a', 'b', 'c', and 'd'.
Each substring starts with a distinct character. Thus, the answer is 4.


Example 3:

Input: s = 'aaaa'
Output: 1
Explanation:

All characters in 'aaaa' are &#39;a&#39;.
Only one substring can start with &#39;a&#39;. Thus, the answer is 1.



Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.


```

## 翻译

将字符串分成若干子串，每个子串首字符不同，求最多能分几段。

## 解题思路

每个子串首字符必须不同，所以最多26段。统计出现过的不同字符数即为答案。

## Solution

[SourceCode](./solution.js)
