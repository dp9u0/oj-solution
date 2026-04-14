# [1945] Sum of Digits of String After Convert

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/description/)

* algorithms
* Easy (74.78%)
* Likes:    1202
* Dislikes: 104
* Testcase Example:  '"iiii"\n1'

```md
You are given a string s consisting of lowercase English letters, and an integer k. Your task is to convert the string into an integer by a special process, and then transform it by summing its digits repeatedly k times. More specifically, perform the following steps:

Convert s into an integer by replacing each letter with its position in the alphabet (i.e.replace &#39;a&#39; with 1, &#39;b&#39; with 2, ..., &#39;z&#39; with 26).
Transform the integer by replacing it with the sum of its digits.
Repeat the transform operation (step 2) k times in total.

For example, if s = 'zbax' and k = 2, then the resulting integer would be 8 by the following operations:

Convert: 'zbax' ➝ '(26)(2)(1)(24)' ➝ '262124' ➝ 262124
Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
Transform #2: 17 ➝ 1 + 7 ➝ 8

Return the resulting integer after performing the operations described above.

Example 1:

Input: s = 'iiii', k = 1
Output: 36
Explanation:
The operations are as follows:
- Convert: 'iiii' ➝ '(9)(9)(9)(9)' ➝ '9999' ➝ 9999
- Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
Thus the resulting integer is 36.

Example 2:

Input: s = 'leetcode', k = 2
Output: 6
Explanation:
The operations are as follows:
- Convert: 'leetcode' ➝ '(12)(5)(5)(20)(3)(15)(4)(5)' ➝ '12552031545' ➝ 12552031545
- Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
- Transform #2: 33 ➝ 3 + 3 ➝ 6
Thus the resulting integer is 6.

Example 3:

Input: s = 'zbax', k = 2
Output: 8


Constraints:

1 <= s.length <= 100
1 <= k <= 10
s consists of lowercase English letters.


```

## 翻译

给定字符串 s 和整数 k。将每个字母替换为其字母表位置（a=1, b=2, ...），拼接成数字字符串，然后对该数字求各位数字之和，重复 k 次。返回最终结果。

## Approach

先转换字符串为数字字符串，再循环 k 次求各位数字之和。每次 transform 将数字转为字符串，遍历每个字符累加。

时间复杂度 O(n*k)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
