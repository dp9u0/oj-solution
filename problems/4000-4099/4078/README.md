# [4078] 连续三项斐波那契数之和

## Description


```md
https://leetcode.cn/problems/three-fibonacci-sum/description/
* algorithms
* Easy (69.08%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '16\r'
给你一个整数 n。
斐波那契数列 以 0 和 1 开始，之后的每个数都是前两个数之和。它的前几项为 0, 1, 1, 2, 3, 5, 8, 13, ...。
如果 n 可以表示为斐波那契数列中 连续三项之和，则返回 true；否则返回 false。

示例 1：
输入： n = 16
输出： true
解释：
连续三项 3、5 和 8 的和为 3 + 5 + 8 = 16。
示例 2：
输入： n = 8
输出： false
解释：
虽然 1 + 2 + 5 = 8，但这三项在斐波那契数列中并不连续。不存在连续三项的和等于 8。
示例 3：
输入： n = 2
输出： true
解释：
斐波那契数列的前三项之和为 0 + 1 + 1 = 2。

提示：
1 <= n <= 109
Hint 1: 1a (Sequence Generation): Generate consecutive Fibonacci triples and compare their sums with n. Stop when the sum exceeds n.
Hint 2: 2a (Fibonacci Identity): For consecutive Fibonacci terms a, b, and c, we have a + b == c, so their sum is 2 * c.
Hint 3: 2b (Fibonacci Identity): Thus, n must be even and n / 2 must be a positive Fibonacci number.
Hint 4: 2c (Fibonacci Identity): A positive integer x is Fibonacci exactly when 5 * x * x + 4 or 5 * x * x - 4 is a perfect square.

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译 (English Translation)

Given an integer `n`, return `true` if `n` can be expressed as the sum of **three consecutive** Fibonacci numbers (the sequence starts 0, 1, 1, 2, 3, 5, 8, 13, ...), otherwise `false`.

**Constraints:** `1 <= n <= 10^9`

## Approach (解题思路)

**斐波那契恒等式，O(log n)**

连续三项 a、b、c 满足 a+b=c，故三项和 = 2c。因此 n 可表示 ⟺ n 为偶数且 n/2 是某个斐波那契数（≥1）。迭代斐波那契直到 2b ≥ n，判断相等即可。
