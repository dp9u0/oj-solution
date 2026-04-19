# [3806] Maximum Bitwise AND After Increment Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-bitwise-and-after-increment-operations/description/)

* algorithms
* Hard (31.47%)
* Likes:    76
* Dislikes: 3
* Testcase Example:  '[3,1,2]\n8\n2'

```md
You are given an integer array nums and two integers k and m.
You may perform at most k operations. In one operation, you may choose any index i and increase nums[i] by 1.
Return an integer denoting the maximum possible bitwise AND of any subset of size m after performing up to k operations optimally.

Example 1:

Input: nums = [3,1,2], k = 8, m = 2
Output: 6
Explanation:

We need a subset of size m = 2. Choose indices [0, 2].
Increase nums[0] = 3 to 6 using 3 operations, and increase nums[2] = 2 to 6 using 4 operations.
The total number of operations used is 7, which is not greater than k = 8.
The two chosen values become [6, 6], and their bitwise AND is 6, which is the maximum possible.


Example 2:

Input: nums = [1,2,8,4], k = 7, m = 3
Output: 4
Explanation:

We need a subset of size m = 3. Choose indices [0, 1, 3].
Increase nums[0] = 1 to 4 using 3 operations, increase nums[1] = 2 to 4 using 2 operations, and keep nums[3] = 4.
The total number of operations used is 5, which is not greater than k = 7.
The three chosen values become [4, 4, 4], and their bitwise AND is 4, which is the maximum possible.​​​​​​​


Example 3:

Input: nums = [1,1], k = 3, m = 2
Output: 2
Explanation:

We need a subset of size m = 2. Choose indices [0, 1].
Increase both values from 1 to 2 using 1 operation each.
The total number of operations used is 2, which is not greater than k = 3.
The two chosen values become [2, 2], and their bitwise AND is 2, which is the maximum possible.



Constraints:

1 <= n == nums.length <= 5 * 104
1 <= nums[i] <= 109
1 <= k <= 109
1 <= m <= n


```

## 题目翻译

给定整数数组 nums 和整数 k、m。可以对任意元素执行最多 k 次操作（每次将某元素 +1）。选一个大小为 m 的子集，最大化子集中所有元素的按位与值。

## 解题思路

**贪心逐位构造 + 数位 DP 计算 minCost**

从高到低逐位尝试设置答案的每一位。对目标 T，检查是否可行：
1. 对每个元素 v，计算使 v 增到某个 v' ≥ v 且 v' & T == T 的最小代价（用数位 DP 贪心构造最小 v'）。
2. 取代价最小的 m 个元素，检查总代价是否 ≤ k。

数位 DP：从高到低处理每一位，维护"是否已超过 v"状态。T 的位强制为 1，其余位在未超过 v 时匹配 v 的位。

时间复杂度 O(31 × (n × 31 + n log n))。

## Solution

[SourceCode](./solution.js)
