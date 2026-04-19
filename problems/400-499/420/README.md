# [420] Strong Password Checker

## Description

[LeetCode Problem Description](https://leetcode.com/problems/strong-password-checker/description/)

* algorithms
* Hard (15.62%)
* Likes:    967
* Dislikes: 1754
* Testcase Example:  '"a"'

```md
A password is considered strong if the below conditions are all met:

It has at least 6 characters and at most 20 characters.
It contains at least one lowercase letter, at least one uppercase letter, and at least one digit.
It does not contain three repeating characters in a row (i.e., 'Baaabb0' is weak, but 'Baaba0' is strong).

Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0.
In one step, you can:

Insert one character to password,
Delete one character from password, or
Replace one character of password with another character.


Example 1:
Input: password = "a"
Output: 5
Example 2:
Input: password = "aA1"
Output: 3
Example 3:
Input: password = "1337C0d3"
Output: 0


Constraints:

1 <= password.length <= 50
password consists of letters, digits, dot&#39;.&#39; or exclamation mark &#39;!&#39;.


```

## 中文翻译

强密码需满足：长度 6~20、包含大小写字母和数字、无三个连续相同字符。每次操作可插入/删除/替换一个字符。求使密码变强的最少操作数。

## 解题思路

分三种情况：
1. **n ≤ 20**：答案 = max(6-n, 缺失类型数, 连续重复需替换数)。
2. **n > 20**：必须删除 n-20 个字符。贪心地用删除来减少重复替换数：优先删 mod3==0 的重复段（1 删省 1 替换），然后 mod3==1（2 删省 1），最后 mod3==2（3 删省 1）。剩余删除每 3 个省 1 替换。
   答案 = (n-20) + max(缺失类型数, 剩余替换数)。

## Solution

[SourceCode](./solution.js)
