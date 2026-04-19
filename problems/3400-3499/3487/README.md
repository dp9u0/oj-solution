# [3487] Maximum Unique Subarray Sum After Deletion

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/description/)

* algorithms
* Easy (40.47%)
* Likes:    475
* Dislikes: 79
* Testcase Example:  '[1,2,3,4,5]'

```md
You are given an integer array nums.
You are allowed to delete any number of elements from nums without making it empty. After performing the deletions, select a subarray of nums such that:

All elements in the subarray are unique.
The sum of the elements in the subarray is maximized.

Return the maximum sum of such a subarray.

Example 1:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation:
Select the entire array without deleting any element to obtain the maximum sum.

Example 2:

Input: nums = [1,1,0,1,1]
Output: 1
Explanation:
Delete the element nums[0] == 1, nums[1] == 1, nums[2] == 0, and nums[3] == 1. Select the entire array [1] to obtain the maximum sum.

Example 3:

Input: nums = [1,2,-1,-2,1,0,-1]
Output: 3
Explanation:
Delete the elements nums[2] == -1 and nums[3] == -2, and select the subarray [2, 1] from [1, 2, 1, 0, -1] to obtain the maximum sum.


Constraints:

1 <= nums.length <= 100
-100 <= nums[i] <= 100


```

## 中文翻译

给定数组 nums，可删除任意元素后选一个子数组，要求子数组元素唯一且和最大。返回最大和。

## 解题思路

关键观察：可以删除任意元素，所以只需从正数中选不重复的值求和。用 Set 记录正数去重后求和。若没有正数则取最大元素（单个元素）。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
