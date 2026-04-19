# [3721] Longest Balanced Subarray II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-balanced-subarray-ii/description/)

* algorithms
* Hard (33.75%)
* Likes:    343
* Dislikes: 65
* Testcase Example:  '[2,5,4,3]'

```md
You are given an integer array nums.
A subarray is called balanced if the number of distinct even numbers in the subarray is equal to the number of distinct odd numbers.
Return the length of the longest balanced subarray.

Example 1:

Input: nums = [2,5,4,3]
Output: 4
Explanation:

The longest balanced subarray is [2, 5, 4, 3].
It has 2 distinct even numbers [2, 4] and 2 distinct odd numbers [5, 3]. Thus, the answer is 4.


Example 2:

Input: nums = [3,2,2,5,4]
Output: 5
Explanation:

The longest balanced subarray is [3, 2, 2, 5, 4].
It has 2 distinct even numbers [2, 4] and 2 distinct odd numbers [3, 5]. Thus, the answer is 5.


Example 3:

Input: nums = [1,2,3,2]
Output: 3
Explanation:

The longest balanced subarray is [2, 3, 2].
It has 1 distinct even number [2] and 1 distinct odd number [3]. Thus, the answer is 3.



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 翻译

给定整数数组 nums，找最长子数组使得其中不同偶数的个数等于不同奇数的个数。

## 解题思路

线段树 + 扫描线。定义 balance(l, r) = 不同偶数个数 - 不同奇数个数。固定右端 r，随 l 从 r 向左移动，balance 是阶梯函数。

关键：处理位置 r 时，对值 v = nums[r]，v 在 [l, r] 中为新 distinct 值当且仅当 l > prev_last（v 上次出现位置）。因此对 [prev_last+1, r] 区间加 w(v)（偶数+1，奇数-1）。

线段树支持：区间加（lazy propagation）+ 查询最左零值位置。每次找最左 l 使 balance(l,r)=0，更新答案。

O(n log n) 时间。

## Solution

[SourceCode](./solution.js)
