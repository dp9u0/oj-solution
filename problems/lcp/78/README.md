# [LCP 78] 城墙防线

## Description


```md
https://leetcode.cn/problems/Nsibyl/description/
* algorithms
* Medium (50.44%)
* Likes:    12
* Dislikes: -
* Testcase Example:  '[[0,3],[4,5],[7,9]]'
在探险营地间，小扣意外发现了一片城墙遗迹，在探索期间，却不巧遇到迁徙中的兽群向他迎面冲来。情急之下小扣吹响了他的苍蓝笛，随着笛声响起，遗迹中的城墙逐渐发生了横向膨胀。
已知 `rampart[i] = [x,y]` 表示第 `i` 段城墙的初始所在区间。当城墙发生膨胀时，将遵循以下规则：
- 所有的城墙会同时膨胀相等的长度；
- 每个城墙可以向左、向右或向两个方向膨胀。
小扣为了确保自身的安全，需要在所有城墙均无重叠的情况下，让城墙尽可能的膨胀。请返回城墙可以膨胀的 **最大值** 。
**注意：**
- 初始情况下，所有城墙均不重叠，且 `rampart` 中的元素升序排列；
- 两侧的城墙可以向外无限膨胀。
**示例 1：**
>输入：`rampart = [[0,3],[4,5],[7,9]]`
>
>输出：`3`
>
>解释：如下图所示：
>`rampart[0]` 向左侧膨胀 3 个单位；
>`rampart[2]` 向右侧膨胀 3 个单位；
>`rampart[1]` 向左侧膨胀 1 个单位，向右膨胀 2 个单位。
>不存在膨胀更多的方案，返回 3。
![image.png](https://pic.leetcode.cn/1681717918-tWywrp-image.png){:width=750px}
**示例 2：**
>输入：`rampart = [[1,2],[5,8],[11,15],[18,25]]`
>
>输出：`4`
**提示：**
- `3 <= rampart.length <= 10^4`
- `rampart[i].length == 2`
- `0 <= rampart[i][0] < rampart[i][1] <= rampart[i+1][0] <= 10^8`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

While exploring among the expedition camps, Xiao Kou accidentally discovered the ruins of a city wall. During exploration, he unexpectedly encountered a migrating herd of beasts charging straight at him. In a hurry, Xiao Kou blew his blue flute, and as the sound rang out, the ruined walls began to expand horizontally.

Given `rampart[i] = [x, y]` representing the initial interval of the i-th segment of wall. When the wall expands, the following rules apply:
- All walls expand by the **same** length simultaneously;
- Each wall may expand to the left, to the right, or in both directions.

To ensure his safety, Xiao Kou wants the walls to expand as much as possible while ensuring **no two walls overlap**. Return the **maximum** length that each wall can expand.

**Note:**
- Initially all walls are non-overlapping, and elements of `rampart` are in ascending order;
- The walls at both ends can expand infinitely outward.

**Example 1:**
> Input: `rampart = [[0,3],[4,5],[7,9]]`
> Output: `3`
> Explanation:
> - `rampart[0]` expands 3 units to the left;
> - `rampart[2]` expands 3 units to the right;
> - `rampart[1]` expands 1 unit to the left and 2 units to the right.
> No better scheme exists, return 3.

**Example 2:**
> Input: `rampart = [[1,2],[5,8],[11,15],[18,25]]`
> Output: `4`

**Constraints:**
- `3 <= rampart.length <= 10^4`
- `rampart[i].length == 2`
- `0 <= rampart[i][0] < rampart[i][1] <= rampart[i+1][0] <= 10^8`

---

## Approach

Let the common expansion length be `L`. Since the first wall can always absorb its whole share `L` to the left (infinite space) and the last wall to the right, the real bottleneck is the **middle walls** (indices `1 .. n-2`), which must place their expansion into the gaps between neighboring walls.

Let `gap[i] = rampart[i+1][0] - rampart[i][1]` be the free space between wall `i` and wall `i+1`. A feasible scheme must satisfy, for every middle wall `i`, that the amount it pushes into the left gap plus the amount it pushes into the right gap equals exactly `L`.

**Binary search on `L`:**
- `lo = 0`, `hi = sum(gaps)` (an obvious upper bound: no wall can exceed the total free space).
- `can(L)`: scan the middle walls left to right. Keep a `leftSpace` accumulator = how much of the current gap has already been consumed by the previous middle wall's rightward expansion. Wall `i` first uses as much as possible from its left gap (`gap[i-1] - leftSpace`), pushing any remainder `L - availableLeft` into the right gap. If that remainder exceeds `gap[i]` (the full right gap), the layout is infeasible.
  - Greedy is optimal here: taking the maximum possible from the left gap never hurts — it only reduces what must go rightward into the future.
- Return the largest feasible `L`.

Complexity: `O(n log(sumGap))` time, `O(1)` space.
