# [2653] Sliding Subarray Beauty

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sliding-subarray-beauty/description/)

* algorithms
* Medium (36.75%)
* Likes:    750
* Dislikes: 140
* Testcase Example:  '[1,-1,-3,-2,3]\n3\n2'

```md
Given an integer array nums containing n integers, find the beauty of each subarray of size k.
The beauty of a subarray is the xth smallest integer in the subarray if it is negative, or 0 if there are fewer than x negative integers.
Return an integer array containing n - k + 1 integers, which denote the beauty of the subarrays in order from the first index in the array.


A subarray is a contiguous non-empty sequence of elements within an array.



Example 1:

Input: nums = [1,-1,-3,-2,3], k = 3, x = 2
Output: [-1,-2,-2]
Explanation: There are 3 subarrays with size k = 3.
The first subarray is [1, -1, -3] and the 2nd smallest negative integer is -1.
The second subarray is [-1, -3, -2] and the 2nd smallest negative integer is -2.
The third subarray is [-3, -2, 3]and the 2nd smallest negative integer is -2.
Example 2:

Input: nums = [-1,-2,-3,-4,-5], k = 2, x = 2
Output: [-1,-2,-3,-4]
Explanation: There are 4 subarrays with size k = 2.
For [-1, -2], the 2nd smallest negative integer is -1.
For [-2, -3], the 2nd smallest negative integer is -2.
For [-3, -4], the 2nd smallest negative integer is -3.
For [-4, -5], the 2nd smallest negative integer is -4.
Example 3:

Input: nums = [-3,1,2,-3,0,-3], k = 2, x = 1
Output: [-3,0,-3,-3,-3]
Explanation: There are 5 subarrays with size k = 2.
For [-3, 1], the 1st smallest negative integer is -3.
For [1, 2], there is no negative integer so the beauty is 0.
For [2, -3], the 1st smallest negative integer is -3.
For [-3, 0], the 1st smallest negative integer is -3.
For [0, -3], the 1st smallest negative integer is -3.

Constraints:

n == nums.length
1 <= n <= 105
1 <= k <= n
1 <= x <= k
-50<= nums[i] <= 50


```

## 中文翻译

给定数组和窗口大小 k，对每个大小为 k 的子数组，求第 x 小的负数（如果负数不足 x 个则为 0）。值域为 [-50, 50]。

## 解题思路

值域只有 [-50, 50]，用计数数组（偏移50）维护滑动窗口中每个值的个数。每次滑动时更新计数，然后从 -50 开始累加计数找第 x 个负数。

时间复杂度：O(n * 50)，空间复杂度：O(101)

## Solution

[SourceCode](./solution.js)
