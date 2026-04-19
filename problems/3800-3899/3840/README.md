# [3840] House Robber V

## Description

[LeetCode Problem Description](https://leetcode.com/problems/house-robber-v/description/)

* algorithms
* Medium (53.88%)
* Testcase Example:  '[1,4,3,5]\n[1,1,2,2]'

```md
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed and is protected by a security system with a color code.
You are given two integer arrays nums and colors, both of length n, where nums[i] is the amount of money in the i^th house and colors[i] is the color code of that house.
You cannot rob two adjacent houses if they share the same color code.
Return the maximum amount of money you can rob.

Example 1:
Input: nums = [1,4,3,5], colors = [1,1,2,2]
Output: 9
Explanation:
Choose houses i = 1 with nums[1] = 4 and i = 3 with nums[3] = 5 because they are non-adjacent.
Thus, the total amount robbed is 4 + 5 = 9.
Example 2:
Input: nums = [3,1,2,4], colors = [2,3,2,2]
Output: 8
Explanation:
Choose houses i = 0 with nums[0] = 3, i = 1 with nums[1] = 1, and i = 3 with nums[3] = 4.
This selection is valid because houses i = 0 and i = 1 have different colors, and house i = 3 is non-adjacent to i = 1.
Thus, the total amount robbed is 3 + 1 + 4 = 8.
Example 3:
Input: nums = [10,1,3,9], colors = [1,1,1,2]
Output: 22
Explanation:
Choose houses i = 0 with nums[0] = 10, i = 2 with nums[2] = 3, and i = 3 with nums[3] = 9.
This selection is valid because houses i = 0 and i = 2 are non-adjacent, and houses i = 2 and i = 3 have different colors.
Thus, the total amount robbed is 10 + 3 + 9 = 22.

Constraints:
1
1

```

## 翻译

你是一个职业盗贼，计划沿街抢劫房屋。每个房子里藏有一定金额的钱，并且受到带有颜色代码的安防系统保护。
给你两个长度均为 n 的整数数组 nums 和 colors，其中 nums[i] 是第 i 个房子的金额，colors[i] 是该房子的颜色代码。
你不能抢劫两个相邻且颜色相同的房子。
返回你能抢劫的最大金额。

## Approach

DP，定义 `dp[i][0]` 和 `dp[i][1]` 分别表示不选/选第 i 个房子时的最大金额。

转移方程：
- `dp[i][1]`：选第 i 个房子。如果 `colors[i] == colors[i-1]`，不能选 i-1，所以 `dp[i][1] = dp[i-1][0] + nums[i]`；否则 `dp[i][1] = max(dp[i-1][0], dp[i-1][1]) + nums[i]`
- `dp[i][0] = max(dp[i-1][0], dp[i-1][1])`

初始化：`dp[0][0] = 0, dp[0][1] = nums[0]`
时间复杂度 O(n)，空间复杂度 O(n)，可优化到 O(1)。

## Solution

[SourceCode](./solution.js)
