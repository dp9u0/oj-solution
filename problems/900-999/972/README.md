# [972] Equal Rational Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/equal-rational-numbers/description/)

* algorithms
* Hard (46.88%)
* Likes:    107
* Dislikes: 218
* Testcase Example:  '"0.(52)"\n"0.5(25)"'

```md
Given two strings s and t, each of which represents a non-negative rational number, return true if and only if they represent the same number. The strings may use parentheses to denote the repeating part of the rational number.
A rational number can be represented using up to three parts: <IntegerPart>, <NonRepeatingPart>, and a <RepeatingPart>. The number will be represented in one of the following three ways:

<IntegerPart>

For example, 12, 0, and 123.


<IntegerPart><.><NonRepeatingPart>

For example, 0.5, 1., 2.12, and 123.0001.


<IntegerPart><.><NonRepeatingPart><(><RepeatingPart><)>

For example, 0.1(6), 1.(9), 123.00(1212).



The repeating portion of a decimal expansion is conventionally denoted within a pair of round brackets. For example:

1/6 = 0.16666666... = 0.1(6) = 0.1666(6) = 0.166(66).


Example 1:

Input: s = '0.(52)', t = '0.5(25)'
Output: true
Explanation: Because '0.(52)' represents 0.52525252..., and '0.5(25)' represents 0.52525252525..... , the strings represent the same number.

Example 2:

Input: s = '0.1666(6)', t = '0.166(66)'
Output: true

Example 3:

Input: s = '0.9(9)', t = '1.'
Output: true
Explanation: '0.9(9)' represents 0.999999999... repeated forever, which equals 1.  [See this link for an explanation.]
'1.' represents the number 1, which is formed correctly: (IntegerPart) = '1' and (NonRepeatingPart) = ''.


Constraints:

Each part consists only of digits.
The <IntegerPart> does not have leading zeros (except for the zero itself).
1 <= <IntegerPart>.length <= 4
0 <= <NonRepeatingPart>.length <= 4
1 <= <RepeatingPart>.length <= 4


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

两个字符串表示非负有理数，可含括号循环节（`0.1(6)` = 0.1666...）。判断二者是否表示同一个数。

示例：`'0.(52)'` 与 `'0.5(25)'` → true；`0.9(9)` = 1。

## 解题思路

精确有理化：设非重复小数部分 NR（长 a）、循环节 R（长 b）：

值 = 整数 + NR/10^a + R/(10^a·(10^b−1))，通分成分数 p/q（**BigInt** 精确），两数交叉相乘比较。无循环节单独处理（避免 10^0−1=0）。O(len)。
