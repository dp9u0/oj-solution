# [LCR 009] 乘积小于 K 的子数组

## Description


```md
https://leetcode.cn/problems/ZVAVXX/description/
* algorithms
* Medium (53.63%)
* Likes:    167
* Dislikes: -
* Testcase Example:  '[10,5,2,6]\n100'
给定一个正整数数组 nums和整数 k ，请找出该数组内乘积小于 k 的连续的子数组的个数。

示例 1：
输入: nums = [10,5,2,6], k = 100
输出: 8
解释: 8 个乘积小于 100 的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
示例 2：
输入: nums = [1,2,3], k = 0
输出: 0

提示：
1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106

注意：本题与主站 713 题相同：https://leetcode.cn/problems/subarray-product-less-than-k/

```

## Solution

## Translation (EN)

Given an array of positive integers `nums` and an integer `k`, return the number of **contiguous subarrays** whose product is strictly less than `k`.

Example 1:
```
Input: nums = [10,5,2,6], k = 100
Output: 8
```
Explanation: The 8 subarrays with product less than 100 are: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]. Note that [10,5,2] is not included because 10 * 5 * 2 = 100 is not strictly less than k.

Example 2:
```
Input: nums = [1,2,3], k = 0
Output: 0
```

Constraints:
- 1 <= nums.length <= 3 * 10^4
- 1 <= nums[i] <= 1000
- 0 <= k <= 10^6

This problem is the same as LeetCode 713: Subarray Product Less Than K.

## Approach (滑动窗口 / Sliding Window)

维护一个可变窗口 `[left, right]` 及其内所有元素的乘积 `product`：

1. 右指针 `right` 从 0 遍历到末尾，每次将 `nums[right]` 乘入 `product`。
2. 若 `product >= k`，则左移左指针 `left`（`product /= nums[left]`, `left++`），直到 `product < k`（或窗口为空，即 `left > right`）。
3. 收缩完成后窗口内任意以 `right` 结尾的子数组乘积都 `< k`，共有 `right - left + 1` 个，累加到答案。
4. 特判：`k <= 1` 时由于所有元素 `>= 1`，任何非空子数组乘积 `>= 1 >= k`，答案必为 0。

每个元素最多进出窗口一次，时间 O(n)，额外空间 O(1)。

## Solution

[SourceCode](./solution.js)
