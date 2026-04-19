# [3388] Count Beautiful Splits in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-beautiful-splits-in-an-array/description/)

* algorithms
* Medium (18.69%)
* Likes:    106
* Dislikes: 25
* Testcase Example:  '[1,1,2,1]'

```md
You are given an array nums.
A split of an array nums is beautiful if:

The array nums is split into three subarrays: nums1, nums2, and nums3, such that nums can be formed by concatenating nums1, nums2, and nums3 in that order.
The subarray nums1 is a prefix of nums2 OR nums2 is a prefix of nums3.

Return the number of ways you can make this split.

Example 1:

Input: nums = [1,1,2,1]
Output: 2
Explanation:
The beautiful splits are:

A split with nums1 = [1], nums2 = [1,2], nums3 = [1].
A split with nums1 = [1], nums2 = [1], nums3 = [2,1].


Example 2:

Input: nums = [1,2,3,4]
Output: 0
Explanation:
There are 0 beautiful splits.


Constraints:

1 <= nums.length <= 5000
0 <= nums[i] <= 50


```

## 翻译

将数组分成三个非空子数组nums1/nums2/nums3，若nums1是nums2的前缀或nums2是nums3的前缀则为美丽分割，求美丽分割数。

## 解题思路

预处理LCP数组，lcp[i][j]表示从位置i和j开始的最长公共前缀长度。然后枚举所有分割点(i,j)，用O(1)判断前缀关系。

## Solution

[SourceCode](./solution.js)
