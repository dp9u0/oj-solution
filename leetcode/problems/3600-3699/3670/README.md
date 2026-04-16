# [3670] Maximum Product of Two Integers With No Common Bits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-product-of-two-integers-with-no-common-bits/description/)

* algorithms
* Medium (15.15%)
* Likes:    103
* Dislikes: 19
* Testcase Example:  '[1,2,3,4,5,6,7]'

```md
You are given an integer array nums.
Your task is to find two distinct indices i and j such that the product nums[i] * nums[j] is maximized, and the binary representations of nums[i] and nums[j] do not share any common set bits.
Return the maximum possible product of such a pair. If no such pair exists, return 0.

Example 1:

Input: nums = [1,2,3,4,5,6,7]
Output: 12
Explanation:
The best pair is 3 (011) and 4 (100). They share no set bits and 3 * 4 = 12.

Example 2:

Input: nums = [5,6,4]
Output: 0
Explanation:
Every pair of numbers has at least one common set bit. Hence, the answer is 0.

Example 3:

Input: nums = [64,8,32]
Output: 2048
Explanation:
No pair of numbers share a common bit, so the answer is the product of the two maximum elements, 64 and 32 (64 * 32 = 2048).


Constraints:

2 <= nums.length <= 105
1 <= nums[i] <= 106


```

## 中文翻译

给定整数数组 nums，找两个不同下标 i、j，使得 nums[i] & nums[j] == 0（二进制无公共位），且乘积最大。

## 解题思路

用 SOS DP（子集和动态规划）：先对每个掩码存最大值，再用 SOS DP 求每个掩码的所有子掩码中的最大值。最后遍历每个数，查其补集掩码的 SOS 值即可 O(1) 得到最佳配对。

## Solution

[SourceCode](./solution.js)
