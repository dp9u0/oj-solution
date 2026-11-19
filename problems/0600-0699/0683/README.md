# [683] K 个关闭的灯泡

## Description


```md
https://leetcode.cn/problems/k-empty-slots/description/
* algorithms
* Hard (47.86%)
* Likes:    103
* Dislikes: -
* Testcase Example:  '[1,3,2]\n1'
n 个灯泡排成一行，编号从 1 到 n 。最初，所有灯泡都关闭。每天 只打开一个 灯泡，直到 n 天后所有灯泡都打开。
给你一个长度为 n 的灯泡数组 bulbs ，其中 bulbs[i] = x 意味着在第 (i+1) 天，我们会把在位置 x 的灯泡打开，其中 i 从 0 开始，x 从 1 开始。
给你一个整数 k ，请返回恰好有两个打开的灯泡，且它们中间 正好 有 k 个 全部关闭的 灯泡的 最小的天数 。如果不存在这种情况，返回 -1 。

示例 1：
输入：
bulbs = [1,3,2]，k = 1
输出：2
解释：
第一天 bulbs[0] = 1，打开第一个灯泡 [1,0,0]
第二天 bulbs[1] = 3，打开第三个灯泡 [1,0,1]
第三天 bulbs[2] = 2，打开第二个灯泡 [1,1,1]
返回2，因为在第二天，两个打开的灯泡之间恰好有一个关闭的灯泡。
示例 2：
输入：bulbs = [1,2,3]，k = 1
输出：-1

提示：
n == bulbs.length
1 <= n <= 2 * 104
1 <= bulbs[i] <= n
bulbs 是一个由从 1 到 n 的数字构成的排列
0 <= k <= 2 * 104

```

## Solution

[SourceCode](./solution.js)

## Translation

n bulbs in a row, one turned on per day (bulbs[i] = position x turned on day i+1). Find the earliest day when two ON bulbs have exactly k OFF bulbs between them, or -1.

- Example 1: bulbs=[1,3,2], k=1 → `2`
- Example 2: bulbs=[1,2,3], k=1 → `-1`

Constraints: n ≤ 2·10^4.

## Approach

**反转 + 滑窗跳跃 O(n)**。`days[pos]` = 位置 pos 被打开的天数。窗口 `[left, left+k+1]` 两端亮、中间全暗 ⟺ 中间每天的 days 都晚于两端 max(days[left], days[right])。若中间某 i 过早(days[i] < 两端任一),则任何含 i 为中间点的窗口都作废 → left 跳到 i 后 **break 回外层重查边界并重扫**(首版在同窗口内重启扫描导致死循环);窗口合法则记录候选 `max(两端 days)` 并整体右移。left 严格右移保证 O(n)。
