# [3297] Count Substrings That Can Be Rearranged to Contain a String I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/description/)

* algorithms
* Medium (42.96%)
* Likes:    126
* Dislikes: 27
* Testcase Example:  '"bcca"\n"abc"'

```md
You are given two strings word1 and word2.
A string x is called valid if x can be rearranged to have word2 as a prefix.
Return the total number of valid substrings of word1.

Example 1:

Input: word1 = 'bcca', word2 = 'abc'
Output: 1
Explanation:
The only valid substring is 'bcca' which can be rearranged to 'abcc' having 'abc' as a prefix.

Example 2:

Input: word1 = 'abcabc', word2 = 'abc'
Output: 10
Explanation:
All the substrings except substrings of size 1 and size 2 are valid.

Example 3:

Input: word1 = 'abcabc', word2 = 'aaabc'
Output: 0


Constraints:

1 <= word1.length <= 105
1 <= word2.length <= 104
word1 and word2 consist only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 `word1`、`word2`。子串合法 = 重排后能以 word2 为前缀（字符多重集覆盖）。返回合法子串总数。

示例 1：`'bcca','abc'` → `1`；示例 2：`'abcabc','abc'` → `10`；示例 3：`'abcabc','aaabc'` → `0`

约束：`|word1| <= 10^5`（II 版的削弱版）

## 解题思路

与 3298 完全相同的**双指针滑窗**覆盖多重集做法（前 30 分钟已解 II 版）：每个左端累计 `n − r + 1`，O(n)。