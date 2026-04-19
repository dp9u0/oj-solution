# [3114] Latest Time You Can Obtain After Replacing Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/description/)

* algorithms
* Easy (35.19%)
* Likes:    120
* Dislikes: 50
* Testcase Example:  '"1?:?4"'

```md
You are given a string s representing a 12-hour format time where some of the digits (possibly none) are replaced with a '?'.
12-hour times are formatted as 'HH:MM', where HH is between 00 and 11, and MM is between 00 and 59. The earliest 12-hour time is 00:00, and the latest is 11:59.
You have to replace all the '?' characters in s with digits such that the time we obtain by the resulting string is a valid 12-hour format time and is the latest possible.
Return the resulting string.

Example 1:

Input: s = '1?:?4'
Output: '11:54'
Explanation: The latest 12-hour format time we can achieve by replacing '?' characters is '11:54'.

Example 2:

Input: s = '0?:5?'
Output: '09:59'
Explanation: The latest 12-hour format time we can achieve by replacing '?' characters is '09:59'.


Constraints:

s.length == 5
s[2] is equal to the character ':'.
All characters except s[2] are digits or '?' characters.
The input is generated such that there is at least one time between '00:00' and '11:59' that you can obtain after replacing the '?' characters.


```

## 中文翻译

给定 12 小时制时间字符串（HH:MM，00:00~11:59），部分字符为 '?'。将 '?' 替换为数字，使时间合法且最大。

## 解题思路

**逐位贪心**

格式 s[0]s[1]:s[3]s[4]，逐位处理 '?'：
- s[0]：若 s[1] 已知且 > 1，则填 0，否则填 1
- s[1]：若 s[0] 为 1 或 '?'，填 1；若 s[0] 为 0，填 9
- s[3]：填 5
- s[4]：填 9

时间复杂度：O(1)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
