# [2736] Maximum Sum Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-queries/description/)

* algorithms
* Hard (30.14%)
* Likes:    354
* Dislikes: 17
* Testcase Example:  '[4,3,1,2]\n[2,4,9,5]\n[[4,1],[1,3],[2,5]]'

```md
You are given two 0-indexed integer arrays nums1 and nums2, each of length n, and a 1-indexed 2D array queries where queries[i] = [xi, yi].
For the ith query, find the maximum value of nums1[j] + nums2[j] among all indices j (0 <= j < n), where nums1[j] >= xi and nums2[j] >= yi, or -1 if there is no j satisfying the constraints.
Return an array answer where answer[i] is the answer to the ith query.

Example 1:

Input: nums1 = [4,3,1,2], nums2 = [2,4,9,5], queries = [[4,1],[1,3],[2,5]]
Output: [6,10,7]
Explanation:
For the 1st query xi = 4andyi = 1, we can select indexj = 0sincenums1[j] >= 4andnums2[j] >= 1. The sumnums1[j] + nums2[j]is 6, and we can show that 6 is the maximum we can obtain.
For the 2nd query xi = 1andyi = 3, we can select indexj = 2sincenums1[j] >= 1andnums2[j] >= 3. The sumnums1[j] + nums2[j]is 10, and we can show that 10 is the maximum we can obtain.
For the 3rd query xi = 2andyi = 5, we can select indexj = 3sincenums1[j] >= 2andnums2[j] >= 5. The sumnums1[j] + nums2[j]is 7, and we can show that 7 is the maximum we can obtain.
Therefore, we return[6,10,7].

Example 2:

Input: nums1 = [3,2,5], nums2 = [2,3,4], queries = [[4,4],[3,2],[1,1]]
Output: [9,9,9]
Explanation: For this example, we can use indexj = 2for all the queries since it satisfies the constraints for each query.

Example 3:

Input: nums1 = [2,1], nums2 = [2,3], queries = [[3,3]]
Output: [-1]
Explanation: There is one query in this example with xi = 3 and yi = 3. For every index, j, either nums1[j] < xi or nums2[j] < yi. Hence, there is no solution.


Constraints:

nums1.length == nums2.length
n ==nums1.length
1 <= n <= 105
1 <= nums1[i], nums2[i] <= 109
1 <= queries.length <= 105
queries[i].length ==2
xi== queries[i][1]
yi == queries[i][2]
1 <= xi, yi <= 109


```

## 题目翻译

给定两个长度为n的数组nums1和nums2，以及queries[i]=[xi,yi]。对每个查询，找max(nums1[j]+nums2[j])使得nums1[j]>=xi且nums2[j]>=yi，不存在则返回-1。

## 解题思路

**排序 + 线段树（Range Max）**

1. 将所有nums2值和yi值做坐标压缩。
2. 将点按nums1降序排列，查询按xi降序排列。
3. 用线段树维护nums2维度的range max。处理每个查询时，先将所有nums1>=xi的点加入线段树（在compressed nums2位置更新为max(sum)），然后查询[compressed_yi, M]范围的max。
4. 若max为0（哨兵值）返回-1。

时间O((n+q)logM)，空间O(M)，M为坐标压缩后的大小。

## Solution

[SourceCode](./solution.js)
