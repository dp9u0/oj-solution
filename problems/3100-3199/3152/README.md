# [3152] Special Array II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/special-array-ii/description/)

* algorithms
* Medium (45.78%)
* Likes:    916
* Dislikes: 67
* Testcase Example:  '[3,4,1,2,6]\n[[0,4]]'

```md
An array is considered special if every pair of its adjacent elements contains two numbers with different parity.
You are given an array of integer nums and a 2D integer matrix queries, where for queries[i] = [fromi, toi] your task is to check that subarray nums[fromi..toi] is special or not.
Return an array of booleans answer such that answer[i] is true if nums[fromi..toi] is special.

Example 1:

Input: nums = [3,4,1,2,6], queries = [[0,4]]
Output: [false]
Explanation:
The subarray is [3,4,1,2,6]. 2 and 6 are both even.

Example 2:

Input: nums = [4,3,1,6], queries = [[0,2],[2,3]]
Output: [false,true]
Explanation:

The subarray is [4,3,1]. 3 and 1 are both odd. So the answer to this query is false.
The subarray is [1,6]. There is only one pair: (1,6) and it contains numbers with different parity. So the answer to this query is true.



Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= queries.length <= 105
queries[i].length == 2
0 <= queries[i][0] <= queries[i][1] <= nums.length - 1


```

## 题目翻译

判断子数组是否每对相邻元素奇偶性不同。多组查询。

## 解题思路

前缀和统计"坏对"（同奇偶相邻对）数量，查询时检查区间内坏对数是否为0。

## Solution

[SourceCode](./solution.js)
