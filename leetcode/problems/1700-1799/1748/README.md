# [1748] Sum of Unique Elements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-unique-elements/description/)

* algorithms
* Easy (79.89%)
* Likes:    1699
* Dislikes: 35
* Testcase Example:  '[1,2,3,2]'

```md
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
Return the sum of all the unique elements of nums.

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100


```

## 中文翻译

给定整数数组 nums，返回所有恰好出现一次的元素之和。

## 解题思路

用哈希表计数，求只出现一次的元素之和。

## Solution

[SourceCode](./solution.js)
