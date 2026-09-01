# [719] Find K-th Smallest Pair Distance

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-k-th-smallest-pair-distance/description/)

* algorithms
* Hard (46.45%)
* Likes:    3940
* Dislikes: 125
* Testcase Example:  '[1,3,1]\n1'

```md
The distance of a pair of integers a and b is defined as the absolute difference between a and b.
Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.

Example 1:

Input: nums = [1,3,1], k = 1
Output: 0
Explanation: Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.

Example 2:

Input: nums = [1,1,1], k = 2
Output: 0

Example 3:

Input: nums = [1,6,1], k = 3
Output: 5


Constraints:

n == nums.length
2 <= n <= 104
0 <= nums[i] <= 106
1 <= k <= n * (n - 1) / 2


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定整数数组 nums 和整数 k，返回所有数对 (nums[i], nums[j]) (i < j) 的绝对差中第 k 小的距离。

### 解题思路

**排序 + 二分答案 + 双指针**

1. 将数组排序
2. 二分距离阈值 mid，统计距离 ≤ mid 的数对个数
3. 用双指针统计：右指针 j 从左到右遍历，左指针 i 跟进使得 nums[j] - nums[i] ≤ mid，贡献 j - i 对
4. 如果 ≤ mid 的数对数 ≥ k，说明答案 ≤ mid；否则答案 > mid
