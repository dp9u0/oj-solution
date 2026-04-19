# [1262] Greatest Sum Divisible by Three

## Description

[LeetCode Problem Description](https://leetcode.com/problems/greatest-sum-divisible-by-three/description/)

* algorithms
* Medium (57.05%)
* Likes:    2420
* Dislikes: 65
* Testcase Example:  '[3,6,5,1,8]'

```md
Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.

Example 1:

Input: nums = [3,6,5,1,8]
Output: 18
Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).
Example 2:

Input: nums = [4]
Output: 0
Explanation: Since 4 is not divisible by 3, do not pick any number.

Example 3:

Input: nums = [1,2,3,4,4]
Output: 12
Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).


Constraints:

1 <= nums.length <= 4 * 104
1 <= nums[i] <= 104


```

## 翻译

给定一个整数数组 `nums`，返回数组中元素的最大可能和，使得该和能被 3 整除。

## Approach

**DP - 维护余数状态。** 维护三个变量 `dp[0]`, `dp[1]`, `dp[2]`，分别表示当前和除以 3 余 0、1、2 时的最大和。

遍历每个数 `num`，对于每个余数状态 `r`，新的和为 `dp[r] + num`，其新的余数为 `(r + num) % 3`，更新对应状态。

初始 `dp = [0, -Infinity, -Infinity]`，表示只有余数为 0 时和为 0，其余不可达。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
