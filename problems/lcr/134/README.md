# [LCR 134] Pow(x, n)

## Description


```md
https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/description/
* algorithms
* Medium (35.30%)
* Likes:    446
* Dislikes: -
* Testcase Example:  '2.00000\n10'
实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。

示例 1：
输入：x = 2.00000, n = 10
输出：1024.00000
示例 2：
输入：x = 2.10000, n = 3
输出：9.26100
示例 3：
输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25

提示：
-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104

注意：本题与主站 50 题相同：https://leetcode.cn/problems/powx-n/

```

## Solution

[SourceCode](./solution.js)

### English Description

Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., `x^n`).

**Example 1:**
```
Input: x = 2.00000, n = 10
Output: 1024.00000
```

**Example 2:**
```
Input: x = 2.10000, n = 3
Output: 9.26100
```

**Example 3:**
```
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2^-2 = 1/2^2 = 1/4 = 0.25
```

**Constraints:**
- `-100.0 < x < 100.0`
- `-2^31 <= n <= 2^31 - 1`
- `n` is an integer.
- Either `n` is large or the result fits within `[-10^4, 10^4]`.

> This problem is the same as LeetCode 50: Pow(x, n).

### Approach (中文思路)

**快速幂 (Exponentiation by Squaring)**

- 朴素做法 `x * x * ...` 需要 O(n) 次乘法，n 可达 2³¹，必须用快速幂把复杂度降到 O(log n)。
- 核心等式：`x^n = (x^2)^(n/2)`。利用二进制拆解指数 n，迭代时不断把指数右移（除以 2）、底数平方。
- 若当前指数为奇数，则把当前底数乘入结果（对应二进制该位为 1）。
- 处理负数指数：`x^(-n) = 1 / x^n`。注意 n 取到 -2³¹，直接取反会溢出，因此先转成正数处理或直接用符号判断（JS 里 `-n` 对 `-2^31` 仍是 `-2^31` 会溢出为异常，需用 `-(n + 1)` 技巧或全程用非负处理）。
- 边界：`n === 0` 时返回 1（含 x=0 情况约定返回 1）。
- 时间 O(log n)，空间 O(1)。

**实现要点**：用 `n < 0` 分支先取倒数，并用 Math.abs 的替代（`-(n+1)`）避免溢出，或借助 ES6 的 BigInt。这里用普通数值运算 + 处理 MIN_INT 即可。
