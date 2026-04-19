# [3355] Zero Array Transformation I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/zero-array-transformation-i/description/)

* algorithms
* Medium (54.46%)
* Likes:    858
* Dislikes: 91
* Testcase Example:  '[1,0,1]\n[[0,2]]'

```md
You are given an integer array nums of length n and a 2D array queries, where queries[i] = [li, ri].
For each queries[i]:

Select a subset of indices within the range [li, ri] in nums.
Decrement the values at the selected indices by 1.

A Zero Array is an array where all elements are equal to 0.
Return true if it is possible to transform nums into a Zero Array after processing all the queries sequentially, otherwise return false.

Example 1:

Input: nums = [1,0,1], queries = [[0,2]]
Output: true
Explanation:

For i = 0:

Select the subset of indices as [0, 2] and decrement the values at these indices by 1.
The array will become [0, 0, 0], which is a Zero Array.




Example 2:

Input: nums = [4,3,2,1], queries = [[1,3],[0,2]]
Output: false
Explanation:

For i = 0:

Select the subset of indices as [1, 2, 3] and decrement the values at these indices by 1.
The array will become [4, 2, 1, 0].


For i = 1:

Select the subset of indices as [0, 1, 2] and decrement the values at these indices by 1.
The array will become [3, 1, 0, 0], which is not a Zero Array.





Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105
1 <= queries.length <= 105
queries[i].length == 2
0 <= li <= ri < nums.length


```

## 中文翻译

给定数组 nums 和 queries（每个查询 [l,r] 可选择该范围内的子集各减1）。判断能否将 nums 变为全零数组。

## 解题思路

每个位置 i 最多能被减的次数等于覆盖它的查询数。用差分数组统计每个位置被多少个查询覆盖，然后检查每个位置 nums[i] <= 覆盖次数即可。

## Solution

[SourceCode](./solution.js)
