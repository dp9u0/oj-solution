# [3277] Maximum XOR Score Subarray Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-xor-score-subarray-queries/description/)

* algorithms
* Hard (43.75%)
* Likes:    110
* Dislikes: 17
* Testcase Example:  '[2,8,4,32,16,1]\n[[0,2],[1,4],[0,5]]'

```md
You are given an array nums of n integers, and a 2D integer array queries of size q, where queries[i] = [li, ri].
For each query, you must find the maximum XOR score of any subarray of nums[li..ri].
The XOR score of an array a is found by repeatedly applying the following operations on a so that only one element remains, that is the score:

Simultaneously replace a[i] with a[i] XOR a[i + 1] for all indices i except the last one.
Remove the last element of a.

Return an array answer of size q where answer[i] is the answer to query i.

Example 1:

Input: nums = [2,8,4,32,16,1], queries = [[0,2],[1,4],[0,5]]
Output: [12,60,60]
Explanation:
In the first query, nums[0..2] has 6 subarrays [2], [8], [4], [2, 8], [8, 4], and [2, 8, 4] each with a respective XOR score of 2, 8, 4, 10, 12, and 6. The answer for the query is 12, the largest of all XOR scores.
In the second query, the subarray of nums[1..4] with the largest XOR score is nums[1..4] with a score of 60.
In the third query, the subarray of nums[0..5] with the largest XOR score is nums[1..4] with a score of 60.

Example 2:

Input: nums = [0,7,3,2,8,5,1], queries = [[0,3],[1,5],[2,4],[2,6],[5,6]]
Output: [7,14,11,14,5]
Explanation:



Index
nums[li..ri]
Maximum XOR Score Subarray
Maximum Subarray XOR Score




0
[0, 7, 3, 2]
[7]
7


1
[7, 3, 2, 8, 5]
[7, 3, 2, 8]
14


2
[3, 2, 8]
[3, 2, 8]
11


3
[3, 2, 8, 5, 1]
[2, 8, 5, 1]
14


4
[5, 1]
[5]
5





Constraints:

1 <= n == nums.length <= 2000
0 <= nums[i] <= 231 - 1
1 <= q == queries.length <= 105
queries[i].length == 2
queries[i] = [li, ri]
0 <= li <= ri <= n - 1


```

## 中文翻译

给定数组 nums 和查询数组 queries。XOR score 是反复对相邻元素做 XOR 直到只剩一个元素的结果。对每个查询 [l, r]，找 nums[l..r] 中所有子数组的最大 XOR score。

## 解题思路

XOR score 满足递推：xor[i][j] = xor[i][j-1] ^ xor[i+1][j]。用二维 DP 预计算所有 xor[i][j]，同时维护 maxxor[i][j] = max(xor[i][j], maxxor[i+1][j], maxxor[i][j-1])，查询 O(1)。

## Solution

[SourceCode](./solution.js)
