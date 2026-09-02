# [LCR 132] 砍竹子 II

## Description


```md
https://leetcode.cn/problems/jian-sheng-zi-ii-lcof/description/
* algorithms
* Medium (31.22%)
* Likes:    273
* Dislikes: -
* Testcase Example:  '12'
现需要将一根长为正整数 bamboo_len 的竹子砍为若干段，每段长度均为 正整数。请返回每段竹子长度的 最大乘积 是多少。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：
输入：bamboo_len = 12
输出：81

提示：
2 <= bamboo_len <= 1000
注意：本题与主站 343 题相同：https://leetcode.cn/problems/integer-break/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Cut a bamboo of length `bamboo_len` into positive-integer pieces; return the maximum product of piece lengths. The answer must be taken modulo `1e9+7`.

**Example:** `bamboo_len = 12` → `81`.

**Constraints:** `2 <= bamboo_len <= 1000`. Note: same as LeetCode 343 (with modulo).

---

## Approach

Same structure as LCR 131 (cutting bamboo): prefer pieces of length 3.

- If `bamboo_len <= 3`, answer `bamboo_len - 1`.
- Otherwise with `q = floor(n/3)`, `r = n % 3`:
  - `r==0` → `3^q mod M`
  - `r==1` → `3^(q-1) * 4 mod M`
  - `r==2` → `3^q * 2 mod M`

Because the exponent can be large (n ≤ 1000), use **modular exponentiation** (or since n ≤ 1000 a loop multiply is fine too).

Complexity: `O(log n)` with fast pow.
