# [775] Global and Local Inversions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/global-and-local-inversions/description/)

* algorithms
* Medium (42.76%)
* Likes:    1878
* Dislikes: 382
* Testcase Example:  '[1,0,2]'

```md
You are given an integer array nums of length n which represents a permutation of all the integers in the range [0, n - 1].
The number of global inversions is the number of the different pairs (i, j) where:

0 <= i < j < n
nums[i] > nums[j]

The number of local inversions is the number of indices i where:

0 <= i < n - 1
nums[i] > nums[i + 1]

Return true if the number of global inversions is equal to the number of local inversions.

Example 1:

Input: nums = [1,0,2]
Output: true
Explanation: There is 1 global inversion and 1 local inversion.

Example 2:

Input: nums = [1,2,0]
Output: false
Explanation: There are 2 global inversions and 1 local inversion.


Constraints:

n == nums.length
1 <= n <= 105
0 <= nums[i] < n
All the integers of nums are unique.
nums is a permutation of all the numbers in the range [0, n - 1].


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个长度为 n 的整数数组 nums，表示 [0, n-1] 的一个排列。全局逆序对数为满足 i < j 且 nums[i] > nums[j] 的对数，局部逆序数为满足 nums[i] > nums[i+1] 的索引 i 的个数。判断全局逆序数是否等于局部逆序数。

## 解题思路

**关键观察：贪心/数学**

局部逆序是全局逆序的子集。要使两者相等，意味着不能存在非相邻的逆序对，即对于所有 i，不存在 j > i+1 使得 nums[i] > nums[j]。

等价条件：对于每个位置 i，nums[i] 只能和相邻元素交换，即 |nums[i] - i| <= 1。如果任何元素偏离其原始位置超过 1，则一定存在非相邻逆序对。

遍历数组检查即可，时间复杂度 O(n)。
