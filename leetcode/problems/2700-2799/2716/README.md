# [2716] Minimize String Length

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-string-length/description/)

* algorithms
* Easy (79.08%)
* Likes:    378
* Dislikes: 109
* Testcase Example:  '"aaabc"'

```md
Given a string s, you have two types of operation:

Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the left of i (if exists).
Choose an index i in the string, and let c be the character in position i. Delete the closest occurrence of c to the right of i (if exists).

Your task is to minimize the length of s by performing the above operations zero or more times.
Return an integer denoting the length of the minimized string.

Example 1:

Input: s = 'aaabc'
Output: 3
Explanation:

Operation 2: we choose i = 1 so c is &#39;a&#39;, then we remove s[2] as it is closest &#39;a&#39; character to the right of s[1].
s becomes 'aabc' after this.
Operation 1: we choose i = 1 so c is &#39;a&#39;, then we remove s[0] as it is closest &#39;a&#39; character to the left of s[1].
s becomes 'abc' after this.


Example 2:

Input: s = 'cbbd'
Output: 3
Explanation:

Operation 1: we choose i = 2 so c is &#39;b&#39;, then we remove s[1] as it is closest &#39;b&#39; character to the left of s[1].
s becomes 'cbd' after this.


Example 3:

Input: s = 'baadccab'
Output: 4
Explanation:

Operation 1: we choose i = 6 so c is &#39;a&#39;, then we remove s[2] as it is closest &#39;a&#39; character to the left of s[6].
s becomes 'badccab' after this.
Operation 2: we choose i = 0 so c is &#39;b&#39;, then we remove s[6] as it is closest &#39;b&#39; character to the right of s[0].
s becomes 'badcca' fter this.
Operation 2: we choose i = 3 so c is &#39;c&#39;, then we remove s[4] as it is closest &#39;c&#39; character to the right of s[3].
s becomes 'badca' after this.
Operation 1: we choose i = 4 so c is &#39;a&#39;, then we remove s[1] as it is closest &#39;a&#39; character to the left of s[4].
s becomes 'bdca' after this.



Constraints:

1 <= s.length <= 100
s contains only lowercase English letters


```

## 题目翻译

给定字符串 s，可以进行两种操作：删除位置 i 左侧最近的相同字符，或删除位置 i 右侧最近的相同字符。通过若干次操作最小化字符串长度，返回最终长度。

## 解题思路

关键观察：每个不同字符最终最多只能保留一个。因为对于任意重复字符，可以通过操作不断删除其邻居副本。所以答案就是字符串中不同字符的数量。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
