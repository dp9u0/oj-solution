# [2009] Minimum Number of Operations to Make Array Continuous

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/description/)

* algorithms
* Hard (52.05%)
* Likes:    1996
* Dislikes: 54
* Testcase Example:  '[4,2,5,3]'

```md
You are given an integer array nums. In one operation, you can replace any element in nums with any integer.
nums is considered continuous if both of the following conditions are fulfilled:

All elements in nums are unique.
The difference between the maximum element and the minimum element in nums equals nums.length - 1.

For example, nums = [4, 2, 5, 3] is continuous, but nums = [1, 2, 3, 5, 6] is not continuous.
Return the minimum number of operations to make nums continuous.

Example 1:

Input: nums = [4,2,5,3]
Output: 0
Explanation:nums is already continuous.

Example 2:

Input: nums = [1,2,3,5,6]
Output: 1
Explanation:One possible solution is to change the last element to 4.
The resulting array is [1,2,3,5,4], which is continuous.

Example 3:

Input: nums = [1,10,100,1000]
Output: 3
Explanation:One possible solution is to:
- Change the second element to 2.
- Change the third element to 3.
- Change the fourth element to 4.
The resulting array is [1,2,3,4], which is continuous.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums，每次操作可以将任意元素替换为任意整数。使数组连续（所有元素唯一且 max - min = n - 1）的最少操作次数。

## 解题思路

**排序 + 滑动窗口**

去重排序后，问题转化为：在排序数组中找一个长度为 n 的窗口 [left, left+n-1]，使得窗口内已有尽可能多的元素。

对每个 left，用二分查找或滑动窗口找到有多少元素落在 [left, left+n-1] 范围内。操作数 = n - 窗口内元素数。

去重后用滑动窗口，right 指针不断右移，当 unique[right] - unique[left] >= n 时收缩 left。

时间复杂度 O(n log n)，空间复杂度 O(n)。
