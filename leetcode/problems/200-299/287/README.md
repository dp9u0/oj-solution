# [287] Find the Duplicate Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-duplicate-number/description/)

* algorithms
* Medium (57.13%)
* Testcase Example:  '[1,3,4,2,2]'

```md
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
There is only one repeated number in nums, return this repeated number.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2
Example 2:
Input: nums = [3,1,3,4,2]
Output: 3
Example 3:
Input: nums = [1,1]
Output: 1
Example 4:
Input: nums = [1,1,2]
Output: 1

Constraints:
2 <= n <= 3 * 10^4
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.

Follow up:
How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem without modifying the array nums?
Can you solve the problem using only constant, O(1) extra space?
Can you solve the problem with runtime complexity less than O(n^2)?

```

## Solution

1. 将数字对应位置的数 设置为相反数, 例如`nums[nums[i]]` 如果 `nums[nums[i]]` 是负数 则说明是第二次遍历 `nums[i]` 就是重复的
2. 快慢指针(重复的数字作为指针肯定会出现"环" 环就可以利用快慢指针)

[SourceCode](./solution.js)
