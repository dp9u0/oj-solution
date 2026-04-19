# [3190] Find Minimum Operations to Make All Elements Divisible by Three

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/)

* algorithms
* Easy (90.86%)
* Likes:    521
* Dislikes: 34
* Testcase Example:  '[1,2,3,4]'

```md
You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.
Return the minimum number of operations to make all elements of nums divisible by 3.

Example 1:

Input: nums = [1,2,3,4]
Output: 3
Explanation:
All array elements can be made divisible by 3 using 3 operations:

Subtract 1 from 1.
Add 1 to 2.
Subtract 1 from 4.


Example 2:

Input: nums = [3,6,9]
Output: 0


Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 50


```

## 中文翻译

给定整数数组 nums，每次操作可对任意元素加 1 或减 1。求使所有元素都能被 3 整除的最少操作次数。

## 解题思路

每个元素对 3 取余，余数为 1 或 2 的都需要 1 次操作变为 0，余数为 0 的不需要操作。统计余数不为 0 的元素个数即可。

## Solution

[SourceCode](./solution.js)
