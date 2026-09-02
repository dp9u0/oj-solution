# [LCP 20] 快速公交

## Description


```md
https://leetcode.cn/problems/meChtZ/description/
* algorithms
* Hard (37.29%)
* Likes:    47
* Dislikes: -
* Testcase Example:  '31\n5\n3\n[6]\n[10]'
小扣打算去秋日市集，由于游客较多，小扣的移动速度受到了人流影响：
- 小扣从 `x` 号站点移动至 `x + 1` 号站点需要花费的时间为 `inc`；
- 小扣从 `x` 号站点移动至 `x - 1` 号站点需要花费的时间为 `dec`。
现有 `m` 辆公交车，编号为 `0` 到 `m-1`。小扣也可以通过搭乘编号为 `i` 的公交车，从 `x` 号站点移动至 `jump[i]*x` 号站点，耗时仅为 `cost[i]`。小扣可以搭乘任意编号的公交车且搭乘公交次数不限。
假定小扣起始站点记作 `0`，秋日市集站点记作 `target`，请返回小扣抵达秋日市集最少需要花费多少时间。由于数字较大，最终答案需要对 1000000007 (1e9 + 7) 取模。
注意：小扣可在移动过程中到达编号大于 `target` 的站点。
**示例 1：**
>输入：`target = 31, inc =  5, dec = 3, jump = [6], cost = [10]`
>
>输出：`33`
>
>解释：
>小扣步行至 1 号站点，花费时间为 5；
>小扣从 1 号站台搭乘 0 号公交至 6 * 1 = 6 站台，花费时间为 10；
>小扣从 6 号站台步行至 5 号站台，花费时间为 3；
>小扣从 5 号站台搭乘 0 号公交至 6 * 5 = 30 站台，花费时间为 10；
>小扣从 30 号站台步行至 31 号站台，花费时间为 5；
>最终小扣花费总时间为 33。
**示例 2：**
>输入：`target = 612, inc =  4, dec = 5, jump = [3,6,8,11,5,10,4], cost = [4,7,6,3,7,6,4]`
>
>输出：`26`
>
>解释：
>小扣步行至 1 号站点，花费时间为 4；
>小扣从 1 号站台搭乘 0 号公交至 3 * 1 = 3 站台，花费时间为 4；
>小扣从 3 号站台搭乘 3 号公交至 11 * 3 = 33 站台，花费时间为 3；
>小扣从 33 号站台步行至 34 站台，花费时间为 4；
>小扣从 34 号站台搭乘 0 号公交至 3 * 34 = 102 站台，花费时间为 4；
>小扣从 102 号站台搭乘 1 号公交至 6 * 102 = 612 站台，花费时间为 7；
>最终小扣花费总时间为 26。
**提示：**
- `1 <= target <= 10^9`
- `1 <= jump.length, cost.length <= 10`
- `2 <= jump[i] <= 10^6`
- `1 <= inc, dec, cost[i] <= 10^6`

```

## English Description

Xiaokou is heading to the autumn market. Because of the crowd, walking speed is affected:

- Walking from station `x` to station `x + 1` takes `inc` time.
- Walking from station `x` to station `x - 1` takes `dec` time.

There are `m` buses, numbered `0` to `m-1`. By taking bus `i`, Xiaokou moves from station `x` to station `jump[i] * x`, costing `cost[i]` time. Any bus may be taken any number of times.

Xiaokou starts at station `0` and wants to reach station `target`. Return the minimum total time needed. Since the value may be large, return the answer modulo `1e9 + 7`.

**Note:** Xiaokou may pass through stations greater than `target` along the way.

**Example 1:**

> Input: `target = 31, inc = 5, dec = 3, jump = [6], cost = [10]`
>
> Output: `33`

**Example 2:**

> Input: `target = 612, inc = 4, dec = 5, jump = [3,6,8,11,5,10,4], cost = [4,7,6,3,7,6,4]`
>
> Output: `26`

**Constraints:**

- `1 <= target <= 10^9`
- `1 <= jump.length, cost.length <= 10`
- `2 <= jump[i] <= 10^6`
- `1 <= inc, dec, cost[i] <= 10^6`

## Approach

**Reverse the direction.** Instead of walking/bussing forward from `0` to `target`, ask for the cheapest way to get *back* from `target` to `0`. The reversed graph has exactly the same edges, so the minimum is unchanged:

- reversed walk `x -> x-1` corresponds to a forward `x-1 -> x` step → costs `inc`;
- reversed walk `x -> x+1` corresponds to a forward `x+1 -> x` step → costs `dec`;
- reversed bus `x -> x / jump[i]` (only valid when divisible) corresponds to a forward `x / jump[i] -> x` ride → costs `cost[i]`.

**Memoized recursion on `x`.** Let `f(x)` = minimum cost to reach `0` from `x`. Between two bus rides the optimal walking is monotone (zigzagging between neighboring multiples only wastes distance), so for each bus `i` we only need to try aligning `x` to the **nearest lower and nearest upper multiple** of `jump[i]`, then divide:

- if `x % jump[i] === 0`, ride directly: `cost[i] + f(x / jump[i])`;
- otherwise walk `r` steps down to the lower multiple, or `jump[i] - r` steps up to the upper multiple, then ride. The walk-down steps cost `inc` each; walk-up steps cost `dec` each.

Each recursive call at least halves `x` (only quotients `q < x` are followed), so the state space is `O(m * log2(target))`. This comfortably fits `target <= 1e9`.

The raw values can reach `~1e18` (`10^9 * 10^9`), so all arithmetic uses `BigInt`; the final answer is reduced modulo `1e9 + 7`. Walking straight down (`x * inc`) is always kept as a fallback candidate.

**Complexity:** O(m · log target) time, O(log target) memo space.

## Solution

[SourceCode](./solution.js)
