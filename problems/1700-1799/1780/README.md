# [1780] Check if Number is a Sum of Powers of Three

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/description/)

* algorithms
* Medium (79.40%)
* Likes:    1674
* Dislikes: 67
* Testcase Example:  '12'

```md
Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.
An integer y is a power of three if there exists an integer x such that y == 3x.

Example 1:

Input: n = 12
Output: true
Explanation: 12 = 31 + 32

Example 2:

Input: n = 91
Output: true
Explanation: 91 = 30 + 32 + 34

Example 3:

Input: n = 21
Output: false


Constraints:

1 <= n <= 107


```

## 翻译

判断整数 n 是否可以表示为不同的 3 的幂之和。

## Approach

将 n 转为三进制。如果三进制表示中只有 0 和 1（没有 2），则说明可以表示为不同的 3 的幂之和。因为如果某位是 2，意味着需要两个相同的 3 的幂，违反"不同"条件。

时间复杂度 O(log n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
