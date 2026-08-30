# [650] 2 Keys Keyboard

## Description

[LeetCode Problem Description](https://leetcode.com/problems/2-keys-keyboard/description/)

* algorithms
* Medium (59.47%)
* Likes:    4456
* Dislikes: 247
* Testcase Example:  '3'

```md
There is only one character &#39;A&#39; on the screen of a notepad. You can perform one of two operations on this notepad for each step:

Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).
Paste: You can paste the characters which are copied last time.

Given an integer n, return the minimum number of operations to get the character &#39;A&#39; exactly n times on the screen.

Example 1:

Input: n = 3
Output: 3
Explanation: Initially, we have one character &#39;A&#39;.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get &#39;AA&#39;.
In step 3, we use Paste operation to get &#39;AAA&#39;.

Example 2:

Input: n = 1
Output: 0


Constraints:

1 <= n <= 1000


```

## 中文翻译

记事本屏幕上最初只有一个字符 'A'。每一步你可以对这个记事本执行以下两种操作之一：

- Copy All（全部复制）：复制屏幕上当前存在的所有字符（不允许部分复制）。
- Paste（粘贴）：粘贴上一次复制的字符。

给定整数 n，返回使屏幕上恰好出现 n 个 'A' 的最少操作次数。

示例 1：
输入：n = 3
输出：3
解释：初始时屏幕上有一个 'A'。
第 1 步使用 Copy All。
第 2 步使用 Paste 得到 'AA'。
第 3 步使用 Paste 得到 'AAA'。

示例 2：
输入：n = 1
输出：0

约束：1 <= n <= 1000

## 思路

**关键观察：** 最终得到 n 个 'A' 的最后一段操作，必然是在屏幕有 k 个 'A' 时执行一次 Copy All，随后连续 Paste 若干次。若最终数量为 n，则 n 必须是 k 的倍数，设 n = k * m，这一段操作数为 1（Copy）+ (m-1)（Paste）= m = n/k 次。

**DP 形式化：** f(1) = 0，f(n) = min over k | n, k < n of ( f(k) + n/k )。

**最优解 = n 的质因数之和（带重复）：**

- 上界：对任意质因数分解 n = p1 * p2 * ... * pr，按顺序先凑出 p1，再复制粘贴出 p2 倍、……每段代价恰好是 pi，故 f(n) ≤ p1 + p2 + ... + pr（归纳可得，因为每次选 k = n / p 分解）。
- 下界：对任意真约数 k，f(k) + n/k ≥ S(k) + n/k ≥ S(k) + S(n/k) = S(n)，其中 S(x) 为 x 的质因数和（因为任意 m ≥ 2 有 S(m) ≤ m，等号当且仅当 m 为质数）。归纳可得 f(n) ≥ S(n)。

因此 f(n) = S(n)。例如 n = 9 = 3×3，答案 6：Copy Paste Paste（3 个）→ Copy Paste Paste（9 个）。

**实现：** 试除法分解质因数并累加，时间 O(√n)。

## Solution

[SourceCode](./solution.js)
