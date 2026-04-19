# [1317] Convert Integer to the Sum of Two No-Zero Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/description/)

* algorithms
* Easy (59.12%)
* Likes:    867
* Dislikes: 371
* Testcase Example:  '2'

```md
No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.
Given an integer n, return a list of two integers [a, b] where:

a and b are No-Zero integers.
a + b = n

The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.

Example 1:

Input: n = 2
Output: [1,1]
Explanation: Let a = 1 and b = 1.
Both a and b are no-zero integers, and a + b = 2 = n.

Example 2:

Input: n = 11
Output: [2,9]
Explanation: Let a = 2 and b = 9.
Both a and b are no-zero integers, and a + b = 11 = n.
Note that there are other valid answers as [8, 3] that can be accepted.


Constraints:

2 <= n <= 104


```

## 中文翻译

给定整数 n，找到两个不含 0 的正整数 a 和 b，使得 a + b = n。

## 解题思路

枚举 a 从 1 到 n-1，检查 a 和 n-a 是否都不含数字 0。

时间复杂度：O(n log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
