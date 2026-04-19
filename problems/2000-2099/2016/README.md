# [2016] Maximum Difference Between Increasing Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/)

* algorithms
* Easy (66.51%)
* Likes:    1516
* Dislikes: 44
* Testcase Example:  '[7,1,5,4]'

```md
Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), such that 0 <= i < j < n and nums[i] < nums[j].
Return the maximum difference. If no such i and j exists, return -1.

Example 1:

Input: nums = [7,1,5,4]
Output: 4
Explanation:
The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.

Example 2:

Input: nums = [9,4,3,2]
Output: -1
Explanation:
There is no i and j such that i < j and nums[i] < nums[j].

Example 3:

Input: nums = [1,5,2,10]
Output: 9
Explanation:
The maximum difference occurs with i = 0 and j = 3, nums[j] - nums[i] = 10 - 1 = 9.


Constraints:

n == nums.length
2 <= n <= 1000
1 <= nums[i] <= 109


```

## 翻译

给定数组，找 i < j 且 nums[i] < nums[j] 时 nums[j] - nums[i] 的最大值。不存在返回 -1。

## Approach

维护遍历过程中的最小值 minVal，对每个元素计算 nums[i] - minVal，取最大值。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
