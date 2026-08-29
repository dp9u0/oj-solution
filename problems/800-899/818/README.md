# [818] Race Car

## Description

[LeetCode Problem Description](https://leetcode.com/problems/race-car/description/)

* algorithms
* Hard (45.06%)
* Likes:    2033
* Dislikes: 192
* Testcase Example:  '3'

```md
Your car starts at position 0 and speed +1 on an infinite number line. Your car can go into negative positions. Your car drives automatically according to a sequence of instructions &#39;A&#39; (accelerate) and &#39;R&#39; (reverse):

When you get an instruction &#39;A&#39;, your car does the following:

position += speed
speed *= 2


When you get an instruction &#39;R&#39;, your car does the following:

If your speed is positive then speed = -1
otherwise speed = 1

Your position stays the same.

For example, after commands 'AAR', your car goes to positions 0 --> 1 --> 3 --> 3, and your speed goes to 1 --> 2 --> 4 --> -1.
Given a target position target, return the length of the shortest sequence of instructions to get there.

Example 1:

Input: target = 3
Output: 2
Explanation:
The shortest instruction sequence is 'AA'.
Your position goes from 0 --> 1 --> 3.

Example 2:

Input: target = 6
Output: 5
Explanation:
The shortest instruction sequence is 'AAARA'.
Your position goes from 0 --> 1 --> 3 --> 7 --> 7 --> 6.


Constraints:

1 <= target <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

赛车从位置 0、速度 +1 出发（可到负位置）。指令 `'A'`：`position += speed; speed *= 2`；指令 `'R'`：速度变为 −1（若原为正）或 +1，位置不变。给定 `target`，返回到达 target 的最短指令序列长度。

示例 1：`target=3` → `2`（AA）；示例 2：`target=6` → `5`（AAARA）

约束：`1 <= target <= 10^4`

## 解题思路

经典 DP（按位置）：`dp[i]` = 到达位置 i 的最少指令。枚举连续 A 的个数 n（位置推进 `2^n − 1`，只要 `2^n − 1 < 2i` 即可）：

- `pos = 2^n − 1` 恰等于 i：`dp[i] = n`；
- `pos > i`（冲过头）：回头 `dp[i] = n + 1 + dp[pos − i]`；
- `pos < i`（停早了）：在 pos 处 R，再反向走 j 步 A（退 `2^j − 1`），再 R 正向解决剩余：`dp[i] = n + 1 + j + 1 + dp[i − pos + 2^j − 1]`，j 枚举 0..n−1。

对称性：反向子问题与正向同构（位置镜像），故直接复用 dp。复杂度 O(t·log²t)，t ≤ 10^4。

验证：dp[1]=1, dp[2]=4, dp[3]=2, dp[6]=5（AAARA）✓
