# [3101] Count Alternating Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-alternating-subarrays/description/)

* algorithms
* Medium (57.38%)
* Likes:    242
* Dislikes: 10
* Testcase Example:  '[0,1,1,1]'

```md
You are given a binary array nums.
We call a subarray alternating if no two adjacent elements in the subarray have the same value.
Return the number of alternating subarrays in nums.

Example 1:

Input: nums = [0,1,1,1]
Output: 5
Explanation:
The following subarrays are alternating: [0], [1], [1], [1], and [0,1].

Example 2:

Input: nums = [1,0,1,0]
Output: 10
Explanation:
Every subarray of the array is alternating. There are 10 possible subarrays that we can choose.


Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.


```

## 中文翻译

给定二进制数组 nums，求相邻元素不相同的子数组（交替子数组）个数。

## 解题思路

统计最长交替段的长度。一段长度为 k 的交替段贡献 k*(k+1)/2 个交替子数组。遍历维护当前交替段长度，遇到相同相邻元素则分段累加。

## Solution

[SourceCode](./solution.js)
