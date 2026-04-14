# [1291] Sequential Digits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sequential-digits/description/)

* algorithms
* Medium (65.34%)
* Likes:    2917
* Dislikes: 178
* Testcase Example:  '100\n300'

```md
Aninteger has sequential digits if and only if each digit in the number is one more than the previous digit.
Return a sorted list of all the integersin the range [low, high]inclusive that have sequential digits.

Example 1:
Input: low = 100, high = 300
Output: [123,234]
Example 2:
Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]


Constraints:

10 <= low <= high <= 10^9


```

## 题目翻译

给定范围 [low, high]，返回所有具有"顺序数字"的整数（即每个数字比前一个数字大 1），结果按升序排列。

## 解题思路

枚举所有可能的顺序数字：长度从 2 到 10，起始数字从 1 到 9。生成的数若在 [low, high] 范围内则加入结果。由于按长度和起始数字枚举，天然有序。

## Solution

[SourceCode](./solution.js)
