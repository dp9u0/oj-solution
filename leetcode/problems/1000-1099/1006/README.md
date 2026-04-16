# [1006] Clumsy Factorial

## Description

[LeetCode Problem Description](https://leetcode.com/problems/clumsy-factorial/description/)

* algorithms
* Medium (61.20%)
* Likes:    443
* Dislikes: 366
* Testcase Example:  '4'

```md
The factorial of a positive integer n is the product of all positive integers less than or equal to n.

For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.

We make a clumsy factorial using the integers in decreasing order by swapping out the multiply operations for a fixed rotation of operations with multiply &#39;*&#39;, divide &#39;/&#39;, add &#39;+&#39;, and subtract &#39;-&#39; in this order.

For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.

However, these operations are still applied using the usual order of operations of arithmetic. We do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right.
Additionally, the division that we use is floor division such that 10 * 9 / 8 = 90 / 8 = 11.
Given an integer n, return the clumsy factorial of n.

Example 1:

Input: n = 4
Output: 7
Explanation: 7 = 4 * 3 / 2 + 1

Example 2:

Input: n = 10
Output: 12
Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1


Constraints:

1 <= n <= 104


```

## 翻译

定义 clumsy factorial：将 n 到 1 递减排列，操作符按 *, /, +, - 循环应用。遵循标准运算优先级（先乘除后加减），除法为截断除法。求结果。

## 解题思路

**栈模拟**：利用运算符优先级，遇到 * 或 / 立即与栈顶计算，遇到 + 或 - 将数值（带符号）入栈。最终累加栈中所有元素。

例如 n=10：栈演变 [10] → *9 → [90] → /8 → [11] → +7 → [11,7] → -6 → [11,7,-6] → *5 → [11,7,-30] → /4 → [11,7,-7] → ...

除法使用 Math.trunc（向零截断）。

## Solution

[SourceCode](./solution.js)
