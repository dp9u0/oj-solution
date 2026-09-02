# [LCR 072] x 的平方根

## Description


```md
https://leetcode.cn/problems/jJ0w9p/description/
* algorithms
* Easy (42.99%)
* Likes:    72
* Dislikes: -
* Testcase Example:  '4'
给定一个非负整数 x ，计算并返回 x 的平方根，即实现 int sqrt(int x) 函数。
正数的平方根有两个，只输出其中的正数平方根。
如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。

示例 1：
输入: x = 4
输出: 2
示例 2：
输入: x = 8
输出: 2
解释: 8 的平方根是 2.82842...，由于小数部分将被舍去，所以返回 2

提示：
0 <= x <= 231 - 1

注意：本题与主站 69 题相同： https://leetcode.cn/problems/sqrtx/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given non-negative integer `x`, return its integer square root (`sqrt(x)` floored).

**Example:** sqrt(8) → 2.

**Constraints:** `0 <= x <= 2^31-1`. Note: same as LeetCode 69.

---

## Approach

**Binary search** on `[0, x]`: find largest `m` with `m*m <= x`. To avoid overflow, compare `m > x/m` instead of `m*m > x`.

Complexity: `O(log x)`.
