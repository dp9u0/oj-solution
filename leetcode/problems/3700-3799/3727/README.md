# [3727] Maximum Alternating Sum of Squares

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-alternating-sum-of-squares/description/)

* algorithms
* Medium (61.35%)
* Likes:    71
* Dislikes: 1
* Testcase Example:  '[1,2,3]'

```md
You are given an integer array nums. You may rearrange the elements in any order.
The alternating score of an array arr is defined as:

score = arr[0]2 - arr[1]2 + arr[2]2 - arr[3]2 + ...

Return an integer denoting the maximum possible alternating score of nums after rearranging its elements.

Example 1:

Input: nums = [1,2,3]
Output: 12
Explanation:
A possible rearrangement for nums is [2,1,3], which gives the maximum alternating score among all possible rearrangements.
The alternating score is calculated as:
score = 22 - 12 + 32 = 4 - 1 + 9 = 12

Example 2:

Input: nums = [1,-1,2,-2,3,-3]
Output: 16
Explanation:
A possible rearrangement for nums is [-3,-1,-2,1,3,2], which gives the maximum alternating score among all possible rearrangements.
The alternating score is calculated as:
score = (-3)2 - (-1)2 + (-2)2 - (1)2 + (3)2 - (2)2 = 9 - 1 + 4 - 1 + 9 - 4 = 16


Constraints:

1 <= nums.length <= 105
-4 * 104 <= nums[i] <= 4 * 104


```

## 中文翻译

给定数组 nums，可任意重排。交替分数 = arr[0]^2 - arr[1]^2 + arr[2]^2 - arr[3]^2 + ...。求最大交替分数。

## 解题思路

因为平方后正负号消失，所以按绝对值降序排列。前 ceil(n/2) 个（绝对值最大的）放在正号位，剩余的放在负号位。答案为前半平方和减去后半平方和。

## Solution

[SourceCode](./solution.js)
