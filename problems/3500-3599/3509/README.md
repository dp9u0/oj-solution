# [3509] Maximum Product of Subsequences With an Alternating Sum Equal to K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-product-of-subsequences-with-an-alternating-sum-equal-to-k/description/)

* algorithms
* Hard (13.04%)
* Likes:    58
* Dislikes: 6
* Testcase Example:  '[1,2,3]\n2\n10'

```md
You are given an integer array nums and two integers, k and limit. Your task is to find a non-empty subsequence of nums that:

Has an alternating sum equal to k.
Maximizes the product of all its numbers without the product exceeding limit.

Return the product of the numbers in such a subsequence. If no subsequence satisfies the requirements, return -1.
The alternating sum of a 0-indexed array is defined as the sum of the elements at even indices minus the sum of the elements at odd indices.

Example 1:

Input: nums = [1,2,3], k = 2, limit = 10
Output: 6
Explanation:
The subsequences with an alternating sum of 2 are:

[1, 2, 3]

Alternating Sum: 1 - 2 + 3 = 2
Product: 1 * 2 * 3 = 6


[2]

Alternating Sum: 2
Product: 2



The maximum product within the limit is 6.

Example 2:

Input: nums = [0,2,3], k = -5, limit = 12
Output: -1
Explanation:
A subsequence with an alternating sum of exactly -5 does not exist.

Example 3:

Input: nums = [2,2,3,3], k = 0, limit = 9
Output: 9
Explanation:
The subsequences with an alternating sum of 0 are:

[2, 2]

Alternating Sum: 2 - 2 = 0
Product: 2 * 2 = 4


[3, 3]

Alternating Sum: 3 - 3 = 0
Product: 3 * 3 = 9


[2, 2, 3, 3]

Alternating Sum: 2 - 2 + 3 - 3 = 0
Product: 2 * 2 * 3 * 3 = 36



The subsequence [2, 2, 3, 3] has the greatest product with an alternating sum equal to k, but 36 > 9. The next greatest product is 9, which is within the limit.


Constraints:

1 <= nums.length <= 150
0 <= nums[i] <= 12
-105 <= k <= 105
1 <= limit <= 5000


```

## 中文翻译

给定数组 nums、整数 k 和 limit。找非空子序列使其交替和（偶位加、奇位减）等于 k，且元素乘积不超过 limit。返回最大乘积，不存在则返回 -1。

## 解题思路

DP。状态：(奇偶性, 交替和) → 可达乘积集合。逐元素处理，每个元素可选（扩展子序列/开新子序列）或不选。

- 扩展：根据当前子序列长度奇偶性，新元素被加上或减去。乘积乘以新元素，若超过 limit 则跳过。
- 开新：以当前元素为唯一元素，乘积即元素值。

交替和范围：±sum(nums)，提前剪枝 |k| > sum(nums) 则无解。

## Solution

[SourceCode](./solution.js)
