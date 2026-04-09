# [3507] Minimum Pair Removal to Sort Array I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/description/)

* algorithms
* Easy (65.23%)
* Likes:    491
* Dislikes: 94
* Testcase Example:  '[5,2,3,1]'

```md
Given an array nums, you can perform the following operation any number of times:

Select the adjacent pair with the minimum sum in nums. If multiple such pairs exist, choose the leftmost one.
Replace the pair with their sum.

Return the minimum number of operations needed to make the array non-decreasing.
An array is said to be non-decreasing if each element is greater than or equal to its previous element (if it exists).

Example 1:

Input: nums = [5,2,3,1]
Output: 2
Explanation:

The pair (3,1) has the minimum sum of 4. After replacement, nums = [5,2,4].
The pair (2,4) has the minimum sum of 6. After replacement, nums = [5,6].

The array nums became non-decreasing in two operations.

Example 2:

Input: nums = [1,2,2]
Output: 0
Explanation:
The array nums is already sorted.


Constraints:

1 <= nums.length <= 50
-1000 <= nums[i] <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

重复操作：选相邻和最小的对（左优先），替换为和。直到数组非递减。求操作次数。

## 解题思路

**Approach: 直接模拟**

1. 每次扫描找相邻最小和对
2. 合并该对
3. 检查是否非递减
4. n <= 50，暴力即可
