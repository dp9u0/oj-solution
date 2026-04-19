# [1713] Minimum Operations to Make a Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/description/)

* algorithms
* Hard (49.65%)
* Likes:    768
* Dislikes: 15
* Testcase Example:  '[5,1,3]\n[9,4,2,3,4]'

```md
You are given an array target that consists of distinct integers and another integer array arr that can have duplicates.
In one operation, you can insert any integer at any position in arr. For example, if arr = [1,4,1,2], you can add 3 in the middle and make it [1,4,3,1,2]. Note that you can insert the integer at the very beginning or end of the array.
Return the minimum number of operations needed to make target a subsequence of arr.
A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements&#39; relative order. For example, [2,7,4] is a subsequence of [4,2,3,7,2,1,4] (the underlined elements), while [2,4,2] is not.

Example 1:

Input: target = [5,1,3], arr = [9,4,2,3,4]
Output: 2
Explanation: You can add 5 and 1 in such a way that makes arr = [5,9,4,1,2,3,4], then target will be a subsequence of arr.

Example 2:

Input: target = [6,4,8,1,3,2], arr = [4,7,6,2,3,8,6,1]
Output: 3


Constraints:

1 <= target.length, arr.length <= 105
1 <= target[i], arr[i] <= 109
target contains no duplicates.


```

## 翻译

给定无重复数组target和可能有重复的数组arr，每次操作可在arr任意位置插入一个整数。求使target成为arr子序列的最少操作数。

## 解题思路

最少操作数 = target.length - LCS(target, arr)。由于target无重复，将arr中出现在target的元素映射为其在target中的下标，LCS问题转化为求该下标序列的LIS（最长递增子序列），用O(n log n)的二分法求解。

## Solution

[SourceCode](./solution.js)
