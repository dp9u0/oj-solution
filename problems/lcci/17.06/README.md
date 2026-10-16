# [面试题 17.06] 2出现的次数

## Description


```md
https://leetcode.cn/problems/number-of-2s-in-range-lcci/description/
* lcci
* Hard (50.79%)
* Likes:    89
* Dislikes: -
* Testcase Example:  '2'
编写一个方法，计算从 0 到 n (含 n) 中数字 2 出现的次数。
示例：
输入：25
输出：9
解释：(2, 12, 20, 21, 22, 23, 24, 25)(注意 22 应该算作两次)
提示：
n <= 10^9
Hint 1: 从蛮力解法开始。
Hint 2: 不要计算每一个数中有多少个2，要一位数一位数地想，也就是说，首先计算(对于每个数字)第 1 位中有多少个 2，然后计算(对于每个数字)第 2 位中有多少个 2，再计算(对于每个数字)第 3 位中有多少个 2，以此类推。
Hint 3: 是否有一种更快的方法来计算某一特定位在一个数值范围内有多少个 2?注意，任何位的大约 1/10 应该是 2，但这只是大概比例。如何将其表述得更准确些?

```

## Description (English)

Write a method to count the number of occurrences of the digit 2 in the range 0 to n (inclusive).

Example:
Input: 25
Output: 9
Explanation: (2, 12, 20, 21, 22, 23, 24, 25) — note that 22 counts twice.

Note: n <= 10^9.

## 思路

逐位计数，O(log₁₀n)：对每个位权 p，把 [0, n] 中该位为 2 的数的个数拆成 高位 high、当前位 cur、低位 low 三段：

- cur > 2：该位取 2 完全不受 n 限制，共 (high + 1) × p 个
- cur = 2：高位取 0..high-1 时低位任意（high × p 个），高位恰为 high 时低位只能取 0..low（low + 1 个）
- cur < 2：该位取 2 需要高位更小，共 high × p 个

例：n = 25 → 个位 3 个 + 十位 6 个 = 9 ✓

## Solution

[SourceCode](./solution.js)
