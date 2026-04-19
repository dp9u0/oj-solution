# [2765] Longest Alternating Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-alternating-subarray/description/)

* algorithms
* Easy (35.23%)
* Likes:    247
* Dislikes: 188
* Testcase Example:  '[2,3,4,3,4]'

```md
You are given a 0-indexed integer array nums. A subarray s of length m is called alternating if:

m is greater than 1.
s1 = s0 + 1.
The 0-indexed subarray s looks like [s0, s1, s0, s1,...,s(m-1) % 2]. In other words, s1 - s0 = 1, s2 - s1 = -1, s3 - s2 = 1, s4 - s3 = -1, and so on up to s[m - 1] - s[m - 2] = (-1)m.

Return the maximum length of all alternating subarrays present in nums or -1 if no such subarray exists.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [2,3,4,3,4]
Output: 4
Explanation:
The alternating subarrays are [2, 3], [3,4], [3,4,3], and [3,4,3,4]. The longest of these is [3,4,3,4], which is of length 4.

Example 2:

Input: nums = [4,5,6]
Output: 2
Explanation:
[4,5] and [5,6] are the only two alternating subarrays. They are both of length 2.


Constraints:

2 <= nums.length <= 100
1 <= nums[i] <= 104


```

## 中文翻译

给定数组 nums，找最长交替子数组：s[1]=s[0]+1，且交替出现差 +1 和 -1（即 s[i]-s[i-1] = (-1)^i）。返回最长长度，不存在则 -1。

## 解题思路

遍历数组，对每个起点尝试扩展交替子数组。用变量跟踪当前期望的差值（+1 或 -1），不满足则重置。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
