# [LCR 082] 组合总和 II

## Description


```md
https://leetcode.cn/problems/4sjJUc/description/
* algorithms
* Medium (65.51%)
* Likes:    64
* Dislikes: -
* Testcase Example:  '[10,1,2,7,6,1,5]\n8'
给定一个可能有重复数字的整数数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的每个数字在每个组合中只能使用一次，解集不能包含重复的组合。

示例 1：
输入：candidates = [10,1,2,7,6,1,5], target = 8
输出：
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
示例 2：
输入：candidates = [2,5,2,1,2], target = 5
输出：
[
[1,2,2],
[5]
]

提示：
1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30

注意：本题与主站 40 题相同： https://leetcode.cn/problems/combination-sum-ii/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given an integer array `candidates` (which may contain **duplicates**) and a target `target`, find all combinations in `candidates` whose sum is `target`. Each number in `candidates` may be used **once** per combination; the answer set must not contain duplicate combinations.

**Example 1:** `candidates = [10,1,2,7,6,1,5], target = 8` → `[[1,1,6],[1,2,5],[1,7],[2,6]]`
**Example 2:** `candidates = [2,5,2,1,2], target = 5` → `[[1,2,2],[5]]`

**Constraints:** `1 <= candidates.length <= 100`, values `1..50`, `1 <= target <= 30`.

Note: same as LeetCode 40.

---

## Approach

**Backtracking with deduplication.**

- Sort `candidates` so equal values are adjacent.
- DFS from an index, tracking the remaining `target`. At each level, only start a new pick with the **first occurrence** of a value (`if i > start && candidates[i] === candidates[i-1] continue`) to avoid duplicate combinations; each element used once by advancing `i+1`.
- Collect when `remain === 0`.

Complexity: exponential worst case but constrained small (`target <= 30`, n<=100).
