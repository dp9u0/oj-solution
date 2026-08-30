# [3976] Maximum Subarray Sum After Multiplier

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-subarray-sum-after-multiplier/description/)

* algorithms
* Medium (25.98%)
* Likes:    106
* Dislikes: 8
* Testcase Example:  '[1,-2,3,4,-5]\n2'

```md
You are given an integer array nums and a positive integer k.
You must choose exactly one subarray of nums and perform exactly one of the following operations:
Multiply each number in the chosen subarray by k.
Divide each number in the chosen subarray by k.

When dividing a positive number by k, use the floor value of the division result.
When dividing a negative number by k, use the ceiling value of the division result.


Return the maximum possible sum of a non-empty subarray in the resulting array.
Note that the subarray chosen for the operation and the subarray chosen for the sum may be different.

Example 1:
Input: nums = [1,-2,3,4,-5], k = 2
Output: 14
Explanation:
Multiply each number in the subarray [3, 4] by 2.
This results in nums = [1, -2, 6, 8, -5].
The subarray with the largest sum is [6, 8], so the output is 6 + 8 = 14.
Example 2:
Input: nums = [-5,-4,-3], k = 2
Output: -1
Explanation:
Divide each number in the subarray [-3] by 2.
This results in nums = [-5, -4, -1].
The subarray with the largest sum is [-1], so the output is -1.

Constraints:
1 <= nums.length <= 105
-105 <= nums[i] <= 105
1 <= k <= 105
Hint 1: Use a Kadane-style dynamic programming where the maximum-sum subarray is built from left to right.
Hint 2: Keep states for four cases: no operation used yet, currently multiplying, currently dividing, and operation already finished.
Hint 3: The divide value should be computed as truncation toward zero: floor for positive numbers and ceiling for negative numbers.
Hint 4: The answer is the maximum value over all states and all ending positions.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个整数数组 `nums` 和一个正整数 `k`。

你必须选择 `nums` 中恰好一个子数组，并执行以下两种操作之一（恰好一次）：

- 将所选子数组中的每个数乘以 `k`。
- 将所选子数组中的每个数除以 `k`。

除法规则：正数除以 `k` 向下取整（floor），负数除以 `k` 向上取整（ceiling），即向零截断。

返回操作后数组中**非空子数组的最大可能和**。

注意：执行操作的子数组与求和的子数组可以不同。

示例 1：
输入：`nums = [1,-2,3,4,-5]`, `k = 2`
输出：`14`
解释：将子数组 `[3, 4]` 每个数乘以 2，得到 `[1, -2, 6, 8, -5]`，最大子数组和为 `6 + 8 = 14`。

示例 2：
输入：`nums = [-5,-4,-3]`, `k = 2`
输出：`-1`
解释：将子数组 `[-3]` 除以 2（-3/2 向上取整为 -1），得到 `[-5, -4, -1]`，最大子数组和为 `-1`。

约束：
- `1 <= nums.length <= 10^5`
- `-10^5 <= nums[i] <= 10^5`
- `1 <= k <= 10^5`

## 解题思路

Kadane 型动态规划（四状态线性扫描），关键观察：求和子数组从左到右扫描时，相对于操作区间的位置只有四种状态：

- `dp0`：尚未进入操作区间（元素保持原值）—— 普通 Kadane：`dp0 = max(x, dp0 + x)`
- `dp1`：正在乘法区间内 —— `dp1 = max(x*k, dp0 + x*k, dp1 + x*k)`
- `dp2`：正在除法区间内（向零截断 `trunc(x/k)`）—— `dp2 = max(trunc(x/k), dp0 + trunc(x/k), dp2 + trunc(x/k))`
- `dp3`：操作区间已结束（元素恢复原值）—— `dp3 = max(x, dp1 + x, dp2 + x, dp3 + x)`

转移含义：`dp1/dp2` 可在当前位置新开操作区间（继承 `dp0` 或单元素起头）；`dp3` 从 `dp1` 或 `dp2` 结束操作后继续累加原值。答案为所有位置、所有状态的最大值。

正确性要点：即使操作必须执行，包含 `dp0` 也是安全的——若某个纯原值子数组全为正数，对其中任一元素乘以 `k` 只会更大（被 `dp1` 覆盖）；若含非正元素，对该元素做除法只会变大或不变（被 `dp2/dp3` 覆盖）。因此四状态取最大即为答案。

除法用 `Math.trunc(x / k)` 实现向零截断（正数 floor、负数 ceiling）。数据范围 `|x*k| <= 10^10`、总和不超过 `10^15`，在 double 精度内安全。

复杂度：时间 `O(n)`，空间 `O(1)`。
