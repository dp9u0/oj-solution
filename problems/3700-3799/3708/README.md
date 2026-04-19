# [3708] Longest Fibonacci Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-fibonacci-subarray/description/)

* algorithms
* Medium (69.53%)
* Likes:    54
* Dislikes: 2
* Testcase Example:  '[1,1,1,1,2,3,5,1]'

```md
You are given an array of positive integers nums.
A Fibonacci array is a contiguous sequence whose third and subsequent terms each equal the sum of the two preceding terms.
Return the length of the longest Fibonacci subarray in nums.
Note: Subarrays of length 1 or 2 are always Fibonacci.

Example 1:

Input: nums = [1,1,1,1,2,3,5,1]
Output: 5
Explanation:
The longest Fibonacci subarray is nums[2..6] = [1, 1, 2, 3, 5].
[1, 1, 2, 3, 5] is Fibonacci because 1 + 1 = 2, 1 + 2 = 3, and 2 + 3 = 5.

Example 2:

Input: nums = [5,2,7,9,16]
Output: 5
Explanation:
The longest Fibonacci subarray is nums[0..4] = [5, 2, 7, 9, 16].
[5, 2, 7, 9, 16] is Fibonacci because 5 + 2 = 7, 2 + 7 = 9, and 7 + 9 = 16.

Example 3:

Input: nums = [1000000000,1000000000,1000000000]
Output: 2
Explanation:
The longest Fibonacci subarray is nums[1..2] = [1000000000, 1000000000].
[1000000000, 1000000000] is Fibonacci because its length is 2.


Constraints:

3 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 题目翻译

给定正整数数组 nums，Fibonacci 子数组是指连续序列中从第三个元素起每个等于前两个之和。返回最长 Fibonacci 子数组的长度（长度 1 或 2 总是合法的）。

## 解题思路

线性扫描。dp[i] 表示以 i 结尾的最长 Fibonacci 子数组长度。若 nums[i] == nums[i-1] + nums[i-2]，则 dp[i] = dp[i-1] + 1，否则 dp[i] = 2。答案为 max(dp[i])。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
