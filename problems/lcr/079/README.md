# [LCR 079] 子集

## Description


```md
https://leetcode.cn/problems/TVdhkn/description/
* algorithms
* Medium (83.83%)
* Likes:    102
* Dislikes: -
* Testcase Example:  '[1,2,3]'
给定一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

示例 1：
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
示例 2：
输入：nums = [0]
输出：[[],[0]]

提示：
1 <= nums.length <= 10
-10 <= nums[i] <= 10
nums 中的所有元素 互不相同

注意：本题与主站 78 题相同： https://leetcode.cn/problems/subsets/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an integer array `nums` with distinct elements, return all possible subsets (the power set). No duplicate subsets; any order.

**Example:** `[1,2,3]` → `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`

**Constraints:** `1 <= nums.length <= 10`, distinct values. Note: same as LeetCode 78.

---

## Approach

Start with `[[]]`; for each number, append copies of every existing subset with the number added. Each subset generated once.

Complexity: `O(2^n)` output size.
