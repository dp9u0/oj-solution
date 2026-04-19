# [3365] Rearrange K Substrings to Form Target String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/description/)

* algorithms
* Medium (56.72%)
* Likes:    88
* Dislikes: 7
* Testcase Example:  '"abcd"\n"cdab"\n2'

```md
You are given two strings s and t, both of which are anagrams of each other, and an integer k.
Your task is to determine whether it is possible to split the string s into k equal-sized substrings, rearrange the substrings, and concatenate them in any order to create a new string that matches the given string t.
Return true if this is possible, otherwise, return false.
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
A substring is a contiguous non-empty sequence of characters within a string.

Example 1:

Input: s = 'abcd', t = 'cdab', k = 2
Output: true
Explanation:

Split s into 2 substrings of length 2: ['ab', 'cd'].
Rearranging these substrings as ['cd', 'ab'], and then concatenating them results in 'cdab', which matches t.


Example 2:

Input: s = 'aabbcc', t = 'bbaacc', k = 3
Output: true
Explanation:

Split s into 3 substrings of length 2: ['aa', 'bb', 'cc'].
Rearranging these substrings as ['bb', 'aa', 'cc'], and then concatenating them results in 'bbaacc', which matches t.


Example 3:

Input: s = 'aabbcc', t = 'bbaacc', k = 2
Output: false
Explanation:

Split s into 2 substrings of length 3: ['aab', 'bcc'].
These substrings cannot be rearranged to form t = 'bbaacc', so the output is false.



Constraints:

1 <= s.length == t.length <= 2 * 105
1 <= k <= s.length
s.length is divisible by k.
s and t consist only of lowercase English letters.
The input is generated such that s and t are anagrams of each other.


```

## 中文翻译

给定互为 anagram 的字符串 s 和 t，以及整数 k。将 s 分成 k 个等长子串，重新排列后拼接能否得到 t。

## 解题思路

将 s 和 t 各分成 k 个等长子串（长度 len = n/k），比较两组子串的多重集是否相同。用 Map 统计 s 子串的频率，再用 t 子串去匹配。

## Solution

[SourceCode](./solution.js)
