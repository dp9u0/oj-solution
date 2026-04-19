# [3702] Longest Subsequence With Non-Zero Bitwise XOR

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-subsequence-with-non-zero-bitwise-xor/description/)

* algorithms
* Medium (37.27%)
* Likes:    97
* Dislikes: 9
* Testcase Example:  '[1,2,3]'

```md
You are given an integer array nums.
Return the length of the longest subsequence in nums whose bitwise XOR is non-zero. If no such subsequence exists, return 0.

Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation:
One longest subsequence is [2, 3]. The bitwise XOR is computed as 2 XOR 3 = 1, which is non-zero.

Example 2:

Input: nums = [2,3,4]
Output: 3
Explanation:
The longest subsequence is [2, 3, 4]. The bitwise XOR is computed as 2 XOR 3 XOR 4 = 5, which is non-zero.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109


```

## 翻译

给定整数数组nums，求最长子序列使得其按位异或结果非零。

## 解题思路

若全部元素异或!=0，答案为n（取全部）。若==0，则去掉任意一个非零元素后异或变为该元素（非零），答案为n-1。若全部为0则答案为0。

## Solution

[SourceCode](./solution.js)
