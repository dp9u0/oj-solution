# [LCP 59] 搭桥过河

## Description


```md
https://leetcode.cn/problems/NfY1m5/description/
* algorithms
* Hard (28.54%)
* Likes:    14
* Dislikes: -
* Testcase Example:  '10\n[[1,2],[4,7],[8,9]]'
欢迎各位勇者来到力扣城，本次试炼主题为「搭桥过河」。
勇者面前有一段长度为 `num` 的河流，河流可以划分为若干河道。每条河道上恰有一块浮木，`wood[i]` 记录了第 `i` 条河道上的浮木初始的覆盖范围。
- 当且仅当浮木与相邻河道的浮木覆盖范围有重叠时，勇者才可以在两条浮木间移动
- 勇者 **仅能在岸上** 通过花费一点「自然之力」，使任意一条浮木沿着河流移动一个单位距离
请问勇者跨越这条河流，最少需要花费多少「自然之力」。
**示例 1：**
> 输入： `num = 10, wood = [[1,2],[4,7],[8,9]]`
> 输出： `3`
> 解释：如下图所示，
> 将 [1,2] 浮木移动至 [3,4]，花费 2「自然之力」，
> 将 [8,9] 浮木移动至 [7,8]，花费 1「自然之力」，
> 此时勇者可以顺着 [3,4]->[4,7]->[7,8] 跨越河流，
> 因此，勇者最少需要花费 3 点「自然之力」跨越这条河流
![wood (2).gif](https://pic.leetcode.cn/1648196478-ophADL-wood \(2\).gif){:width=650px}
**示例 2：**
> 输入： `num = 10, wood = [[1,5],[1,1],[10,10],[6,7],[7,8]]`
> 输出： `10`
> 解释：
> 将 [1,5] 浮木移动至 [2,6]，花费 1「自然之力」，
> 将 [1,1] 浮木移动至 [6,6]，花费 5「自然之力」，
> 将 [10,10] 浮木移动至 [6,6]，花费 4「自然之力」，
> 此时勇者可以顺着 [2,6]->[6,6]->[6,6]->[6,7]->[7,8] 跨越河流，
> 因此，勇者最少需要花费 10 点「自然之力」跨越这条河流
**示例 3：**
> 输入： `num = 5, wood = [[1,2],[2,4]]`
> 输出： `0`
> 解释：勇者不需要移动浮木，仍可以跨越这条河流
**提示:**
- `1 <= num <= 10^9`
- `1 <= wood.length <= 10^5`
- `wood[i].length == 2`
- `1 <= wood[i][0] <= wood[i][1] <= num`

```

## Solution

[SourceCode](./solution.js)

## English Translation

**LCP 59. Build Bridge**

A river of length `num` is divided into channels; channel `i` has one log initially covering `[wood[i][0], wood[i][1]]`. The hero may walk between logs of adjacent channels iff their coverage overlaps (touching counts). From the shore, spending one unit of "nature force" moves any log along the river by one unit. Return the minimum force needed so the hero can cross the whole river via the chain of logs.

Example 1: `num = 10, wood = [[1,2],[4,7],[8,9]]` → `3` (move log 0 to `[3,4]`, log 2 to `[7,8]`).

Constraints: `1 <= num <= 1e9`, `1 <= wood.length <= 1e5`, `1 <= wood[i][0] <= wood[i][1] <= num`.

## Approach

Let `d_i` be the shift of log `i` (cost `|d_i|` each). Adjacent channels `i, i+1` are connected iff their coverages overlap, which is **two-sided** (logs may be interleaved arbitrarily):

```
l_{i+1} - r_i = g_i  <=  d_i - d_{i+1}  <=  h_i = r_{i+1} - l_i
```

Minimize `Σ|d_i|` under this chain of two-sided difference constraints — **slope trick**.

Let `f_i(x)` = min cost of logs `0..i` given `d_i = x` (convex piecewise linear). Transition:

```
f_{i+1}(y) = |y| + min_{x in [y + g, y + h]} f_i(x)
```

In the two-heap representation `(minVal, L, R)` with `f(x) = minVal + Σ_{l∈L} max(0, l−x) + Σ_{r∈R} max(0, x−r)`, the sliding-window min shifts the window over the convex function:

- shift every `L` breakpoint by `−h` and every `R` breakpoint by `−g` (lazy offsets `offL`, `offR`) — the window's left end governs the right slope, its right end the left slope;
- add `|y|`: push `0` into both heaps;
- rebalance while `max(L) > min(R)`: pop both tops `l > r`, `minVal += l − r`, swap them (identity `max(0,l−y) + max(0,y−r) = (l−r) + max(0,r−y) + max(0,y−l)`).

The answer is `minVal` after all gaps. `n = 1` → `0`.

Verified against exhaustive shift enumeration on small random instances (400 cases).

Time: `O(n log n)`, Space: `O(n)`.
