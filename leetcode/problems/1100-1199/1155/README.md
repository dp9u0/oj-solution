# [1155] Number of Dice Rolls With Target Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/)

* algorithms
* Medium (62.28%)
* Likes:    5336
* Dislikes: 186
* Testcase Example:  '1\n6\n3'

```md
You have n dice, and each dice has k faces numbered from 1 to k.
Given three integers n, k, and target, return the number of possible ways (out of the kn total ways) to roll the dice, so the sum of the face-up numbers equals target. Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: n = 1, k = 6, target = 3
Output: 1
Explanation: You throw one die with 6 faces.
There is only one way to get a sum of 3.

Example 2:

Input: n = 2, k = 6, target = 7
Output: 6
Explanation: You throw two dice, each with 6 faces.
There are 6 ways to get a sum of 7: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.

Example 3:

Input: n = 30, k = 30, target = 500
Output: 222616187
Explanation: The answer must be returned modulo 109 + 7.


Constraints:

1 <= n, k <= 30
1 <= target <= 1000


```

## 题目翻译

你有 n 个骰子，每个骰子有 k 个面（编号 1 到 k）。给定 n、k 和 target，返回掷骰子使面朝上的数字之和等于 target 的方法数。结果对 10^9 + 7 取模。

## 解题思路

经典 **分组背包 DP**。

- `dp[s]` 表示当前骰子掷完后和为 s 的方法数。
- 初始 `dp[0] = 1`。
- 依次加入每个骰子，从后往前更新：对于每个面值 f (1..k)，`newDp[s+f] += dp[s]`。
- 最终返回 `dp[target] % MOD`。

时间复杂度 O(n * target * k)，空间复杂度 O(target)。

## Solution

[SourceCode](./solution.js)
