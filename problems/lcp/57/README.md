# [LCP 57] 打地鼠

## Description


```md
https://leetcode.cn/problems/ZbAuEH/description/
* algorithms
* Hard (29.56%)
* Likes:    14
* Dislikes: -
* Testcase Example:  '[[1,1,0],[2,0,1],[4,2,2]]'
欢迎各位勇者来到力扣城，本次试炼主题为「打地鼠」。
![middle_img_v2_d5d09656-0616-4a80-845e-ece461c5ba9g.png](https://pic.leetcode.cn/1650273183-nZIijm-middle_img_v2_d5d09656-0616-4a80-845e-ece461c5ba9g.png){:height="200px"}
勇者面前有一个大小为 `3*3` 的打地鼠游戏机，地鼠将随机出现在各个位置，`moles[i] = [t,x,y]` 表示在第 `t` 秒会有地鼠出现在 `(x,y)` 位置上，并于第 `t+1` 秒该地鼠消失。
勇者有一把可敲打地鼠的锤子，初始时刻（即第 `0` 秒）锤子位于正中间的格子 `(1,1)`，锤子的使用规则如下：
- 锤子每经过 `1` 秒可以往上、下、左、右中的一个方向移动一格，也可以不移动
- 锤子只可敲击所在格子的地鼠，**敲击不耗时**
请返回勇者**最多**能够敲击多少只地鼠。
**注意：**
- 输入用例保证在相同时间相同位置最多仅有一只地鼠
**示例 1：**
>输入： `moles = [[1,1,0],[2,0,1],[4,2,2]]`
>
>输出： `2`
>
>解释：
>第 0 秒，锤子位于 (1,1)
>第 1 秒，锤子移动至 (1,0) 并敲击地鼠
>第 2 秒，锤子移动至 (2,0)
>第 3 秒，锤子移动至 (2,1)
>第 4 秒，锤子移动至 (2,2) 并敲击地鼠
>因此勇者最多可敲击 2 只地鼠
**示例 2：**
>输入：`moles = [[2,0,2],[5,2,0],[4,1,0],[1,2,1],[3,0,2]]`
>
>输出：`3`
>
>解释：
>第 0 秒，锤子位于 (1,1)
>第 1 秒，锤子移动至 (2,1) 并敲击地鼠
>第 2 秒，锤子移动至 (1,1)
>第 3 秒，锤子移动至 (1,0)
>第 4 秒，锤子在 (1,0) 不移动并敲击地鼠
>第 5 秒，锤子移动至 (2,0) 并敲击地鼠
>因此勇者最多可敲击 3 只地鼠
**示例 3：**
>输入：`moles = [[0,1,0],[0,0,1]]`
>
>输出：`0`
>
>解释：
>第 0 秒，锤子初始位于 (1,1)，此时并不能敲击 (1,0)、(0,1) 位置处的地鼠
**提示：**
+ `1 <= moles.length <= 10^5`
+ `moles[i].length == 3`
+ `0 <= moles[i][0] <= 10^9`
+ `0 <= moles[i][1], moles[i][2] < 3`

```

## Solution

[SourceCode](./solution.js)

---

### English Translation

There is a `3*3` whack-a-mole game machine. Moles appear randomly at various positions, where `moles[i] = [t, x, y]` means a mole appears at `(x, y)` at the `t`-th second and disappears at the `(t+1)`-th second.

The hero holds a hammer. Initially (at second `0`) the hammer is at the center cell `(1,1)`. The rules for using the hammer:
- Each second the hammer may move one cell in one of the four directions (up, down, left, right), or stay still.
- The hammer can only strike a mole on its current cell. Striking takes no time.

Return the **maximum** number of moles the hero can strike.

**Notes:**
- The test case guarantees there is at most one mole at the same position at the same time.

**Example 1:**
> Input: `moles = [[1,1,0],[2,0,1],[4,2,2]]`
> Output: `2`
> Explanation:
> Second 0, hammer at (1,1)
> Second 1, hammer moves to (1,0) and strikes
> Second 2, hammer moves to (2,0)
> Second 3, hammer moves to (2,1)
> Second 4, hammer moves to (2,2) and strikes
> So at most 2 moles can be struck.

**Example 2:**
> Input: `moles = [[2,0,2],[5,2,0],[4,1,0],[1,2,1],[3,0,2]]`
> Output: `3`

**Example 3:**
> Input: `moles = [[0,1,0],[0,0,1]]`
> Output: `0`
> Explanation: At second 0 the hammer is at (1,1) and cannot strike moles at (1,0) or (0,1).

**Constraints:**
+ `1 <= moles.length <= 10^5`
+ `moles[i].length == 3`
+ `0 <= moles[i][0] <= 10^9`
+ `0 <= moles[i][1], moles[i][2] < 3`

### Approach (DP + Time Grouping)

Since the board is only `3*3` (9 cells), the maximum Manhattan distance between any two cells is `4`. This is the key observation.

Sort moles by time. Let `dp[i]` = the maximum number of moles struck when the last struck mole is `moles[i]` (must include mole `i`).

For transition, mole `j` can precede mole `i` if the hammer can travel from `(x_j, y_j)` at time `t_j` to `(x_i, y_i)` at time `t_i`, i.e.:
- `t_i - t_j >= |x_i - x_j| + |y_i - y_j|` (Manhattan distance reachable)

Optimization:
- Group moles by time. At any single time there are at most 9 moles.
- For time differences `>= 4`, every previous mole can reach the current one (max Manhattan distance is 4), so we only need the **global maximum dp** among all earlier moles → maintain `preMax` (max dp over all moles strictly earlier by at least 4 seconds).
- For time differences `< 4`, there are at most `9 * 9 * 4` candidate pairs → brute force over the previous few seconds' moles.

Process times in ascending order, update `preMax` lazily (only advance it once the time gap reaches 4), and compute each mole's dp = `1 + max(preMax, best reachable within same/recent time)`.

Time complexity: `O(n)` with a small constant; memory `O(n)`.
