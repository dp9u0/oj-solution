# [3550] 数位和等于下标的最小下标

## Description


```md
https://leetcode.cn/problems/smallest-index-with-digit-sum-equal-to-index/description/
* algorithms
* Easy (81.53%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '[1,3,2]'
给你一个整数数组 nums 。
返回满足 nums[i] 的数位和（每一位数字相加求和）等于 i 的 最小 下标 i 。
如果不存在满足要求的下标，返回 -1 。

示例 1：
输入：nums = [1,3,2]
输出：2
解释：
nums[2] = 2，其数位和等于 2 ，与其下标 i = 2 相等。因此，输出为 2 。
示例 2：
输入：nums = [1,10,11]
输出：1
解释：
nums[1] = 10，其数位和等于 1 + 0 = 1，与其下标 i = 1 相等。
nums[2] = 11，其数位和等于是 1 + 1 = 2，与其下标 i = 2 相等。
由于下标 1 是满足要求的最小下标，输出为 1 。
示例 3：
输入：nums = [1,2,3]
输出：-1
解释：
由于不存在满足要求的下标，输出为 -1 。

提示：
1 <= nums.length <= 100
0 <= nums[i] <= 1000
Hint 1: Simulate as described

```

## Description (English)

You are given an integer array `nums`.

Return the smallest index `i` such that the digit sum of `nums[i]` (the sum of all its digits) equals `i`.

If no such index exists, return `-1`.

Example 1:
Input: nums = [1,3,2]
Output: 2
Explanation: nums[2] = 2 has digit sum 2, which equals its index i = 2.

Example 2:
Input: nums = [1,10,11]
Output: 1
Explanation: nums[1] = 10 has digit sum 1 + 0 = 1, equal to i = 1. nums[2] = 11 has digit sum 1 + 1 = 2, equal to i = 2. The smallest valid index is 1.

Example 3:
Input: nums = [1,2,3]
Output: -1
Explanation: No index satisfies the requirement.

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 1000

## Approach

简单模拟（Simple simulation）：

- 从下标 `0` 开始遍历数组，对每个 `nums[i]` 计算数位和（不断 `x % 10` 累加、`x = Math.floor(x / 10)` 直到为 0）。
- 第一个数位和等于 `i` 的下标即为答案，直接返回。
- 遍历结束仍无匹配则返回 `-1`。

复杂度：时间 `O(n · log₁₀(max(nums)))`，空间 `O(1)`。

## Solution

[SourceCode](./solution.js)
