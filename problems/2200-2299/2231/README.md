# [2231] Largest Number After Digit Swaps by Parity

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/description/)

* algorithms
* Easy (65.23%)
* Likes:    694
* Dislikes: 311
* Testcase Example:  '1234'

```md
You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).
Return the largest possible value of num after any number of swaps.

Example 1:

Input: num = 1234
Output: 3412
Explanation: Swap the digit 3 with the digit 1, this results in the number 3214.
Swap the digit 2 with the digit 4, this results in the number 3412.
Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.
Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.

Example 2:

Input: num = 65875
Output: 87655
Explanation: Swap the digit 8 with the digit 6, this results in the number 85675.
Swap the first digit 5 with the digit 7, this results in the number 87655.
Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.


Constraints:

1 <= num <= 109


```

## 题目翻译

给定正整数 num，可以交换奇偶性相同的两个数字（都是奇数或都是偶数）。返回任意次交换后能得到的最大值。

## 解题思路

将奇数位和偶数位的数字分别收集、降序排序，再按原始奇偶位置放回。贪心地将大数放在前面。

## Solution

[SourceCode](./solution.js)
