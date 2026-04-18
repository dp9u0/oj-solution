# [3133] Minimum Array End

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-array-end/description/)

* algorithms
* Medium (55.45%)
* Likes:    816
* Dislikes: 99
* Testcase Example:  '3\n4'

```md
You are given two integers n and x. You have to construct an array of positive integers nums of size n where for every 0 <= i < n - 1, nums[i + 1] is greater than nums[i], and the result of the bitwise AND operation between all elements of nums is x.
Return the minimum possible value of nums[n - 1].

Example 1:

Input: n = 3, x = 4
Output: 6
Explanation:
nums can be [4,5,6] and its last element is 6.

Example 2:

Input: n = 2, x = 7
Output: 15
Explanation:
nums can be [7,15] and its last element is 15.


Constraints:

1 <= n, x <= 108


```

## 题目翻译

给定 n 和 x，构造长度为 n 的严格递增正整数数组，使得所有元素的按位与为 x，返回最后一个元素的最小可能值。

## 解题思路

**位运算构造**

所有元素都必须包含 x 的所有 1-bit。在 x 的 0-bit 位置上可以自由赋值。将 x 的 0-bit 位置视为"空位"，依次填入 0, 1, 2, ..., n-1 的二进制位，最后一个元素对应 n-1。从 LSB 开始逐位填充即可。

## Solution

[SourceCode](./solution.js)
