# [1588] Sum of All Odd Length Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/)

* algorithms
* Easy (83.96%)
* Likes:    3896
* Dislikes: 330
* Testcase Example:  '[1,4,2,5,3]'

```md
Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.
A subarray is a contiguous subsequence of the array.

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66


Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= 1000


Follow up:
Could you solve this problem in O(n) time complexity?

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定正整数数组 arr，返回所有奇数长度子数组的和。子数组是连续的。

## 解题思路

**Approach: 贡献法 O(n)**

对每个 arr[i]，计算它被多少个奇数长度子数组包含。左边有 left=i+1 个选择，右边有 right=n-i 个选择。l+r 为偶数时子数组长度为奇数。贡献 = ceil(left/2)*ceil(right/2) + floor(left/2)*floor(right/2)。

总时间 O(n)，空间 O(1)。
