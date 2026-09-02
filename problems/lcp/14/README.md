# [LCP 14] 切分数组

## Description


```md
https://leetcode.cn/problems/qie-fen-shu-zu/description/
* algorithms
* Hard (26.52%)
* Likes:    66
* Dislikes: -
* Testcase Example:  '[2,3,3,2,3,3]'
给定一个整数数组 nums ，小李想将 nums 切割成若干个非空子数组，使得每个子数组最左边的数和最右边的数的最大公约数大于 1 。为了减少他的工作量，请求出最少可以切成多少个子数组。
示例 1：
输入：nums = [2,3,3,2,3,3]
输出：2
解释：最优切割为 [2,3,3,2] 和 [3,3] 。第一个子数组头尾数字的最大公约数为 2 ，第二个子数组头尾数字的最大公约数为 3 。
示例 2：
输入：nums = [2,3,5,7]
输出：4
解释：只有一种可行的切割：[2], [3], [5], [7]
限制：
1 <= nums.length <= 10^5
2 <= nums[i] <= 10^6

```

## English Description

Given an integer array `nums`, Xiao Li wants to split `nums` into several **non-empty** contiguous subarrays such that in every subarray, the **greatest common divisor (gcd)** of its leftmost element and its rightmost element is **greater than 1**. Return the **minimum** number of subarrays the array can be split into.

**Example 1:**
> Input: `nums = [2,3,3,2,3,3]`
>
> Output: `2`
>
> Explanation: The optimal split is `[2,3,3,2]` and `[3,3]`. The gcd of the head/tail numbers of the first subarray is `2`, and of the second subarray is `3`.

**Example 2:**
> Input: `nums = [2,3,5,7]`
>
> Output: `4`
>
> Explanation: Only one feasible split exists: `[2], [3], [5], [7]`

**Constraints:**
- `1 <= nums.length <= 10^5`
- `2 <= nums[i] <= 10^6`

## Approach

Let `dp[i]` be the minimum number of subarrays needed to split the prefix `nums[0..i-1]`.

A last subarray spanning `nums[j..i-1]` is valid iff `gcd(nums[j], nums[i-1]) > 1`, which happens exactly when `nums[j]` and `nums[i-1]` share at least one common **prime factor** `p`. Then the transition is:

```
dp[i] = 1 + min { dp[j] : nums[j] shares a prime factor with nums[i-1], 0 <= j < i }
```

Naively this is O(n²). To speed it up, for every prime `p` we keep `g[p]`, the **minimum `dp[start]`** among all start indices `start` already seen whose value `nums[start]` is divisible by `p`. Then for each `i`, we only need to factorize `nums[i-1]` into its distinct primes and take the minimum `g[p]` over them:

```
dp[i] = 1 + min { g[p] : p is a prime factor of nums[i-1] }
```

After computing `dp[i]`, we "register" index `i` (whose value is `nums[i]`) as a potential future start: for each distinct prime factor `p` of `nums[i]`, update `g[p] = min(g[p], dp[i])`.

`dp[0] = 0` and index `0` is registered up front, so a whole-prefix piece is allowed. Because a piece always admits its own right endpoint as a start sharing the same prime factors, every `dp[i]` is finite; in particular `dp[n]` is the answer.

Prime factorization of `x` reduces to dividing out distinct primes, which is O(number of distinct prime factors). Using a smallest-prime-factor (SPF) sieve up to `max(nums)` (≤ 10⁶) makes each factorization cheap, giving total time ≈ O(M log log M + n · ω(max nums)) where M = 10⁶ and ω counts distinct prime factors (tiny, ≤ 7 for numbers ≤ 10⁶).

**Complexity:** O(10⁶ log log 10⁶ + n · ω) time, O(10⁶) space for the sieve + O(distinct primes seen) for `g`.

## Solution

[SourceCode](./solution.js)
