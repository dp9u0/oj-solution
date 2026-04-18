# [1316] Distinct Echo Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/distinct-echo-substrings/description/)

* algorithms
* Hard (53.16%)
* Likes:    338
* Dislikes: 208
* Testcase Example:  '"abcabcabc"'

```md
Return the number of distinct non-empty substrings of textthat can be written as the concatenation of some string with itself (i.e. it can be written as a + awhere a is some string).

Example 1:

Input: text = 'abcabcabc'
Output: 3
Explanation: The 3 substrings are 'abcabc', 'bcabca' and 'cabcab'.

Example 2:

Input: text = 'leetcodeleetcode'
Output: 2
Explanation: The 2 substrings are 'ee' and 'leetcodeleetcode'.


Constraints:

1 <= text.length <= 2000
texthas only lowercase English letters.


```

## 中文翻译

返回 text 中不同的非空子串个数，这些子串可以写成某个字符串与自身的拼接（a + a）。

约束：text.length <= 2000

## 解题思路

**字符串哈希 / 暴力枚举**

1. 枚举所有可能的 echo 子串：长度为 2l，起始位置 i，则 text[i..i+l-1] == text[i+l..i+2l-1]。
2. 用滚动哈希或直接比较判断两半是否相等。
3. 用 Set 去重。
4. O(n^2) 枚举 + O(1) 哈希比较。

## Solution

[SourceCode](./solution.js)
