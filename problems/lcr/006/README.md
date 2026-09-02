# [LCR 006] 两数之和 II - 输入有序数组

## Description


```md
https://leetcode.cn/problems/kLl5u1/description/
* algorithms
* Easy (67.05%)
* Likes:    90
* Dislikes: -
* Testcase Example:  '[1,2,4,6,10]\n8'
给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 0 开始计数 ，所以答案数组应当满足 0 <= answer[0] < answer[1] < numbers.length 。
假设数组中存在且只存在一对符合条件的数字，同时一个数字不能使用两次。

示例 1：
输入：numbers = [1,2,4,6,10], target = 8
输出：[1,3]
解释：2 与 6 之和等于目标数 8 。因此 index1 = 1, index2 = 3 。
示例 2：
输入：numbers = [2,3,4], target = 6
输出：[0,2]
示例 3：
输入：numbers = [-1,0], target = -1
输出：[0,1]

提示：
2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers 按 非递减顺序 排列
-1000 <= target <= 1000
仅存在一个有效答案

注意：本题与主站 167 题相似（下标起点不同）：https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an integer array `numbers` sorted in ascending order, find two numbers whose sum equals `target`. Return their indices as a length-2 array. Indices are **0-based**, so `0 <= answer[0] < answer[1] < numbers.length`. Exactly one valid pair exists, and a number can't be used twice.

**Example 1:** `[1,2,4,6,10], target = 8` → `[1,3]` (2+6)
**Example 2:** `[2,3,4], target = 6` → `[0,2]`
**Example 3:** `[-1,0], target = -1` → `[0,1]`

**Constraints:** `2 <= numbers.length <= 3*10^4`, non-decreasing, single valid answer.

---

## Approach

**Two pointers** on the sorted array:

- `l = 0`, `r = n-1`. If `numbers[l]+numbers[r] == target` return `[l, r]`; if too small, `l++`; too large, `r--`.

Complexity: `O(n)` time, `O(1)` space.
