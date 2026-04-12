# [1456] Maximum Number of Vowels in a Substring of Given Length

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/)

* algorithms
* Medium (61.78%)
* Likes:    3951
* Dislikes: 152
* Testcase Example:  '"abciiidef"\n3'

```md
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are &#39;a&#39;, &#39;e&#39;, &#39;i&#39;, &#39;o&#39;, and &#39;u&#39;.

Example 1:

Input: s = 'abciiidef', k = 3
Output: 3
Explanation: The substring 'iii' contains 3 vowel letters.

Example 2:

Input: s = 'aeiou', k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:

Input: s = 'leetcode', k = 3
Output: 2
Explanation: 'lee', 'eet' and 'ode' contain 2 vowels.


Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
1 <= k <= s.length


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 s 和整数 k，返回长度为 k 的子串中元音字母的最大数量。元音字母为 a, e, i, o, u。

## 解题思路

**滑动窗口**

维护一个长度为 k 的滑动窗口，统计窗口内元音字母的数量。每次滑动时，减去离开窗口的字符的元音计数，加上新进入窗口的字符的元音计数，更新最大值。

时间复杂度 O(n)，空间复杂度 O(1)。
