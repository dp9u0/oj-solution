# [2740] Find the Value of the Partition

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-value-of-the-partition/description/)

* algorithms
* Medium (64.83%)
* Likes:    325
* Dislikes: 26
* Testcase Example:  '[1,3,2,4]'

```md
You are given a positive integer array nums.
Partition nums into two arrays,nums1 and nums2, such that:

Each element of the array nums belongs to either the array nums1 or the array nums2.
Both arrays are non-empty.
The value of the partition is minimized.

The value of the partition is
max(nums1) - min(nums2)
.
Here, max(nums1) denotes the maximum element of the array nums1, and min(nums2) denotes the minimum element of the array nums2.
Return the integer denoting the value of such partition.

Example 1:

Input: nums = [1,3,2,4]
Output: 1
Explanation: We can partition the array nums into nums1 = [1,2] and nums2 = [3,4].
- The maximum element of the array nums1 is equal to 2.
- The minimum element of the array nums2 is equal to 3.
The value of the partition is
2 - 3
= 1.
It can be proven that 1 is the minimum value out of all partitions.

Example 2:

Input: nums = [100,1,10]
Output: 9
Explanation: We can partition the array nums into nums1 = [10] and nums2 = [100,1].
- The maximum element of the array nums1 is equal to 10.
- The minimum element of the array nums2 is equal to 1.
The value of the partition is
10 - 1
= 9.
It can be proven that 9 is the minimum value out of all partitions.


Constraints:

2 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 中文翻译

将数组分成两个非空子数组 nums1 和 nums2，使 max(nums1) - min(nums2) 最小，返回该最小值。

## 解题思路

排序后，最优分割一定在相邻元素之间：nums1 取前半部分（排序后），nums2 取后半部分。所以排序后找相邻元素最小差值即可。

时间复杂度：O(n log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
