# [4010] Maximize Pair Strength Using GCD

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-pair-strength-using-gcd/description/)

* algorithms
* Easy (48.27%)
* Likes:    38
* Dislikes: 2
* Testcase Example:  '[2,3,5]'

```md
You are given an integer array nums.
Choose exactly one pair of distinct indices i and j. The strength of the pair is defined as (nums[i] * nums[j]) / gcd(nums[i], nums[j])2.
Return the maximum strength over all possible pairs.

Example 1:

Input: nums = [2,3,5]
Output: 15
Explanation:
Choosing i = 1 and j = 2 gives strength (3 * 5) / gcd(3, 5)2 = 15 / 1 = 15, which is the maximum over all pairs.

Example 2:

Input: nums = [4,6,8]
Output: 12
Explanation:
Choosing i = 1 and j = 2 gives strength (6 * 8) / gcd(6, 8)2 = 48 / 4 = 12, which is the maximum over all pairs.

Example 3:

Input: nums = [3,3]
Output: 1
Explanation:
Choosing i = 0 and j = 1 gives strength (3 * 3) / gcd(3, 3)2 = 9 / 9 = 1, the maximum over all pairs.


Constraints:

2 <= nums.length <= 2000
1 <= nums[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

选一对不同下标 i、j，强度 = `(nums[i]·nums[j]) / gcd(nums[i],nums[j])²`（即 (a/g)·(b/g)）。返回最大强度。

示例 1：`[2,3,5]` → `15`；示例 2：`[4,6,8]` → `12`

约束：n ≤ 2000，值 ≤ 10^5

## 解题思路

n ≤ 2000 → 直接 O(n²) 枚举对，gcd 递归（辗转相除），取 (a/g)(b/g) 最大。约 2×10^6 次 gcd。