# [3979] Maximum Valid Pair Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-valid-pair-sum/description/)

* algorithms
* Medium (49.15%)
* Likes:    57
* Dislikes: 1
* Testcase Example:  '[1,3,5,2,8]\n2'

```md
You are given an integer array nums of length n and an integer k.
A pair of indices (i, j) is called valid if:

0 <= i < j < n
j - i >= k

Return the maximum value of nums[i] + nums[j] among all valid pairs.

Example 1:

Input: nums = [1,3,5,2,8], k = 2
Output: 13
Explanation:
The valid pairs are:

(0, 2): nums[0] + nums[2] = 6
(0, 3): nums[0] + nums[3] = 3
(0, 4): nums[0] + nums[4] = 9
(1, 3): nums[1] + nums[3] = 5
(1, 4): nums[1] + nums[4] = 11
(2, 4): nums[2] + nums[4] = 13

Thus, the answer is 13.​​​​​​​

Example 2:

Input: nums = [5,1,9], k = 1
Output: 14
Explanation:

Since k = 1, every pair is valid.
The maximum value is obtained from a pair (0, 2)​​​​​​​, which is nums[0] + nums[2] = 5 + 9 = 14.
Thus, the answer is 14.



Constraints:

2 <= n == nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= n - 1


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

返回满足 `j − i >= k` 的数对 `(i, j)` 中 `nums[i] + nums[j]` 的最大值。

示例 1：`[1,3,5,2,8], k=2` → `13`（5+8）；示例 2：`[5,1,9], k=1` → `14`

## 解题思路

一遍扫描：j 从 k 起遍历，维护前缀 `[0, j−k]` 的最大值（入窗时更新），与 `nums[j]` 配对取最大。O(n)。