# [3046] Split the Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-the-array/description/)

* algorithms
* Easy (61.11%)
* Likes:    173
* Dislikes: 16
* Testcase Example:  '[1,1,2,2,3,4]'

```md
You are given an integer array nums of even length. You have to split the array into two parts nums1 and nums2 such that:

nums1.length == nums2.length == nums.length / 2.
nums1 should contain distinct elements.
nums2 should also contain distinct elements.

Return true if it is possible to split the array, and false otherwise.

Example 1:

Input: nums = [1,1,2,2,3,4]
Output: true
Explanation: One of the possible ways to split nums is nums1 = [1,2,3] and nums2 = [1,2,4].

Example 2:

Input: nums = [1,1,1,1]
Output: false
Explanation: The only possible way to split nums is nums1 = [1,1] and nums2 = [1,1]. Both nums1 and nums2 do not contain distinct elements. Therefore, we return false.


Constraints:

1 <= nums.length <= 100
nums.length % 2 == 0
1 <= nums[i] <= 100


```

## 翻译

给定偶数长度的整数数组，判断能否将数组分成两个等长的子数组，且每个子数组中的元素都各不相同。

## Approach

统计每个数的出现次数。如果任何数出现超过 2 次，则无法分成两个各不相同的子数组，返回 false。否则可以分配到两个子数组中。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
