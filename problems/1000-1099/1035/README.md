# [1035] Uncrossed Lines

## Description

[LeetCode Problem Description](https://leetcode.com/problems/uncrossed-lines/description/)

* algorithms
* Medium (65.15%)
* Testcase Example:  '[1,4,2]\n[1,2,4]'

```md
You are given two integer arrays nums1 and nums2. We write the integers of nums1 and nums2 (in the order they are given) on two separate horizontal lines.
We may draw connecting lines: a straight line connecting two numbers nums1[i] and nums2[j] such that:
nums1[i] == nums2[j], and
the line we draw does not intersect any other connecting (non-horizontal) line.
Note that a connecting line cannot intersect even at the endpoints (i.e., each number can only belong to one connecting line).
Return the maximum number of connecting lines we can draw in this way.

Example 1:
Input: nums1 = [1,4,2], nums2 = [1,2,4]
Output: 2
Explanation: We can draw 2 uncrossed lines as in the diagram.
We cannot draw 3 uncrossed lines, because the line from nums1[1] = 4 to nums2[2] = 4 will intersect the line from nums1[2]=2 to nums2[1]=2.
Example 2:
Input: nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2]
Output: 3
Example 3:
Input: nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1]
Output: 2

Constraints:
1
1

```

## 中文翻译

给定两个整数数组 nums1 和 nums2，将它们的元素分别写在两条水平线上。
可以画连接线：连接 nums1[i] 和 nums2[j] 的直线，满足：
- nums1[i] == nums2[j]
- 该连线不与其他连线相交（包括端点也不行，即每个数只能属于一条连线）
返回最多能画多少条不相交的连接线。

## Approach

本题等价于求两个数组的最长公共子序列（LCS）。用 DP：dp[i][j] 表示 nums1 前 i 个与 nums2 前 j 个的 LCS 长度。若 nums1[i-1]==nums2[j-1] 则 dp[i][j]=dp[i-1][j-1]+1，否则 dp[i][j]=max(dp[i-1][j], dp[i][j-1])。用滚动数组优化空间到 O(n)。
