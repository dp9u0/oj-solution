# [LCR 057] 存在重复元素 III

## Description


```md
https://leetcode.cn/problems/7WqeDu/description/
* algorithms
* Medium (34.01%)
* Likes:    101
* Dislikes: -
* Testcase Example:  '[1,2,3,1]\n3\n0'
给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。
如果存在则返回 true，不存在返回 false。

示例 1：
输入：nums = [1,2,3,1], k = 3, t = 0
输出：true
示例 2：
输入：nums = [1,0,1,1], k = 1, t = 2
输出：true
示例 3：
输入：nums = [1,5,9,1,5,9], k = 2, t = 3
输出：false

提示：
0 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1
0 <= k <= 104
0 <= t <= 231 - 1

注意：本题与主站 220 题相同： https://leetcode.cn/problems/contains-duplicate-iii/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an integer array `nums` and integers `k` and `t`, determine whether there exist two distinct indices `i`, `j` with `abs(nums[i] - nums[j]) <= t` and `abs(i - j) <= k`.

**Example 1:** `nums=[1,2,3,1], k=3, t=0` → `true`
**Example 2:** `[1,0,1,1], k=1, t=2` → `true`
**Example 3:** `[1,5,9,1,5,9], k=2, t=3` → `false`

**Constraints:** `0 <= nums.length <= 2*10^4`, values & k/t in 32-bit range.

Note: same as LeetCode 220.

---

## Approach

**Sliding window + bucketing.** Maintain the last `k` numbers in a map keyed by bucket `num / (t+1)` (floor). Two numbers differ by `<= t` iff they are in the same bucket or adjacent buckets (and the difference check confirms).

- For each `nums[i]`, bucket `b = Math.floor(nums[i] / (t+1))`; if bucket `b` occupied → true; check `b-1`, `b+1` with explicit `abs` diff `<= t`.
- Remove `nums[i-k]` from the map when the window slides (keep window size `k`).

Special case `t === 0`: bucketing by 1 still works (`t+1 = 1`). Handle negative floor with `Math.floor` (works for negatives too). Careful: when `t` is large, `t+1` up to 2^31; use safe division.

Complexity: `O(n)`.
