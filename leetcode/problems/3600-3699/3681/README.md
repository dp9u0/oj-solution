# [3681] Maximum XOR of Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-xor-of-subsequences/description/)

* algorithms
* Hard (51.22%)
* Likes:    63
* Dislikes: 10
* Testcase Example:  '[1,2,3]'

```md
You are given an integer array nums of length n where each element is a non-negative integer.
Select two subsequences of nums (they may be empty and are allowed to overlap), each preserving the original order of elements, and let:

X be the bitwise XOR of all elements in the first subsequence.
Y be the bitwise XOR of all elements in the second subsequence.

Return the maximum possible value of X XOR Y.
Note: The XOR of an empty subsequence is 0.

Example 1:

Input: nums = [1,2,3]
Output: 3
Explanation:
Choose subsequences:

First subsequence [2], whose XOR is 2.
Second subsequence [2,3], whose XOR is 1.

Then, XOR of both subsequences = 2 XOR 1 = 3.
This is the maximum XOR value achievable from any two subsequences.

Example 2:

Input: nums = [5,2]
Output: 7
Explanation:
Choose subsequences:

First subsequence [5], whose XOR is 5.
Second subsequence [2], whose XOR is 2.

Then, XOR of both subsequences = 5 XOR 2 = 7.
This is the maximum XOR value achievable from any two subsequences.


Constraints:

2 <= nums.length <= 105
0 <= nums[i] <= 109


```

## 翻译

给定整数数组 nums，选两个子序列（可重叠、可为空），X 为第一个子序列的异或，Y 为第二个的异或，求 X^Y 的最大值。

## 解题思路

关键观察：每个元素对 X^Y 的贡献要么是 0（不在任一子序列，或在两个子序列中）要么是 nums[i]（恰在一个子序列中）。因此 X^Y = 某子集的异或，问题转化为求最大子集异或，用线性基（高斯消元 GF(2)）即可。O(30n)。

## Solution

[SourceCode](./solution.js)
