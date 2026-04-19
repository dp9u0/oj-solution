# [2566] Maximum Difference by Remapping a Digit

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/description/)

* algorithms
* Easy (76.11%)
* Likes:    610
* Dislikes: 75
* Testcase Example:  '11891'

```md
You are given an integer num. You know that Bob will sneakily remap one of the 10 possible digits (0 to 9) to another digit.
Return the difference between the maximum and minimumvalues Bob can make by remappingexactly one digit in num.
Notes:

When Bob remaps a digit d1to another digit d2, Bob replaces all occurrences of d1in numwith d2.
Bob can remap a digit to itself, in which case numdoes not change.
Bob can remap different digits for obtaining minimum and maximum values respectively.
The resulting number after remapping can contain leading zeroes.


Example 1:

Input: num = 11891
Output: 99009
Explanation:
To achieve the maximum value, Bob can remap the digit 1 to the digit 9 to yield 99899.
To achieve the minimum value, Bob can remap the digit 1 to the digit 0, yielding 890.
The difference between these two numbers is 99009.

Example 2:

Input: num = 90
Output: 99
Explanation:
The maximum value that can be returned by the function is 99 (if 0 is replaced by 9) and the minimum value that can be returned by the function is 0 (if 9 is replaced by 0).
Thus, we return 99.

Constraints:

1 <= num <= 108


```

## 中文翻译

给定整数 num，可以将某个数字全部替换为另一个数字（最大和最小可以用不同的替换）。返回最大值与最小值的差。

## 解题思路

最大值：将第一个非9的数字全部替换为9。最小值：将第一个数字全部替换为0。

## Solution

[SourceCode](./solution.js)
