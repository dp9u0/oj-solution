# [1300] Sum of Mutated Array Closest to Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/description/)

* algorithms
* Medium (46.24%)
* Likes:    1211
* Dislikes: 155
* Testcase Example:  '[4,9,3]\n10'

```md
Given an integer array arr and a target value target, return the integer value such that when we change all the integers larger than value in the given array to be equal to value, the sum of the array gets as close as possible (in absolute difference) to target.
In case of a tie, return the minimum such integer.
Notice that the answer is not neccesarilly a number from arr.

Example 1:

Input: arr = [4,9,3], target = 10
Output: 3
Explanation: When using 3 arr converts to [3, 3, 3] which sums 9 and that&#39;s the optimal answer.

Example 2:

Input: arr = [2,3,5], target = 10
Output: 5

Example 3:

Input: arr = [60864,25176,27249,21296,20204], target = 56803
Output: 11361


Constraints:

1 <= arr.length <= 104
1 <= arr[i], target <= 105


```

## 翻译

给定整数数组 arr 和目标值 target，找到一个整数值 value，将数组中所有大于 value 的数替换为 value 后，数组的和尽可能接近 target（绝对差最小）。如果出现并列，返回最小的 value。注意答案不一定在 arr 中。

## Approach

二分查找。先排序数组并计算前缀和。对于候选值 v，变异后的数组和为：(<=v 的元素之和) + v × (>v 的元素个数)，可用前缀和 + 二分查找快速计算。

sum(v) 关于 v 单调递增，因此可以二分搜索最接近 target 的 v。搜索范围 [0, max(arr)]。

时间复杂度 O(n log n + n log(max))，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
