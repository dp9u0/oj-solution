# [LCR 089] 打家劫舍

## Description


```md
https://leetcode.cn/problems/Gu0c2T/description/
* algorithms
* Medium (58.41%)
* Likes:    77
* Dislikes: -
* Testcase Example:  '[1,2,3,1]'
一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响小偷偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

示例 1：
输入：nums = [1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
偷窃到的最高金额 = 1 + 3 = 4 。
示例 2：
输入：nums = [2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
偷窃到的最高金额 = 2 + 9 + 1 = 12 。

提示：
1 <= nums.length <= 100
0 <= nums[i] <= 400

注意：本题与主站 198 题相同： https://leetcode.cn/problems/house-robber/

```

## English Description

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. The only constraint stopping you from robbing each of them is that adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight **without alerting the police**.

Example 1:
```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
```

Example 2:
```
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
```

Constraints:
- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

Note: This problem is the same as LeetCode 198: https://leetcode.cn/problems/house-robber/

## Solution Approach

**动态规划（DP）**：经典「打家劫舍」问题。

- 设 `dp[i]` 表示偷到第 `i` 间房时能获得的最大金额。
- 对每间房有两种选择：
  1. **不偷**：`dp[i] = dp[i-1]`（沿用上一间房的结果）；
  2. **偷**：`dp[i] = dp[i-2] + nums[i]`（当前房金额 + 隔一间房的最大值）。
- 取两者较大者：`dp[i] = max(dp[i-1], dp[i-2] + nums[i])`。

因为递推只依赖前两个状态，可用两个滚动变量 `prev2`（i-2）与 `prev1`（i-1）将空间复杂度优化到 **O(1)**，时间复杂度为 **O(n)**。

边界处理：`nums.length === 0` 时返回 0；只有一个元素时返回 `nums[0]`。

## Solution

[SourceCode](./solution.js)
