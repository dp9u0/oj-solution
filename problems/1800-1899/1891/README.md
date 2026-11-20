# [1891] 割绳子

## Description


```md
https://leetcode.cn/problems/cutting-ribbons/description/
* algorithms
* Medium (44.78%)
* Likes:    38
* Dislikes: -
* Testcase Example:  '[9,7,5]\n3'
给定一个整数数组 ribbons 和一个整数 k，数组每项 ribbons[i] 表示第 i 条绳子的长度。对于每条绳子，你可以将任意切割成一系列长度为 正整数 的部分，或者选择不进行切割。
例如，如果给你一条长度为 4 的绳子，你可以：
保持绳子的长度为 4 不变；
切割成一条长度为 3 和一条长度为 1 的绳子；
切割成两条长度为 2 的绳子；
切割成一条长度为 2 和两条长度为 1 的绳子；
切割成四条长度为 1 的绳子。
你的任务是找出最大 x 值，要求满足可以裁切出至少 k 条长度均为 x 的绳子。你可以丢弃裁切后剩余的任意长度的绳子。如果不可能切割出 k 条相同长度的绳子，返回 0。

示例 1:
输入: ribbons = [9,7,5], k = 3
输出: 5
解释:
- 把第一条绳子切成两部分，一条长度为 5，一条长度为 4；
- 把第二条绳子切成两部分，一条长度为 5，一条长度为 2；
- 第三条绳子不进行切割；
现在，你得到了 3 条长度为 5 的绳子。
示例 2:
输入: ribbons = [7,5,9], k = 4
输出: 4
解释:
- 把第一条绳子切成两部分，一条长度为 4，一条长度为 3；
- 把第二条绳子切成两部分，一条长度为 4，一条长度为 1；
- 把第二条绳子切成三部分，一条长度为 4，一条长度为 4，还有一条长度为 1；
现在，你得到了 4 条长度为 4 的绳子。
示例 3:
输入: ribbons = [5,7,9], k = 22
输出: 0
解释: 由于绳子长度需要为正整数，你无法得到 22 条长度相同的绳子。

提示:
1 <= ribbons.length <= 105
1 <= ribbons[i] <= 105
1 <= k <= 109
Hint 1: Use binary search on the answer.
Hint 2: You can get l/m branches of length m from a branch with length l.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given an integer array `ribbons` and an integer `k`, where `ribbons[i]` is the length of the i-th ribbon, you may cut each ribbon into any number of pieces of **positive integer** length, or leave it uncut. Leftover pieces may be discarded.

Find the maximum `x` such that you can obtain at least `k` ribbons of length exactly `x`. Return `0` if impossible.

Example 1:
Input: ribbons = [9,7,5], k = 3
Output: 5

Example 2:
Input: ribbons = [7,5,9], k = 4
Output: 4

Example 3:
Input: ribbons = [5,7,9], k = 22
Output: 0

Constraints: 1 <= ribbons.length <= 10^5, 1 <= ribbons[i] <= 10^5, 1 <= k <= 10^9.

## Approach

Binary search on the answer. For a candidate length `x`, the number of obtainable pieces is `sum(floor(r_i / x))` — a non-increasing function of `x`, so feasibility (`>= k`) is monotone: search the largest feasible `x` in `[1, max(ribbons)]`.

If no `x` works (even `x = 1` yields fewer than `k` pieces, i.e. `sum(ribbons) < k`), return `0`.

Time O(n log maxR).
