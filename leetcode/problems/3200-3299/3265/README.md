# [3265] Count Almost Equal Pairs I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-almost-equal-pairs-i/description/)

* algorithms
* Medium (38.26%)
* Likes:    159
* Dislikes: 26
* Testcase Example:  '[3,12,30,17,21]'

```md
You are given an array nums consisting of positive integers.
We call two integers x and y in this problem almost equal if both integers can become equal after performing the following operation at most once:

Choose either x or y and swap any two digits within the chosen number.

Return the number of indices i and j in nums where i < j such that nums[i] and nums[j] are almost equal.
Note that it is allowed for an integer to have leading zeros after performing an operation.

Example 1:

Input: nums = [3,12,30,17,21]
Output: 2
Explanation:
The almost equal pairs of elements are:

3 and 30. By swapping 3 and 0 in 30, you get 3.
12 and 21. By swapping 1 and 2 in 12, you get 21.


Example 2:

Input: nums = [1,1,1,1,1]
Output: 10
Explanation:
Every two elements in the array are almost equal.

Example 3:

Input: nums = [123,231]
Output: 0
Explanation:
We cannot swap any two digits of 123 or 231 to reach the other.


Constraints:

2 <= nums.length <= 100
1 <= nums[i] <= 106


```

## 题目翻译

给定正整数数组 nums，两个数 x 和 y "近似相等"当且仅当对其中一个数最多做一次交换任意两位数字的操作后可以相等。返回满足 i < j 且 nums[i] 与 nums[j] 近似相等的下标对数。

## 解题思路

暴力枚举。对每对 (i, j)，检查 nums[i] 和 nums[j] 是否近似相等：生成 nums[i] 的所有交换两个位置后的变体，检查是否有等于 nums[j] 的；同时生成 nums[j] 的所有变体检查是否等于 nums[i]。或者更简单：检查两数排序后数字序列是否相等，或交换一位后相等。

实际上：先检查是否相等或排序后数字是否相同（一次交换可达），再检查能否通过交换一个数的两位变成另一个数。

由于 n <= 100，暴力 O(n^2 * d^2) 足够。

时间复杂度 O(n^2 * d^2)

## Solution

[SourceCode](./solution.js)
