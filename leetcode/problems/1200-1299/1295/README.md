# [1295] Find Numbers with Even Number of Digits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/description/)

* algorithms
* Easy (79.70%)
* Likes:    2962
* Dislikes: 150
* Testcase Example:  '[12,345,2,6,7896]'

```md
Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation:
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).
2 contains 1 digit (odd number of digits).
6 contains 1 digit (odd number of digits).
7896 contains 4 digits (even number of digits).
Therefore only 12 and 7896 contain an even number of digits.

Example 2:

Input: nums = [555,901,482,1771]
Output: 1
Explanation:
Only 1771 contains an even number of digits.


Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 105


```

## 中文翻译

给定整数数组 nums，返回其中包含偶数位数的元素个数。

## 解题思路

遍历数组，用 `Math.floor(Math.log10(x)) + 1` 计算位数，判断奇偶。或直接用字符串长度。O(n)。

## Solution

[SourceCode](./solution.js)
