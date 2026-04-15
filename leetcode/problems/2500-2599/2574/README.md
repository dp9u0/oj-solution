# [2574] Left and Right Sum Differences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/left-and-right-sum-differences/description/)

* algorithms
* Easy (88.02%)
* Likes:    1257
* Dislikes: 115
* Testcase Example:  '[10,4,8,3]'

```md
You are given a 0-indexed integer array nums of size n.
Define two arrays leftSum and rightSum where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.

Return an integer array answer of size n where answer[i] =
leftSum[i] - rightSum[i]
.

Example 1:

Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [
0 - 15
,
10 - 11
,
14 - 3
,
22 - 0
] = [15,1,11,22].

Example 2:

Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [
0 - 0
] = [0].


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 105


```

## 题目翻译

给定数组 nums，返回 answer 数组，其中 answer[i] = leftSum[i] - rightSum[i]，leftSum[i] 是 i 左边元素之和，rightSum[i] 是 i 右边元素之和。

## 解题思路

先计算总和 total，然后遍历时维护左边和 leftSum，右边和 = total - leftSum - nums[i]，取绝对值。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
