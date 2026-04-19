# [930] Binary Subarrays With Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/binary-subarrays-with-sum/description/)

* algorithms
* Medium (68.59%)
* Likes:    4871
* Dislikes: 169
* Testcase Example:  '[1,0,1,0,1]\n2'

```md
Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
A subarray is a contiguous part of the array.

Example 1:

Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

Example 2:

Input: nums = [0,0,0,0,0], goal = 0
Output: 15


Constraints:

1 <= nums.length <= 3 * 104
nums[i] is either 0 or 1.
0 <= goal <= nums.length


```

## 翻译

给定一个二进制数组 `nums` 和整数 `goal`，返回和为 `goal` 的非空子数组个数。

## Approach

前缀和 + 哈希表。遍历数组维护前缀和，用 Map 统计每个前缀和出现的次数。对于当前位置的前缀和 `sum`，需要找之前有多少个前缀和等于 `sum - goal`，即 `count.get(sum - goal)`。

初始化时 `count.set(0, 1)` 表示空前缀。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
