# [3759] Count Elements With at Least K Greater Values

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-elements-with-at-least-k-greater-values/description/)

* algorithms
* Medium (31.38%)
* Likes:    74
* Dislikes: 7
* Testcase Example:  '[3,1,2]\n1'

```md
You are given an integer array nums of length n and an integer k.
An element in nums is said to be qualified if there exist at least k elements in the array that are strictly greater than it.
Return an integer denoting the total number of qualified elements in nums.

Example 1:

Input: nums = [3,1,2], k = 1
Output: 2
Explanation:
The elements 1 and 2 each have at least k = 1 element greater than themselves.
​​​​​​​No element is greater than 3. Therefore, the answer is 2.

Example 2:

Input: nums = [5,5,5], k = 2
Output: 0
Explanation:
Since all elements are equal to 5, no element is greater than the other. Therefore, the answer is 0.


Constraints:

1 <= n == nums.length <= 105
1 <= nums[i] <= 109
0 <= k < n


```

## 翻译

给定整数数组 nums 和整数 k。一个元素是"合格的"当且仅当数组中至少有 k 个元素严格大于它。求合格元素的总数。

## 解题思路

降序排序后，第 k 个元素（下标 k-1）为阈值。所有严格小于该阈值的元素都至少有 k 个严格大于它的元素。排序 O(n log n)。

## Solution

[SourceCode](./solution.js)
