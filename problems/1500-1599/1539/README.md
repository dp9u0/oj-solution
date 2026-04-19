# [1539] Kth Missing Positive Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/kth-missing-positive-number/description/)

* algorithms
* Easy (63.37%)
* Likes:    7994
* Dislikes: 576
* Testcase Example:  '[2,3,4,7,11]\n5'

```md
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
Return the kth positive integer that is missing from this array.

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5thmissing positive integer is 9.

Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.


Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length


Follow up:
Could you solve this problem in less than O(n) complexity?

```

## 中文翻译

给定严格递增的正整数数组 arr 和整数 k，返回第 k 个缺失的正整数。

## 解题思路

二分查找。对于 arr[i]，到它为止缺失的正整数个数为 arr[i] - (i+1) = arr[i] - i - 1。二分找最后一个缺失数 <= k 的位置，答案为 arr[pos] + (k - missing(pos))。

## Solution

[SourceCode](./solution.js)
