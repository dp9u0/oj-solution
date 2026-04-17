# [3139] Minimum Cost to Equalize Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-equalize-array/description/)

* algorithms
* Hard (18.77%)
* Likes:    149
* Dislikes: 24
* Testcase Example:  '[4,1]\n5\n2'

```md
You are given an integer array nums and two integers cost1 and cost2. You are allowed to perform either of the following operations any number of times:

Choose an index i from nums and increase nums[i] by 1 for a cost of cost1.
Choose two different indices i, j, from nums and increase nums[i] and nums[j] by 1 for a cost of cost2.

Return the minimum cost required to make all elements in the array equal.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: nums = [4,1], cost1 = 5, cost2 = 2
Output: 15
Explanation:
The following operations can be performed to make the values equal:

Increase nums[1] by 1 for a cost of 5. nums becomes [4,2].
Increase nums[1] by 1 for a cost of 5. nums becomes [4,3].
Increase nums[1] by 1 for a cost of 5. nums becomes [4,4].

The total cost is 15.

Example 2:

Input: nums = [2,3,3,3,5], cost1 = 2, cost2 = 1
Output: 6
Explanation:
The following operations can be performed to make the values equal:

Increase nums[0] and nums[1] by 1 for a cost of 1. nums becomes [3,4,3,3,5].
Increase nums[0] and nums[2] by 1 for a cost of 1. nums becomes [4,4,4,3,5].
Increase nums[0] and nums[3] by 1 for a cost of 1. nums becomes [5,4,4,4,5].
Increase nums[1] and nums[2] by 1 for a cost of 1. nums becomes [5,5,5,4,5].
Increase nums[3] by 1 for a cost of 2. nums becomes [5,5,5,5,5].

The total cost is 6.

Example 3:

Input: nums = [3,5,3], cost1 = 1, cost2 = 3
Output: 4
Explanation:
The following operations can be performed to make the values equal:

Increase nums[0] by 1 for a cost of 1. nums becomes [4,5,3].
Increase nums[0] by 1 for a cost of 1. nums becomes [5,5,3].
Increase nums[2] by 1 for a cost of 1. nums becomes [5,5,4].
Increase nums[2] by 1 for a cost of 1. nums becomes [5,5,5].

The total cost is 4.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106
1 <= cost1 <= 106
1 <= cost2 <= 106


```

## 中文翻译

给你整数数组 `nums` 和两个整数 `cost1`、`cost2`。可以进行以下操作任意次数：
- 选一个下标 `i`，将 `nums[i]` 加 1，花费 `cost1`
- 选两个不同下标 `i, j`，将 `nums[i]` 和 `nums[j]` 各加 1，花费 `cost2`

返回使所有元素相等的最小花费，结果对 10^9+7 取模。

## 解题思路

**数学 + 贪心**：

1. 目标值 `t >= max(nums)`，差值 `d[i] = t - nums[i]`，总和 `S`，最大值 `mx`
2. 操作2最多使用 `pairs = min(floor(S/2), S - mx)` 次
3. 当 `cost2 >= 2*cost1` 时，全部用操作1：`cost = S * cost1`
4. 否则，对 n>=3 的情况，cost 在 dominated 区域可能递减（slope < 0 时），需要检查从 dominated 到 balanced 的转移点附近的候选目标值
5. 使用 BigInt 避免精度问题

## Solution

[SourceCode](./solution.js)
