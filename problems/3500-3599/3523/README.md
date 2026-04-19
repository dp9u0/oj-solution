# [3523] Make Array Non-decreasing

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-array-non-decreasing/description/)

* algorithms
* Medium (57.05%)
* Likes:    93
* Dislikes: 9
* Testcase Example:  '[4,2,5,3,5]'

```md
You are given an integer array nums. In one operation, you can select a subarray and replace it with a single element equal to its maximum value.
Return the maximum possible size of the array after performing zero or more operations such that the resulting array is non-decreasing.

Example 1:

Input: nums = [4,2,5,3,5]
Output: 3
Explanation:
One way to achieve the maximum size is:

Replace subarray nums[1..2] = [2, 5] with 5 &rarr; [4, 5, 3, 5].
Replace subarray nums[2..3] = [3, 5] with 5 &rarr; [4, 5, 5].

The final array [4, 5, 5] is non-decreasing with size 3.

Example 2:

Input: nums = [1,2,3]
Output: 3
Explanation:
No operation is needed as the array [1,2,3] is already non-decreasing.


Constraints:

1 <= nums.length <= 2 * 105
1 <= nums[i] <= 2 * 105


```

## 翻译

给定整数数组nums，每次操作可选择一个子数组替换为其最大值。求经过若干操作后，使数组非递减的最大可能大小。

## 解题思路

从左到右扫描，维护运行最大值。当前元素>=运行最大值时可以保留为独立元素（计数+1），否则必须合并到前面。答案即为"记录高点"的数量。

## Solution

[SourceCode](./solution.js)
