# [LCR 010] 和为 K 的子数组

## Description


```md
https://leetcode.cn/problems/QTMn0o/description/
* algorithms
* Medium (44.09%)
* Likes:    206
* Dislikes: -
* Testcase Example:  '[1,1,1]\n2'
给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。

示例 1：
输入:nums = [1,1,1], k = 2
输出: 2
解释: 此题 [1,1] 与 [1,1] 为两种不同的情况
示例 2：
输入:nums = [1,2,3], k = 3
输出: 2

提示:
1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000

-107 <= k <= 107


注意：本题与主站 560 题相同： https://leetcode.cn/problems/subarray-sum-equals-k/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an integer array `nums` and an integer `k`, return the **number** of contiguous subarrays whose sum equals `k`.

**Example 1:** `nums = [1,1,1], k = 2` → `2` (two different `[1,1]`)
**Example 2:** `nums = [1,2,3], k = 3` → `2`

**Constraints:** `1 <= nums.length <= 2*10^4`, `-1000 <= nums[i] <= 1000`, `-10^7 <= k <= 10^7`.

Note: same as LeetCode 560.

---

## Approach

Because values can be negative, a sliding window doesn't apply; use **prefix sums + hashmap**.

- Maintain a running prefix sum `pre` and a map `count` of how many times each prefix sum has occurred so far.
- For each `pre`, any earlier prefix `pre - k` marks a valid subarray: add `count[pre - k]`.
- Insert the current `pre` into the map (initialize `count[0] = 1`).

Complexity: `O(n)` time, `O(n)` space.
