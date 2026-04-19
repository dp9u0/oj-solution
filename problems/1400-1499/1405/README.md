# [1405] Longest Happy String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-happy-string/description/)

* algorithms
* Medium (65.49%)
* Likes:    2801
* Dislikes: 320
* Testcase Example:  '1\n1\n7'

```md
A string s is called happy if it satisfies the following conditions:

s only contains the letters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.
s does not contain any of 'aaa', 'bbb', or 'ccc' as a substring.
s contains at most a occurrences of the letter &#39;a&#39;.
s contains at most b occurrences of the letter &#39;b&#39;.
s contains at most c occurrences of the letter &#39;c&#39;.

Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string ''.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: a = 1, b = 1, c = 7
Output: 'ccaccbcc'
Explanation: 'ccbccacc' would also be a correct answer.

Example 2:

Input: a = 7, b = 1, c = 0
Output: 'aabaa'
Explanation: It is the only correct answer in this case.


Constraints:

0 <= a, b, c <= 100
a + b + c > 0


```

## 翻译

给定三个整数 a, b, c，构造最长"快乐字符串"：只含 a/b/c，不含 aaa/bbb/ccc 子串，且各字符出现次数不超过给定值。

## Approach

贪心 + 优先队列。每次优先使用剩余次数最多的字符。如果最后两个字符相同，则必须使用次多的字符。

时间复杂度 O((a+b+c) * log3)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
