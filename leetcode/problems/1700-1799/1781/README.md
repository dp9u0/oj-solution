# [1781] Sum of Beauty of All Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/description/)

* algorithms
* Medium (73.78%)
* Likes:    1599
* Dislikes: 222
* Testcase Example:  '"aabcb"'

```md
The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

For example, the beauty of 'abaacc' is 3 - 1 = 2.

Given a string s, return the sum of beauty of all of its substrings.

Example 1:

Input: s = 'aabcb'
Output: 5
Explanation: The substrings with non-zero beauty are ['aab','aabc','aabcb','abcb','bcb'], each with beauty equal to 1.
Example 2:

Input: s = 'aabcbaa'
Output: 17


Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters.


```

## 翻译

字符串的beauty=最高频字符次数-最低频字符次数。求s所有子串的beauty之和。

## 解题思路

枚举所有子串起点i，用长度26的计数数组逐步扩展终点j，每次计算maxFreq-minFreq并累加。O(n^2*26)。

## Solution

[SourceCode](./solution.js)
