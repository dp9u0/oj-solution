# [3334] Find the Maximum Factor Score of Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-maximum-factor-score-of-array/description/)

* algorithms
* Medium (40.98%)
* Likes:    87
* Dislikes: 13
* Testcase Example:  '[2,4,8,16]'

```md
You are given an integer array nums.
The factor score of an array is defined as the product of the LCM and GCD of all elements of that array.
Return the maximum factor score of nums after removing at most one element from it.
Note that both the LCM and GCD of a single number are the number itself, and the factor score of an empty array is 0.

Example 1:

Input: nums = [2,4,8,16]
Output: 64
Explanation:
On removing 2, the GCD of the rest of the elements is 4 while the LCM is 16, which gives a maximum factor score of 4 * 16 = 64.

Example 2:

Input: nums = [1,2,3,4,5]
Output: 60
Explanation:
The maximum factor score of 60 can be obtained without removing any elements.

Example 3:

Input: nums = [3]
Output: 9


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 30


```

## 翻译

给定整数数组 nums，因子得分定义为所有元素的 LCM 和 GCD 的乘积。最多移除一个元素后，返回最大的因子得分。

## 解题思路

预处理前缀 GCD/LCM 和后缀 GCD/LCM。不移除时直接计算全部元素的 GCD * LCM。移除第 i 个元素时，结果为 gcd(prefixGcd[i-1], suffixGcd[i+1]) * lcm(prefixLcm[i-1], suffixLcm[i+1])。枚举所有位置取最大值。时间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
