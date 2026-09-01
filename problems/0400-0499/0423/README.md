# [423] Reconstruct Original Digits from English

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reconstruct-original-digits-from-english/description/)

* algorithms
* Medium (52.80%)
* Likes:    895
* Dislikes: 2811
* Testcase Example:  '"owoztneoer"'

```md
Given a string s containing an out-of-order English representation of digits 0-9, return the digits in ascending order.

Example 1:
Input: s = "owoztneoer"
Output: "012"
Example 2:
Input: s = "fviefuro"
Output: "45"


Constraints:

1 <= s.length <= 105
s[i] is one of the characters ['e','g','f','i','h','o','n','s','r','u','t','w','v','x','z'].
s is guaranteed to be valid.


```

## 翻译

给定一个乱序的英文字母串，表示0-9的英文数字（zero, one, ..., nine）的字母打乱组合。返回按升序排列的数字字符串。

## 解题思路

利用唯一字母识别：z→0, w→2, u→4, x→6, g→8 可直接确定。然后用剩余字母计数减去已确定数字消耗的字母：o-0-2-4→1, h-8→3, f-4→5, s-6→7, i-5-6-8→9。

## Solution

[SourceCode](./solution.js)
