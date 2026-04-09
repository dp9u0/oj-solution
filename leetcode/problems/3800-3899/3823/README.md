# [3823] Reverse Letters Then Special Characters in a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reverse-letters-then-special-characters-in-a-string/description/)

* algorithms
* Easy (81.89%)
* Likes:    55
* Dislikes: 4
* Testcase Example:  '")ebc#da@f("'

```md
You are given a string s consisting of lowercase English letters and special characters.
Your task is to perform these in order:

Reverse the lowercase letters and place them back into the positions originally occupied by letters.
Reverse the special characters and place them back into the positions originally occupied by special characters.

Return the resulting string after performing the reversals.

Example 1:

Input: s = ')ebc#da@f('
Output: '(fad@cb#e)'
Explanation:

The letters in the string are [&#39;e&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;a&#39;, &#39;f&#39;]:

Reversing them gives [&#39;f&#39;, &#39;a&#39;, &#39;d&#39;, &#39;c&#39;, &#39;b&#39;, &#39;e&#39;]
s becomes ')fad#cb@e('


​​​​​​​The special characters in the string are [&#39;)&#39;, &#39;#&#39;, &#39;@&#39;, &#39;(&#39;]:

Reversing them gives [&#39;(&#39;, &#39;@&#39;, &#39;#&#39;, &#39;)&#39;]
s becomes '(fad@cb#e)'




Example 2:

Input: s = 'z'
Output: 'z'
Explanation:
The string contains only one letter, and reversing it does not change the string. There are no special characters.

Example 3:

Input: s = '!@#$%^&amp;*()'
Output: ')(*&amp;^%$#@!'
Explanation:
The string contains no letters. The string contains all special characters, so reversing the special characters reverses the whole string.


Constraints:

1 <= s.length <= 100
s consists only of lowercase English letters and the special characters in '!@#$%^&amp;*()'.


```

## 翻译

给定一个由小写英文字母和特殊字符组成的字符串 s。按以下顺序执行操作：
1. 反转小写字母并将它们放回原来字母占据的位置。
2. 反转特殊字符并将它们放回原来特殊字符占据的位置。
返回操作后的结果字符串。

## Approach

分两步处理：
1. 提取所有字母，反转，放回原字母位置
2. 提取所有特殊字符，反转，放回原特殊字符位置
时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
