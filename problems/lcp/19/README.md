# [LCP 19] 秋叶收藏集

## Description


```md
https://leetcode.cn/problems/UlBDOe/description/
* algorithms
* Medium (52.04%)
* Likes:    243
* Dislikes: -
* Testcase Example:  '"rrryyyrryyyrr"'
小扣出去秋游，途中收集了一些红叶和黄叶，他利用这些叶子初步整理了一份秋叶收藏集 `leaves`， 字符串 `leaves` 仅包含小写字符 `r` 和 `y`， 其中字符 `r` 表示一片红叶，字符 `y` 表示一片黄叶。
出于美观整齐的考虑，小扣想要将收藏集中树叶的排列调整成「红、黄、红」三部分。每部分树叶数量可以不相等，但均需大于等于 1。每次调整操作，小扣可以将一片红叶替换成黄叶或者将一片黄叶替换成红叶。请问小扣最少需要多少次调整操作才能将秋叶收藏集调整完毕。
**示例 1：**
>输入：`leaves = "rrryyyrryyyrr"`
>
>输出：`2`
>
>解释：调整两次，将中间的两片红叶替换成黄叶，得到 "rrryyyyyyyyrr"
**示例 2：**
>输入：`leaves = "ryr"`
>
>输出：`0`
>
>解释：已符合要求，不需要额外操作
**提示：**
- `3 <= leaves.length <= 10^5`
- `leaves` 中只包含字符 `'r'` 和字符 `'y'`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Xiao Kou collected red and yellow leaves in string `leaves` (`r`/`y`). He wants to rearrange into three parts: **red, yellow, red**. Each part must be nonempty. One operation replaces one leaf's color (r↔y). Return the minimum operations.

**Example 1:** `"rrryyyrryyyrr"` → `2`
**Example 2:** `"ryr"` → `0`

**Constraints:** `3 <= leaves.length <= 10^5`.

---

## Approach

**DP with 3 states** scanned left→right, representing which block the current prefix ends in:

- state 0: still in the first all-red block;
- state 1: in the middle yellow block;
- state 2: in the final red block.

Cost for turning a leaf into `r`/`y` is 1 if it differs. Transitions: 0→0 (cost to `r`), 0→1 (cost to `y`), 1→1 (cost to `y`), 1→2 (cost to `r`), 2→2 (cost to `r`). Enforce each block nonempty by only allowing a state switch after at least one char has been spent in the current block, and require the final state to be 2 having used the third block.

Answer is the minimum dp at state 2 (with the third block nonempty).

Complexity: `O(n)`.
