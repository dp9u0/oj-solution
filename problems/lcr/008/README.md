# [LCR 008] 长度最小的子数组

## Description


```md
https://leetcode.cn/problems/2VG8Kg/description/
* algorithms
* Medium (51.45%)
* Likes:    172
* Dislikes: -
* Testcase Example:  '7\n[2,3,1,2,4,3]'
给定一个含有 n 个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
示例 2：
输入：target = 4, nums = [1,4,4]
输出：1
示例 3：
输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0

提示：
1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 105

进阶：
如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。

注意：本题与主站 209 题相同：https://leetcode.cn/problems/minimum-size-subarray-sum/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an array of `n` positive integers and a positive integer `target`, find the minimal length of a **contiguous subarray** whose sum is `>= target`, and return its length. If none exists, return `0`.

**Example 1:** `target = 7, nums = [2,3,1,2,4,3]` → `2` (`[4,3]`)
**Example 2:** `target = 4, nums = [1,4,4]` → `1`
**Example 3:** `target = 11, nums = [1,...,1]` (8 ones) → `0`

**Constraints:** `1 <= target <= 10^9`, `1 <= nums.length <= 10^5`, `1 <= nums[i] <= 10^5`.

Note: same as LeetCode 209.

---

## Approach

**Sliding window** (all values positive → monotone sums):

- Expand the right pointer adding `nums[r]` until the window sum reaches `target`.
- While the sum is `>= target`, record `r - l + 1` as a candidate length, then shrink from the left (`sum -= nums[l++]`).
- Return the minimal length found, or `0`.

Complexity: `O(n)` time, `O(1)` space.
