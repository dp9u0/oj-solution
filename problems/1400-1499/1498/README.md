# [1498] Number of Subsequences That Satisfy the Given Sum Condition

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/description/)

* algorithms
* Medium (49.21%)
* Likes:    4667
* Dislikes: 437
* Testcase Example:  '[3,5,6,7]\n9'

```md
You are given an array of integers nums and an integer target.
Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: nums = [3,5,6,7], target = 9
Output: 4
Explanation: There are 4 subsequences that satisfy the condition.
[3] -> Min value + max value <= target (3 + 3 <= 9)
[3,5] -> (3 + 5 <= 9)
[3,5,6] -> (3 + 6 <= 9)
[3,6] -> (3 + 6 <= 9)

Example 2:

Input: nums = [3,3,6,8], target = 10
Output: 6
Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
[3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]

Example 3:

Input: nums = [2,3,3,4,6,7], target = 12
Output: 61
Explanation: There are 63 non-empty subsequences, two of them do not satisfy the condition ([6,7], [7]).
Number of valid subsequences (63 - 2 = 61).


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106
1 <= target <= 106


```

## 翻译

给定整数数组 nums 和整数 target，返回非空子序列的数量，使得子序列中最大元素与最小元素之和 <= target。结果对 10^9+7 取模。

## 解题思路

排序数组后，固定最小值 nums[i]，用双指针找最大的 j 使得 nums[i] + nums[j] <= target。此时从 nums[i+1..j] 中每个元素可选可不选，共 2^(j-i) 种子序列。

预计算 2 的幂次，排序后双指针扫描 O(n)。

## Solution

[SourceCode](./solution.js)
