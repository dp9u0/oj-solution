# [3105] 最长的严格递增或递减子数组

## Description


```md
https://leetcode.cn/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/
* algorithms
* Easy (64.26%)
* Likes:    17
* Dislikes: -
* Testcase Example:  '[1,4,3,3,2]'
给你一个整数数组 nums 。
返回数组 nums 中 严格递增 或 严格递减 的最长非空子数组的长度。

示例 1：
输入：nums = [1,4,3,3,2]
输出：2
解释：
nums 中严格递增的子数组有[1]、[2]、[3]、[3]、[4] 以及 [1,4] 。
nums 中严格递减的子数组有[1]、[2]、[3]、[3]、[4]、[3,2] 以及 [4,3] 。
因此，返回 2 。
示例 2：
输入：nums = [3,3,3,3]
输出：1
解释：
nums 中严格递增的子数组有 [3]、[3]、[3] 以及 [3] 。
nums 中严格递减的子数组有 [3]、[3]、[3] 以及 [3] 。
因此，返回 1 。
示例 3：
输入：nums = [3,2,1]
输出：3
解释：
nums 中严格递增的子数组有 [3]、[2] 以及 [1] 。
nums 中严格递减的子数组有 [3]、[2]、[1]、[3,2]、[2,1] 以及 [3,2,1] 。
因此，返回 3 。

提示：
1 <= nums.length <= 50
1 <= nums[i] <= 50

```

## Description (English)

You are given an integer array `nums`.

Return the length of the **longest** non-empty subarray of `nums` that is either **strictly increasing** or **strictly decreasing**.

Example 1:
Input: nums = [1,4,3,3,2]
Output: 2
Explanation: The strictly increasing subarrays are [1], [2], [3], [3], [4] and [1,4]. The strictly decreasing subarrays are [1], [2], [3], [3], [4], [3,2] and [4,3]. Hence we return 2.

Example 2:
Input: nums = [3,3,3,3]
Output: 1
Explanation: The maximum length of a strictly increasing or strictly decreasing subarray is 1.

Example 3:
Input: nums = [3,2,1]
Output: 3
Explanation: [3,2,1] is itself strictly decreasing, so the answer is 3.

Constraints:
- 1 <= nums.length <= 50
- 1 <= nums[i] <= 50

## Approach

一次遍历,维护两个状态:

- `inc`:以当前元素结尾的严格递增子数组长度
- `dec`:以当前元素结尾的严格递减子数组长度

对每个 `i`(从 1 开始):
- 若 `nums[i] > nums[i-1]`:可接在前一个递增段后,`inc = prevInc + 1`,`dec` 重置为 1
- 若 `nums[i] < nums[i-1]`:可接在前一个递减段后,`dec = prevDec + 1`,`inc` 重置为 1
- 若相等:两者都无法延伸,均重置为 1

每步用 `max(inc, dec)` 更新答案。初始答案为 1(数组非空)。

时间复杂度 O(n),空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
