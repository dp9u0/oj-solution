# [3731] Find Missing Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-missing-elements/description/)

* algorithms
* Easy (82.95%)
* Likes:    78
* Dislikes: 4
* Testcase Example:  '[1,4,2,5]'

```md
You are given an integer array nums consisting of unique integers.
Originally, nums contained every integer within a certain range. However, some integers might have gone missing from the array.
The smallest and largest integers of the original range are still present in nums.
Return a sorted list of all the missing integers in this range. If no integers are missing, return an empty list.

Example 1:

Input: nums = [1,4,2,5]
Output: [3]
Explanation:
The smallest integer is 1 and the largest is 5, so the full range should be [1,2,3,4,5]. Among these, only 3 is missing.

Example 2:

Input: nums = [7,8,6,9]
Output: []
Explanation:
The smallest integer is 6 and the largest is 9, so the full range is [6,7,8,9]. All integers are already present, so no integer is missing.

Example 3:

Input: nums = [5,1]
Output: [2,3,4]
Explanation:
The smallest integer is 1 and the largest is 5, so the full range should be [1,2,3,4,5]. The missing integers are 2, 3, and 4.


Constraints:

2 <= nums.length <= 100
1 <= nums[i] <= 100


```

## 题目翻译

给定唯一整数数组 nums，原范围从 min 到 max 的所有整数中，找出缺失的整数，返回排序后的列表。

## 解题思路

用 Set 存储已有数字，遍历 [min, max] 范围找不在 Set 中的数。时间 O(n + range)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
