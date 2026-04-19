# [880] Decoded String at Index

## Description

[LeetCode Problem Description](https://leetcode.com/problems/decoded-string-at-index/description/)

* algorithms
* Medium (37.27%)
* Likes:    2613
* Dislikes: 366
* Testcase Example:  '"leet2code3"\n10'

```md
You are given an encoded string s. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:

If the character read is a letter, that letter is written onto the tape.
If the character read is a digit d, the entire current tape is repeatedly written d - 1 more times in total.

Given an integer k, return the kth letter (1-indexed) in the decoded string.

Example 1:

Input: s = 'leet2code3', k = 10
Output: 'o'
Explanation: The decoded string is 'leetleetcodeleetleetcodeleetleetcode'.
The 10th letter in the string is 'o'.

Example 2:

Input: s = 'ha22', k = 5
Output: 'h'
Explanation: The decoded string is 'hahahaha'.
The 5th letter is 'h'.

Example 3:

Input: s = 'a2345678999999999999999', k = 1
Output: 'a'
Explanation: The decoded string is 'a' repeated 8301530446056247680 times.
The 1st letter is 'a'.


Constraints:

2 <= s.length <= 100
s consists of lowercase English letters and digits 2 through 9.
s starts with a letter.
1 <= k <= 109
It is guaranteed that k is less than or equal to the length of the decoded string.
The decoded string is guaranteed to have less than 263 letters.


```

## 翻译

给定一个编码字符串 `s`，解码规则为：读到字母就写入磁带，读到数字 `d` 则将当前磁带内容重复写 `d-1` 次。给定整数 `k`，返回解码后字符串中第 `k` 个字母（1-indexed）。

## Approach

**逆向贪心。** 直接展开字符串会爆炸（长度可达 2^63）。核心思路是逆推：先正向计算总长度 `size`，然后从后往前遍历：

1. 遇到数字 `d`：`size /= d`，如果 `k % size == 0`，则答案在重复前的最后一个位置
2. 遇到字母：`size -= 1`，如果 `k == size`（即 `k % size == 0`），则该字母就是答案
3. 否则 `k = k % size`，继续逆推

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
