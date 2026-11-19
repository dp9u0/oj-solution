# [1058] 最小化舍入误差以满足目标

## Description


```md
https://leetcode.cn/problems/minimize-rounding-error-to-meet-target/description/
* algorithms
* Medium (39.20%)
* Likes:    39
* Dislikes: -
* Testcase Example:  '["0.700","2.800","4.900"]\n8'
给定一系列价格 [p1,p2...,pn] 和一个目标 target，将每个价格 pi 舍入为 Roundi(pi) 以使得舍入数组 [Round1(p1),Round2(p2)...,Roundn(pn)] 之和达到给定的目标值 target。每次舍入操作 Roundi(pi) 可以是向下舍 Floor(pi) 也可以是向上入 Ceil(pi)。
如果舍入数组之和无论如何都无法达到目标值 target，就返回字符串 "-1"。否则，以保留到小数点后三位的字符串格式返回最小的舍入误差，其定义为 Σ
Roundi(pi) - (pi)
（ i 从 1 到 n ）。

示例 1：
输入：prices = ["0.700","2.800","4.900"], target = 8
输出："1.000"
解释：
使用 Floor，Ceil 和 Ceil 操作得到 (0.7 - 0) + (3 - 2.8) + (5 - 4.9) = 0.7 + 0.2 + 0.1 = 1.0 。
示例 2：
输入：prices = ["1.500","2.500","3.500"], target = 10
输出："-1"
解释：
达到目标是不可能的。
示例 3：
输入：prices = ["1.500","2.500","3.500"], target = 9
输出："1.500"

提示：
1 <= prices.length <= 500
表示价格的每个字符串 prices[i] 都代表一个介于 [0.0, 1000.0] 之间的实数，并且正好有 3 个小数位。
target 介于 0 和 1000000 之间。
Hint 1: If we have integer values in the array then we just need to subtract the target those integer values, so we reduced the problem.
Hint 2: Similarly if we have non integer values we have two options to put them flor(value) or ceil(value) = floor(value) + 1, so the idea is to just subtract floor(value).
Hint 3: Now the problem is different for each position we can sum just add 0 or 1 in order to sum the target, minimizing the deltas. This can be solved with DP.

```

## Solution

[SourceCode](./solution.js)

## Translation

Round each price (exactly 3 decimals) to Floor or Ceil so the sum equals target; return the minimal total rounding error as a 3-decimal string, or "-1" if impossible.

- Example: prices = ["0.700","2.800","4.900"], target = 8 → `"1.000"`

## Approach

**贪心**。按字符串精确解析为千分位整数 v:f = ⌊v/1000⌋,r = v%1000。整数项必须取 f(误差 0),分数项取 f 误差 r/1000、取 f+1 误差 (1000−r)/1000。设需进位 k = target − Σf:k < 0 或 k > 分数项数则 -1。误差 = Σr + Σ_{进位}(1000−2r),故把 r 最大的 k 项进位最省。全程整数(毫单位)运算避免浮点误差,末尾 err/1000 保留 3 位输出。O(n log n)。
