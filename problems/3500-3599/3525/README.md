# [3525] Find X Value of Array II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-x-value-of-array-ii/description/)

* algorithms
* Hard (30.95%)
* Likes:    30
* Dislikes: 8
* Testcase Example:  '[1,2,3,4,5]\n3\n[[2,2,0,2],[3,3,3,0],[0,1,0,1]]'

```md
You are given an array of positive integers nums and a positive integer k. You are also given a 2D array queries, where queries[i] = [indexi, valuei, starti, xi].
You are allowed to perform an operation once on nums, where you can remove any suffix from nums such that nums remains non-empty.
The x-value of nums for a given x is defined as the number of ways to perform this operation so that the product of the remaining elements leaves a remainder of x modulo k.
For each query in queries you need to determine the x-value of nums for xi after performing the following actions:

Update nums[indexi] to valuei. Only this step persists for the rest of the queries.
Remove the prefix nums[0..(starti - 1)] (where nums[0..(-1)] will be used to represent the empty prefix).

Return an array result of size queries.length where result[i] is the answer for the ith query.
A prefix of an array is a subarray that starts from the beginning of the array and extends to any point within it.
A suffix of an array is a subarray that starts at any point within the array and extends to the end of the array.
Note that the prefix and suffix to be chosen for the operation can be empty.
Note that x-value has a different definition in this version.

Example 1:

Input: nums = [1,2,3,4,5], k = 3, queries = [[2,2,0,2],[3,3,3,0],[0,1,0,1]]
Output: [2,2,2]
Explanation:

For query 0, nums becomes [1, 2, 2, 4, 5], and the empty prefix must be removed. The possible operations are:

Remove the suffix [2, 4, 5]. nums becomes [1, 2].
Remove the empty suffix. nums becomes [1, 2, 2, 4, 5] with a product 80, which gives remainder 2 when divided by 3.


For query 1, nums becomes [1, 2, 2, 3, 5], and the prefix [1, 2, 2] must be removed. The possible operations are:

Remove the empty suffix. nums becomes [3, 5].
Remove the suffix [5]. nums becomes [3].


For query 2, nums becomes [1, 2, 2, 3, 5], and the empty prefix must be removed. The possible operations are:

Remove the suffix [2, 2, 3, 5]. nums becomes [1].
Remove the suffix [3, 5]. nums becomes [1, 2, 2].




Example 2:

Input: nums = [1,2,4,8,16,32], k = 4, queries = [[0,2,0,2],[0,2,0,1]]
Output: [1,0]
Explanation:

For query 0, nums becomes [2, 2, 4, 8, 16, 32]. The only possible operation is:

Remove the suffix [2, 4, 8, 16, 32].


For query 1, nums becomes [2, 2, 4, 8, 16, 32]. There is no possible way to perform the operation.


Example 3:

Input: nums = [1,1,2,1,1], k = 2, queries = [[2,1,0,1]]
Output: [5]


Constraints:

1 <= nums[i] <= 109
1 <= nums.length <= 105
1 <= k <= 5
1 <= queries.length <= 2 * 104
queries[i] == [indexi, valuei, starti, xi]
0 <= indexi <= nums.length - 1
1 <= valuei <= 109
0 <= starti <= nums.length - 1
0 <= xi <= k - 1


```

## 题目翻译

给定数组 nums、整数 k 和 queries。每个 query = [index, value, start, x]：先将 nums[index] 改为 value（持久化），然后考虑子数组 nums[start..n-1]，求有多少种删除后缀的方式使剩余前缀的乘积 mod k == x。

## 解题思路

**线段树 + 前缀乘积计数**

关键：k ≤ 5，每个线段树节点存储 [total, count[k]]，其中 total = 区间乘积 mod k，count[r] = 区间前缀乘积中余数为 r 的个数。

合并操作：左段直接贡献 count，右段的 count 按 left.total 偏移（乘以 left.total 后 mod k）。

每次 query：点更新 O(log n)，区间查询 O(k log n)。总 O(q * k * log n)。

## Solution

[SourceCode](./solution.js)
