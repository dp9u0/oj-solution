# [LCP 65] 舒适的湿度

## Description


```md
https://leetcode.cn/problems/3aqs1c/description/
* algorithms
* Hard (50.50%)
* Likes:    15
* Dislikes: -
* Testcase Example:  '[5,3,7]'
力扣嘉年华为了确保更舒适的游览环境条件，在会场的各处设置了湿度调节装置，这些调节装置受控于总控室中的一台控制器。
控制器中已经预设了一些调节指令，整数数组`operate[i]` 表示第 `i` 条指令增加空气湿度的大小。现在你可以将任意数量的指令修改为降低湿度（变化的数值不变），以确保湿度尽可能的适宜：
- 控制器会选择 **一段连续的指令** ，从而进行湿度调节的操作；
- 这段指令最终对湿度影响的绝对值，即为当前操作的「不适宜度」
- 在控制器所有可能的操作中，**最大** 的「不适宜度」即为「整体不适宜度」
请返回在所有修改指令的方案中，可以得到的 **最小** 「整体不适宜度」。
**示例 1：**
> 输入：`operate = [5,3,7]`
>
> 输出：`8`
>
> 解释：对于方案 `2` 的 `[5,3,-7]`
>操作指令 `[5],[3],[-7]` 的「不适宜度」分别为 `5,3,7`
>操作指令 `[5,3],[3,-7]` 的「不适宜度」分别为 `8,4`
>操作指令 `[5,3,-7]` 的「不适宜度」为 `1`，
>因此对于方案 `[5,3,-7]`的「整体不适宜度」为 `8`，其余方案的「整体不适宜度」均不小于 `8`，如下表所示：
![image.png](https://pic.leetcode.cn/1663902759-dgDCxn-image.png){:width=650px}
**示例 2：**
> 输入：`operate = [20,10]`
>
> 输出：`20`
**提示：**
- `1 <= operate.length <= 1000`
- `1 <= operate[i] <= 1000`

```

## English Description

The LeetCode Carnival has installed humidity control devices around the venue, all controlled by a central controller.

The controller has preset adjustment instructions: integer array `operate[i]` is the amount by which the `i`-th instruction **increases** humidity. You may modify any number of instructions to instead **decrease** humidity (same magnitude), to make the humidity as comfortable as possible:

- The controller picks a **contiguous segment** of instructions to perform the adjustment;
- The absolute value of the segment's net humidity effect is its "discomfort";
- Among all possible segments, the **maximum** discomfort is the "overall discomfort".

Return the **minimum** achievable "overall discomfort" over all ways of modifying instructions.

**Example 1:**
>Input: `operate = [5,3,7]`
>Output: `8`
>Explanation: e.g. for scheme `[5,3,-7]`, single ops give `5,3,7`; pairs give `8,4`; the whole segment gives `1`. The overall discomfort is `8`, and no scheme does better.

**Example 2:**
>Input: `operate = [20,10]`
>Output: `20`

**Constraints:**
- `1 <= operate.length <= 1000`
- `1 <= operate[i] <= 1000`

## Approach

Assign each element a sign `c[i] ∈ {+1, -1}`, so `b[i] = c[i] * operate[i]`. Any segment sum is `S[j] - S[i]` where `S` is the prefix-sum array (with `S[0] = 0`). Therefore:

```
overall discomfort = max over segments |sum| = max(S) - min(S)
```

So we need to choose signs to **minimize the range of the prefix-sum walk (including the start 0)**.

**Binary search + bitset check:**
- Binary search the answer `X ∈ [0, sum(operate)]`.
- To check whether some sign assignment keeps all prefix sums within a window of width `X` (the window must contain 0, so the walk's relative position can start anywhere in `[0, X]`), run a DP over reachable relative positions `[0, X]`:
  - Start with all positions `0..X` reachable.
  - For each `v`: `reachable = ((reachable << v) | (reachable >> v)) & mask`.
  - Feasible iff `reachable` is non-empty at the end.
- Feasibility is monotone in `X`, so binary search finds the minimum.

The reachable set is encoded as a BigInt bitset: shifting/OR-ing a `~10^6`-bit integer per element is cheap.

**Complexity:** O(n · sum/64 · log sum) bit-ops with BigInt — fast for n, sum ≤ 10^6. Space O(sum/64).

## Solution

[SourceCode](./solution.js)
