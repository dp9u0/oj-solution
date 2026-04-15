# [1201] Ugly Number III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/ugly-number-iii/description/)

* algorithms
* Medium (31.35%)
* Likes:    1321
* Dislikes: 518
* Testcase Example:  '3\n2\n3\n5'

```md
An ugly number is a positive integer that is divisible by a, b, or c.
Given four integers n, a, b, and c, return the nth ugly number.

Example 1:

Input: n = 3, a = 2, b = 3, c = 5
Output: 4
Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.

Example 2:

Input: n = 4, a = 2, b = 3, c = 4
Output: 6
Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.

Example 3:

Input: n = 5, a = 2, b = 11, c = 13
Output: 10
Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.


Constraints:

1 <= n, a, b, c <= 109
1 <= a * b * c <= 1018
It is guaranteed that the result will be in range [1, 2 * 109].


```

## 中文翻译

丑数是能被 a、b 或 c 整除的正整数。给定 n、a、b、c，返回第 n 个丑数。

## 解题思路

二分查找。对于给定的 mid，计算 [1, mid] 中能被 a 或 b 或 c 整除的数的个数 = floor(mid/a) + floor(mid/b) + floor(mid/c) - floor(mid/lcm(a,b)) - floor(mid/lcm(a,c)) - floor(mid/lcm(b,c)) + floor(mid/lcm(a,b,c))。用容斥原理。二分找最小的 mid 使得计数 >= n。

时间复杂度：O(log(2*10^9))，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
