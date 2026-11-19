# [651] 四个键的键盘

## Description


```md
https://leetcode.cn/problems/4-keys-keyboard/description/
* algorithms
* Medium (60.89%)
* Likes:    146
* Dislikes: -
* Testcase Example:  '3'
假设你有一个特殊的键盘包含下面的按键：
A：在屏幕上打印一个 'A'。
Ctrl-A：选中整个屏幕。
Ctrl-C：复制选中区域到缓冲区。
Ctrl-V：将缓冲区内容输出到上次输入的结束位置，并显示在屏幕上。
现在，你可以 最多 按键 n 次（使用上述四种按键），返回屏幕上最多可以显示 'A' 的个数 。

示例 1:
输入: n = 3
输出: 3
解释:
我们最多可以在屏幕上显示三个'A'通过如下顺序按键：
A, A, A
示例 2:
输入: n = 7
输出: 9
解释:
我们最多可以在屏幕上显示九个'A'通过如下顺序按键：
A, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V

提示:
1 <= n <= 50

```

## Solution

[SourceCode](./solution.js)

## Translation

Special keyboard: A (print 'A'), Ctrl-A (select all), Ctrl-C (copy), Ctrl-V (paste). With at most n presses, maximize 'A's on screen.

- Example: n = 7 → `9` (A A A CtrlA CtrlC CtrlV CtrlV)

Constraints: n ≤ 50.

## Approach

**DP**:`dp[i]` = i 次按键的最多 'A'。转移:① dp[i−1]+1(直接打印);② 枚举全选/复制的起点 x(1 ≤ x ≤ i−3):之后 Ctrl-A、Ctrl-C 各一次,Ctrl-V 共 i−x−2 次 → 屏上共 `dp[x]·(i−x−1)` 个。O(n²),n ≤ 50。
