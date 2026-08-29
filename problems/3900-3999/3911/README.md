# [3911] K-th Smallest Remaining Even Integer in Subarray Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/k-th-smallest-remaining-even-integer-in-subarray-queries/description/)

* algorithms
* Hard (30.08%)
* Likes:    38
* Dislikes: 3
* Testcase Example:  '[1,4,7]\n[[0,2,1],[1,1,2],[0,0,3]]'

```md
You are given an integer array nums where nums is strictly increasing.
You are also given a 2D integer array queries, where queries[i] = [li, ri, ki].
For each query [li, ri, ki]:

Consider the subarray nums[li..ri]
From the infinite sequence of all positive even integers: 2, 4, 6, 8, 10, 12, 14, ...
Remove all elements that appear in the subarray nums[li..ri].
Find the kith smallest integer remaining in the sequence after the removals.

Return an integer array ans, where ans[i] is the result for the ith query.

Example 1:

Input: nums = [1,4,7], queries = [[0,2,1],[1,1,2],[0,0,3]]
Output: [2,6,6]
Explanation:



i
queries[i]
nums[li..ri]
Removed
Evens
Remaining
Evens
ki
ans[i]




0
[0, 2, 1]
[1, 4, 7]
[4]
2, 6, 8, ...
1
2


1
[1, 1, 2]
[4]
[4]
2, 6, 8, ...
2
6


2
[0, 0, 3]
[1]
[]
2, 4, 6, ...
3
6



Thus, ans = [2, 6, 6].

Example 2:

Input: nums = [2,5,8], queries = [[0,1,2],[1,2,1],[0,2,4]]
Output: [6,2,12]
Explanation:



i
queries[i]
nums[li..ri]
Removed
Evens
Remaining
Evens
ki
ans[i]




0
[0, 1, 2]
[2, 5]
[2]
4, 6, 8, ...
2
6


1
[1, 2, 1]
[5, 8]
[8]
2, 4, 6, ...
1
2


2
[0, 2, 4]
[2, 5, 8]
[2, 8]
4, 6, 10, 12, ...
4
12



Thus, ans = [6, 2, 12].

Example 3:

Input: nums = [3,6], queries = [[0,1,1],[1,1,3]]
Output: [2,8]
Explanation:



i
queries[i]
nums[li..ri]
Removed
Evens
Remaining
Evens
ki
ans[i]




0
[0, 1, 1]
[3, 6]
[6]
2, 4, 8, ...
1
2


1
[1, 1, 3]
[6]
[6]
2, 4, 8, ...
3
8



Thus, ans = [2, 8].


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
nums is strictly increasing
1 <= queries.length <= 105
queries[i] = [li, ri, ki]
0 <= li <= ri < nums.length
1 <= ki <= 109​​​​​​​


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定严格递增数组 `nums` 和查询 `queries[i] = [li, ri, ki]`。对每个查询：从正偶数序列 2,4,6,... 中删去出现在子数组 `nums[li..ri]` 中的数，返回剩余序列第 `ki` 小的数。

示例 1：`[1,4,7], [[0,2,1],[1,1,2],[0,0,3]]` → `[2,6,6]`
示例 2：`[2,5,8], [[0,1,2],[1,2,1],[0,2,4]]` → `[6,2,12]`
示例 3：`[3,6], [[0,1,1],[1,1,3]]` → `[2,8]`

约束：`n, q ≤ 10^5`，`nums[i] ≤ 10^9`，`ki ≤ 10^9`

## 解题思路

**二分答案 + 前缀计数**。设候选偶数 `v = 2m`，则"≤ 2m 的剩余偶数个数" `f(m) = m − evenCount(li, ri, ≤ 2m)`。

- `evenCount(l, r, ≤ x)`：数组有序 → 二分找 `idx` = 首个 > x 的下标，有效范围为 `[l, min(r, idx−1)]`，用**偶数元素前缀计数** `preEven` O(1) 得出；
- `f(m)` 单调不减（m 每 +1，偶数计数至多多 1），二分最小 m 使 `f(m) ≥ ki`，答案 `2m`；上界 `ki + n + 1`（至多删 n 个偶数）。

复杂度 O(q·log(k+n)·log n) ≈ 5×10^7。数值 ≤ 2×10^9 双精度安全。

验证示例 2 第三问：removed {2,8}，f(6) = 6−2 = 4 ≥ 4 → 12 ✓
