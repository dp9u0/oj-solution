# [1929] Concatenation of Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/concatenation-of-array/description/)

* algorithms
* Easy (90.42%)
* Likes:    4191
* Dislikes: 462
* Testcase Example:  '[1,2,1]'

```md
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]


Constraints:

n == nums.length
1 <= n <= 1000
1 <= nums[i] <= 1000


```

## 翻译

给定数组 nums，返回将 nums 拼接两次得到的数组。

## Approach

直接返回 nums.concat(nums) 即可。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
