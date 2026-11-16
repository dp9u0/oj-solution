# [3199] 用偶数异或设置位计数三元组 I

## Description


```md
https://leetcode.cn/problems/count-triplets-with-even-xor-set-bits-i/description/
* algorithms
* Easy (37.59%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '[1]\n[2]\n[3]'
给定三个整数数组 a，b 和 c，返回组内元素按位 XOR 有 偶数 个 设置位 的三元组 (a[i], b[j], c[k]) 的数量。

示例 1:
输入：a = [1], b = [2], c = [3]
输出：1
解释：
只有一个三元组 (a[0], b[0], c[0]) 并且它们的 XOR 为：1 XOR 2 XOR 3 = 002。
示例 2:
输入：a = [1,1], b = [2,3], c = [1,5]
输出：4
解释：
考虑以下 4 个三元组：
(a[0], b[1], c[0]): 1 XOR 3 XOR 1 = 0112
(a[1], b[1], c[0]): 1 XOR 3 XOR 1 = 0112
(a[0], b[0], c[1]): 1 XOR 2 XOR 5 = 1102
(a[1], b[0], c[1]): 1 XOR 2 XOR 5 = 1102

提示：
1 <= a.length, b.length, c.length <= 100
0 <= a[i], b[i], c[i] <= 100
Hint 1: Iterate over all possible triplets and calculate its XOR.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

You are given three integer arrays `a`, `b`, and `c`. Return the number of triplets `(a[i], b[j], c[k])` whose bitwise XOR has an **even** number of set bits.

**Example 1:**
Input: a = [1], b = [2], c = [3]
Output: 1 (1 XOR 2 XOR 3 = 0, which has 0 set bits)

**Constraints:**
- 1 <= a.length, b.length, c.length <= 100
- 0 <= a[i], b[i], c[i] <= 100

## Approach

XOR 无进位,故 `pop(a^b^c) mod 2 = pop(a) mod 2 + pop(b) mod 2 + pop(c) mod 2`。对每个数组统计 popcount 奇/偶个数 `(e, o)`,合法组合为 (e,e,e)、(e,o,o)、(o,e,o)、(o,o,e),答案即四项乘积之和。

时间 O(n),空间 O(1)。(n≤100 也可 O(n³) 暴力,此处取最优。)
