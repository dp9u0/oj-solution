# [312] Burst Balloons

## Description

[LeetCode Problem Description](https://leetcode.com/problems/burst-balloons/description/)

* algorithms
* Hard (60.26%)
* Likes:    9242
* Dislikes: 264
* Testcase Example:  '[3,1,5,8]'

```md
You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.
If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.
Return the maximum coins you can collect by bursting the balloons wisely.

Example 1:

Input: nums = [3,1,5,8]
Output: 167
Explanation:
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
Example 2:

Input: nums = [1,5]
Output: 10


Constraints:

n == nums.length
1 <= n <= 300
0 <= nums[i] <= 100


```

## 题目翻译

给你 n 个气球，编号从 0 到 n-1。每个气球上都标有一个数字，这些数字存在数组 nums 中。现在要求你戳破所有的气球。

当你戳破第 i 个气球时，你可以获得 nums[i-1] * nums[i] * nums[i+1] 枚硬币。如果 i-1 或 i+1 超出了数组的边界，那么就当它是一个数字为 1 的气球。

请你返回通过戳破所有气球能获得的最大硬币数。

示例 1：
输入：nums = [3,1,5,8]
输出：167
解释：
nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
硬币 = 3*1*5 + 3*5*8 + 1*3*8 + 1*8*1 = 167

示例 2：
输入：nums = [1,5]
输出：10

提示：
- n == nums.length
- 1 <= n <= 300
- 0 <= nums[i] <= 100

## Solution

[SourceCode](./solution.js)

## 解题思路

这道题是一个典型的动态规划问题。我们需要找到一个最优的戳破气球顺序，使得我们能够获得最大的硬币数。

这个解决方案使用动态规划的方法。主要思路是：

首先在数组两端添加 1，这样可以处理边界情况

使用 dp[i][j] 表示戳破开区间 (i,j) 内所有气球能得到的最大硬币数

对于每个区间，我们枚举最后一个被戳破的气球 k

状态转移方程：dp[i][j] = max(dp[i][j], dp[i][k] + dp[k][j] + nums[i] nums[k] nums[j])

最终返回 dp[0][n-1] 即为答案

时间复杂度：O(n³)，其中 n 是气球的数量

空间复杂度：O(n²)，用于存储 dp 数组
