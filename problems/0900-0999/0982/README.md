# [982] Triples with Bitwise AND Equal To Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/description/)

* algorithms
* Hard (60.03%)
* Likes:    479
* Dislikes: 222
* Testcase Example:  '[2,1,3]'

```md
Given an integer array nums, return the number of AND triples.
An AND triple is a triple of indices (i, j, k) such that:

0 <= i < nums.length
0 <= j < nums.length
0 <= k < nums.length
nums[i] &amp; nums[j] &amp; nums[k] == 0, where &amp; represents the bitwise-AND operator.


Example 1:

Input: nums = [2,1,3]
Output: 12
Explanation: We could choose the following i, j, k triples:
(i=0, j=0, k=1) : 2 &amp; 2 &amp; 1
(i=0, j=1, k=0) : 2 &amp; 1 &amp; 2
(i=0, j=1, k=1) : 2 &amp; 1 &amp; 1
(i=0, j=1, k=2) : 2 &amp; 1 &amp; 3
(i=0, j=2, k=1) : 2 &amp; 3 &amp; 1
(i=1, j=0, k=0) : 1 &amp; 2 &amp; 2
(i=1, j=0, k=1) : 1 &amp; 2 &amp; 1
(i=1, j=0, k=2) : 1 &amp; 2 &amp; 3
(i=1, j=1, k=0) : 1 &amp; 1 &amp; 2
(i=1, j=2, k=0) : 1 &amp; 3 &amp; 2
(i=2, j=0, k=1) : 3 &amp; 2 &amp; 1
(i=2, j=1, k=0) : 3 &amp; 1 &amp; 2

Example 2:

Input: nums = [0,0,0]
Output: 27


Constraints:

1 <= nums.length <= 1000
0 <= nums[i] < 216


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定整数数组 nums，统计满足 nums[i] & nums[j] & nums[k] == 0 的三元组 (i,j,k) 的数量。i,j,k 独立取值。

## 解题思路

预处理所有 nums[a] & nums[b] 的值出现次数 cnt[x]，然后枚举 nums[k]，对每个 nums[k] 枚举所有 x 使得 x & nums[k] == 0，累加 cnt[x]。由于 nums[i] < 2^16，x 最多 65536 种，整体 O(n^2 + n * 2^16)。
