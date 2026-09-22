# [1658] 将 x 减到 0 的最小操作数

## Description


```md
https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero/description/
* algorithms
* Medium (40.42%)
* Likes:    495
* Dislikes: -
* Testcase Example:  '[1,1,4,2,3]\n5'
给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。
如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。

示例 1：
输入：nums = [1,1,4,2,3], x = 5
输出：2
解释：最佳解决方案是移除后两个元素，将 x 减到 0 。
示例 2：
输入：nums = [5,6,7,8,9], x = 4
输出：-1
示例 3：
输入：nums = [3,2,20,1,1,3], x = 10
输出：5
解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。

提示：
1 <= nums.length <= 105
1 <= nums[i] <= 104
1 <= x <= 109
Hint 1: Think in reverse; instead of finding the minimum prefix + suffix, find the maximum subarray.
Hint 2: Finding the maximum subarray is standard and can be done greedily.

```

## Description (English)

You are given an integer array `nums` and an integer `x`. In each operation, you remove either the leftmost or the rightmost element of `nums`, then subtract its value from `x`. Note that the array is modified for subsequent operations.

Return the minimum number of operations to reduce `x` to exactly `0`; otherwise, return `-1`.

Example 1:
Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements, reducing x to 0.

Example 2:
Input: nums = [5,6,7,8,9], x = 4
Output: -1

Example 3:
Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total), reducing x to 0.

Constraints:
- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^4
- 1 <= x <= 10^9

Hint 1: Think in reverse; instead of finding the minimum prefix + suffix, find the maximum subarray.
Hint 2: Finding the maximum subarray is standard and can be done greedily.

## 思路

逆向思维：被移除的元素一定构成数组的一个前缀 + 一个后缀，剩下的是一段**连续的中间子数组**。

设数组总和为 `total`，目标是移除元素之和恰好为 `x`，等价于中间子数组之和恰好为 `total - x`。

- 求最少操作数 = `n - ` 最长的和为 `target = total - x` 的子数组长度。
- 因为 `nums[i] >= 1`（全为正数），窗口和具有单调性，可以用**滑动窗口**求「和恰好为 target 的最长子数组」：
  - 右指针扩张累加窗口和；当窗口和 `> target` 时收缩左指针。
  - 窗口和 `== target` 时更新最大长度。
- 特判：`target < 0` 直接返回 -1；`target == 0` 意味着必须移除全部元素，答案为 `n`。
- 若找不到这样的子数组，返回 -1。

时间复杂度 `O(n)`，空间复杂度 `O(1)`。

## Solution

[SourceCode](./solution.js)
