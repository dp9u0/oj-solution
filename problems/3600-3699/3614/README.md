# [3614] Process String with Special Operations II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/process-string-with-special-operations-ii/description/)

* algorithms
* Hard (17.00%)
* Likes:    97
* Dislikes: 8
* Testcase Example:  '"a#b%*"\n1'

```md
You are given a string s consisting of lowercase English letters and the special characters: &#39;*&#39;, &#39;#&#39;, and &#39;%&#39;.
You are also given an integer k.
Build a new string result by processing s according to the following rules from left to right:

If the letter is a lowercase English letter append it to result.
A &#39;*&#39; removes the last character from result, if it exists.
A &#39;#&#39; duplicates the current result and appends it to itself.
A &#39;%&#39; reverses the current result.

Return the kth character of the final string result. If k is out of the bounds of result, return &#39;.&#39;.

Example 1:

Input: s = 'a#b%*', k = 1
Output: 'a'
Explanation:



i
s[i]
Operation
Current result




0
&#39;a&#39;
Append &#39;a&#39;
'a'


1
&#39;#&#39;
Duplicate result
'aa'


2
&#39;b&#39;
Append &#39;b&#39;
'aab'


3
&#39;%&#39;
Reverse result
'baa'


4
&#39;*&#39;
Remove the last character
'ba'



The final result is 'ba'. The character at index k = 1 is &#39;a&#39;.

Example 2:

Input: s = 'cd%#*#', k = 3
Output: 'd'
Explanation:



i
s[i]
Operation
Current result




0
&#39;c&#39;
Append &#39;c&#39;
'c'


1
&#39;d&#39;
Append &#39;d&#39;
'cd'


2
&#39;%&#39;
Reverse result
'dc'


3
&#39;#&#39;
Duplicate result
'dcdc'


4
&#39;*&#39;
Remove the last character
'dcd'


5
&#39;#&#39;
Duplicate result
'dcddcd'



The final result is 'dcddcd'. The character at index k = 3 is &#39;d&#39;.

Example 3:

Input: s = 'z*#', k = 0
Output: '.'
Explanation:



i
s[i]
Operation
Current result




0
&#39;z&#39;
Append &#39;z&#39;
'z'


1
&#39;*&#39;
Remove the last character
''


2
&#39;#&#39;
Duplicate the string
''



The final result is ''. Since index k = 0 is out of bounds, the output is &#39;.&#39;.


Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters and special characters &#39;*&#39;, &#39;#&#39;, and &#39;%&#39;.
0 <= k <= 1015
The length of result after processing s will not exceed 1015.


```

## 中文翻译

给定字符串 s（含小写字母和特殊字符 '*'、'#'、'%'）和整数 k。按规则从左到右处理 s 构建新字符串：字母追加、'*' 删除末尾字符、'#' 复制当前结果追加到自身、'%' 翻转当前结果。返回最终字符串的第 k 个字符，越界返回 '.'。k 最大可达 10^15。

## 解题思路

不能直接构建字符串（长度可达 10^15）。正向记录每次操作后的长度，然后从位置 k 反向追踪：
- '#'：长度翻倍，若 pos >= prev_len 则 pos -= prev_len
- '%'：翻转，pos = prev_len - 1 - pos
- '*'：删除末尾，pos 不变（被删的在末尾）
- 字母：若 pos == prev_len 则该位置就是此字母，否则 pos 不变

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
