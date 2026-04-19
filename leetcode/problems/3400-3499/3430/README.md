# [3430] Maximum and Minimum Sums of at Most Size K Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-and-minimum-sums-of-at-most-size-k-subarrays/description/)

* algorithms
* Hard (25.37%)
* Likes:    83
* Dislikes: 9
* Testcase Example:  '[1,2,3]\n2'

```md
You are given an integer array nums and a positive integer k. Return the sum of the maximum and minimum elements of all subarrays with at most k elements.

Example 1:

Input: nums = [1,2,3], k = 2
Output: 20
Explanation:
The subarrays of nums with at most 2 elements are:



Subarray
Minimum
Maximum
Sum


[1]
1
1
2


[2]
2
2
4


[3]
3
3
6


[1, 2]
1
2
3


[2, 3]
2
3
5


Final Total


20



The output would be 20.

Example 2:

Input: nums = [1,-3,1], k = 2
Output: -6
Explanation:
The subarrays of nums with at most 2 elements are:



Subarray
Minimum
Maximum
Sum


[1]
1
1
2


[-3]
-3
-3
-6


[1]
1
1
2


[1, -3]
-3
1
-2


[-3, 1]
-3
1
-2


Final Total


-6



The output would be -6.


Constraints:

1 <= nums.length <= 80000
1 <= k <= nums.length
-106 <= nums[i] <= 106


```

## 题目翻译

给定整数数组nums和正整数k，返回所有长度不超过k的子数组的max+min之和。

## 解题思路

**单调栈 + 计数**

分别计算max之和与min之和：

1. 对每个元素nums[i]，用单调栈求其作为max/min时能"管辖"的范围（prevGreater/nextGreaterOrEqual等）。
2. 设范围为a（左侧选择数）和b（右侧选择数），需计数满足0<=x<a, 0<=y<b, x+y<=k-1的(x,y)对数，用O(1)公式。
3. 对max：prev严格大于，next大于等于（左归属）。对min同理。

时间O(n)，空间O(n)。使用BigInt防溢出。

## Solution

[SourceCode](./solution.js)
