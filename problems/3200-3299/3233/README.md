# [3233] Find the Count of Numbers Which Are Not Special

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/description/)

* algorithms
* Medium (27.64%)
* Likes:    201
* Dislikes: 27
* Testcase Example:  '5\n7'

```md
You are given 2 positive integers l and r. For any number x, all positive divisors of x except x are called the proper divisors of x.
A number is called special if it has exactly 2 proper divisors. For example:

The number 4 is special because it has proper divisors 1 and 2.
The number 6 is not special because it has proper divisors 1, 2, and 3.

Return the count of numbers in the range [l, r] that are not special.

Example 1:

Input: l = 5, r = 7
Output: 3
Explanation:
There are no special numbers in the range [5, 7].

Example 2:

Input: l = 4, r = 16
Output: 11
Explanation:
The special numbers in the range [4, 16] are 4 and 9.


Constraints:

1 <= l <= r <= 109


```

## 中文翻译

给定区间 [l, r]，"特殊"数的定义是恰好有 2 个真因子（不含自身的因子）。求区间内非特殊数的个数。

## 解题思路

恰好有 2 个真因子 = 恰好有 3 个因子 = 质数的平方。所以特殊数就是质数的平方（4, 9, 25, 49, ...）。

用埃氏筛找出 [0, sqrt(r)] 范围内的质数，统计其平方落在 [l, r] 内的个数 special，答案为 (r - l + 1) - special。

时间复杂度：O(sqrt(r) * log(log(sqrt(r))))，空间复杂度：O(sqrt(r))

## Solution

[SourceCode](./solution.js)
