# [2897] 对数组执行操作使平方和最大

## Description


```md
https://leetcode.cn/problems/apply-operations-on-array-to-maximize-sum-of-squares/description/
* algorithms
* Hard (60.65%)
* Likes:    16
* Dislikes: -
* Testcase Example:  '[2,6,5,8]\n2'
给你一个下标从 0 开始的整数数组 nums 和一个 正 整数 k 。
你可以对数组执行以下操作 任意次 ：
选择两个互不相同的下标 i 和 j ，同时 将 nums[i] 更新为 (nums[i] AND nums[j]) 且将 nums[j] 更新为 (nums[i] OR nums[j]) ，OR 表示按位 或 运算，AND 表示按位 与 运算。
你需要从最终的数组里选择 k 个元素，并计算它们的 平方 之和。
请你返回你可以得到的 最大 平方和。
由于答案可能会很大，将答案对 109 + 7 取余 后返回。

示例 1：
输入：nums = [2,6,5,8], k = 2
输出：261
解释：我们可以对数组执行以下操作：
- 选择 i = 0 和 j = 3 ，同时将 nums[0] 变为 (2 AND 8) = 0 且 nums[3] 变为 (2 OR 8) = 10 ，结果数组为 nums = [0,6,5,10] 。
- 选择 i = 2 和 j = 3 ，同时将 nums[2] 变为 (5 AND 10) = 0 且 nums[3] 变为 (5 OR 10) = 15 ，结果数组为 nums = [0,6,0,15] 。
从最终数组里选择元素 15 和 6 ，平方和为 152 + 62 = 261 。
261 是可以得到的最大结果。
示例 2：
输入：nums = [4,5,4,7], k = 3
输出：90
解释：不需要执行任何操作。
选择元素 7 ，5 和 4 ，平方和为 72 + 52 + 42 = 90 。
90 是可以得到的最大结果。

提示：
1 <= k <= nums.length <= 105
1 <= nums[i] <= 109
Hint 1: The operation described only transfers some bits from one element to another in their binary representation.
Hint 2: To have a maximum sum of squares, it is optimal to greedily make each number as big as possible.

```

## Description (English)

You are given a 0-indexed integer array `nums` and a **positive** integer `k`.

You can perform the following operation on the array any number of times:

- Select two **distinct** indices `i` and `j`, and simultaneously update `nums[i]` to `(nums[i] AND nums[j])` and `nums[j]` to `(nums[i] OR nums[j])`. `OR` is the bitwise OR operation and `AND` is the bitwise AND operation.

You need to select `k` elements from the final array and calculate the sum of their **squares**.

Return the **maximum** sum of squares you can obtain.

Since the answer may be very large, return it **modulo** `10^9 + 7`.

**Example 1:**

Input: nums = [2,6,5,8], k = 2
Output: 261
Explanation: We can perform the following operations:
- Select i = 0 and j = 3: nums[0] becomes (2 AND 8) = 0 and nums[3] becomes (2 OR 8) = 10, so nums = [0,6,5,10].
- Select i = 2 and j = 3: nums[2] becomes (5 AND 10) = 0 and nums[3] becomes (5 OR 10) = 15, so nums = [0,6,0,15].
Choosing elements 15 and 6 gives a sum of squares of 15^2 + 6^2 = 261. It can be shown that 261 is the maximum.

**Example 2:**

Input: nums = [4,5,4,7], k = 3
Output: 90
Explanation: No operation needed. Choosing 7, 5 and 4 gives 7^2 + 5^2 + 4^2 = 90.

**Constraints:**

- 1 <= k <= nums.length <= 10^5
- 1 <= nums[i] <= 10^9

## 思路

**关键不变量**：操作 `(a, b) → (a AND b, a OR b)` 不改变每个二进制位上 1 的总数。对任意一位，`a AND b` 保留两个数公共的 1，`a OR b` 包含两个数所有的 1，逐位相加后每位上 1 的个数与操作前一致。即 `cnt[b]`（数组中第 b 位为 1 的元素个数）是操作的不变量。

**可达性**：反之，任何保持每位 `cnt[b]` 不变的数组都可以通过若干次操作达到——操作本质是"把某一位上的 1 从一个数搬移到另一个数"（当 a 该位为 1、b 该位为 0 时，操作后 a 丢掉该位、b 得到该位）。

**贪心**：要使 k 个数的平方和最大，应把位尽量集中到大数上。设 `a ≥ b`，若位 `t` 在 `b` 中而 `a` 中没有，把它挪给 `a` 的增益为：

`(a + 2^t)^2 - a^2 + (b - 2^t)^2 - b^2 = 2^t * (2a - 2b + 2*2^t) > 0`

所以"大者恒大"是最优构型：把数从大到小排序后，第 `i` 大的数（0-based）应包含所有满足 `cnt[b] > i` 的位 `b`（位集合形成嵌套结构）。

**实现**：
1. 统计 `cnt[0..29]`（`nums[i] <= 10^9 < 2^30`）。
2. 构造 k 个数：第 `i` 个数 `v_i = OR { 2^b | cnt[b] > i }`。
3. 答案为 `Σ v_i^2 mod (10^9 + 7)`。注意 `v_i` 可达 `2^30` 量级，`v_i^2` 超过 `Number.MAX_SAFE_INTEGER`（2^53），用 `BigInt` 计算平方。

复杂度：时间 `O(30 * (n + k))`，空间 `O(30)`。

## Solution

[SourceCode](./solution.js)
