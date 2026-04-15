# [2843]   Count Symmetric Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-symmetric-integers/description/)

* algorithms
* Easy (83.06%)
* Likes:    655
* Dislikes: 65
* Testcase Example:  '1\n100'

```md
You are given two positive integers low and high.
An integer x consisting of 2 * n digits is symmetric if the sum of the first n digits of x is equal to the sum of the last n digits of x. Numbers with an odd number of digits are never symmetric.
Return the number of symmetric integers in the range [low, high].

Example 1:

Input: low = 1, high = 100
Output: 9
Explanation: There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99.

Example 2:

Input: low = 1200, high = 1230
Output: 4
Explanation: There are 4 symmetric integers between 1200 and 1230: 1203, 1212, 1221, and 1230.


Constraints:

1 <= low <= high <= 104


```

## 中文翻译

给定范围 [low, high]，统计其中对称整数的个数。对称整数指偶数位数且前半部分数字之和等于后半部分数字之和。

## 解题思路

遍历范围，对每个数转字符串，奇数位跳过，偶数位则比较前后半数字和。范围最大 10^4，直接遍历即可。

时间复杂度：O((high-low) * d)，空间复杂度：O(d)

## Solution

[SourceCode](./solution.js)
