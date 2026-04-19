# [3780] Maximum Sum of Three Numbers Divisible by Three

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-of-three-numbers-divisible-by-three/description/)

* algorithms
* Medium (47.72%)
* Likes:    62
* Dislikes: 1
* Testcase Example:  '[4,2,3,1]'

```md
You are given an integer array nums.
Your task is to choose exactly three integers from nums such that their sum is divisible by three.
Return the maximum possible sum of such a triplet. If no such triplet exists, return 0.

Example 1:

Input: nums = [4,2,3,1]
Output: 9
Explanation:
The valid triplets whose sum is divisible by 3 are:

(4, 2, 3) with a sum of 4 + 2 + 3 = 9.
(2, 3, 1) with a sum of 2 + 3 + 1 = 6.

Thus, the answer is 9.

Example 2:

Input: nums = [2,1,5]
Output: 0
Explanation:
No triplet forms a sum divisible by 3, so the answer is 0.


Constraints:

3 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 中文翻译

给定整数数组 nums，选恰好三个数使其和能被3整除，返回最大和。不存在返回0。

## 解题思路

按模3余数分组，每组保留最大的3个。枚举所有三元组(r1,r2,r3)使(r1+r2+r3)%3==0：全取余0、全取余1、全取余2、取0+1+2、取0+0+0等组合。取各组最大值即可。

## Solution

[SourceCode](./solution.js)
