# [LCP 53] 守护太空城

## Description


```md
https://leetcode.cn/problems/EJvmW4/description/
* algorithms
* Hard (48.53%)
* Likes:    13
* Dislikes: -
* Testcase Example:  '[1,2,1]\n[6,3,3]'
各位勇者请注意，力扣太空城发布陨石雨红色预警。
太空城中的一些舱室将要受到陨石雨的冲击，这些舱室按照编号 `0 ~ N` 的顺序依次排列。为了阻挡陨石损毁舱室，太空城可以使用能量展开防护屏障，具体消耗如下：
- 选择一个舱室开启屏障，能量消耗为 `2`
- 选择相邻两个舱室开启联合屏障，能量消耗为 `3`
- 对于已开启的**一个**屏障，**多维持一时刻**，能量消耗为 `1`
已知陨石雨的影响范围和到达时刻，`time[i]` 和 `position[i]` 分别表示该陨石的到达时刻和冲击位置。请返回太空舱能够守护所有舱室所需要的最少能量。
**注意：**
- 同一时间，一个舱室不能被多个屏障覆盖
- 陨石雨仅在到达时刻对冲击位置处的舱室有影响
**示例 1：**
>输入：`time = [1,2,1], position = [6,3,3]`
>
>输出：`5`
>
>解释：
> 时刻 1，分别开启编号 3、6 舱室的屏障，能量消耗 2*2 = 4
> 时刻 2，维持编号 3 舱室的屏障，能量消耗 1
> 因此，最少需要能量 5
**示例 2：**
>输入：`time = [1,1,1,2,2,3,5], position = [1,2,3,1,2,1,3]`
>
>输出：`9`
>
>解释：
> 时刻 1，开启编号 1、2 舱室的联合屏障，能量消耗 3
> 时刻 1，开启编号 3 舱室的屏障，能量消耗 2
> 时刻 2，维持编号 1、2 舱室的联合屏障，能量消耗 1
> 时刻 3，维持编号 1、2 舱室的联合屏障，能量消耗 1
> 时刻 5，重新开启编号 3 舱室的联合屏障，能量消耗 2
> 因此，最少需要能量 9
**提示：**
+ `1 <= time.length == position.length <= 500`
+ `1 <= time[i] <= 5`
+ `0 <= position[i] <= 100`

```

## English Description

A space city's cabins (numbered `0 ~ N`) face a meteor shower. To shield a cabin from impact, energy barriers can be deployed:

- Opening a barrier over **one cabin** costs `2` energy.
- Opening a combined barrier over **two adjacent cabins** costs `3` energy.
- Keeping an already-opened barrier for **one extra time unit** costs `1` energy.

`time[i]` and `position[i]` give the arrival time and impact position of meteor `i`. Return the minimum energy needed to protect every cabin.

**Notes:**

- At the same time, a single cabin cannot be covered by more than one barrier.
- A meteor only affects its impact position at its arrival time.

**Example 1:**

> Input: `time = [1,2,1], position = [6,3,3]`
>
> Output: `5`

**Example 2:**

> Input: `time = [1,1,1,2,2,3,5], position = [1,2,3,1,2,1,3]`
>
> Output: `9`

**Constraints:**

- `1 <= time.length == position.length <= 500`
- `1 <= time[i] <= 5`
- `0 <= position[i] <= 100`

## Approach

Each cabin only ever needs protection at a tiny set of times (`1..5`). For every cabin `j`, fold the impact times into a **5-bit mask** `need[j]`.

A barrier covering a consecutive time run `[a,b]` costs `(b-a+1)` plus its opening fee: `+1` for a single-cabin barrier, `+2` for a combined two-cabin barrier. Since only 5 time slots exist, the cheapest way to cover a *required* mask `m` is found by trying every **supermask** `S ⊇ m` (the barrier may also be kept active through "gap" times — bridging gaps can be cheaper than paying the opening fee twice) and charging `S` by its consecutive runs.

**Column DP.** Walk cabins left to right. The only interaction between neighboring columns is the combined barrier straddling the edge between them. State `dp[j][R]` = minimum cost after handling cabins `0..j`, where the barrier on edge `(j, j+1)` is active during the time-mask `R`. Transition to column `j`:

- Column `j` receives an active mask `L` from the left edge (or `0` on the first column) and `R` on its right edge; `L` and `R` must be disjoint (`L & R == 0`), otherwise `j` is double-covered at some time.
- The remainder `need[j] & ~(L | R)` must be covered by a single-cabin barrier.

Both single and combined costs are precomputed for all 32 masks.

**Complexity:** O(pos_max · 32 · 32) time, O(32) working space — a few thousand ops regardless of `n ≤ 500`.

## Solution

[SourceCode](./solution.js)
