# [2176] Count Equal and Divisible Pairs in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/description/)

* algorithms
* Easy (83.94%)
* Likes:    1041
* Dislikes: 69
* Testcase Example:  '[3,1,2,2,2,1,3]\n2'

```md
Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

Example 1:

Input: nums = [3,1,2,2,2,1,3], k = 2
Output: 4
Explanation:
There are 4 pairs that meet all the requirements:
- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

Example 2:

Input: nums = [1,2,3,4], k = 1
Output: 0
Explanation: Since no value in nums is repeated, there are no pairs (i,j) that meet all the requirements.


Constraints:

1 <= nums.length <= 100
1 <= nums[i], k <= 100


```

## 题目翻译

给定数组 `nums` 和整数 `k`，返回满足 `nums[i]==nums[j]` 且 `(i*j)%k==0` 的数对 `(i,j)`（`i<j`）的个数。

## 解题思路

n ≤ 100，直接双重循环枚举所有数对，检查两个条件即可。

## Solution

[SourceCode](./solution.js)
