# [3914] Minimum Operations to Make Array Non Decreasing

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-array-non-decreasing/description/)

* algorithms
* Medium (55.97%)
* Likes:    62
* Dislikes: 4
* Testcase Example:  '[3,3,2,1]'

```md
You are given an integer array nums of length n.
In one operation, you may choose any subarray nums[l..r] and increase each element in that subarray by x, where x is any positive integer.
Return the minimum possible sum of the values of x across all operations required to make the array non-decreasing.
An array is non-decreasing if nums[i] <= nums[i + 1] for all 0 <= i < n - 1.

Example 1:
Input: nums = [3,3,2,1]
Output: 2
Explanation:
One optimal set of operations:
Choose subarray [2..3] and add x = 1 resulting in [3, 3, 3, 2]
Choose subarray [3..3] and add x = 1 resulting in [3, 3, 3, 3]
The array becomes non-decreasing, and the total sum of chosen x values is 1 + 1 = 2.
Example 2:
Input: nums = [5,1,2,3]
Output: 4
Explanation:
One optimal set of operations:
Choose subarray [1..3] and add x = 4 resulting in [5, 5, 6, 7]
The array becomes non-decreasing, and the total sum of chosen x values is 4.

Constraints:
1 <= n == nums.length <= 105
1 <= nums[i] <= 109
Hint 1: Focus only on positions where the array decreases (nums[i] > nums[i + 1]).
Hint 2: Each such drop must be fixed by increasing a subarray starting at i + 1.
Hint 3: Observe that you only need to pay for the difference at each drop.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给你一个长度为 n 的整数数组 nums。

一次操作中，你可以选择任意子数组 nums[l..r]，并将其中的每个元素都增加 x，其中 x 是任意正整数。

返回使数组变为非递减所需的全部操作的 x 值之和的最小值。

如果对所有 0 <= i < n - 1 都满足 nums[i] <= nums[i + 1]，则数组是非递减的。

示例 1：
输入：nums = [3,3,2,1]
输出：2
解释：一组最优操作为：
- 选择子数组 [2..3] 加 x = 1，得到 [3, 3, 3, 2]
- 选择子数组 [3..3] 加 x = 1，得到 [3, 3, 3, 3]
数组变为非递减，所选 x 值之和为 1 + 1 = 2。

示例 2：
输入：nums = [5,1,2,3]
输出：4
解释：一组最优操作为：
- 选择子数组 [1..3] 加 x = 4，得到 [5, 5, 6, 7]
数组变为非递减，所选 x 值之和为 4。

约束：
1 <= n == nums.length <= 10^5
1 <= nums[i] <= 10^9

## 解题思路

核心结论：答案 = 所有相邻下降量之和，即 Σ max(0, nums[i] - nums[i+1])。

**可达性（贪心构造）**：从左到右扫描，维护当前位置的有效值 eff(i)（可能已被之前的操作抬高）。当 eff(i) > nums[i+1] 时，执行一次操作：对从 i+1 开始的后缀整体加 x = eff(i) - nums[i+1]，使位置 i+1 恰好追平 eff(i)。由于该操作把 i 之后的所有位置统一抬高，后续相邻位置的原值差保持不变，因此每个下降恰好需要支付其自身的差值，总代价 = Σ 下降量。

**下界（最优性证明）**：设 inc(i) 为位置 i 累计被增加的总量。最终需满足 nums[i] + inc(i) <= nums[i+1] + inc(i+1)，即对每个下降 d_i = nums[i] - nums[i+1] > 0，需 inc(i+1) - inc(i) >= d_i。同时覆盖 i 和 i+1 的操作对该差值无贡献，只有"起点恰为 i+1"（覆盖 i+1 但不覆盖 i）的操作才有贡献，故这类操作的 x 之和 >= d_i。对两个不同下降 i < j，修复它们的操作起点分别为 i+1 与 j+1，两集合互不相交。因此总代价 >= Σ d_i，与贪心构造相等，即为最优。

**复杂度**：时间 O(n)，空间 O(1)。注意答案最大约 10^5 × 10^9 = 10^14，超出 32 位范围，JS number 可安全表示。
