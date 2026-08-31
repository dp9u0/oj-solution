# [4040] Minimum Operations to Form Subset Sum I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-form-subset-sum-i/description/)

* algorithms
* Medium (51.18%)
* Likes:    42
* Dislikes: 3
* Testcase Example:  '[5,6,10]\n4'

```md
You are given an integer array nums and an integer sum.
In one operation, choose an element with current value x and replace it with either 2 * x or floor(x / 2).
For each element, all multiplication operations performed on it must occur before any division operations performed on it.
Return the minimum number of operations needed so that some subset of the resulting array has a sum exactly equal to sum. If it is impossible, return -1.
The floor() function returns the integer part of the division.

Example 1:
Input: nums = [5,6,10], sum = 4
Output: 3
Explanation:
Divide nums[0] = 5 twice: 5 → 2 → 1, costing 2 operations.
Divide nums[1] = 6 once: 6 → 3, costing 1 operation.
After these operations, nums = [1, 3, 10]. The subset {1, 3} sums to 4 using 3 operations in total.
Example 2:
Input: nums = [10,2], sum = 13
Output: 3
Explanation:
Divide nums[0] = 10 once: 10 → 5, costing 1 operation.
Multiply nums[1] = 2 twice: 2 → 4 → 8, costing 2 operations.
After these operations, nums = [5, 8]. The subset {5, 8} sums to 13 using 3 operations in total.
Example 3:
Input: nums = [6,3], sum = 8
Output: -1
Explanation:​​​​​​​
No sequence of operations lets a subset of nums sum to 8, so the answer is -1.

Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 500
1 <= sum <= 5000
Hint 1: Consider what values a single element x can end with. Because every multiplication must precede every division, any multiplication immediately canceled by a later division does not help. The relevant positive values are obtained by repeatedly doubling x or repeatedly applying floor(x / 2).
Hint 2: For every element, compute the minimum number of operations needed to obtain each useful value at most sum. Then use a knapsack-style DP where each element may either be excluded from the subset or contribute one of its reachable values.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个整数数组 `nums` 和一个整数 `sum`。

一次操作中，你可以选择一个当前值为 `x` 的元素，将其替换为 `2 * x` 或 `floor(x / 2)`。

**约束：对每个元素，所有的乘法操作必须发生在对该元素的任何除法操作之前。**

返回使结果数组的某个子集之和恰好等于 `sum` 所需的最少操作次数。如果不可能，返回 `-1`。

## 解题思路

**关键观察（单个元素的可达值）**：由于乘法必须在除法之前，"先乘 j 次再除 i 次"中：
- 若 i ≥ j：`floor(x * 2^j / 2^i) = floor(x / 2^(i-j))`，乘法部分完全被抵消，白花 j 次操作；
- 若 i < j：结果就是 `x * 2^(j-i)`，直接乘更便宜。

因此每个元素 x 的有用终值只有两类（值 ≤ sum，因为元素恒正、子集和需精确等于 sum）：
1. 反复翻倍：`x * 2^k`，代价 k
2. 反反复整除：`floor(x / 2^k)`，代价 k

每个元素至多 ~13 个翻倍值 + ~9 个整除值。

**算法（0/1 背包 DP）**：
- `dp[s]` 表示前 i 个元素凑出子集和 s 的最少操作数
- 对每个元素，枚举其所有可达值 (v, c)：`dp[s] = min(dp[s], dp_old[s - v] + c)`
- 注意必须从旧 dp 读取（滚动数组复制），防止同一元素被使用两次
- 最终 `dp[sum]`，若为无穷大返回 -1

复杂度：O(n · sum · log(maxVal)) ≈ 100 × 5000 × 22 ≈ 1.1×10⁷，轻松通过。
