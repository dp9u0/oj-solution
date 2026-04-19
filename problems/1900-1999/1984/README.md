# [1984] Minimum Difference Between Highest and Lowest of K Scores

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/)

* algorithms
* Easy (66.25%)
* Likes:    1462
* Dislikes: 376
* Testcase Example:  '[90]\n1'

```md
You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.
Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.
Return the minimum possible difference.

Example 1:

Input: nums = [90], k = 1
Output: 0
Explanation: There is one way to pick score(s) of one student:
- [90]. The difference between the highest and lowest score is 90 - 90 = 0.
The minimum possible difference is 0.

Example 2:

Input: nums = [9,4,1,7], k = 2
Output: 2
Explanation: There are six ways to pick score(s) of two students:
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
- [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
- [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
- [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
The minimum possible difference is 2.

Constraints:

1 <= k <= nums.length <= 1000
0 <= nums[i] <= 105


```

## 中文翻译

给定数组 nums 和整数 k，从中选 k 个元素，使得最大值与最小值的差最小，返回最小差值。

## 解题思路

排序后，最小的差值一定出现在连续 k 个元素中。滑动窗口遍历排序后的数组，取相邻 k 个元素的差的最小值。

## Solution

[SourceCode](./solution.js)
