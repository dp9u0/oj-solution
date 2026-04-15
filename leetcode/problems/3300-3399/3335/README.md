# [3335] Total Characters in String After Transformations I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/total-characters-in-string-after-transformations-i/description/)

* algorithms
* Medium (45.65%)
* Likes:    613
* Dislikes: 46
* Testcase Example:  '"abcyy"\n2'

```md
You are given a string s and an integer t, representing the number of transformations to perform. In one transformation, every character in s is replaced according to the following rules:

If the character is &#39;z&#39;, replace it with the string 'ab'.
Otherwise, replace it with the next character in the alphabet. For example, &#39;a&#39; is replaced with &#39;b&#39;, &#39;b&#39; is replaced with &#39;c&#39;, and so on.

Return the length of the resulting string after exactly t transformations.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: s = 'abcyy', t = 2
Output: 7
Explanation:

First Transformation (t = 1):

&#39;a&#39; becomes &#39;b&#39;
&#39;b&#39; becomes &#39;c&#39;
&#39;c&#39; becomes &#39;d&#39;
&#39;y&#39; becomes &#39;z&#39;
&#39;y&#39; becomes &#39;z&#39;
String after the first transformation: 'bcdzz'


Second Transformation (t = 2):

&#39;b&#39; becomes &#39;c&#39;
&#39;c&#39; becomes &#39;d&#39;
&#39;d&#39; becomes &#39;e&#39;
&#39;z&#39; becomes 'ab'
&#39;z&#39; becomes 'ab'
String after the second transformation: 'cdeabab'


Final Length of the string: The string is 'cdeabab', which has 7 characters.


Example 2:

Input: s = 'azbk', t = 1
Output: 5
Explanation:

First Transformation (t = 1):

&#39;a&#39; becomes &#39;b&#39;
&#39;z&#39; becomes 'ab'
&#39;b&#39; becomes &#39;c&#39;
&#39;k&#39; becomes &#39;l&#39;
String after the first transformation: 'babcl'


Final Length of the string: The string is 'babcl', which has 5 characters.



Constraints:

1 <= s.length <= 105
s consists only of lowercase English letters.
1 <= t <= 105


```

## 题目翻译

给定字符串 s 和整数 t。每次变换：a→b, b→c, ..., y→z, z→ab。求 t 次变换后字符串长度，对 10^9+7 取模。

## 解题思路

模拟字符计数转移。维护 26 个字符的计数数组，每步做一轮转移：
- 非z字符 c 变成 c+1：newCount[c+1] += count[c]
- z 变成 ab：newCount[0] += count[25], newCount[1] += count[25]

t 轮后求和即为答案。O(26t) 时间。

## Solution

[SourceCode](./solution.js)
