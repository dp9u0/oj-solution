# [3163] String Compression III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/string-compression-iii/description/)

* algorithms
* Medium (67.02%)
* Likes:    634
* Dislikes: 54
* Testcase Example:  '"abcde"'

```md
Given a string word, compress it using the following algorithm:

Begin with an empty string comp. While word is not empty, use the following operation:

Remove a maximum length prefix of word made of a single character c repeating at most 9 times.
Append the length of the prefix followed by c to comp.



Return the string comp.

Example 1:

Input: word = 'abcde'
Output: '1a1b1c1d1e'
Explanation:
Initially, comp = ''. Apply the operation 5 times, choosing 'a', 'b', 'c', 'd', and 'e' as the prefix in each operation.
For each prefix, append '1' followed by the character to comp.

Example 2:

Input: word = 'aaaaaaaaaaaaaabb'
Output: '9a5a2b'
Explanation:
Initially, comp = ''. Apply the operation 3 times, choosing 'aaaaaaaaa', 'aaaaa', and 'bb' as the prefix in each operation.

For prefix 'aaaaaaaaa', append '9' followed by 'a' to comp.
For prefix 'aaaaa', append '5' followed by 'a' to comp.
For prefix 'bb', append '2' followed by 'b' to comp.



Constraints:

1 <= word.length <= 2 * 105
word consists only of lowercase English letters.


```

## 题目翻译

给定字符串 word，按规则压缩：每次取最多 9 个连续相同字符的前缀，拼接 count+char 到结果。返回压缩后的字符串。

## 解题思路

**贪心模拟**

双指针遍历，对每个起始位置统计连续相同字符（上限 9），拼接 count+char。O(n)。

## Solution

[SourceCode](./solution.js)
