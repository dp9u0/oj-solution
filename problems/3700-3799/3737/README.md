# [3737] Count Subarrays With Majority Element I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-subarrays-with-majority-element-i/description/)

* algorithms
* Medium (65.47%)
* Likes:    56
* Dislikes: 5
* Testcase Example:  '[1,2,2,3]\n2'

```md
You are given an integer array nums and an integer target.
Return the number of subarrays of nums in which target is the majority element.
The majority element of a subarray is the element that appears strictly more than half of the times in that subarray.

Example 1:

Input: nums = [1,2,2,3], target = 2
Output: 5
Explanation:
Valid subarrays with target = 2 as the majority element:

nums[1..1] = [2]
nums[2..2] = [2]
nums[1..2] = [2,2]
nums[0..2] = [1,2,2]
nums[1..3] = [2,2,3]

So there are 5 such subarrays.

Example 2:

Input: nums = [1,1,1,1], target = 1
Output: 10
Explanation:
​​​​​​​All 10 subarrays have 1 as the majority element.

Example 3:

Input: nums = [1,2,3], target = 4
Output: 0
Explanation:
target = 4 does not appear in nums at all. Therefore, there cannot be any subarray where 4 is the majority element. Hence the answer is 0.


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 10​​​​​​​9
1 <= target <= 109


```

## 中文翻译

给定数组 nums 和整数 target，求 target 作为严格多数元素（出现次数 > 子数组长度/2）的子数组个数。

## 解题思路

n≤1000，O(n²) 可行。对每个起始位置 i，逐步扩展 j，维护 target 出现次数 count，当 count*2 > (j-i+1) 时计数+1。

## Solution

[SourceCode](./solution.js)
