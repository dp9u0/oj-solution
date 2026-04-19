# [402] Remove K Digits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-k-digits/description/)

* algorithms
* Medium (36.64%)
* Likes:    10616
* Dislikes: 547
* Testcase Example:  '"1432219"\n3'

```md
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

Example 1:

Input: num = '1432219', k = 3
Output: '1219'
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:

Input: num = '10200', k = 1
Output: '200'
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Example 3:

Input: num = '10', k = 2
Output: '0'
Explanation: Remove all the digits from the number and it is left with nothing which is 0.


Constraints:

1 <= k <= num.length <= 105
num consists of only digits.
num does not have any leading zeros except for the zero itself.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定非负整数字符串 num 和整数 k，移除 k 个数字后使剩余数字组成的数最小。返回结果字符串，不能有前导零。

## 解题思路

单调栈。从左到右遍历，维护一个单调递增栈。当当前数字比栈顶小且还能移除（k > 0）时，弹出栈顶（移除该数字）。遍历完后若 k > 0 则从末尾移除。最后去除前导零。O(n)。
