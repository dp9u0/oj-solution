# [3495] Minimum Operations to Make Array Elements Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-array-elements-zero/description/)

* algorithms
* Hard (60.37%)
* Likes:    385
* Dislikes: 54
* Testcase Example:  '[[1,2],[2,4]]'

```md
You are given a 2D array queries, where queries[i] is of the form [l, r]. Each queries[i] defines an array of integers nums consisting of elements ranging from l to r, both inclusive.
In one operation, you can:

Select two integers a and b from the array.
Replace them with floor(a / 4) and floor(b / 4).

Your task is to determine the minimum number of operations required to reduce all elements of the array to zero for each query. Return the sum of the results for all queries.

Example 1:

Input: queries = [[1,2],[2,4]]
Output: 3
Explanation:
For queries[0]:

The initial array is nums = [1, 2].
In the first operation, select nums[0] and nums[1]. The array becomes [0, 0].
The minimum number of operations required is 1.

For queries[1]:

The initial array is nums = [2, 3, 4].
In the first operation, select nums[0] and nums[2]. The array becomes [0, 3, 1].
In the second operation, select nums[1] and nums[2]. The array becomes [0, 0, 0].
The minimum number of operations required is 2.

The output is 1 + 2 = 3.

Example 2:

Input: queries = [[2,6]]
Output: 4
Explanation:
For queries[0]:

The initial array is nums = [2, 3, 4, 5, 6].
In the first operation, select nums[0] and nums[3]. The array becomes [0, 3, 4, 1, 6].
In the second operation, select nums[2] and nums[4]. The array becomes [0, 3, 1, 1, 1].
In the third operation, select nums[1] and nums[2]. The array becomes [0, 0, 0, 1, 1].
In the fourth operation, select nums[3] and nums[4]. The array becomes [0, 0, 0, 0, 0].
The minimum number of operations required is 4.

The output is 4.


Constraints:

1 <= queries.length <= 105
queries[i].length == 2
queries[i] == [l, r]
1 <= l < r <= 109


```

## 中文翻译

给定查询数组 queries，每个查询 [l, r] 定义数组 [l, l+1, ..., r]。每次操作选两个元素 a, b，各自变为 floor(a/4) 和 floor(b/4)。求所有查询的最小操作数之和。

## 解题思路

定义 f(x) 为 x 需要除以 4 多少次才变为 0，即 f(x) = floor(log4(x)) + 1。每次操作同时处理两个元素的"一层"，所以答案为 ceil(sum(f(x)) / 2)。用前缀和优化：f(x)=k 的区间为 [4^(k-1), 4^k-1]，可快速计算 S(n) = sum(f(x), x=1..n)。

## Solution

[SourceCode](./solution.js)
