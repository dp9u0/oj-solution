# [1374] Generate a String With Characters That Have Odd Counts

## Description

[LeetCode Problem Description](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/description/)

* algorithms
* Easy (78.48%)
* Likes:    529
* Dislikes: 1288
* Testcase Example:  '4'

```md
Given aninteger n, return a string with ncharacters such that each character in such string occurs an odd number of times.
The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

Example 1:

Input: n = 4
Output: 'pppz'
Explanation: 'pppz' is a valid string since the character &#39;p&#39; occurs three times and the character &#39;z&#39; occurs once. Note that there are many other valid strings such as 'ohhh' and 'love'.

Example 2:

Input: n = 2
Output: 'xy'
Explanation: 'xy' is a valid string since the characters &#39;x&#39; and &#39;y&#39; occur once. Note that there are many other valid strings such as 'ag' and 'ur'.

Example 3:

Input: n = 7
Output: 'holasss'


Constraints:

1 <= n <= 500


```

## 中文翻译

给定整数 n，返回一个长度为 n 的字符串，使得其中每个字符出现的次数都是奇数。字符串只能包含小写英文字母。若有多解，返回任意一个。

## 解题思路

**构造法**

- n 为奇数：全部用 'a'（出现 n 次，奇数）
- n 为偶数：用 n-1 个 'a' + 1 个 'b'（分别出现奇数次）

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
