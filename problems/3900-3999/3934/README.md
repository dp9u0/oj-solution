# [3934] Smallest Unique Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-unique-subarray/description/)

* algorithms
* Hard (39.83%)
* Likes:    67
* Dislikes: 5
* Testcase Example:  '[3,3,3]'

```md
You are given an integer array nums.
Find the minimum length of a subarray that is not identical to any other subarray in nums.
Return an integer denoting the minimum possible length of such a subarray.
Two subarrays are considered identical if they have the same length and the same elements in corresponding positions.

Example 1:

Input: nums = [3,3,3]
Output: 3
Explanation:

Subarrays of length 1: [3] &rarr; appears 3 times
Subarrays of length 2: [3, 3] &rarr; appears 2 times
Subarrays of length 3: [3, 3, 3] &rarr; appears once

The subarray [3, 3, 3] is unique, so the smallest unique subarray length is 3.

Example 2:

Input: nums = [2,1,2,3,3]
Output: 1
Explanation:
Subarrays of length 1:

[2] &rarr; appears 2 times
[1] &rarr; appears once
[3] &rarr; appears 2 times

The subarray [1] is unique, so the smallest unique subarray length is 1.
Example 3:

Input: nums = [1,1,2,2,1]
Output: 2
Explanation:
Subarrays of length 1:

[1] &rarr; appears 3 times
[2] &rarr; appears 2 times

Subarrays of length 2:

[1, 1] &rarr; appears once
[1, 2] &rarr; appears once
[2, 2] &rarr; appears once
[2, 1] &rarr; appears once

There is at least one subarray of length 2 that is unique, so the smallest unique subarray length is 2.

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

返回与数组中**任何其他子数组**都不同的子数组的最小长度（相同 = 等长且对应位置相同）。

示例 1：`[3,3,3]` → `3`（长度 1、2 均重复）；示例 2：`[2,1,2,3,3]` → `1`

约束：n ≤ 10^5

## 解题思路

关键：**唯一性随长度单调**——长度 L 的窗口唯一 ⟹ 包含它的 L+1 窗口也唯一（相同副本会蕴含相同的 L 段）→ 二分 L。

判定：滚动双哈希（两素数模）计数所有长度 L 窗口，存在计数 = 1 即真。O(n log n)。小规模与暴力对拍一致。