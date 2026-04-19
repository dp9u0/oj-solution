# [3254] Find the Power of K-Size Subarrays I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/description/)

* algorithms
* Medium (62.10%)
* Likes:    677
* Dislikes: 58
* Testcase Example:  '[1,2,3,4,3,2,5]\n3'

```md
You are given an array of integers nums of length n and a positive integer k.
The power of an array is defined as:

Its maximum element if all of its elements are consecutive and sorted in ascending order.
-1 otherwise.

You need to find the power of all subarrays of nums of size k.
Return an integer array results of size n - k + 1, where results[i] is the power of nums[i..(i + k - 1)].

Example 1:

Input: nums = [1,2,3,4,3,2,5], k = 3
Output: [3,4,-1,-1,-1]
Explanation:
There are 5 subarrays of nums of size 3:

[1, 2, 3] with the maximum element 3.
[2, 3, 4] with the maximum element 4.
[3, 4, 3] whose elements are not consecutive.
[4, 3, 2] whose elements are not sorted.
[3, 2, 5] whose elements are not consecutive.


Example 2:

Input: nums = [2,2,2,2,2], k = 4
Output: [-1,-1]

Example 3:

Input: nums = [3,2,3,2,3,2], k = 2
Output: [-1,3,-1,3,-1]


Constraints:

1 <= n == nums.length <= 500
1 <= nums[i] <= 105
1 <= k <= n


```

## 翻译

给定数组 nums 和整数 k，对每个长度为 k 的子数组，如果元素连续递增则 power 为最大值，否则为 -1。返回所有子数组的 power。

## Approach

滑动窗口：维护当前连续递增的长度 cnt。遍历数组，如果 nums[i] == nums[i-1]+1 则 cnt++，否则 cnt=1。当 i >= k-1 时，如果 cnt >= k 则结果为 nums[i]，否则为 -1。

## Solution

[SourceCode](./solution.js)
