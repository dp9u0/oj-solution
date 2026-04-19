# [2864] Maximum Odd Binary Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-odd-binary-number/description/)

* algorithms
* Easy (82.90%)
* Likes:    838
* Dislikes: 34
* Testcase Example:  '"010"'

```md
You are given a binary string s that contains at least one &#39;1&#39;.
You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.
Return a string representing the maximum odd binary number that can be created from the given combination.
Note that the resulting string can have leading zeros.

Example 1:

Input: s = '010'
Output: '001'
Explanation: Because there is just one &#39;1&#39;, it must be in the last position. So the answer is '001'.

Example 2:

Input: s = '0101'
Output: '1001'
Explanation: One of the &#39;1&#39;s must be in the last position. The maximum number that can be made with the remaining digits is '100'. So the answer is '1001'.


Constraints:

1 <= s.length <= 100
s consists only of &#39;0&#39; and &#39;1&#39;.
s contains at least one &#39;1&#39;.


```

## 翻译

给定二进制字符串s（至少一个1），重排位使其成为最大的奇二进制数。

## 解题思路

统计1的个数cnt。结果：前cnt-1个1放在最左边，其余填0，最后一位放1。

## Solution

[SourceCode](./solution.js)
