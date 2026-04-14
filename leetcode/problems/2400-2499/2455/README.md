# [2455] Average Value of Even Numbers That Are Divisible by Three

## Description

[LeetCode Problem Description](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/description/)

* algorithms
* Easy (63.06%)
* Likes:    380
* Dislikes: 42
* Testcase Example:  '[1,3,6,10,12,15]'

```md
Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.
Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

Example 1:

Input: nums = [1,3,6,10,12,15]
Output: 9
Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.

Example 2:

Input: nums = [1,2,4,7,10]
Output: 0
Explanation: There is no single number that satisfies the requirement, so return 0.


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 1000


```

## 翻译

给定正整数数组 nums，返回所有能被 6 整除（既是偶数又能被 3 整除）的元素的平均值，向下取整。如果没有满足条件的元素，返回 0。

## Approach

遍历数组，筛选出能被 6 整除的元素（偶数且能被 3 整除 = 能被 6 整除），求和并计数。最后返回 sum / count 向下取整，若 count 为 0 则返回 0。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
