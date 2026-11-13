# [3364] 最小正和子数组

## Description


```md
https://leetcode.cn/problems/minimum-positive-sum-subarray/description/
* algorithms
* Easy (52.85%)
* Likes:    20
* Dislikes: -
* Testcase Example:  '[3,-2,1,4]\n2\n3'
给你一个整数数组 nums 和 两个 整数 l 和 r。你的任务是找到一个长度在 l 和 r 之间（包含）且和大于 0 的 子数组 的 最小 和。
返回满足条件的子数组的 最小 和。如果不存在这样的子数组，则返回 -1。
子数组 是数组中的一个连续 非空 元素序列。

示例 1：
输入： nums = [3, -2, 1, 4], l = 2, r = 3
输出： 1
解释：
长度在 l = 2 和 r = 3 之间且和大于 0 的子数组有：
[3, -2] 和为 1
[1, 4] 和为 5
[3, -2, 1] 和为 2
[-2, 1, 4] 和为 3
其中，子数组 [3, -2] 的和为 1，是所有正和中最小的。因此，答案为 1。
示例 2：
输入： nums = [-2, 2, -3, 1], l = 2, r = 3
输出： -1
解释：
不存在长度在 l 和 r 之间且和大于 0 的子数组。因此，答案为 -1。
示例 3：
输入： nums = [1, 2, 3, 4], l = 2, r = 4
输出： 3
解释：
子数组 [1, 2] 的长度为 2，和为 3，是所有正和中最小的。因此，答案为 3。

提示：
1 <= nums.length <= 100
1 <= l <= r <= nums.length
-1000 <= nums[i] <= 1000
Hint 1: Check every subarray, since constraints are small.

```

## Solution

[SourceCode](./solution.js)

## English Translation

You are given an integer array `nums` and two integers `l` and `r`. Your task is to find a subarray whose length is between `l` and `r` (inclusive) and whose sum is greater than `0`, with the minimum sum among such subarrays.

Return the minimum sum of a valid subarray, or `-1` if no such subarray exists.

A subarray is a contiguous non-empty sequence of elements within the array.

Example 1:

Input: nums = [3, -2, 1, 4], l = 2, r = 3
Output: 1
Explanation: Subarrays of length in [2, 3] with positive sum are [3,-2] (sum 1), [1,4] (sum 5), [3,-2,1] (sum 2), [-2,1,4] (sum 3). The minimum positive sum is 1.

Example 2:

Input: nums = [-2, 2, -3, 1], l = 2, r = 3
Output: -1
Explanation: No subarray of length in [2, 3] has a positive sum.

Example 3:

Input: nums = [1, 2, 3, 4], l = 2, r = 4
Output: 3
Explanation: The subarray [1, 2] has length 2 and sum 3, the minimum positive sum.

Constraints:

- 1 <= nums.length <= 100
- 1 <= l <= r <= nums.length
- -1000 <= nums[i] <= 1000

## Solution Approach

关键点：数组含负数，子数组和不一定随长度单调变化，且要求「和 > 0 中的最小值」，不能只看最短/最长窗口。

前缀和枚举：设 `prefix[k]` 为前 k 个元素之和，则子数组 `nums[i..j-1]` 的和为 `prefix[j] - prefix[i]`，长度为 `j - i`。

- 固定右端点 `j`（从 `l` 到 `n`），左端点 `i` 的合法范围是 `[max(0, j - r), j - l]`。
- 枚举每个 `i`，若 `prefix[j] - prefix[i] > 0` 则更新答案取最小值。
- 由于要最小化正和，即找窗口内小于 `prefix[j]` 的最大 `prefix[i]`（前驱查询），滑动窗口单调队列无法直接维护，需要有序结构（复杂度不划算）。

复杂度：时间 `O(n * r)`（n ≤ 100，最多 10^4 次运算），空间 `O(n)`。
