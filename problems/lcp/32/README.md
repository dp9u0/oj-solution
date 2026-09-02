# [LCP 32] 批量处理任务

## Description


```md
https://leetcode.cn/problems/t3fKg1/description/
* algorithms
* Hard (40.92%)
* Likes:    54
* Dislikes: -
* Testcase Example:  '[[1,3,2],[2,5,3],[5,6,2]]'
某实验室计算机待处理任务以 `[start,end,period]` 格式记于二维数组 `tasks`，表示完成该任务的时间范围为起始时间 `start` 至结束时间 `end` 之间，需要计算机投入 `period` 的时长，注意：
1. `period` 可为不连续时间
2. 首尾时间均包含在内
处于开机状态的计算机可同时处理任意多个任务，请返回电脑最少开机多久，可处理完所有任务。
**示例 1：**
>输入：`tasks = [[1,3,2],[2,5,3],[5,6,2]]`
>
>输出：`4`
>
>解释：
>tasks[0] 选择时间点 2、3；
>tasks[1] 选择时间点 2、3、5；
>tasks[2] 选择时间点 5、6；
>因此计算机仅需在时间点 2、3、5、6 四个时刻保持开机即可完成任务。
**示例 2：**
>输入：`tasks = [[2,3,1],[5,5,1],[5,6,2]]`
>
>输出：`3`
>
>解释：
>tasks[0] 选择时间点 2 或 3；
>tasks[1] 选择时间点 5；
>tasks[2] 选择时间点 5、6；
>因此计算机仅需在时间点 2、5、6 或 3、5、6 三个时刻保持开机即可完成任务。
**提示：**
- `2 <= tasks.length <= 10^5`
- `tasks[i].length == 3`
- `0 <= tasks[i][0] <= tasks[i][1] <= 10^9`
- `1 <= tasks[i][2] <= tasks[i][1]-tasks[i][0] + 1`

```

## English Description

A lab computer has `tasks` to process, each recorded as `[start, end, period]`. Completing such a task requires the computer to work on it for a total of `period` units of time, chosen somewhere between time `start` and `end` (inclusive). Notes:

1. the `period` units need not be consecutive;
2. both `start` and `end` are included in the allowed window.

While powered on, the computer may process any number of tasks simultaneously. Return the **minimum total duration** the computer must be powered on to finish all tasks.

**Example 1:**

> Input: `tasks = [[1,3,2],[2,5,3],[5,6,2]]`
>
> Output: `4`
>
> Explanation: pick times `2, 3` for task 0; `2, 3, 5` for task 1; `5, 6` for task 2. The union `{2, 3, 5, 6}` has 4 distinct times, so the computer needs to be on for 4 units.

**Example 2:**

> Input: `tasks = [[2,3,1],[5,5,1],[5,6,2]]`
>
> Output: `3`

**Constraints:**

- `2 <= tasks.length <= 10^5`
- `0 <= tasks[i][0] <= tasks[i][1] <= 10^9`
- `1 <= tasks[i][2] <= tasks[i][1] - tasks[i][0] + 1`

## Approach

This is the classic **interval stabbing with demands**: choose a minimum set of integer time points so that every interval `[start, end]` contains at least `period` chosen points. Chosen points are shared across all intervals containing them.

**Greedy.** Sort tasks by `end` ascending. For each task, count how many points in `[start, end]` are already chosen; if fewer than `period`, add the missing points **as far right as possible** (starting from `end` and moving left). Rightmost points lie inside the most *future* intervals, so they maximize reuse — this exchange argument gives the optimal count.

**Data structures (coordinates up to 1e9).**

1. *Coordinate compression.* Collect every `start` and `end + 1` as half-open boundaries, sort and dedupe. Consecutive boundaries define atomic segments `[uni[k], uni[k+1]-1]`. A task fully covers exactly the segments from `lowerBound(start)` up to `idx(end+1) - 1`. All integers inside one segment are interchangeable, so we only track how many points of each segment are chosen.
2. *BIT (Fenwick tree)* over segments gives the prefix count of chosen points, letting us query how many are already inside a task's window in O(log N).
3. *DSU (union–find, linking a full segment to its left neighbor)* lets us jump straight to the rightmost not-yet-full segment, so refilling is near-O(α).

Each new chosen point is taken greedily from the rightmost available segment inside the window.

**Complexity:** O(N log N) time and O(N) space.

## Solution

[SourceCode](./solution.js)
