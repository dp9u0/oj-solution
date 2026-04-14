# [1323] Maximum 69 Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-69-number/description/)

* algorithms
* Easy (84.54%)
* Likes:    3317
* Dislikes: 240
* Testcase Example:  '9669'

```md
You are given a positive integer num consisting only of digits 6 and 9.
Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

Example 1:

Input: num = 9669
Output: 9969
Explanation:
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.

Example 2:

Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.

Example 3:

Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.


Constraints:

1 <= num <= 104
numconsists of only 6 and 9 digits.


```

## 翻译

给定一个只含数字 6 和 9 的正整数，最多改变一位（6 变 9 或 9 变 6），返回能得到的最大数。

## Approach

将第一个出现的 6 改为 9 即可。转为字符串替换第一个 '6' 为 '9'。

时间复杂度 O(d)，d 为数字位数。

## Solution

[SourceCode](./solution.js)
