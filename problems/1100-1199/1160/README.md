# [1160] Find Words That Can Be Formed by Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/)

* algorithms
* Easy (67.47%)
* Testcase Example:  '["cat","bt","hat","tree"]\n"atach"'

```md
You are given an array of strings words and a string chars.
A string is good if it can be formed by characters from chars (each character can only be used once).
Return the sum of lengths of all good strings in words.

Example 1:
Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation:
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
Example 2:
Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation:
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

Note:
1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.
```

## Solution

1. HASH
2. 考虑到是26个字母 实际可以用 array[26] 记录每个字母出现的频率 比对 word 和 chars 两个数组即可

[SourceCode](./solution.js)
