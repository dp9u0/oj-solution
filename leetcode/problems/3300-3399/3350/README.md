# [3350] Adjacent Increasing Subarrays Detection II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/description/)

* algorithms
* Medium (58.86%)
* Likes:    491
* Dislikes: 22
* Testcase Example:  '[2,5,7,8,9,2,3,4,3,1]'

```md
Given an array nums of n integers, your task is to find the maximum value of k for which there exist two adjacent subarrays of length k each, such that both subarrays are strictly increasing. Specifically, check if there are two subarrays of length k starting at indices a and b (a < b), where:

Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
The subarrays must be adjacent, meaning b = a + k.

Return the maximum possible value of k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [2,5,7,8,9,2,3,4,3,1]
Output: 3
Explanation:

The subarray starting at index 2 is [7, 8, 9], which is strictly increasing.
The subarray starting at index 5 is [2, 3, 4], which is also strictly increasing.
These two subarrays are adjacent, and 3 is the maximum possible value of k for which two such adjacent strictly increasing subarrays exist.


Example 2:

Input: nums = [1,2,3,4,4,4,4,5,6,7]
Output: 2
Explanation:

The subarray starting at index 0 is [1, 2], which is strictly increasing.
The subarray starting at index 2 is [3, 4], which is also strictly increasing.
These two subarrays are adjacent, and 2 is the maximum possible value of k for which two such adjacent strictly increasing subarrays exist.



Constraints:

2 <= nums.length <= 2 * 105
-109 <= nums[i] <= 109


```

## 中文翻译

给定数组 nums，找最大的 k 使得存在两个相邻（首尾相接）的长度为 k 的严格递增子数组。即存在下标 a，使得 nums[a..a+k-1] 和 nums[a+k..a+2k-1] 都严格递增。

## 解题思路

预处理每个位置 i 的严格递增长度 len[i]（从 i 开始往右能延伸多长）。然后遍历每个位置 i，如果 len[i] >= k 且 len[i+k] >= k，则 k 可行。对每个 i，k 的上界为 min(len[i], len[i+k])。最终答案为所有 i 的 min(len[i], len[i+k]) 的最大值，其中 i+k < n 且需要满足连续递增跨越 i 到 i+k。

实际上更简单：预处理 inc[i] 表示以 i 结尾的连续递增长度，然后遍历相邻位置取 min(inc[i], inc[i+k]) 的最大值。

具体做法：先计算每个位置结尾的最长连续递增长度，然后对每个位置 i（与 i-1 相邻），答案更新为 max(ans, min(以 i-1 结尾的递增长度, 以 i 结尾的递增长度) // 但不完全对)。

更准确：预处理 right[i] = 从 i 开始的最长严格递增长度。然后遍历 i，若 right[i] >= right[i + right[i]] 则可直接用 right[i]，否则用 min。其实直接遍历每个 i，k = min(right[i], right[i + k]) 的最大值。

简化：遍历每个相邻分割点 i（即 i-1 和 i 之间），令 left = 以 i-1 结尾的递增长度，right = 从 i 开始的递增长度，则 k = min(left, right) 是可行的。取所有分割点的最大 k。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
