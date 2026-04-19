# [1959] Minimum Total Space Wasted With K Resizing Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/description/)

* algorithms
* Medium (43.93%)
* Likes:    595
* Dislikes: 63
* Testcase Example:  '[10,20]\n0'

```md
You are currently designing a dynamic array. You are given a 0-indexed integer array nums, where nums[i] is the number of elements that will be in the array at time i. In addition, you are given an integer k, the maximum number of times you can resize the array (to any size).
The size of the array at time t, sizet, must be at least nums[t] because there needs to be enough space in the array to hold all the elements. The space wasted attime t is defined as sizet - nums[t], and the total space wasted is the sum of the space wasted across every time t where 0 <= t < nums.length.
Return the minimum total space wasted if you can resize the array at most k times.
Note: The array can have any size at the start and does not count towards the number of resizing operations.

Example 1:

Input: nums = [10,20], k = 0
Output: 10
Explanation: size = [20,20].
We can set the initial size to be 20.
The total wasted space is (20 - 10) + (20 - 20) = 10.

Example 2:

Input: nums = [10,20,30], k = 1
Output: 10
Explanation: size = [20,20,30].
We can set the initial size to be 20 and resize to 30 at time 2.
The total wasted space is (20 - 10) + (20 - 20) + (30 - 30) = 10.

Example 3:

Input: nums = [10,20,15,30,20], k = 2
Output: 15
Explanation: size = [10,20,20,30,30].
We can set the initial size to 10, resize to 20 at time 1, and resize to 30 at time 3.
The total wasted space is (10 - 10) + (20 - 20) + (20 - 15) + (30 - 30) + (30 - 20) = 15.


Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 106
0 <= k <= nums.length - 1


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定数组 nums 和最多 k 次调整大小的机会。每次调整可以将数组大小设为任意值。时间 t 的浪费空间为 size[t] - nums[t]。初始大小不算调整次数。返回最小总浪费空间。

## 解题思路

区间 DP。将数组分成最多 k+1 段（k 次调整产生 k+1 个区间），每段内的 size 取该段的最大值，浪费为 max × len - sum。
dp[i][j] 表示前 i 个元素使用 j 次调整的最小浪费。转移：枚举最后一段的起点 p，dp[i][j] = min(dp[p][j-1] + waste(p, i))。
预处理每个区间的 max 和 sum，O(n²)。总复杂度 O(n²k)。
