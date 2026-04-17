# [1675] Minimize Deviation in Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-deviation-in-array/description/)

* algorithms
* Hard (53.97%)
* Likes:    3088
* Dislikes: 175
* Testcase Example:  '[1,2,3,4]'

```md
You are given an array nums of n positive integers.
You can perform two types of operations on any element of the array any number of times:

If the element is even, divide it by 2.

For example, if the array is [1,2,3,4], then you can do this operation on the last element, and the array will be [1,2,3,2].


If the element is odd, multiply it by 2.

For example, if the array is [1,2,3,4], then you can do this operation on the first element, and the array will be [2,2,3,4].



The deviation of the array is the maximum difference between any two elements in the array.
Return the minimum deviation the array can have after performing some number of operations.

Example 1:

Input: nums = [1,2,3,4]
Output: 1
Explanation: You can transform the array to [1,2,3,2], then to [2,2,3,2], then the deviation will be 3 - 2 = 1.

Example 2:

Input: nums = [4,1,5,20,3]
Output: 3
Explanation: You can transform the array after two operations to [4,2,5,5,3], then the deviation will be 5 - 2 = 3.

Example 3:

Input: nums = [2,10,8]
Output: 3


Constraints:

n == nums.length
2 <= n <= 5 * 104
1 <= nums[i] <= 109


```

## 翻译

给定正整数数组，可对元素任意次执行：偶数除以2，奇数乘以2。求数组偏差（最大值与最小值之差）的最小值。

## 解题思路

先把所有奇数乘2使其变为偶数（此后只能减小），用最大堆维护。每次弹出最大值，减半后放回，同时更新最小值。贪心地不断减小最大值，记录最小偏差。当最大值为奇数时停止。时间 O(n log n log maxVal)。

## Solution

[SourceCode](./solution.js)
