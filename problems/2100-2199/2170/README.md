# [2170] Minimum Operations to Make the Array Alternating

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/description/)

* algorithms
* Medium (35.67%)
* Likes:    623
* Dislikes: 344
* Testcase Example:  '[3,1,3,2,4,3]'

```md
You are given a 0-indexed array nums consisting of n positive integers.
The array nums is called alternating if:

nums[i - 2] == nums[i], where 2 <= i <= n - 1.
nums[i - 1] != nums[i], where 1 <= i <= n - 1.

In one operation, you can choose an index i and change nums[i] into any positive integer.
Return the minimum number of operations required to make the array alternating.

Example 1:

Input: nums = [3,1,3,2,4,3]
Output: 3
Explanation:
One way to make the array alternating is by converting it to [3,1,3,1,3,1].
The number of operations required in this case is 3.
It can be proven that it is not possible to make the array alternating in less than 3 operations.

Example 2:

Input: nums = [1,2,2,2,2]
Output: 2
Explanation:
One way to make the array alternating is by converting it to [1,2,1,2,1].
The number of operations required in this case is 2.
Note that the array cannot be converted to [2,2,2,2,2] because in this case nums[0] == nums[1] which violates the conditions of an alternating array.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 题目翻译

给定数组 nums，使其变为交替数组（偶数位都相同，奇数位都相同，且偶数位≠奇数位）。每次操作可改变一个元素为任意正整数。求最少操作次数。

## 解题思路

分别统计奇数位和偶数位的频率，各自取出现次数最多的前两个值。若最高频值不同，则保留两者最多频次；否则取（奇数最高+偶数次高）或（奇数次高+偶数最高）中的较优解。操作数 = n - 保留的最大数量。

## Solution

[SourceCode](./solution.js)
