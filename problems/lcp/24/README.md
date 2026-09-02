# [LCP 24] 数字游戏

## Description


```md
https://leetcode.cn/problems/5TxKeK/description/
* algorithms
* Hard (58.83%)
* Likes:    92
* Dislikes: -
* Testcase Example:  '[3,4,5,1,6,7]'
小扣在秋日市集入口处发现了一个数字游戏。主办方共有 `N` 个计数器，计数器编号为 `0 ~ N-1`。每个计数器上分别显示了一个数字，小扣按计数器编号升序将所显示的数字记于数组 `nums`。每个计数器上有两个按钮，分别可以实现将显示数字加一或减一。小扣每一次操作可以选择一个计数器，按下加一或减一按钮。
主办方请小扣回答出一个长度为 `N` 的数组，第 `i` 个元素(0 <= i < N)表示将 `0~i` 号计数器 **初始** 所示数字操作成满足所有条件 `nums[a]+1 == nums[a+1],(0 <= a < i)` 的最小操作数。回答正确方可进入秋日市集。
由于答案可能很大，请将每个最小操作数对 `1,000,000,007` 取余。
**示例 1：**
>输入：`nums = [3,4,5,1,6,7]`
>
>输出：`[0,0,0,5,6,7]`
>
>解释：
>i = 0，[3] 无需操作
>i = 1，[3,4] 无需操作；
>i = 2，[3,4,5] 无需操作；
>i = 3，将 [3,4,5,1] 操作成 [3,4,5,6], 最少 5 次操作；
>i = 4，将 [3,4,5,1,6] 操作成 [3,4,5,6,7], 最少 6 次操作；
>i = 5，将 [3,4,5,1,6,7] 操作成 [3,4,5,6,7,8]，最少 7 次操作；
>返回 [0,0,0,5,6,7]。
**示例 2：**
>输入：`nums = [1,2,3,4,5]`
>
>输出：`[0,0,0,0,0]`
>
>解释：对于任意计数器编号 i 都无需操作。
**示例 3：**
>输入：`nums = [1,1,1,2,3,4]`
>
>输出：`[0,1,2,3,3,3]`
>
>解释：
>i = 0，无需操作；
>i = 1，将 [1,1] 操作成 [1,2] 或 [0,1] 最少 1 次操作；
>i = 2，将 [1,1,1] 操作成 [1,2,3] 或 [0,1,2]，最少 2 次操作；
>i = 3，将 [1,1,1,2] 操作成 [1,2,3,4] 或 [0,1,2,3]，最少 3 次操作；
>i = 4，将 [1,1,1,2,3] 操作成 [-1,0,1,2,3]，最少 3 次操作；
>i = 5，将 [1,1,1,2,3,4] 操作成 [-1,0,1,2,3,4]，最少 3 次操作；
>返回 [0,1,2,3,3,3]。
**提示：**
- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^3`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

At the autumn fair entrance Xiao Kou found a number game. There are `N` counters (0..N-1), each showing a number, recorded in `nums`. Each counter has +1/−1 buttons. Each operation picks one counter and presses +1 or −1.

For each `i`, answer the minimum operations to turn the **initial** numbers of counters `0..i` into a sequence satisfying `nums[a]+1 == nums[a+1]` for all `0 <= a < i`. Return the array of those minima (mod 1e9+7).

**Example 1:** `nums=[3,4,5,1,6,7]` → `[0,0,0,5,6,7]`
**Example 2:** `[1,2,3,4,5]` → `[0,0,0,0,0]`
**Example 3:** `[1,1,1,2,3,4]` → `[0,1,2,3,3,3]`

**Constraints:** `1 <= nums.length <= 10^5`, `1 <= nums[i] <= 10^3`.

---

## Approach

Let `b[i] = nums[i] - i`. The target condition becomes making all `b[0..i]` **equal** to some value `t`, at cost `Σ|b[j] - t|`. The minimum over `t` is achieved at the **median** of the prefix.

Maintain the running multiset of `b` with **two heaps**:
- A **max-heap** `low` for the lower half, and a **min-heap** `high` for the upper half, keeping sizes balanced (`low.size` = `high.size` or `high.size + 1`).
- Track `sumLow`, `sumHigh`.
- When `low` has `k` elements and `high` has `m`, the median `t` = `low.top` (odd count) or either middle. Then `Σ|b[j]-t|` is computed from `(t*low.size - sumLow) + (sumHigh - t*high.size)` for the chosen `t`.

Standard two-heap maintenance keeps total cost correct; handle even-length prefixes by picking the median that yields the min (both middles give same min for absolute deviation).

Complexity: `O(n log n)`.
