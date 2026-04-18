# [2310] Sum of Numbers With Units Digit K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/description/)

* algorithms
* Medium (28.18%)
* Likes:    429
* Dislikes: 338
* Testcase Example:  '58\n9'

```md
Given two integers num and k, consider a set of positive integers with the following properties:

The units digit of each integer is k.
The sum of the integers is num.

Return the minimum possible size of such a set, or -1 if no such set exists.
Note:

The set can contain multiple instances of the same integer, and the sum of an empty set is considered 0.
The units digit of a number is the rightmost digit of the number.


Example 1:

Input: num = 58, k = 9
Output: 2
Explanation:
One valid set is [9,49], as the sum is 58 and each integer has a units digit of 9.
Another valid set is [19,39].
It can be shown that 2 is the minimum possible size of a valid set.

Example 2:

Input: num = 37, k = 2
Output: -1
Explanation: It is not possible to obtain a sum of 37 using only integers that have a units digit of 2.

Example 3:

Input: num = 0, k = 7
Output: 0
Explanation: The sum of an empty set is considered 0.


Constraints:

0 <= num <= 3000
0 <= k <= 9


```

## 翻译

给定 num 和 k，找最少数量的正整数，每个数个位为 k，使它们的和等于 num。不存在则返回 -1。

## 解题思路

枚举个数 m（1 到 num），m 个数的和个位为 (m*k)%10，需要等于 num%10。同时 m*k <= num（每个数至少为 k）。满足条件的最小 m 即为答案。

## Solution

[SourceCode](./solution.js)
