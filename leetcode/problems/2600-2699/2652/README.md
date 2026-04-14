# [2652] Sum Multiples

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-multiples/description/)

* algorithms
* Easy (85.89%)
* Likes:    598
* Dislikes: 44
* Testcase Example:  '7'

```md
Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.
Return an integer denoting the sum of all numbers in the given range satisfyingthe constraint.

Example 1:

Input: n = 7
Output: 21
Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.

Example 2:

Input: n = 10
Output: 40
Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.

Example 3:

Input: n = 9
Output: 30
Explanation: Numbers in the range [1, 9] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9. The sum of these numbers is 30.


Constraints:

1 <= n <= 103


```

## 翻译

给定正整数 n，求 [1, n] 中能被 3、5 或 7 整除的数之和。

## Approach

容斥原理：sum(3的倍数) + sum(5的倍数) + sum(7的倍数) - sum(15的倍数) - sum(21的倍数) - sum(35的倍数) + sum(105的倍数)。其中 sum(k的倍数) = k * (1 + 2 + ... + floor(n/k)) = k * floor(n/k) * (floor(n/k) + 1) / 2。

时间复杂度 O(1)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
