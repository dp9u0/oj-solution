# [2104] Sum of Subarray Ranges

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-subarray-ranges/description/)

* algorithms
* Medium (60.94%)
* Likes:    2999
* Dislikes: 143
* Testcase Example:  '[1,2,3]'

```md
You are given an integer array nums. The range of a subarray of nums is the difference between the largest and smallest element in the subarray.
Return the sum of all subarray ranges of nums.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,2,3]
Output: 4
Explanation: The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0
[2], range = 2 - 2 = 0
[3], range = 3 - 3 = 0
[1,2], range = 2 - 1 = 1
[2,3], range = 3 - 2 = 1
[1,2,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.
Example 2:

Input: nums = [1,3,3]
Output: 4
Explanation: The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0
[3], range = 3 - 3 = 0
[3], range = 3 - 3 = 0
[1,3], range = 3 - 1 = 2
[3,3], range = 3 - 3 = 0
[1,3,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 2 + 0 + 2 = 4.

Example 3:

Input: nums = [4,-2,-3,4,1]
Output: 59
Explanation: The sum of all subarray ranges of nums is 59.


Constraints:

1 <= nums.length <= 1000
-109 <= nums[i] <= 109


Follow-up: Could you find a solution with O(n) time complexity?

```

## 中文翻译

求所有子数组的（最大值 - 最小值）之和。

## 解题思路

**暴力枚举**

枚举所有子数组起点 i，向右扩展终点 j，维护当前最小值和最大值，累加差值。

时间复杂度：O(n^2)，空间复杂度：O(1)

进阶 O(n) 解法：用单调栈分别求每个元素作为最大值/最小值的子数组个数，sum(max) - sum(min)。

## Solution

[SourceCode](./solution.js)
