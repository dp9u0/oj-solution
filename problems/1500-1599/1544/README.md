# [1544] Make The String Great

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-the-string-great/description/)

* algorithms
* Easy (68.49%)
* Likes:    3230
* Dislikes: 189
* Testcase Example:  '"leEeetcode"'

```md
Given a string s of lower and upper case English letters.
A good string is a string which doesn&#39;t have two adjacent characters s[i] and s[i + 1] where:

0 <= i <= s.length - 2
s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.

To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
Notice that an empty string is also good.

Example 1:

Input: s = 'leEeetcode'
Output: 'leetcode'
Explanation: In the first step, either you choose i = 1 or i = 2, both will result 'leEeetcode' to be reduced to 'leetcode'.

Example 2:

Input: s = 'abBAcC'
Output: ''
Explanation: We have many possible scenarios, and all lead to the same answer. For example:
'abBAcC' --> 'aAcC' --> 'cC' --> ''
'abBAcC' --> 'abBA' --> 'aA' --> ''

Example 3:

Input: s = 's'
Output: 's'


Constraints:

1 <= s.length <= 100
s contains only lower and upper case English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个由大小写字母组成的字符串 s。如果相邻两个字符是同一个字母的大小写（如 "eE" 或 "Ee"），则构成"坏"对，需要删除。反复删除直到没有坏对。返回最终的"好"字符串。

## 解题思路

**栈模拟**

用栈遍历字符串，当前字符与栈顶字符如果互为大小写（ASCII 差值为 32），则弹出栈顶（删除这对）。否则压入栈中。

时间复杂度 O(n)，空间复杂度 O(n)。
