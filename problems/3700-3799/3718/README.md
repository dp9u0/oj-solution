# [3718] Smallest Missing Multiple of K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-missing-multiple-of-k/description/)

* algorithms
* Easy (63.16%)
* Likes:    56
* Dislikes: 3
* Testcase Example:  '[8,2,3,4,6]\n2'

```md
Given an integer array nums and an integer k, return the smallest positive multiple of k that is missing from nums.
A multiple of k is any positive integer divisible by k.

Example 1:

Input: nums = [8,2,3,4,6], k = 2
Output: 10
Explanation:
The multiples of k = 2 are 2, 4, 6, 8, 10, 12... and the smallest multiple missing from nums is 10.

Example 2:

Input: nums = [1,4,7,10,15], k = 5
Output: 5
Explanation:
The multiples of k = 5 are 5, 10, 15, 20... and the smallest multiple missing from nums is 5.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
1 <= k <= 100


```

## 题目翻译

给定一个整数数组 `nums` 和一个整数 `k`，返回 `nums` 中缺失的最小的 `k` 的正整数倍数。
`k` 的倍数是任何能被 `k` 整除的正整数。

**示例 1：**
输入：nums = [8,2,3,4,6], k = 2
输出：10
解释：k = 2 的倍数有 2, 4, 6, 8, 10, 12...，nums 中缺失的最小倍数是 10。

**示例 2：**
输入：nums = [1,4,7,10,15], k = 5
输出：5
解释：k = 5 的倍数有 5, 10, 15, 20...，nums 中缺失的最小倍数是 5。

**约束：**
- 1 <= nums.length <= 100
- 1 <= nums[i] <= 100
- 1 <= k <= 100

## 解题思路 (Approach)

由于 nums 中元素最大为 100，k 的最大倍数上界不超过 200（最大元素 100 + k）。将 nums 转为 Set，从 k 开始以 k 为步长递增，检查每个 k 的倍数是否不在 Set 中，返回第一个不在 Set 中的倍数即可。

时间复杂度：O(n + max(nums)/k)，空间复杂度：O(n)。

## Solution

[SourceCode](./solution.js)
