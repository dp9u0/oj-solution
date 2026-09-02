# [LCR 001] 两数相除

## Description


```md
https://leetcode.cn/problems/xoh6Oh/description/
* algorithms
* Easy (21.33%)
* Likes:    307
* Dislikes: -
* Testcase Example:  '15\n2'
给定两个整数 a 和 b ，求它们的除法的商 a/b ，要求不得使用乘号 '*'、除号 '/' 以及求余符号 '%' 。

注意：
整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231, 231−1]。本题中，如果除法结果溢出，则返回 231 − 1

示例 1：
输入：a = 15, b = 2
输出：7
解释：15/2 = truncate(7.5) = 7
示例 2：
输入：a = 7, b = -3
输出：-2
解释：7/-3 = truncate(-2.33333..) = -2
示例 3：
输入：a = 0, b = 1
输出：0
示例 4：
输入：a = 1, b = 1
输出：1

提示:
-231 <= a, b <= 231 - 1
b != 0

注意：本题与主站 29 题相同：https://leetcode.cn/problems/divide-two-integers/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given two integers `a` and `b`, find their quotient `a/b` without using the multiplication `*`, division `/`, or remainder `%` operators.

**Note:**
- Integer division truncates toward zero, e.g. `truncate(8.345) = 8`, `truncate(-2.7335) = -2`.
- The environment can only store 32-bit signed integers in `[-2^31, 2^31 - 1]`. If the result overflows, return `2^31 - 1`.

**Example 1:** Input `a = 15, b = 2` → Output `7`
**Example 2:** Input `a = 7, b = -3` → Output `-2`
**Example 3:** Input `a = 0, b = 1` → Output `0`
**Example 4:** Input `a = 1, b = 1` → Output `1`

**Constraints:** `-2^31 <= a, b <= 2^31 - 1`, `b != 0`.

Note: same as LeetCode 29.

---

## Approach

Use bit-level **long division** (no `*`, `/`, `%`).

- The only overflow case is `a = -2^31, b = -1` → `2^31`, so clamp to `2^31 - 1`.
- Compute the sign: negative if exactly one of `a, b` is negative; otherwise positive.
- Work on absolute values via `>> 31` masking (avoids relying on `Math.abs(-2^31)` overflow).
- Long division: for each bit position from high to low, repeatedly subtract `(divisor << shift)` from the remainder, adding the corresponding power of two into the quotient. `<<` up to 31 and compare against the remainder in the safe 32-bit range.
- Apply the sign to the quotient and return.

Complexity: `O(32)` per division.
