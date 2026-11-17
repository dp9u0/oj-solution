# [351] 安卓系统手势解锁

## Description


```md
https://leetcode.cn/problems/android-unlock-patterns/description/
* algorithms
* Medium (62.32%)
* Likes:    125
* Dislikes: -
* Testcase Example:  '1\n1'
我们都知道安卓有个手势解锁的界面，是一个 3 x 3 的点所绘制出来的网格。用户可以设置一个 “解锁模式” ，通过连接特定序列中的点，形成一系列彼此连接的线段，每个线段的端点都是序列中两个连续的点。如果满足以下两个条件，则 k 点序列是有效的解锁模式：
解锁模式中的所有点 互不相同 。
假如模式中两个连续点的线段需要经过其他点的 中心 ，那么要经过的点 必须提前出现 在序列中（已经经过），不能跨过任何还未被经过的点。

例如，点 5 或 6 没有提前出现的情况下连接点 2 和 9 是有效的，因为从点 2 到点 9 的线没有穿过点 5 或 6 的中心。
然而，点 2 没有提前出现的情况下连接点 1 和 3 是无效的，因为从圆点 1 到圆点 3 的直线穿过圆点 2 的中心。


以下是一些有效和无效解锁模式的示例：
无效手势：[4,1,3,6] ，连接点 1 和点 3 时经过了未被连接过的 2 号点。
无效手势：[4,1,9,2] ，连接点 1 和点 9 时经过了未被连接过的 5 号点。
有效手势：[2,4,1,3,6] ，连接点 1 和点 3 是有效的，因为虽然它经过了点 2 ，但是点 2 在该手势中之前已经被连过了。
有效手势：[6,5,4,1,9,2] ，连接点 1 和点 9 是有效的，因为虽然它经过了按键 5 ，但是点 5 在该手势中之前已经被连过了。
给你两个整数，分别为 ​​m 和 n ，那么请返回有多少种 不同且有效的解锁模式 ，是 至少 需要经过 m 个点，但是 不超过 n 个点的。
两个解锁模式 不同 需满足：经过的点不同或者经过点的顺序不同。

示例 1：
输入：m = 1, n = 1
输出：9
示例 2：
输入：m = 1, n = 2
输出：65

提示：
1 <= m, n <= 9

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Count Android unlock patterns with length between `m` and `n`: dots 1-9 on a 3×3 grid, each dot used at most once, and you may jump over a dot only if it has already been used (8 rules where a middle dot blocks, incl. diagonal 1-9 and 3-7).

**Constraints:**
- 1 <= m <= n <= 9

## Approach

回溯 + 跳点表:skips[a][b] 记录 a、b 之间被遮挡的中点;从每个起点枚举长度 m..n 的路径,下一跳未被用且(若有跳点)跳点已用则可走。

时间:上界 O(9!·回溯系数),对 9 个点实测即席;空间 O(9)。
