# [3719] Longest Balanced Subarray I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-balanced-subarray-i/description/)

* algorithms
* Medium (65.65%)
* Likes:    483
* Dislikes: 42
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

1 <= nums.length <= 1500
1 <= nums[i] <= 105


```

## 题目翻译

给定整数数组，找最长子数组使得其中不同偶数的个数等于不同奇数的个数。

## 解题思路

枚举每个起点，向右扩展，用 Set 跟踪不同偶数和奇数的数量。n ≤ 1500，O(n^2) 可接受。

## Solution

[SourceCode](./solution.js)
