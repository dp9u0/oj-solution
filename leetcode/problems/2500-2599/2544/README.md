# [2544] Alternating Digit Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/alternating-digit-sum/description/)

* algorithms
* Easy (69.03%)
* Likes:    484
* Dislikes: 23
* Testcase Example:  '521'

```md
You are given a positive integer n. Each digit of n has a sign according to the following rules:

The most significant digit is assigned a positive sign.
Each other digit has an opposite sign to its adjacent digits.

Return the sum of all digits with their corresponding sign.

Example 1:

Input: n = 521
Output: 4
Explanation: (+5) + (-2) + (+1) = 4.

Example 2:

Input: n = 111
Output: 1
Explanation: (+1) + (-1) + (+1) = 1.

Example 3:

Input: n = 886996
Output: 0
Explanation: (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0.


Constraints:

1 <= n <= 109


.spoilerbutton {display:block; border:dashed; padding: 0px 0px; margin:10px 0px; font-size:150%; font-weight: bold; color:#000000; background-color:cyan; outline:0;
}
.spoiler {overflow:hidden;}
.spoiler > div {-webkit-transition: all 0s ease;-moz-transition: margin 0s ease;-o-transition: all 0s ease;transition: margin 0s ease;}
.spoilerbutton[value="Show Message"] + .spoiler > div {margin-top:-500%;}
.spoilerbutton[value="Hide Message"] + .spoiler {padding:5px;}


```

## 翻译

给定正整数n，最高位为正号，其余位交替取反符号，返回所有数字带符号的和。

## 解题思路

转为字符串遍历，偶数位加、奇数位减。

## Solution

[SourceCode](./solution.js)
