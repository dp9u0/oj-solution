# [LCR 127] 跳跃训练

## Description


```md
https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/description/
* algorithms
* Easy (45.00%)
* Likes:    428
* Dislikes: -
* Testcase Example:  '2'
今天的有氧运动训练内容是在一个长条形的平台上跳跃。平台有 num 个小格子，每次可以选择跳 一个格子 或者 两个格子。请返回在训练过程中，学员们共有多少种不同的跳跃方式。
结果可能过大，因此结果需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
示例 1：
输入：n = 2
输出：2
示例 2：
输入：n = 5
输出：8

提示：
0 <= n <= 100
注意：本题与主站 70 题相同：https://leetcode.cn/problems/climbing-stairs/

```

## English Description

Today's aerobic training is jumping on a long platform. The platform has `num` small cells, and each time you can choose to jump **1 cell** or **2 cells**. Return how many different ways the trainees can finish jumping.

The answer may be very large, so return it modulo `1e9+7` (1000000007). For example, if the raw result is 1000000008, return 1.

**Example 1:**
>Input: `n = 2`
>Output: `2`

**Example 2:**
>Input: `n = 5`
>Output: `8`

**Constraints:**
+ `0 <= n <= 100`
+ Note: This problem is the same as LeetCode 70 (Climbing Stairs).

## Approach

Let `f(n)` be the number of ways to reach the `n`-th cell. The last step is either a 1-cell jump (from `n-1`) or a 2-cell jump (from `n-2`), so:

```
f(0) = 1  (stay at the start)
f(1) = 1  (one single step)
f(n) = f(n-1) + f(n-2)  (n >= 2)
```

This is exactly the Fibonacci sequence. Iterate from 2 to `n`, keeping only the two previous values, and apply `mod 1e9+7` at each addition.

**Complexity:** O(n) time, O(1) space.

## Solution

[SourceCode](./solution.js)
