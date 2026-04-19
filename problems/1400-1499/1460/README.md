# [1460] Make Two Arrays Equal by Reversing Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/)

* algorithms
* Easy (75.80%)
* Likes:    1530
* Dislikes: 164
* Testcase Example:  '[1,2,3,4]\n[2,4,1,3]'

```md
You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.
Return true if you can make arr equal to targetor false otherwise.

Example 1:

Input: target = [1,2,3,4], arr = [2,4,1,3]
Output: true
Explanation: You can follow the next steps to convert arr to target:
1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
2- Reverse subarray [4,2], arr becomes [1,2,4,3]
3- Reverse subarray [4,3], arr becomes [1,2,3,4]
There are multiple ways to convert arr to target, this is not the only way to do so.

Example 2:

Input: target = [7], arr = [7]
Output: true
Explanation: arr is equal to target without any reverses.

Example 3:

Input: target = [3,7,9], arr = [3,7,11]
Output: false
Explanation: arr does not have value 9 and it can never be converted to target.


Constraints:

target.length == arr.length
1 <= target.length <= 1000
1 <= target[i] <= 1000
1 <= arr[i] <= 1000


```

## 翻译

给定等长数组target和arr，可以通过翻转arr的任意子数组使其等于target。判断是否可能。

## 解题思路

通过子数组翻转可以实现任意排列，因此只需检查两数组的多重集（元素及其出现次数）是否相同。

## Solution

[SourceCode](./solution.js)
