# [2569] Handling Sum Queries After Update

## Description

[LeetCode Problem Description](https://leetcode.com/problems/handling-sum-queries-after-update/description/)

* algorithms
* Hard (30.77%)
* Likes:    200
* Dislikes: 25
* Testcase Example:  '[1,0,1]\n[0,0,0]\n[[1,1,1],[2,1,0],[3,0,0]]'

```md
You are given two 0-indexed arrays nums1 and nums2 and a 2D array queries of queries. There are three types of queries:

For a query of type 1, queries[i]= [1, l, r]. Flip the values from 0 to 1 and from 1 to 0 in nums1from index l to index r. Both l and r are 0-indexed.
For a query of type 2, queries[i]= [2, p, 0]. For every index 0 <= i < n, setnums2[i] =nums2[i]+ nums1[i]* p.
For a query of type 3, queries[i]= [3, 0, 0]. Find the sum of the elements in nums2.

Return an array containing all the answers to the third typequeries.

Example 1:

Input: nums1 = [1,0,1], nums2 = [0,0,0], queries = [[1,1,1],[2,1,0],[3,0,0]]
Output: [3]
Explanation: After the first query nums1 becomes [1,1,1]. After the second query, nums2 becomes [1,1,1], so the answer to the third query is 3. Thus, [3] is returned.

Example 2:

Input: nums1 = [1], nums2 = [5], queries = [[2,0,0],[3,0,0]]
Output: [5]
Explanation: After the first query, nums2 remains [5], so the answer to the second query is 5. Thus, [5] is returned.


Constraints:

1 <= nums1.length,nums2.length <= 105
nums1.length = nums2.length
1 <= queries.length <= 105
queries[i].length = 3
0 <= l <= r <= nums1.length - 1
0 <= p <= 106
0 <= nums1[i] <= 1
0 <= nums2[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 01 数组 nums1、数组 nums2 和查询列表。查询类型：(1) 翻转 nums1[l..r]；(2) nums2[i] += nums1[i] * p；(3) 求 nums2 之和。返回所有类型 3 查询的结果。

## 解题思路

关键在于高效维护 nums1 中 1 的个数（sum1），以及区间翻转。用线段树维护 nums1 的区间 1 的个数，支持懒标记区间翻转。类型 2 查询：sum2 += sum1 * p。类型 3 查询：返回 sum2。O((n+q) log n)。
