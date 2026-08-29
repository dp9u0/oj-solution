# [4032] Longest Subarray With at Most K Distinct Prime Factors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-subarray-with-at-most-k-distinct-prime-factors/description/)

* algorithms
* Medium (56.52%)
* Likes:    64
* Dislikes: 3
* Testcase Example:  '[7,6,10,12,11]\n3'

```md
You are given an integer array nums consisting of positive integers and an integer k.
The prime factor set of a subarray is the union of the distinct prime factors of all its elements.
Return the length of the longest subarray whose prime factor set contains at most k distinct prime factors. If no such subarray exists, return 0.

Example 1:

Input: nums = [7,6,10,12,11], k = 3
Output: 3
Explanation:
Consider the subarray [6, 10, 12]:

The distinct prime factors of 6 are {2, 3}.
The distinct prime factors of 10 are {2, 5}.
The distinct prime factors of 12 are {2, 3}.
The union of these sets is {2, 3, 5}, which contains 3 distinct prime factors.

No longer subarray satisfies the condition. Therefore, the answer is 3.

Example 2:

Input: nums = [4,6,9,18], k = 4
Output: 4
Explanation:
Consider the entire array [4, 6, 9, 18]:

The distinct prime factors of 4 are {2}.
The distinct prime factors of 6 are {2, 3}.
The distinct prime factors of 9 are {3}.
The distinct prime factors of 18 are {2, 3}.
The union of these sets is {2, 3}, which contains 2 distinct prime factors.

Since 2 <= 4, the entire array is valid. Therefore, the answer is 4.

Example 3:

Input: nums = [6,10,15], k = 2
Output: 1
Explanation:
Every subarray of length at least 2 has prime factor set {2, 3, 5}, which contains 3 distinct prime factors.
Since 3 > 2, only subarrays of length 1 are valid. Therefore, the answer is 1.


Constraints:

1 <= nums.length <= 105
2 <= nums[i] <= 105
1 <= k <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定正整数数组 `nums` 和整数 `k`。子数组的**质因数集合** = 其所有元素的不同质因数之并。返回质因数集合大小 **≤ k** 的最长子数组长度；不存在返回 0。

示例 1：`[7,6,10,12,11], k=3` → `3`（`[6,10,12]` 并集 {2,3,5}）
示例 2：`[4,6,9,18], k=4` → `4`（全集仅 {2,3}）
示例 3：`[6,10,15], k=2` → `1`

约束：`1 <= n <= 10^5`，`2 <= nums[i] <= 10^5`，`1 <= k <= 10^4`

## 解题思路

1. **SPF 筛**（最小质因数，欧拉筛式预处理）到 10^5，每个值 O(log v) 分解出**不同**质因数列表（每值 ≤ 6 个：2·3·5·7·11·13 = 30030 < 10^5）；
2. **滑动窗口**：Map 计数每个质数出现次数，`kinds` 为计数 > 0 的质数个数；右端入窗加入质数，`kinds > k` 时左端收缩；窗口合法时更新最大长度。

单元素自身质因数可超 k（如 k=1 遇 6），收缩到空窗即 kinds=0 合法，答案可为 0。

复杂度：预处理 O(V log log V) + 窗口 O(6n)。
