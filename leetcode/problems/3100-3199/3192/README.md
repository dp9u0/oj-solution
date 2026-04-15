# [3192] Minimum Operations to Make Binary Array Elements Equal to One II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/description/)

* algorithms
* Medium (65.12%)
* Likes:    158
* Dislikes: 9
* Testcase Example:  '[0,1,1,0,1]'

```md
You are given a binary array nums.
You can do the following operation on the array any number of times (possibly zero):

Choose any index i from the array and flip all the elements from index i to the end of the array.

Flipping an element means changing its value from 0 to 1, and from 1 to 0.
Return the minimum number of operations required to make all elements in nums equal to 1.

Example 1:

Input: nums = [0,1,1,0,1]
Output: 4
Explanation:
We can do the following operations:

Choose the index i = 1. The resulting array will be nums = [0,0,0,1,0].
Choose the index i = 0. The resulting array will be nums = [1,1,1,0,1].
Choose the index i = 4. The resulting array will be nums = [1,1,1,0,0].
Choose the index i = 3. The resulting array will be nums = [1,1,1,1,1].


Example 2:

Input: nums = [1,0,0,0]
Output: 1
Explanation:
We can do the following operation:

Choose the index i = 1. The resulting array will be nums = [1,1,1,1].



Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 1


```

## 题目翻译

给定二进制数组 nums，操作：选择任意下标 i，翻转从 i 到末尾的所有元素（0→1, 1→0）。求使所有元素变为 1 的最少操作次数。

## 解题思路

贪心。从左到右扫描，维护当前翻转次数的奇偶性（flipped）。当遇到需要翻转的元素时（考虑翻转状态后仍为 0），执行一次翻转操作。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
