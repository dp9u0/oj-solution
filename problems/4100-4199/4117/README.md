# [4117] 求和操作以后的最小极差

## Description


```md
https://leetcode.cn/problems/minimum-range-after-sum-operations/description/
* algorithms
* Medium (80.73%)
* Dislikes: -
* Testcase Example:  '9\n2\n5'
给你三个整数 a、b 和 c。
你可以执行以下操作 任意 次（包括零次）：
选择三个整数中的一个，并将其 替换 为另外两个整数之和。另外两个整数保持不变。
三个整数的 极差 定义为 最大值 与 最小值 之差。
返回执行任意次操作后可以得到的 最小极差。

示例 1：
输入： a = 9, b = 2, c = 5
输出： 5
解释：
一种得到最小极差的操作序列如下：
将 a 设为 b + c = 2 + 5 = 7。此时三个整数为 a = 7，b = 2，c = 5。
三个整数的极差为 max(7, 2, 5) - min(7, 2, 5) = 7 - 2 = 5。
示例 2：
输入： a = 5, b = 7, c = 6
输出： 2
解释：
不执行任何操作，三个整数的极差为 max(5, 7, 6) - min(5, 7, 6) = 7 - 5 = 2。
示例 3：
输入： a = 3, b = 3, c = 3
输出： 0
解释：
不执行任何操作，三个整数的极差为 max(3, 3, 3) - min(3, 3, 3) = 3 - 3 = 0。

提示：
1 <= a, b, c <= 100
Hint 1: Sort the three values as x <= y <= z. What range can you obtain by replacing z with x + y?
Hint 2: Because all values are positive, the middle value of the sorted triple can never decrease after an operation.
Hint 3: After any operation, the range equals the larger of the two unchanged values, which is at least the original middle value. Compare this lower bound, achieved by replacing z, with the original range.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Three integers a, b, c; an operation replaces one with the sum of the other two. Minimize max - min after any number of operations.

Approach: sort x <= y <= z. Replacing z gives (x, y, x+y) with range y; replacing x or y gives range z (worse). Answer = min(z - x, y). O(1).
