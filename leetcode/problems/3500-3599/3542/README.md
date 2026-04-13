# [3542] Minimum Operations to Convert All Elements to Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-convert-all-elements-to-zero/description/)

* algorithms
* Medium (52.98%)
* Likes:    617
* Dislikes: 64
* Testcase Example:  '[0,2]'

```md
You are given an array nums of size n, consisting of non-negative integers. Your task is to apply some (possibly zero) operations on the array so that all elements become 0.
In one operation, you can select a subarray [i, j] (where 0 <= i <= j < n) and set all occurrences of the minimum non-negative integer in that subarray to 0.
Return the minimum number of operations required to make all elements in the array 0.

Example 1:

Input: nums = [0,2]
Output: 1
Explanation:

Select the subarray [1,1] (which is [2]), where the minimum non-negative integer is 2. Setting all occurrences of 2 to 0 results in [0,0].
Thus, the minimum number of operations required is 1.


Example 2:

Input: nums = [3,1,2,1]
Output: 3
Explanation:

Select subarray [1,3] (which is [1,2,1]), where the minimum non-negative integer is 1. Setting all occurrences of 1 to 0 results in [3,0,2,0].
Select subarray [2,2] (which is [2]), where the minimum non-negative integer is 2. Setting all occurrences of 2 to 0 results in [3,0,0,0].
Select subarray [0,0] (which is [3]), where the minimum non-negative integer is 3. Setting all occurrences of 3 to 0 results in [0,0,0,0].
Thus, the minimum number of operations required is 3.


Example 3:

Input: nums = [1,2,1,2,1,2]
Output: 4
Explanation:

Select subarray [0,5] (which is [1,2,1,2,1,2]), where the minimum non-negative integer is 1. Setting all occurrences of 1 to 0 results in [0,2,0,2,0,2].
Select subarray [1,1] (which is [2]), where the minimum non-negative integer is 2. Setting all occurrences of 2 to 0 results in [0,0,0,2,0,2].
Select subarray [3,3] (which is [2]), where the minimum non-negative integer is 2. Setting all occurrences of 2 to 0 results in [0,0,0,0,0,2].
Select subarray [5,5] (which is [2]), where the minimum non-negative integer is 2. Setting all occurrences of 2 to 0 results in [0,0,0,0,0,0].
Thus, the minimum number of operations required is 4.



Constraints:

1 <= n == nums.length <= 105
0 <= nums[i] <= 105


```

## 翻译

给定一个非负整数数组 nums，可以通过若干次操作将所有元素变为 0。每次操作选择一个子数组，将其中的最小非负整数的所有出现置为 0。返回使所有元素变为 0 的最少操作次数。

## Approach

单调栈。从左到右遍历数组，维护一个严格递增的栈。对于每个元素：如果是 0，弹出栈中所有元素（每个弹出计一次操作）并清空栈；否则弹出栈中所有大于当前值的元素（每次弹出计一次操作），若栈顶不等于当前值则入栈。最后将栈中剩余元素全部弹出计数。

## Solution

[SourceCode](./solution.js)
