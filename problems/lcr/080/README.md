# [LCR 080] 组合

## Description


```md
https://leetcode.cn/problems/uUsW3B/description/
* algorithms
* Medium (81.29%)
* Likes:    68
* Dislikes: -
* Testcase Example:  '4\n2'
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例 1：
输入: n = 4, k = 2
输出:
[
[2,4],
[3,4],
[2,3],
[1,2],
[1,3],
[1,4],
]
示例 2：
输入: n = 1, k = 1
输出: [[1]]

提示：
1 <= n <= 20
1 <= k <= n

注意：本题与主站 77 题相同： https://leetcode.cn/problems/combinations/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from `1 ... n`.

**Example 1:** `n = 4, k = 2` → `[[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]]` (any order)
**Example 2:** `n = 1, k = 1` → `[[1]]`

**Constraints:** `1 <= n <= 20`, `1 <= k <= n`.

Note: same as LeetCode 77.

---

## Approach

**Backtracking**: pick numbers in increasing order to avoid duplicates.

- `combine(start)` tries adding each candidate `i` from `start` to `n` into the current `path`.
- Recurse with `start = i + 1`; when `path.length === k`, record a copy and return.
- Prune: if remaining numbers aren't enough to fill `k`, stop early.

Complexity: `O(C(n,k) · k)` output size.
