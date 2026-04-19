# [2963] Count the Number of Good Partitions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-good-partitions/description/)

* algorithms
* Hard (49.19%)
* Likes:    314
* Dislikes: 5
* Testcase Example:  '[1,2,3,4]'

```md
You are given a 0-indexed array nums consisting of positive integers.
A partition of an array into one or more contiguous subarrays is called good if no two subarrays contain the same number.
Return the total number of good partitions of nums.
Since the answer may be large, return it modulo 109 + 7.

Example 1:

Input: nums = [1,2,3,4]
Output: 8
Explanation: The 8 possible good partitions are: ([1], [2], [3], [4]), ([1], [2], [3,4]), ([1], [2,3], [4]), ([1], [2,3,4]), ([1,2], [3], [4]), ([1,2], [3,4]), ([1,2,3], [4]), and ([1,2,3,4]).

Example 2:

Input: nums = [1,1,1,1]
Output: 1
Explanation: The only possible good partition is: ([1,1,1,1]).

Example 3:

Input: nums = [1,2,1,3]
Output: 2
Explanation: The 2 possible good partitions are: ([1,2,1], [3]) and ([1,2,1,3]).


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 翻译

给定正整数数组 nums，将数组分成若干连续子数组，要求任意两个子数组不含相同数字。求好分区的总数，模 10^9+7。

## 解题思路

每个值的所有出现必须在同一个子数组中。对每个值 v，记录 first[v] 和 last[v]，则 [first[v], last[v]) 内不能切割。从左到右扫描，维护 maxLast = 当前已见值的最大 last。当 i == maxLast 时，可以在此处切割。统计可切割点数 cnt，答案 = 2^cnt。

## Solution

[SourceCode](./solution.js)
