# [4118] 构造山型数组的最少操作次数 I

## Description


```md
https://leetcode.cn/problems/minimum-operations-to-make-mountain-array-i/description/
* algorithms
* Medium (34.81%)
* Dislikes: -
* Testcase Example:  '[2,2,3]'
给你一个长度为 n 的整数数组 nums。
在一次操作中，你可以将 nums 中的任意一个元素 增加 1 或 减少 1。
每次操作后，nums 中的所有元素都必须保持为 正数（至少 为 1）。
如果存在一个下标 peak 满足 0 < peak < n - 1，并且：
nums[0] < nums[1] < ... < nums[peak]
nums[peak] > nums[peak + 1] > ... > nums[n - 1]
则称该数组为 山脉数组。
返回将 nums 变为山脉数组所需的 最少 操作次数。如果无法做到，返回 -1。

示例 1：
输入： nums = [2,2,3]
输出： 2
解释：
一种最优方案如下：
将 nums[1] 增加 1，并将 nums[2] 减少 1。
得到的数组为 [2, 3, 2]，这是一个 peak = 1 的山脉数组。
因此，总操作次数为 1 + 1 = 2。
示例 2：
输入： nums = [9,4,9]
输出： 6
解释：
一种最优方案如下：
将 nums[1] 增加 1，共执行六次。
得到的数组为 [9, 10, 9]，这是一个 peak = 1 的山脉数组。
因此，总操作次数为 6。
示例 3：
输入： nums = [5,7,7,4]
输出： 1
解释：
一种最优方案如下：
将 nums[1] 减少 1。
得到的数组为 [5, 6, 7, 4]，这是一个 peak = 2 的山脉数组。
因此，总操作次数为 1。
示例 4：
输入： nums = [1,2]
输出： -1
解释：
山脉数组必须有一个峰顶，且峰顶两侧各至少有一个元素。由于 n = 2，且操作不会改变数组的长度，因此无法构成山脉数组。

提示：
1 <= n == nums.length <= 1000
1 <= nums[i] <= 1000
Hint 1: If n < 3, forming a mountain is impossible. Otherwise, consider each internal index as the peak.
Hint 2: Let M = max(nums). It is sufficient to consider final values from 1 to M + n: values above M can be compressed, preserving their order, without increasing the cost.
Hint 3: Let left[i][v] be the minimum cost to make nums[0..i] strictly increasing with its last value equal to v. Transition from any previous value u < v, adding abs(nums[i] - v).
Hint 4: Use running prefix minima over v to compute each DP row efficiently. Similarly, compute right[i][v] for a strictly decreasing suffix starting at value v.
Hint 5: For each internal peak i and value v, combine left[i][v] + right[i][v] - abs(nums[i] - v), subtracting the peak's cost because it was counted twice.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Min +/-1 operations to make nums a mountain array (strictly increasing then strictly decreasing, internal peak), elements stay >= 1; -1 if n < 3.

Approach: DP over final values compressed to [1, max(nums)+n] (hint 2). left[i][v] = min cost making nums[0..i] strictly increasing with nums[i] -> v: left[i][v] = |nums[i]-v| + min_{u<v} left[i-1][u] (running prefix min). right[i][v] symmetric for strictly decreasing suffixes. Answer = min over internal i and v of left[i][v] + right[i][v] - |nums[i]-v|. O(n * Vmax), INF propagation handles infeasible shapes.

Verified: [2,2,3] -> 2; [9,4,9] -> 6; [5,7,7,4] -> 1; [1,2] -> -1.
