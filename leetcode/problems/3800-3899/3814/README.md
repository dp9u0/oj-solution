# [3814] Maximum Capacity Within Budget

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-capacity-within-budget/description/)

* algorithms
* Medium (20.19%)
* Likes:    188
* Dislikes: 15
* Testcase Example:  '[4,8,5,3]\n[1,5,2,7]\n8'

```md
You are given two integer arrays costs and capacity, both of length n, where costs[i] represents the purchase cost of the ith machine and capacity[i] represents its performance capacity.
You are also given an integer budget.
You may select at most two distinct machines such that the total cost of the selected machines is strictly less than budget.
Return the maximum achievable total capacity of the selected machines.

Example 1:

Input: costs = [4,8,5,3], capacity = [1,5,2,7], budget = 8
Output: 8
Explanation:

Choose two machines with costs[0] = 4 and costs[3] = 3.
The total cost is 4 + 3 = 7, which is strictly less than budget = 8.
The maximum total capacity is capacity[0] + capacity[3] = 1 + 7 = 8.


Example 2:

Input: costs = [3,5,7,4], capacity = [2,4,3,6], budget = 7
Output: 6
Explanation:

Choose one machine with costs[3] = 4.
The total cost is 4, which is strictly less than budget = 7.
The maximum total capacity is capacity[3] = 6.


Example 3:

Input: costs = [2,2,2], capacity = [3,5,4], budget = 5
Output: 9
Explanation:

Choose two machines with costs[1] = 2 and costs[2] = 2.
The total cost is 2 + 2 = 4, which is strictly less than budget = 5.
The maximum total capacity is capacity[1] + capacity[2] = 5 + 4 = 9.



Constraints:

1 <= n == costs.length == capacity.length <= 105
1 <= costs[i], capacity[i] <= 105
1 <= budget <= 2 * 105


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 costs 和 capacity 数组，以及预算 budget。选择最多2台不同机器，使得总代价严格小于 budget，求最大总容量。

## 解题思路

按 cost 排序后，构建前缀最大容量数组 prefMax[i]。对每台机器 i（作为第二台），二分查找能配对的最远左边界 j（costs[j] < budget - costs[i]），则最优配对容量为 capacity[i] + prefMax[j]。同时考虑只选一台的情况。O(n log n)。
