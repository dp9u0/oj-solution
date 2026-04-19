# [1144] Decrease Elements To Make Array Zigzag

## Description

[LeetCode Problem Description](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/description/)

* algorithms
* Medium (49.10%)
* Likes:    461
* Dislikes: 169
* Testcase Example:  '[1,2,3]'

```md
Given an array nums of integers, a moveconsists of choosing any element and decreasing it by 1.
An array A is azigzag arrayif either:

Every even-indexed element is greater than adjacent elements, ie.A[0] > A[1] < A[2] > A[3] < A[4] > ...
OR, every odd-indexed element is greater than adjacent elements, ie.A[0] < A[1] > A[2] < A[3] > A[4] < ...

Return the minimum number of moves to transform the given array nums into a zigzag array.

Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation: We can decrease 2 to 0 or 3 to 1.

Example 2:

Input: nums = [9,6,1,6,2]
Output: 4


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums，每次操作可以将任意元素减 1。锯齿数组有两种形式：偶数下标元素大于相邻元素，或奇数下标元素大于相邻元素。返回变为锯齿数组的最少操作次数。

## 解题思路

分别计算两种模式的花费取最小值。

- 模式 1（偶数位为峰）：遍历奇数下标的谷位，将其减小到比两侧邻居都小
- 模式 2（奇数位为峰）：遍历偶数下标的谷位，同理

每个谷位的花费 = max(0, nums[i] - min(left, right) + 1)。首尾元素只有一个邻居，比较那一侧即可。
