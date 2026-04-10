# [3740] Minimum Distance Between Three Equal Elements I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-distance-between-three-equal-elements-i/description/)

* algorithms
* Easy (60.60%)
* Likes:    149
* Dislikes: 15
* Testcase Example:  '[1,2,1,1,3]'

```md
You are given an integer array nums.
A tuple (i, j, k) of 3 distinct indices is good if nums[i] == nums[j] == nums[k].
The distance of a good tuple is abs(i - j) + abs(j - k) + abs(k - i), where abs(x) denotes the absolute value of x.
Return an integer denoting the minimum possible distance of a good tuple. If no good tuples exist, return -1.

Example 1:

Input: nums = [1,2,1,1,3]
Output: 6
Explanation:
The minimum distance is achieved by the good tuple (0, 2, 3).
(0, 2, 3) is a good tuple because nums[0] == nums[2] == nums[3] == 1. Its distance is abs(0 - 2) + abs(2 - 3) + abs(3 - 0) = 2 + 1 + 3 = 6.

Example 2:

Input: nums = [1,1,2,3,2,1,2]
Output: 8
Explanation:
The minimum distance is achieved by the good tuple (2, 4, 6).
(2, 4, 6) is a good tuple because nums[2] == nums[4] == nums[6] == 2. Its distance is abs(2 - 4) + abs(4 - 6) + abs(6 - 2) = 2 + 2 + 4 = 8.

Example 3:

Input: nums = [1]
Output: -1
Explanation:
There are no good tuples. Therefore, the answer is -1.


Constraints:

1 <= n == nums.length <= 100
1 <= nums[i] <= n


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数数组 nums。如果三个不同下标 (i, j, k) 满足 nums[i] == nums[j] == nums[k]，则称其为"好的三元组"。好三元组的距离为 abs(i-j) + abs(j-k) + abs(k-i)。返回好三元组的最小距离，若不存在则返回 -1。

## Approach

用 Map 按值分组记录所有下标。对于每个值，若其下标列表长度 >= 3，距离公式化简后为 2 * (max - min)（i < j < k 时），因此只需找相邻最近的三个下标即可：对排序后的下标列表，取所有相邻三个下标 (idx[t], idx[t+1], idx[t+2])，距离 = 2 * (idx[t+2] - idx[t])，取最小值。

时间复杂度 O(n)，空间复杂度 O(n)。
