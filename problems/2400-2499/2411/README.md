# [2411] Smallest Subarrays With Maximum Bitwise OR

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/description/)

* algorithms
* Medium (61.97%)
* Likes:    1052
* Dislikes: 73
* Testcase Example:  '[1,0,2,1,3]'

```md
You are given a 0-indexed array nums of length n, consisting of non-negative integers. For each index i from 0 to n - 1, you must determine the size of the minimum sized non-empty subarray of nums starting at i (inclusive) that has the maximum possible bitwise OR.

In other words, let Bij be the bitwise OR of the subarray nums[i...j]. You need to find the smallest subarray starting at i, such that bitwise OR of this subarray is equal to max(Bik) where i <= k <= n - 1.

The bitwise OR of an array is the bitwise OR of all the numbers in it.
Return an integer array answer of size n where answer[i] is the length of the minimum sized subarray starting at i with maximum bitwise OR.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,0,2,1,3]
Output: [3,3,2,2,1]
Explanation:
The maximum possible bitwise OR starting at any index is 3.
- Starting at index 0, the shortest subarray that yields it is [1,0,2].
- Starting at index 1, the shortest subarray that yields the maximum bitwise OR is [0,2,1].
- Starting at index 2, the shortest subarray that yields the maximum bitwise OR is [2,1].
- Starting at index 3, the shortest subarray that yields the maximum bitwise OR is [1,3].
- Starting at index 4, the shortest subarray that yields the maximum bitwise OR is [3].
Therefore, we return [3,3,2,2,1].

Example 2:

Input: nums = [1,2]
Output: [2,1]
Explanation:
Starting at index 0, the shortest subarray that yields the maximum bitwise OR is of length 2.
Starting at index 1, the shortest subarray that yields the maximum bitwise OR is of length 1.
Therefore, we return [2,1].


Constraints:

n == nums.length
1 <= n <= 105
0 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定非负整数数组 nums，对每个位置 i，找到从 i 开始的最短非空子数组，使其按位 OR 值等于从 i 开始的所有子数组中最大的按位 OR 值。返回每个位置的最短子数组长度。

## 解题思路

**位运算 + 从右往左遍历**

1. 从右往左遍历，维护每个 bit 位最近一次出现的位置
2. 对于位置 i，更新 nums[i] 中所有为 1 的 bit 的最近位置为 i
3. 从 i 开始要获得最大 OR，需要包含所有"最近位置最远的"那个 bit，即 answer[i] = max(所有 bit 的最近位置) - i + 1
4. 如果没有 bit，answer[i] = 1（至少包含自身）

时间复杂度 O(n * 32)，空间复杂度 O(32)。
