# [LCR 131] 砍竹子 I

## Description


```md
https://leetcode.cn/problems/jian-sheng-zi-lcof/description/
* algorithms
* Medium (57.37%)
* Likes:    633
* Dislikes: -
* Testcase Example:  '12'
现需要将一根长为正整数 bamboo_len 的竹子砍为若干段，每段长度均为正整数。请返回每段竹子长度的最大乘积是多少。

示例 1：
输入: bamboo_len = 12
输出: 81
提示：
2 <= bamboo_len <= 58
注意：本题与主站 343 题相同：https://leetcode.cn/problems/integer-break/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Cut a bamboo of length `bamboo_len` (positive integer) into several pieces, each a positive integer length. Return the **maximum product** of the piece lengths.

**Example:** `bamboo_len = 12` → `81`

**Constraints:** `2 <= bamboo_len <= 58`.

Note: same as LeetCode 343.

---

## Approach

For maximizing product of parts summing to `n` with `n >= 2`, split into as many `3`s as possible (with special small cases):

- If `n <= 3`, the answer is `n - 1` (must cut at least once).
- Otherwise, let `q = floor(n/3)`, `r = n % 3`:
  - `r == 0` → `3^q`
  - `r == 1` → `3^(q-1) * 4` (turn one 3+1 into 2+2)
  - `r == 2` → `3^q * 2`

(Standard result: 3 is the optimal base; 2s only when needed.)

Complexity: `O(1)` (or `O(log n)` via pow).
