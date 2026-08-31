# [4041] Minimum Operations to Form Subset Sum II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-form-subset-sum-ii/description/)

* algorithms
* Hard (45.68%)
* Likes:    15
* Dislikes: 1
* Testcase Example:  '[10,2]\n13'

```md
You are given an integer array nums and an integer sum.
In one operation, choose an element with current value x and replace it with either 2 * x or floor(x / 2).
For each element, multiplication and division operations may be performed in any order.
Return the minimum number of operations needed so that some subset of the resulting array has a sum exactly equal to sum. If it is impossible, return -1.
The floor() function returns the integer part of the division.

Example 1:
Input: nums = [10,2], sum = 13
Output: 3
Explanation:
Divide nums[0] = 10 once: 10 → 5, costing 1 operation.
Multiply nums[1] = 2 twice: 2 → 4 → 8, costing 2 operations.
After these operations, nums = [5, 8]. The subset {5, 8} sums to 13 using 3 operations in total.
Example 2:
Input: nums = [6,3], sum = 8
Output: 2
Explanation:​​​​​​​
Turn nums[1] = 3 into 2 using 2 operations:

Divide nums[1] to get 1.
Multiply nums[1] = 1 to get 2.


After these operations, nums = [6, 2]. The subset {6, 2} sums to 8 using 2 operations in total.
Example 3:
Input: nums = [2,2], sum = 7
Output: -1
Explanation:
No sequence of operations lets a subset of nums sum to 7, so the answer is -1.

Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 500
1 <= sum <= 5000
Hint 1: In a shortest sequence of operations on one element, a multiplication followed later by a division can be canceled when they become adjacent. This lets you characterize an optimal sequence as some number of divisions followed by some number of multiplications.
Hint 2: Enumerate the values of the form obtained by repeatedly dividing x, then repeatedly doubling the result, keeping only values at most sum and the minimum cost for each. Combine these per-element choices with knapsack DP.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给你一个整数数组 `nums` 和一个整数 `sum`。

一次操作中，你可以选择一个当前值为 `x` 的元素，将其替换为 `2 * x` 或 `floor(x / 2)`。

对于每个元素，乘法和除法操作可以按任意顺序执行。

返回使得结果数组的某个子集的和恰好等于 `sum` 所需的最少操作次数。如果不可能，返回 -1。

`floor()` 函数返回除法的整数部分。

示例 1：
输入：nums = [10,2], sum = 13
输出：3
解释：
- 将 nums[0] = 10 除一次：10 → 5，花费 1 次操作。
- 将 nums[1] = 2 乘两次：2 → 4 → 8，花费 2 次操作。
- 操作后 nums = [5, 8]，子集 {5, 8} 的和为 13，共 3 次操作。

示例 2：
输入：nums = [6,3], sum = 8
输出：2
解释：将 nums[1] = 3 变成 2（先除得 1，再乘得 2），花费 2 次操作。子集 {6, 2} 和为 8。

示例 3：
输入：nums = [2,2], sum = 7
输出：-1
解释：任何操作序列都无法使子集和为 7。

约束：
- 1 <= nums.length <= 100
- 1 <= nums[i] <= 500
- 1 <= sum <= 5000

## 解题思路

**关键观察（Hint 1）**：对单个元素，"先乘后除" 总可以抵消（`floor(2x/2) = x`），因此最优操作序列总可以化为"先做若干次除法，再做若干次乘法"的形式，即最终值为 `floor(x / 2^d) * 2^m`，代价为 `d + m`。

**步骤**：

1. **单元素候选值枚举**：对每个 `x`，枚举除法次数 `d`（`v = floor(x / 2^d) >= 1`），再枚举乘法次数 `m`（`w = v * 2^m <= sum`，因为元素值超过 `sum` 对正数子集和无用），记录每个候选值 `w` 的最小代价 `d + m`。每个元素最多约 `9 × 13 ≈ 120` 个候选。

2. **分组背包 DP**：`dp[s]` 表示已处理元素中选出子集和恰为 `s` 的最小操作数。每个元素两种选择：不选（代价 0），或选某个候选值 `w`（代价 c）。转移：`ndp[s + w] = min(ndp[s + w], dp[s] + c)`。

3. 答案为 `dp[sum]`，若为无穷大则返回 -1。

复杂度：O(n × sum × C)，其中 C 为单元素候选值个数（约 120），约 6000 万次基本操作，可接受。
