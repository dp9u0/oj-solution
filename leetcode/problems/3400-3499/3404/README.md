# [3404] Count Special Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-special-subsequences/description/)

* algorithms
* Medium (29.81%)
* Likes:    195
* Dislikes: 27
* Testcase Example:  '[1,2,3,4,3,6,1]'

```md
You are given an array nums consisting of positive integers.
A special subsequence is defined as a subsequence of length 4, represented by indices (p, q, r, s), where p < q < r < s. This subsequence must satisfy the following conditions:

nums[p] * nums[r] == nums[q] * nums[s]
There must be at least one element between each pair of indices. In other words, q - p > 1, r - q > 1 and s - r > 1.

Return the number of different special subsequences in nums.

Example 1:

Input: nums = [1,2,3,4,3,6,1]
Output: 1
Explanation:
There is one special subsequence in nums.

(p, q, r, s) = (0, 2, 4, 6):

This corresponds to elements (1, 3, 3, 1).
nums[p] * nums[r] = nums[0] * nums[4] = 1 * 3 = 3
nums[q] * nums[s] = nums[2] * nums[6] = 3 * 1 = 3




Example 2:

Input: nums = [3,4,3,4,3,4,3,4]
Output: 3
Explanation:
There are three special subsequences in nums.

(p, q, r, s) = (0, 2, 4, 6):

This corresponds to elements (3, 3, 3, 3).
nums[p] * nums[r] = nums[0] * nums[4] = 3 * 3 = 9
nums[q] * nums[s] = nums[2] * nums[6] = 3 * 3 = 9


(p, q, r, s) = (1, 3, 5, 7):

This corresponds to elements (4, 4, 4, 4).
nums[p] * nums[r] = nums[1] * nums[5] = 4 * 4 = 16
nums[q] * nums[s] = nums[3] * nums[7] = 4 * 4 = 16


(p, q, r, s) = (0, 2, 5, 7):

This corresponds to elements (3, 3, 4, 4).
nums[p] * nums[r] = nums[0] * nums[5] = 3 * 4 = 12
nums[q] * nums[s] = nums[2] * nums[7] = 3 * 4 = 12





Constraints:

7 <= nums.length <= 1000
1 <= nums[i] <= 1000


```

## 中文翻译

给定正整数数组 nums，特殊子序列是长度为 4 的子序列 (p,q,r,s)，满足 p<q<r<s，相邻索引间隔至少为 2（q-p>1, r-q>1, s-r>1），且 nums[p]*nums[r]==nums[q]*nums[s]。返回特殊子序列的个数。

## 解题思路

**分数匹配 + 哈希分组：**

1. 条件 nums[p]*nums[r]==nums[q]*nums[s] 等价于 nums[p]/nums[q]==nums[s]/nums[r]
2. 将四元组拆分为左对 (p,q) 和右对 (s,r)，用最简分数作为匹配键
3. 左对 (p,q)：q-p>=2，按分数分组，记录每个 q 值的出现次数
4. 右对 (r,s)：s-r>=2，按分数分组，记录每个 r 值的出现次数
5. 对每个分数，用后缀和 + 二分查找统计满足 r>=q+2 的配对数

时间复杂度：O(n^2 log n)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
