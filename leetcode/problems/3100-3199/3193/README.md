# [3193] Count the Number of Inversions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-inversions/description/)

* algorithms
* Hard (30.05%)
* Likes:    186
* Dislikes: 37
* Testcase Example:  '3\n[[2,2],[0,0]]'

```md
You are given an integer n and a 2D array requirements, where requirements[i] = [endi, cnti] represents the end index and the inversion count of each requirement.
A pair of indices (i, j) from an integer array nums is called an inversion if:

i < j and nums[i] > nums[j]

Return the number of permutations perm of [0, 1, 2, ..., n - 1] such that for all requirements[i], perm[0..endi] has exactly cnti inversions.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: n = 3, requirements = [[2,2],[0,0]]
Output: 2
Explanation:
The two permutations are:

[2, 0, 1]

Prefix [2, 0, 1] has inversions (0, 1) and (0, 2).
Prefix [2] has 0 inversions.


[1, 2, 0]

Prefix [1, 2, 0] has inversions (0, 2) and (1, 2).
Prefix [1] has 0 inversions.




Example 2:

Input: n = 3, requirements = [[2,2],[1,1],[0,0]]
Output: 1
Explanation:
The only satisfying permutation is [2, 0, 1]:

Prefix [2, 0, 1] has inversions (0, 1) and (0, 2).
Prefix [2, 0] has an inversion (0, 1).
Prefix [2] has 0 inversions.


Example 3:

Input: n = 2, requirements = [[0,0],[1,0]]
Output: 1
Explanation:
The only satisfying permutation is [0, 1]:

Prefix [0] has 0 inversions.
Prefix [0, 1] has no inversions.



Constraints:

2 <= n <= 300
1 <= requirements.length <= n
requirements[i] = [endi, cnti]
0 <= endi <= n - 1
0 <= cnti <= 400
The input is generated such that there is at least one i such that endi == n - 1.
The input is generated such that all endi are unique.


```

## 翻译

给定 n 和 requirements 数组，requirements[i] = [endi, cnti]。求 [0..n-1] 的排列中，满足所有 perm[0..endi] 恰好有 cnti 个逆序对的排列数，模 10^9+7。逆序对：i < j 且 nums[i] > nums[j]。

## 解题思路

DP。依次插入元素 0,1,...,n-1 构建排列。插入元素 i 时可放在 0..i 任意位置，放在位置 p 会新增 (i-p) 个逆序对。dp[j] 表示当前逆序对数为 j 的方案数，用前缀和优化转移 O(1)。在 requirement 约束点只保留指定逆序对数。由于逆序对非递减且 cnti<=400，只需维护 0..maxCnt，总体 O(n*maxCnt)。

## Solution

[SourceCode](./solution.js)
