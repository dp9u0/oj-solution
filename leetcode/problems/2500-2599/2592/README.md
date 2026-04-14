# [2592] Maximize Greatness of an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-greatness-of-an-array/description/)

* algorithms
* Medium (61.46%)
* Likes:    508
* Dislikes: 22
* Testcase Example:  '[1,3,5,2,1,3,1]'

```md
You are given a 0-indexed integer array nums. You are allowed to permute nums into a new array perm of your choosing.
We define the greatness of nums be the number of indices 0 <= i < nums.length for which perm[i] > nums[i].
Return the maximum possible greatness you can achieve after permuting nums.

Example 1:

Input: nums = [1,3,5,2,1,3,1]
Output: 4
Explanation: One of the optimal rearrangements is perm = [2,5,1,3,3,1,1].
At indices = 0, 1, 3, and 4, perm[i] > nums[i]. Hence, we return 4.
Example 2:

Input: nums = [1,2,3,4]
Output: 3
Explanation: We can prove the optimal perm is [2,3,4,1].
At indices = 0, 1, and 2, perm[i] > nums[i]. Hence, we return 3.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109


```

## 题目翻译

给定数组 nums，可以将其重排为新数组 perm。定义 greatness 为 perm[i] > nums[i] 的下标数。返回最大可能的 greatness。

## 解题思路

**排序 + 贪心双指针**

排序后，用两个指针 slow 和 fast 从头遍历：
- 若 sorted[fast] > sorted[slow]，则可以配对（count++），两指针都前进
- 否则 fast++，寻找更大的数
- 本质是：每个数尽量匹配到比它大的最小数

## Solution

[SourceCode](./solution.js)
