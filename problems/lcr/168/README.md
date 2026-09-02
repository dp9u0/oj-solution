# [LCR 168] 丑数

## Description


```md
https://leetcode.cn/problems/chou-shu-lcof/description/
* algorithms
* Medium (63.94%)
* Likes:    523
* Dislikes: -
* Testcase Example:  '10'
给你一个整数 n ，请你找出并返回第 n 个 丑数 。
说明：丑数是只包含质因数 2、3 和/或 5 的正整数；1 是丑数。

示例 1：
输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
提示：
1 <= n <= 1690

注意：本题与主站 264 题相同：https://leetcode.cn/problems/ugly-number-ii/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A **ugly number** is a positive integer whose prime factors are limited to `2`, `3`, and `5`; `1` is ugly. Given integer `n`, return the `n`-th ugly number.

**Example:** `n = 10` → `12` (first 10 ugly: 1,2,3,4,5,6,8,9,10,12)

**Constraints:** `1 <= n <= 1690`. Note: same as LeetCode 264.

---

## Approach

**DP with three pointers** `p2,p3,p5` over the generated ugly list:

- `ugly[i] = min(ugly[p2]*2, ugly[p3]*3, ugly[p5]*5)`; then advance the pointer(s) whose product produced the min (to avoid duplicates).
- `ugly[0] = 1`.

Complexity: `O(n)`.
