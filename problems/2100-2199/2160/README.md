# [2160] Minimum Sum of Four Digit Number After Splitting Digits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/description/)

* algorithms
* Easy (86.26%)
* Likes:    1513
* Dislikes: 148
* Testcase Example:  '2932'

```md
You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

For example, given num = 2932, you have the following digits: two 2&#39;s, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].

Return the minimum possible sum of new1 and new2.

Example 1:

Input: num = 2932
Output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

Example 2:

Input: num = 4009
Output: 13
Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc.
The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.


Constraints:

1000 <= num <= 9999


```

## 题目翻译

给定四位正整数 num，将其四位数字分成两个新整数，求最小和。

## 解题思路

排序四位数字，最小的两个放在十位，最大的两个放在个位，即 10*d[0]+d[2] + 10*d[1]+d[3]。

## Solution

[SourceCode](./solution.js)
