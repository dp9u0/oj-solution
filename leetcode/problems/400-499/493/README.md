# [493] Reverse Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reverse-pairs/description/)

* algorithms
* Hard (33.99%)
* Likes:    7025
* Dislikes: 300
* Testcase Example:  '[1,3,2,3,1]'

```md
Given an integer array nums, return the number of reverse pairs in the array.
A reverse pair is a pair (i, j) where:

0 <= i < j < nums.length and
nums[i] > 2 * nums[j].


Example 1:

Input: nums = [1,3,2,3,1]
Output: 2
Explanation: The reverse pairs are:
(1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
(3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1

Example 2:

Input: nums = [2,4,3,5,1]
Output: 3
Explanation: The reverse pairs are:
(1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
(2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
(3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1


Constraints:

1 <= nums.length <= 5 * 104
-231 <= nums[i] <= 231 - 1


```

## 翻译

给定整数数组 nums，返回其中翻转对的数量。翻转对是满足 0 <= i < j < n 且 nums[i] > 2 * nums[j] 的对 (i, j)。

## 解题思路

归并排序。在归并过程中，利用左右两半各自有序的性质，用双指针 O(n) 统计跨越两半的翻转对数量：对左半每个元素，统计右半有多少元素满足 2 * nums[j] < nums[i]。递归处理两半并合并。

## Solution

[SourceCode](./solution.js)
