# [952] Largest Component Size by Common Factor

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-component-size-by-common-factor/description/)

* algorithms
* Hard (42.78%)
* Likes:    1727
* Dislikes: 95
* Testcase Example:  '[4,6,15,35]'

```md
You are given an integer array of unique positive integers nums. Consider the following graph:

There are nums.length nodes, labeled nums[0] to nums[nums.length - 1],
There is an undirected edge between nums[i] and nums[j] if nums[i] and nums[j] share a common factor greater than 1.

Return the size of the largest connected component in the graph.

Example 1:


Input: nums = [4,6,15,35]
Output: 4

Example 2:


Input: nums = [20,50,9,63]
Output: 2

Example 3:


Input: nums = [2,3,6,7,4,12,21,39]
Output: 8


Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i] <= 105
All the values of nums are unique.


```

## 中文翻译

给定唯一正整数数组 nums。若 nums[i] 和 nums[j] 有大于 1 的公因子则连边。求最大连通分量大小。

## 解题思路

并查集 + 质因子分解。对每个数分解质因子，将该数与每个质因子 union。共享同一质因子的数自然连通。最后统计每个根下的元素数取最大值。

## Solution

[SourceCode](./solution.js)
