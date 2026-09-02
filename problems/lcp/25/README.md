# [LCP 25] 古董键盘

## Description


```md
https://leetcode.cn/problems/Uh984O/description/
* algorithms
* Hard (39.95%)
* Likes:    38
* Dislikes: -
* Testcase Example:  '1\n1'
小扣在秋日市集购买了一个古董键盘。由于古董键盘年久失修，键盘上只有 26 个字母 **a~z** 可以按下，且每个字母最多仅能被按 `k` 次。
小扣随机按了 `n` 次按键，请返回小扣总共有可能按出多少种内容。由于数字较大，最终答案需要对 1000000007 (1e9 + 7) 取模。
**示例 1：**
>输入：`k = 1, n = 1`
>
>输出：`26`
>
>解释：由于只能按一次按键，所有可能的字符串为 "a", "b", ... "z"
**示例 2：**
>输入：`k = 1, n = 2`
>
>输出：`650`
>
>解释：由于只能按两次按键，且每个键最多只能按一次，所有可能的字符串（按字典序排序）为 "ab", "ac", ... "zy"
**提示：**
- `1 <= k <= 5`
- `1 <= n <= 26*k`

```

## English Description

Xiao Kou bought an antique keyboard at an autumn market. Due to age, only the 26 letters **a~z** are pressable, and each letter can be pressed at most `k` times.

Xiao Kou presses keys `n` times at random. Return the total number of **distinct contents** that can possibly be typed. Since the number can be large, return the answer modulo `1000000007 (1e9 + 7)`.

**Example 1:**
> Input: `k = 1, n = 1`
>
> Output: `26`
>
> Explanation: Since the key is pressed only once, all possible strings are "a", "b", ... "z".

**Example 2:**
> Input: `k = 1, n = 2`
>
> Output: `650`
>
> Explanation: Since the key is pressed twice and each key can be used at most once, all possible strings (in lexicographic order) are "ab", "ac", ... "zy".

**Constraints:**
- `1 <= k <= 5`
- `1 <= n <= 26*k`

## Approach

The question asks for the number of distinct length-`n` strings over the 26 letters such that every letter occurs at most `k` times. Ordering matters (a sequence of presses), so this is a **multinomial counting** problem:

For any choice of occurrence counts `(c_a, ..., c_z)` with each `0 <= c_letter <= k` and `Σ c = n`, the number of distinct strings with exactly those counts is the multinomial `n! / (c_a! c_b! ... c_z!)`. The answer is the sum over all such count vectors.

**DP over letter groups.** Process letters one at a time. Let `dp[len]` be the number of distinct strings of length `len` formed from the letters processed so far (each used ≤ `k`). When introducing a new letter, suppose it is used exactly `t` times (`0 <= t <= min(k, len)`). We choose which `t` of the `len` positions hold this letter — `C(len, t)` ways — and fill the remaining `len - t` positions with any valid string over the previously processed letters (`dp[len - t]` ways):

```
ndp[len] = Σ_{t=0}^{min(k,len)}  dp[len - t] * C(len, t)
```

After processing all 26 letters, `dp[n]` is the answer. `n <= 130` and `k <= 5` keep this tiny.

**Modular arithmetic note:** products like `dp[rest] * C[len][t]` can exceed `2^53` even under the modulus (both operands are near `1e9`), so plain JavaScript numbers would silently lose precision. All modular arithmetic is therefore done with **BigInt** (`MOD = 1000000007n`); the final answer is converted back to `Number`.

**Complexity:** O(26 · n · k) time and O(n) space (plus an O(n²) Pascal triangle for the combinations).

## Solution

[SourceCode](./solution.js)
