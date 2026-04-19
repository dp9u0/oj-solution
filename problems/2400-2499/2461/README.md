# [2461] Maximum Sum of Distinct Subarrays With Length K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/)

* algorithms
* Medium (42.93%)
* Likes:    2331
* Dislikes: 49
* Testcase Example:  '[1,5,4,2,9,9,9]\n3'

```md
You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.

Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

Example 2:

Input: nums = [4,4,4], k = 3
Output: 0
Explanation: The subarrays of nums with length 3 are:
- [4,4,4] which does not meet the requirements because the element 4 is repeated.
We return 0 because no subarrays meet the conditions.


Constraints:

1 <= k <= nums.length <= 105
1 <= nums[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定整数数组 `nums` 和整数 `k`，找出所有长度为 k 且元素各不相同的子数组的最大和。如果没有满足条件的子数组，返回 0。

**示例 1：** nums = [1,5,4,2,9,9,9], k = 3 → 15（子数组 [4,2,9]）
**示例 2：** nums = [4,4,4], k = 3 → 0

**约束：** 1 <= k <= nums.length <= 10^5, 1 <= nums[i] <= 10^5

## Approach

滑动窗口 + 哈希表计数。

- 维护一个大小为 k 的滑动窗口，用 Map 记录窗口内每个元素的出现次数
- 维护窗口内元素的和 sum，以及重复元素的个数 dupCount
- 窗口右移时：加入新元素，移除最左元素，更新计数和 sum
- 当窗口大小为 k 且 dupCount === 0 时，更新最大和

时间复杂度 O(n)，空间复杂度 O(k)。
