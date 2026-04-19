# [462] Minimum Moves to Equal Array Elements II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/description/)

* algorithms
* Medium (61.67%)
* Likes:    3521
* Dislikes: 132
* Testcase Example:  '[1,2,3]'

```md
Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
In one move, you can increment or decrement an element of the array by 1.
Test cases are designed so that the answer will fit in a 32-bit integer.

Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]

Example 2:

Input: nums = [1,10,2,9]
Output: 16


Constraints:

n == nums.length
1 <= nums.length <= 105
-109 <= nums[i] <= 109


```

## 翻译

给定整数数组 `nums`，每次操作可将一个元素 +1 或 -1。返回使所有元素相等的最少操作次数。

## Approach

**排序取中位数。** 将数组排序后，目标值为中位数（对于 n 个元素，取 `nums[n/2]`）。中位数最小化绝对偏差之和。用双指针从两端向中间累加差值即可。

时间复杂度：O(n log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
