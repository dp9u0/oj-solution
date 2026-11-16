# [1099] 小于 K 的两数之和

## Description


```md
https://leetcode.cn/problems/two-sum-less-than-k/description/
* algorithms
* Easy (61.62%)
* Likes:    108
* Dislikes: -
* Testcase Example:  '[34,23,1,24,75,33,54,8]\n60'
给你一个整数数组 nums 和整数 k ，返回最大和 sum ，满足存在 i < j 使得 nums[i] + nums[j] = sum 且 sum < k 。如果没有满足此等式的 i,j 存在，则返回 -1 。

示例 1：
输入：nums = [34,23,1,24,75,33,54,8], k = 60
输出：58
解释：
34 和 24 相加得到 58，58 小于 60，满足题意。
示例 2：
输入：nums = [10,20,30], k = 15
输出：-1
解释：
我们无法找到和小于 15 的两个元素。

提示：
1 <= nums.length <= 100
1 <= nums[i] <= 1000
1 <= k <= 2000
Hint 1: What if we have the array sorted?
Hint 2: Loop the array and get the value A[i] then we need to find a value A[j] such that A[i] + A[j] < K  which means A[j] < K - A[i]. In order to do that we can find that value with a binary search.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an array `nums` and an integer `k`, return the maximum sum `S` such that there exists `i < j` with `nums[i] + nums[j] = S` and `S < k`. If no such pair exists, return -1.

**Example:**
nums = [34,23,1,24,75,33,54,8], k = 60 → 58 (34 + 24)

**Constraints:**
- 1 <= nums.length <= 100

## Approach

排序 + 对撞双指针:和 < k 时记录并右移左指针(尝试更大和),否则左移右指针。

时间 O(n log n),空间 O(1)(原地排序)。
