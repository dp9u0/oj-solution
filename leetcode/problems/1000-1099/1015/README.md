# [1015] Smallest Integer Divisible by K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-integer-divisible-by-k/description/)

* algorithms
* Medium (54.35%)
* Likes:    1648
* Dislikes: 1169
* Testcase Example:  '1'

```md
Given a positive integer k, you need to find the length of the smallest positive integer n such that n is divisible by k, and n only contains the digit 1.
Return the length of n. If there is no such n, return -1.
Note: n may not fit in a 64-bit signed integer.

Example 1:

Input: k = 1
Output: 1
Explanation: The smallest answer is n = 1, which has length 1.

Example 2:

Input: k = 2
Output: -1
Explanation: There is no such positive integer n divisible by 2.

Example 3:

Input: k = 3
Output: 3
Explanation: The smallest answer is n = 111, which has length 3.


Constraints:

1 <= k <= 105


```

## 翻译

给定正整数 `k`，找到最小的由全 1 组成的正整数 `n`（如 1, 11, 111...），使得 `n` 能被 `k` 整除。返回 `n` 的长度。若不存在则返回 -1。

## Approach

模运算：维护当前余数 `rem`，每次 `rem = (rem * 10 + 1) % k`，避免大数溢出。如果余数变为 0，返回长度；如果余数重复出现（鸽巢原理，最多 k 次），说明不存在，返回 -1。

时间复杂度 O(k)，空间复杂度 O(k)。

## Solution

[SourceCode](./solution.js)
