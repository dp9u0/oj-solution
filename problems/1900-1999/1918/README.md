# [1918] 第 K 小的子数组和

## Description


```md
https://leetcode.cn/problems/kth-smallest-subarray-sum/description/
* algorithms
* Medium (52.40%)
* Likes:    28
* Dislikes: -
* Testcase Example:  '[2,1,3]\n4'
给你一个 长度为 n 的整型数组 nums 和一个数值 k ，返回 第 k 小的子数组和。
子数组 是指数组中一个 非空 且不间断的子序列。  子数组和 则指子数组中所有元素的和。

示例 1:
输入: nums = [2,1,3], k = 4
输出: 3
解释: [2,1,3] 的子数组为：
- [2] 和为 2
- [1] 和为 1
- [3] 和为 3
- [2,1] 和为 3
- [1,3] 和为 4
- [2,1,3] 和为 6
最小子数组和的升序排序为 1, 2, 3, 3, 4, 6。 第 4 小的子数组和为 3 。
示例 2：
输入：nums = [3,3,5,5], k = 7
输出：10
解释：[3,3,5,5] 的子数组为：
- [3] 和为 3
- [3] 和为 3
- [5] 和为 5
- [5] 和为 5
- [3,3] 和为 6
- [3,5] 和为 8
- [5,5] 和为 10
- [3,3,5], 和为 11
- [3,5,5] 和为 13
- [3,3,5,5] 和为 16
最小子数组和的升序排序为 3, 3, 5, 5, 6, 8, 10, 11, 13, 16。第 7 小的子数组和为 10 。

提示:
n == nums.length
1 <= n <= 2 * 104
1 <= nums[i] <= 5 * 104
1 <= k <= n * (n + 1) / 2
Hint 1: How can you compute the number of subarrays with a sum less than a given value?
Hint 2: Can we use binary search to help find the answer?

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given an integer array `nums` of length `n` and an integer `k`, return the k-th smallest sum among all non-empty contiguous subarrays of `nums`.

Example 1:
Input: nums = [2,1,3], k = 4
Output: 3

Example 2:
Input: nums = [3,3,5,5], k = 7
Output: 10

Constraints: n == nums.length, 1 <= n <= 2 * 10^4, 1 <= nums[i] <= 5 * 10^4, 1 <= k <= n * (n + 1) / 2.

## Approach

All elements are positive, so both the subarray sums and the counting function are monotone. Binary search the answer value `S`: count subarrays with sum `<= S` using a sliding window (shrink from the left while the window sum exceeds `S`), which runs in O(n) per check since sums grow with window extension.

Find the smallest `S` in `[min(nums), sum(nums)]` whose count is `>= k`; that `S` is a real subarray sum and is the k-th smallest.

Time O(n log(sum)).
