# [3514] Number of Unique XOR Triplets II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-unique-xor-triplets-ii/description/)

* algorithms
* Medium (32.46%)
* Likes:    43
* Dislikes: 10
* Testcase Example:  '[1,3]'

```md
You are given an integer array nums.
A XOR triplet is defined as the XOR of three elements nums[i] XOR nums[j] XOR nums[k] where i <= j <= k.
Return the number of unique XOR triplet values from all possible triplets (i, j, k).

Example 1:

Input: nums = [1,3]
Output: 2
Explanation:
The possible XOR triplet values are:

(0, 0, 0) &rarr; 1 XOR 1 XOR 1 = 1
(0, 0, 1) &rarr; 1 XOR 1 XOR 3 = 3
(0, 1, 1) &rarr; 1 XOR 3 XOR 3 = 1
(1, 1, 1) &rarr; 3 XOR 3 XOR 3 = 3

The unique XOR values are {1, 3}. Thus, the output is 2.

Example 2:

Input: nums = [6,7,8,9]
Output: 4
Explanation:
The possible XOR triplet values are {6, 7, 8, 9}. Thus, the output is 4.


Constraints:

1 <= nums.length <= 1500
1 <= nums[i] <= 1500


```

## 翻译

给定数组nums，求所有三元素XOR(nums[i], nums[j], nums[k])（i<=j<=k）的不同值个数。

## 解题思路

单元素通过(i,i,i)可达，三不同索引的XOR通过增量DP：维护dp2(两两XOR集合)和dp3(三元素XOR集合)，逐个元素更新。结果为dp1∪dp3的大小。

## Solution

[SourceCode](./solution.js)
