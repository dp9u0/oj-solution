# [4033] Valid K-Unique Subarrays I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-k-unique-subarrays-i/description/)

* algorithms
* Hard (33.91%)
* Likes:    35
* Dislikes: 11
* Testcase Example:  '[1,2,2,1]\r\n2\r\n[[0,1],[0,3],[1,2]]\r'

```md
You are given an integer array nums and an integer k.
You are also given a 2D integer array queries, where queries[i] = [li, ri] represents the subarray nums[li..ri].
For each query, the subarray nums[li..ri] is considered valid if:

It contains exactly k distinct numbers, and
The frequency of every number in the subarray is even.

Return a boolean array ans, where ans[i] is true if nums[li..ri] is valid, and false otherwise.

Example 1:

Input: nums = [1,2,2,1], k = 2, queries = [[0,1],[0,3],[1,2]]
Output: [false,true,false]
Explanation:



i
[li, ri]
Subarray
Unique numbers
Frequency
Validity check


0
[0, 1]
[1, 2]
{1, 2} &rarr; 2
{1: 1, 2: 1}
false: Element counts are not even.


1
[0, 3]
[1, 2, 2, 1]
{1, 2} &rarr; 2
{1: 2, 2: 2}
true: Exactly k = 2 distinct elements, all appearan even number of times.


2
[1, 2]
[2, 2]
{2} &rarr; 1
{2: 2}
false: Number of distinct elements is less than k = 2.



Thus, ans = [false, true, false].

Example 2:

Input: nums = [3,3,3], k = 1, queries = [[1,2],[0,2]]
Output: [true,false]
Explanation:



i
[li, ri]
Subarray
Unique numbers
Frequency
Validity check


0
[1, 2]
[3, 3]
{3} &rarr; 1
{3: 2}
true: Exactly k = 1 distinct element, appears aneven number of times.


1
[0, 2]
[3, 3, 3]
{3} &rarr; 1
{3: 3}
false: 3 does not appear an even number of times.



Thus, ans = [true, false].


Constraints:

2 <= n == nums.length <= 105
1 <= nums[i] <= 105
1 <= k <= n
1 <= queries.length <= 105
queries[i] == [li, ri]
0 <= li < ri <= n - 1


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定数组 `nums`、整数 `k` 与查询 `[li, ri]`。子数组合法当且仅当：**恰好 k 个不同数**且**每个数的出现次数都是偶数**。返回每个查询的布尔结果。

示例：`[1,2,2,1], k=2, [[0,1],[0,3],[1,2]]` → `[false,true,false]`

约束：`n, q ≤ 10^5`，`nums[i] ≤ 10^5`

## 解题思路

**Mo's 算法**离线处理（排序奇偶块优化）：

- 每个值预生成两个 32 位随机掩码拼成 64 位哈希；窗口异或和为 0 ⟺ 所有值出现偶数次（概率性，冲突率 2^-64）；
- 同时维护 `distinct`（cnt 从 0↔正 的转移计数）；
- 合法 ⟺ `x0 == 0 && x1 == 0 && distinct == k`。

复杂度 O((n+q)√n)。JS 位运算只有 32 位，用双掩码模拟 64 位。