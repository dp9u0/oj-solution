# [556] Next Greater Element III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/next-greater-element-iii/description/)

* algorithms
* Medium (35.27%)
* Likes:    3942
* Dislikes: 497
* Testcase Example:  '12'

```md
Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.
Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

Example 1:
Input: n = 12
Output: 21
Example 2:
Input: n = 21
Output: -1


Constraints:

1 <= n <= 231 - 1


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定正整数 n，找出由 n 的数字重新排列后大于 n 的最小整数。如果不存在或超过 32 位整数范围，返回 -1。

## 解题思路

标准 next permutation 算法：
1. 从右往左找到第一个下降位置 i（digits[i] < digits[i+1]）
2. 从右往左找到比 digits[i] 大的最小数字位置 j
3. 交换 i 和 j
4. 反转 i+1 到末尾
5. 检查结果是否超过 2^31-1
