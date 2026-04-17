# [3561] Resulting String After Adjacent Removals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/resulting-string-after-adjacent-removals/description/)

* algorithms
* Medium (56.72%)
* Likes:    92
* Dislikes: 3
* Testcase Example:  '"abc"'

```md
You are given a string s consisting of lowercase English letters.
You must repeatedly perform the following operation while the string s has at least two consecutive characters:

Remove the leftmost pair of adjacent characters in the string that are consecutive in the alphabet, in either order (e.g., &#39;a&#39; and &#39;b&#39;, or &#39;b&#39; and &#39;a&#39;).
Shift the remaining characters to the left to fill the gap.

Return the resulting string after no more operations can be performed.
Note: Consider the alphabet as circular, thus &#39;a&#39; and &#39;z&#39; are consecutive.

Example 1:

Input: s = 'abc'
Output: 'c'
Explanation:

Remove 'ab' from the string, leaving 'c' as the remaining string.
No further operations are possible. Thus, the resulting string after all possible removals is 'c'.


Example 2:

Input: s = 'adcb'
Output: ''
Explanation:

Remove 'dc' from the string, leaving 'ab' as the remaining string.
Remove 'ab' from the string, leaving '' as the remaining string.
No further operations are possible. Thus, the resulting string after all possible removals is ''.


Example 3:

Input: s = 'zadb'
Output: 'db'
Explanation:

Remove 'za' from the string, leaving 'db' as the remaining string.
No further operations are possible. Thus, the resulting string after all possible removals is 'db'.



Constraints:

1 <= s.length <= 105
s consists only of lowercase English letters.


```

## 题目翻译

给定小写字母字符串 s，重复操作：找到最左边的相邻字符对（在字母表中相邻，包括 a 和 z 环形相邻），删除它们。返回无法继续操作后的结果字符串。

## 解题思路

**栈模拟**

用栈从左到右处理字符。当前字符与栈顶比较，若字母表相邻（|差|=1 或 |差|=25），弹出栈顶（相当于删除这对）；否则压入。栈天然处理删除后新相邻的情况。

O(n) 时间，O(n) 空间。

## Solution

[SourceCode](./solution.js)
