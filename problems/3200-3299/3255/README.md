# [3255] Find the Power of K-Size Subarrays II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/description/)

* algorithms
* Medium (31.50%)
* Likes:    164
* Dislikes: 12
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

1 <= n == nums.length <= 105
1 <= nums[i] <= 106
1 <= k <= n


```

## 翻译

对每个长度为 k 的子数组，判断是否连续递增（相邻差为1），是则返回最大值，否则 -1。

## 解题思路

预处理连续递增段长度 len[i]（以 i 结尾的最长连续递增子数组长度）。若 len[i+k-1] >= k，则子数组 [i..i+k-1] 连续递增，答案为 nums[i+k-1]。

## Solution

[SourceCode](./solution.js)
