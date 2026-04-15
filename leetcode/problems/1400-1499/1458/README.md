# [1458] Max Dot Product of Two Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/max-dot-product-of-two-subsequences/description/)

* algorithms
* Hard (69.35%)
* Likes:    2161
* Dislikes: 51
* Testcase Example:  '[2,1,-2,5]\n[3,0,-6]'

```md
Given two arrays nums1and nums2.
Return the maximum dot productbetweennon-empty subsequences of nums1 and nums2 with the same length.
A subsequence of an array is a new array which is formed from the original array by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie,[2,3,5]is a subsequence of[1,2,3,4,5]while [1,5,3]is not).

Example 1:

Input: nums1 = [2,1,-2,5], nums2 = [3,0,-6]
Output: 18
Explanation: Take subsequence [2,-2] from nums1 and subsequence [3,-6] from nums2.
Their dot product is (2*3 + (-2)*(-6)) = 18.
Example 2:

Input: nums1 = [3,-2], nums2 = [2,-6,7]
Output: 21
Explanation: Take subsequence [3] from nums1 and subsequence [7] from nums2.
Their dot product is (3*7) = 21.
Example 3:

Input: nums1 = [-1,-1], nums2 = [1,1]
Output: -1
Explanation: Take subsequence [-1] from nums1 and subsequence [1] from nums2.
Their dot product is -1.

Constraints:

1 <= nums1.length, nums2.length <= 500
-1000 <= nums1[i], nums2[i] <= 1000


```

## 中文翻译

给定两个数组 nums1 和 nums2，从每个数组中各选一个非空子序列（长度相同），使它们的点积最大。

## 解题思路

**二维 DP**

dp[i][j] 表示 nums1[0..i-1] 和 nums2[0..j-1] 的最大点积。

转移方程：
- dp[i][j] = max(nums1[i-1]*nums2[j-1], nums1[i-1]*nums2[j-1] + max(0, dp[i-1][j-1]), dp[i-1][j], dp[i][j-1])

即：单独配对当前元素、配对当前元素并加上之前最优值（若正）、不选 nums1 当前元素、不选 nums2 当前元素。

时间复杂度：O(m*n)，空间复杂度：O(m*n)

## Solution

[SourceCode](./solution.js)
