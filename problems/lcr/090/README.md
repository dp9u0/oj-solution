# [LCR 090] 打家劫舍 II

## Description


```md
https://leetcode.cn/problems/PzWKhm/description/
* algorithms
* Medium (47.30%)
* Likes:    74
* Dislikes: -
* Testcase Example:  '[2,3,2]'
一个专业的小偷，计划偷窃一个环形街道上沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

示例 1：
输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
示例 2：
输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
偷窃到的最高金额 = 1 + 3 = 4 。
示例 3：
输入：nums = [0]
输出：0

提示：
1 <= nums.length <= 100
0 <= nums[i] <= 1000

注意：本题与主站 213 题相同： https://leetcode.cn/problems/house-robber-ii/

```

## Solution

[SourceCode](./solution.js)

## English Translation

A professional thief is planning to rob houses along a circular street. Each house has a certain amount of money stashed. All the houses are arranged in a circle, meaning the first house and the last house are adjacent to each other. Meanwhile, adjacent houses are connected to a security system, and the system will automatically alarm if two adjacent houses are broken into on the same night.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money the thief can rob tonight without alerting the security system.

Example 1:
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (amount = 2) and then house 3 (amount = 2), because they are adjacent houses.

Example 2:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (amount = 1) and then house 3 (amount = 3). Total amount = 1 + 3 = 4.

Example 3:
Input: nums = [0]
Output: 0

Constraints:
- 1 <= nums.length <= 100
- 0 <= nums[i] <= 1000

Note: This problem is the same as LeetCode 213 (House Robber II).

## Approach

This is a classic dynamic programming problem, an extension of House Robber with a circular constraint.

**Key insight:** Because houses 0 and n-1 are adjacent, we cannot rob both. So we break the circle by considering two independent linear scenarios:

1. **Rob houses [0, n-2]** (exclude the last house)
2. **Rob houses [1, n-1]** (exclude the first house)

Take the maximum of the two results. For the single-house edge case (n === 1), the answer is just `nums[0]`.

For each linear segment, use the standard House Robber DP with rolling variables:
- `prev2` = best amount up to house i-2
- `prev1` = best amount up to house i-1
- For each house `nums[i]`: `curr = max(prev1, prev2 + nums[i])`, then shift: `prev2 = prev1`, `prev1 = curr`

Time: O(n), Space: O(1).
