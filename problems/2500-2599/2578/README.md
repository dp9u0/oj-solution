# [2578] Split With Minimum Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-with-minimum-sum/description/)

* algorithms
* Easy (73.44%)
* Likes:    428
* Dislikes: 35
* Testcase Example:  '4325'

```md
Given a positive integer num, split it into two non-negative integers num1 and num2 such that:

The concatenation of num1 and num2 is a permutation of num.

In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.


num1 and num2 can contain leading zeros.

Return the minimum possible sum of num1 and num2.
Notes:

It is guaranteed that num does not contain any leading zeros.
The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num.


Example 1:

Input: num = 4325
Output: 59
Explanation: We can split 4325 so that num1 is 24 and num2 is 35, giving a sum of 59. We can prove that 59 is indeed the minimal possible sum.

Example 2:

Input: num = 687
Output: 75
Explanation: We can split 687 so that num1 is 68 and num2 is 7, which would give an optimal sum of 75.


Constraints:

10 <= num <= 109


```

## 题目翻译

将正整数 num 的数字分成两个数 num1 和 num2（每个数字恰好用一次），使 num1 + num2 最小。

## 解题思路

将所有数字升序排列，交替分配给 num1 和 num2，使两个数的位数尽可能相等，且小的数字尽量放在高位。

时间复杂度：O(d log d)，空间复杂度：O(d)

## Solution

[SourceCode](./solution.js)
