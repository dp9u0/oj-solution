# [1869] Longer Contiguous Segments of Ones than Zeros

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/description/)

* algorithms
* Easy (62.36%)
* Likes:    579
* Dislikes: 14
* Testcase Example:  '"1101"'

```md
Given a binary string s, return true if the longest contiguous segment of 1&#39;s is strictly longer than the longest contiguous segment of 0&#39;s in s, or return false otherwise.

For example, in s = '110100010' the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.

Note that if there are no 0&#39;s, then the longest continuous segment of 0&#39;s is considered to have a length 0. The same applies if there is no 1&#39;s.

Example 1:

Input: s = '1101'
Output: true
Explanation:
The longest contiguous segment of 1s has length 2: '1101'
The longest contiguous segment of 0s has length 1: '1101'
The segment of 1s is longer, so return true.

Example 2:

Input: s = '111000'
Output: false
Explanation:
The longest contiguous segment of 1s has length 3: '111000'
The longest contiguous segment of 0s has length 3: '111000'
The segment of 1s is not longer, so return false.

Example 3:

Input: s = '110100010'
Output: false
Explanation:
The longest contiguous segment of 1s has length 2: '110100010'
The longest contiguous segment of 0s has length 3: '110100010'
The segment of 1s is not longer, so return false.


Constraints:

1 <= s.length <= 100
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 翻译

给定二进制字符串s，判断最长连续1段的长度是否严格大于最长连续0段的长度。

## 解题思路

遍历字符串，维护当前连续段长度和字符。分别统计最长连续1和最长连续0的长度，比较maxOne > maxZero。

## Solution

[SourceCode](./solution.js)
