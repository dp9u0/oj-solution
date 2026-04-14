# [3097] Shortest Subarray With OR at Least K II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/description/)

* algorithms
* Medium (50.22%)
* Likes:    761
* Dislikes: 73
* Testcase Example:  '[1,2,3]\n2'

```md
You are given an array nums of non-negative integers and an integer k.
An array is called special if the bitwise OR of all of its elements is at least k.
Return the length of the shortest special non-empty subarray of nums, or return -1 if no special subarray exists.

Example 1:

Input: nums = [1,2,3], k = 2
Output: 1
Explanation:
The subarray [3] has OR value of 3. Hence, we return 1.

Example 2:

Input: nums = [2,1,8], k = 10
Output: 3
Explanation:
The subarray [2,1,8] has OR value of 11. Hence, we return 3.

Example 3:

Input: nums = [1,2], k = 0
Output: 1
Explanation:
The subarray [1] has OR value of 1. Hence, we return 1.


Constraints:

1 <= nums.length <= 2 * 105
0 <= nums[i] <= 109
0 <= k <= 109


```

## 翻译

给定非负整数数组 nums 和整数 k。找一个最短的非空子数组，使得其所有元素的按位 OR >= k。返回最短长度，不存在则返回 -1。

## Approach

滑动窗口 + 按位计数。维护窗口内每个 bit 位出现 1 的次数。右指针扩展，当窗口 OR >= k 时尝试收缩左指针。

- bitCount[bit] 记录窗口内第 bit 位为 1 的元素个数
- 窗口 OR 值通过 bitCount 计算：某位 count > 0 则该位为 1
- 收缩时更新 bitCount 并重新计算 OR

时间复杂度 O(n * 30)，空间复杂度 O(30)。

## Solution

[SourceCode](./solution.js)
