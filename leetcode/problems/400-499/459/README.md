# [459] Repeated Substring Pattern

## Description

* algorithms
* Easy (39.03%)
* Total Accepted:    69.3K
* Total Submissions: 177.6K
* Testcase Example:  '"abab"'

```md
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:
Input: "aba"
Output: False
Example 3:
Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

```

## Solution

方法一,构造KMP部分匹配表,例如 ababab 匹配表形式 为 [0,0,1,2,3,4],验证是否是该种形式即可

方法二,`(s + s).slice(1, 2 * s.length - 1).indexOf(s) !== -1;`

[SourceCode](./solution.js)