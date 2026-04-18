# [3836] Maximum Score Using Exactly K Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-score-using-exactly-k-pairs/description/)

* algorithms
* Hard (41.50%)
* Likes:    70
* Dislikes: 4
* Testcase Example:  '[1,3,2]\n[4,5,1]\n2'

```md
You are given two integer arrays nums1 and nums2 of lengths n and m respectively, and an integer k.
You must choose exactly k pairs of indices (i1, j1), (i2, j2), ..., (ik, jk) such that:

0 <= i1 < i2 < ... < ik < n
0 <= j1 < j2 < ... < jk < m

For each chosen pair (i, j), you gain a score of nums1[i] * nums2[j].
The total score is the sum of the products of all selected pairs.
Return an integer representing the maximum achievable total score.

Example 1:

Input: nums1 = [1,3,2], nums2 = [4,5,1], k = 2
Output: 22
Explanation:
One optimal choice of index pairs is:

(i1, j1) = (1, 0) which scores 3 * 4 = 12
(i2, j2) = (2, 1) which scores 2 * 5 = 10

This gives a total score of 12 + 10 = 22.

Example 2:

Input: nums1 = [-2,0,5], nums2 = [-3,4,-1,2], k = 2
Output: 26
Explanation:
One optimal choice of index pairs is:

(i1, j1) = (0, 0) which scores -2 * -3 = 6
(i2, j2) = (2, 1) which scores 5 * 4 = 20

The total score is 6 + 20 = 26.

Example 3:

Input: nums1 = [-3,-2], nums2 = [1,2], k = 2
Output: -7
Explanation:
The optimal choice of index pairs is:

(i1, j1) = (0, 0) which scores -3 * 1 = -3
(i2, j2) = (1, 1) which scores -2 * 2 = -4

The total score is -3 + (-4) = -7.


Constraints:

1 <= n == nums1.length <= 100
1 <= m == nums2.length <= 100
-106 <= nums1[i], nums2[i] <= 106
1 <= k <= min(n, m)


```

## 题目翻译

给定两个数组 nums1（长度 n）和 nums2（长度 m），以及整数 k。选恰好 k 对 (i,j)，满足 i 严格递增、j 严格递增。总分 = Σ nums1[i] * nums2[j]，求最大总分。

## 解题思路

**动态规划 + 2D 前缀最大值**

dp[i][j] = 以 (i,j) 作为第 t 对时的最大得分。

转移：dp[t][i][j] = nums1[i] * nums2[j] + max(dp[t-1][i'][j'])，其中 i' < i, j' < j。

用 2D 前缀最大值优化：prefix[i][j] = max(dp[i'][j']) for i'≤i, j'≤j。
转移简化为：dp[t][i][j] = nums1[i] * nums2[j] + prefix[t-1][i-1][j-1]。

复杂度 O(k * n * m)，n,m ≤ 100 足够。

## Solution

[SourceCode](./solution.js)
