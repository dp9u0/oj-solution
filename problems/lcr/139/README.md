# [LCR 139] 训练计划 I

## Description


```md
https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/description/
* algorithms
* Easy (65.11%)
* Likes:    341
* Dislikes: -
* Testcase Example:  '[1,2,3,4,5]'
教练使用整数数组 actions 记录一系列核心肌群训练项目编号。为增强训练趣味性，需要将所有奇数编号训练项目调整至偶数编号训练项目之前。请将调整后的训练项目编号以 数组 形式返回。

示例 1：
输入：actions = [1,2,3,4,5]
输出：[1,3,5,2,4]
解释：为正确答案之一

提示：
0 <= actions.length <= 50000
0 <= actions[i] <= 10000

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A coach records a series of core-muscle training item numbers in an integer array `actions`. To make training more fun, all **odd-numbered** items should be moved to the front of all **even-numbered** items. Return the adjusted numbers as an array.

**Example 1:** Input `actions = [1,2,3,4,5]` → Output `[1,3,5,2,4]` (one valid answer)

**Constraints:** `0 <= actions.length <= 50000`, `0 <= actions[i] <= 10000`.

---

## Approach

**Two-pointer in-place partition** (like quicksort partitioning on parity):

- `i` scans from the left looking for an even number; `j` scans from the right looking for an odd number.
- Swap `actions[i]` and `actions[j]` when `i` finds an even and `j` finds an odd, until pointers cross.

This keeps relative order arbitrary (allowed) and runs in `O(n)` time, `O(1)` space.
