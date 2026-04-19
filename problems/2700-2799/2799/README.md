# [2799] Count Complete Subarrays in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-complete-subarrays-in-an-array/description/)

* algorithms
* Medium (75.95%)
* Likes:    1140
* Dislikes: 28
* Testcase Example:  '[1,3,1,2,2]'

```md
You are given an array nums consisting of positive integers.
We call a subarray of an array complete if the following condition is satisfied:

The number of distinct elements in the subarray is equal to the number of distinct elements in the whole array.

Return the number of complete subarrays.
A subarray is a contiguous non-empty part of an array.

Example 1:

Input: nums = [1,3,1,2,2]
Output: 4
Explanation: The complete subarrays are the following: [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].

Example 2:

Input: nums = [5,5,5,5]
Output: 10
Explanation: The array consists only of the integer 5, so any subarray is complete. The number of subarrays that we can choose is 10.


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 2000


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定一个由正整数组成的数组 `nums`。如果一个子数组中不同元素的个数等于整个数组中不同元素的个数，则称该子数组为"完整子数组"。返回完整子数组的数量。子数组是数组的连续非空部分。

### 解题思路

**滑动窗口**

1. 先求整个数组的不同元素数 `totalDistinct`
2. 用滑动窗口，右指针扩展窗口，用 Map 统计窗口内各元素频率
3. 当窗口内不同元素数达到 `totalDistinct` 时，说明 `[left, right], [left, right+1], ..., [left, n-1]` 都满足条件，累加 `n - right`
4. 收缩左指针直到窗口内不同元素数小于 `totalDistinct`，继续扩展右指针
