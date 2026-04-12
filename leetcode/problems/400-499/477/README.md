# [477] Total Hamming Distance

## Description

[LeetCode Problem Description](https://leetcode.com/problems/total-hamming-distance/description/)

* algorithms
* Medium (54.76%)
* Likes:    2307
* Dislikes: 97
* Testcase Example:  '[4,14,2]'

```md
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums.

Example 1:

Input: nums = [4,14,2]
Output: 6
Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case).
The answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

Example 2:

Input: nums = [4,14,4]
Output: 4


Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 109
The answer for the given input will fit in a 32-bit integer.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums，返回所有数对之间的汉明距离之和。汉明距离是两个数对应二进制位不同的位数。

## 解题思路

**按位统计**

逐位考虑：对于第 i 位，统计数组中该位为 1 的个数 c，则该位为 0 的个数为 n - c。该位对总距离的贡献为 c * (n - c)（每对 1 和 0 贡献 1）。

遍历 32 个比特位，累加贡献。

时间复杂度 O(32n) = O(n)，空间复杂度 O(1)。
