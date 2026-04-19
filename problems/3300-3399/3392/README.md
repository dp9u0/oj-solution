# [3392] Count Subarrays of Length Three With a Condition

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/description/)

* algorithms
* Easy (61.44%)
* Likes:    303
* Dislikes: 31
* Testcase Example:  '[1,2,1,4,1]'

```md
Given an integer array nums, return the number of subarrays of length 3 such that the sum of the first and third numbers equals exactly half of the second number.

Example 1:

Input: nums = [1,2,1,4,1]
Output: 1
Explanation:
Only the subarray [1,4,1] contains exactly 3 elements where the sum of the first and third numbers equals half the middle number.

Example 2:

Input: nums = [1,1,1]
Output: 0
Explanation:
[1,1,1] is the only subarray of length 3. However, its first and third numbers do not add to half the middle number.


Constraints:

3 <= nums.length <= 100
-100 <= nums[i] <= 100


```

## 题目翻译

给定数组nums，返回长度为3的子数组中第一个数加第三个数等于第二个数一半的个数。

## 解题思路

遍历所有长度为3的子数组，检查nums[i]+nums[i+2] == nums[i+1]/2，即2*(nums[i]+nums[i+2]) == nums[i+1]。

## Solution

[SourceCode](./solution.js)
