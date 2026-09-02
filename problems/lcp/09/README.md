# [LCP 09] 最小跳跃次数

## Description


```md
https://leetcode.cn/problems/zui-xiao-tiao-yue-ci-shu/description/
* algorithms
* Hard (32.75%)
* Likes:    103
* Dislikes: -
* Testcase Example:  '[2,5,1,1,1,1]'
为了给刷题的同学一些奖励，力扣团队引入了一个弹簧游戏机。游戏机由 N 个特殊弹簧排成一排，编号为 0 到 N-1。初始有一个小球在编号 0 的弹簧处。若小球在编号为 i 的弹簧处，通过按动弹簧，可以选择把小球向右弹射 jump[i] 的距离，或者向左弹射到任意左侧弹簧的位置。也就是说，在编号为 i 弹簧处按动弹簧，小球可以弹向 0 到 i-1 中任意弹簧或者 i+jump[i] 的弹簧（若 i+jump[i]>=N ，则表示小球弹出了机器）。小球位于编号 0 处的弹簧时不能再向左弹。
为了获得奖励，你需要将小球弹出机器。请求出最少需要按动多少次弹簧，可以将小球从编号 0 弹簧弹出整个机器，即向右越过编号 N-1 的弹簧。
示例 1：
输入：jump = [2, 5, 1, 1, 1, 1]
输出：3
解释：小 Z 最少需要按动 3 次弹簧，小球依次到达的顺序为 0 -> 2 -> 1 -> 6，最终小球弹出了机器。
限制：
1 <= jump.length <= 10^6
1 <= jump[i] <= 10000

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A spring game with N springs in a row (0..N-1). A ball starts at spring 0. At spring i, a press lets the ball jump right to `i + jump[i]` (exits if ≥ N), **or** left to **any** spring `0..i-1`. From 0 you can't go further left. Find minimum presses to launch the ball out to the right.

**Example:** `jump=[2,5,1,1,1,1]` → 3 (`0→2→1→6`).

**Constraints:** n ≤ 10^6.

---

## Approach

**BFS** with a left-unlock frontier pointer `p` = smallest index not yet reached. When node `i` is popped at depth `d`, its left-jump edges reach every still-unvisited `j < i` at depth `d+1` — enqueue them by advancing `p` through `[p, i)` but only **first-visiting** each (don't overwrite already-reached indices), keeping it O(n) amortized. Right jump to `i+jump[i]` likewise; first index with `i+jump[i] >= n` returns `d+1`.
