# [2369] Check if There is a Valid Partition For The Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/description/)

* algorithms
* Medium (52.30%)
* Likes:    2074
* Dislikes: 208
* Testcase Example:  '[4,4,4,5,6]'

```md
You are given a 0-indexed integer array nums. You have to partition the array into one or more contiguous subarrays.
We call a partition of the array valid if each of the obtained subarrays satisfies one of the following conditions:

The subarray consists of exactly 2, equal elements. For example, the subarray [2,2] is good.
The subarray consists of exactly 3, equal elements. For example, the subarray [4,4,4] is good.
The subarray consists of exactly 3 consecutive increasing elements, that is, the difference between adjacent elements is 1. For example, the subarray [3,4,5] is good, but the subarray [1,3,5] is not.

Return true if the array has at least one valid partition. Otherwise, return false.

Example 1:

Input: nums = [4,4,4,5,6]
Output: true
Explanation: The array can be partitioned into the subarrays [4,4] and [4,5,6].
This partition is valid, so we return true.

Example 2:

Input: nums = [1,1,1,2]
Output: false
Explanation: There is no valid partition for this array.


Constraints:

2 <= nums.length <= 105
1 <= nums[i] <= 106


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

将数组分成一个或多个连续子数组，每个子数组满足以下条件之一：(1) 恰好 2 个相等元素；(2) 恰好 3 个相等元素；(3) 恰好 3 个连续递增元素（差为 1）。判断是否存在有效分区。

## 解题思路

**线性 DP**

dp[i] 表示前 i 个元素是否能有效分区。dp[0] = true（空前缀）。

对每个位置 i，检查三种情况：
1. nums[i-1] == nums[i-2]，则 dp[i] |= dp[i-2]
2. i >= 3 且 nums[i-1] == nums[i-2] == nums[i-3]，则 dp[i] |= dp[i-3]
3. i >= 3 且 nums[i-1] == nums[i-2]+1 == nums[i-3]+2，则 dp[i] |= dp[i-3]

时间复杂度 O(n)，空间复杂度 O(n) 可优化为 O(1)。
