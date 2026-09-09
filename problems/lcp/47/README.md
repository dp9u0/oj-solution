# [LCP 47] 入场安检

## Description


```md
https://leetcode.cn/problems/oPs9Bm/description/
* algorithms
* Hard (50.55%)
* Likes:    26
* Dislikes: -
* Testcase Example:  '[2,2,3]\n2'
「力扣挑战赛」 的入场仪式马上就要开始了，由于安保工作的需要，设置了可容纳人数总和为 `M` 的 `N` 个安检室，`capacities[i]` 记录第 `i` 个安检室可容纳人数。安检室拥有两种类型：
- 先进先出：在安检室中的所有观众中，最早进入安检室的观众最先离开
- 后进先出：在安检室中的所有观众中，最晚进入安检室的观众最先离开
![c24754f1a5ff56989340ba5004dc5eda.gif](https://pic.leetcode.cn/1628843202-cdFPSt-c24754f1a5ff56989340ba5004dc5eda.gif)
恰好 `M+1` 位入场的观众（编号从 0 开始）需要排队**依次**入场安检， 入场安检的规则如下：
- 观众需要先进入编号 `0` 的安检室
- 当观众将进入编号 `i` 的安检室时（`0 <= i < N`)，
- 若安检室未到达可容纳人数上限，该观众可直接进入；
- 若安检室已到达可容纳人数上限，在该观众进入安检室之前需根据当前安检室类型选择一位观众离开后才能进入；
- 当观众离开编号 `i` 的安检室时 （`0 <= i < N-1`)，将进入编号 `i+1` 的安检室接受安检。
若可以任意设定每个安检室的类型，请问有多少种设定安检室类型的方案可以使得编号 `k` 的观众第一个通过最后一个安检室入场。
**注意：**
- 观众不可主动离开安检室，只有当安检室容纳人数达到上限，且又有新观众需要进入时，才可根据安检室的类型选择一位观众离开；
- 由于方案数可能过大，请将答案对 `1000000007` 取模后返回。
**示例 1：**
> 输入：`capacities = [2,2,3], k = 2`
>
> 输出：`2`
> 解释：
> 存在两种设定的 `2` 种方案：
> - 方案 1：将编号为 `0` 、`1` 的实验室设置为 **后进先出** 的类型，编号为 `2` 的实验室设置为 **先进先出** 的类型；
> - 方案 2：将编号为 `0` 、`1` 的实验室设置为 **先进先出** 的类型，编号为 `2` 的实验室设置为 **后进先出** 的类型。
>
> 以下是方案 1 的示意图：
>![c60e38199a225ad62f13b954872edf9b.gif](https://pic.leetcode.cn/1628841618-bFKsnt-c60e38199a225ad62f13b954872edf9b.gif)
**示例 2：**
> 输入：`capacities = [3,3], k = 3`
>
> 输出：`0`
**示例 3：**
> 输入：`capacities = [4,3,2,2], k = 6`
>
> 输出：`2`
**提示:**
+ `1 <= capacities.length <= 200`
+ `1 <= capacities[i] <= 200`
+ `0 <= k <= sum(capacities)`

```

## Solution

[SourceCode](./solution.js)

## English Translation

**LCP 47. Security Check**

For the LeetCode challenge opening ceremony there are `N` security rooms with total capacity `M`, `capacities[i]` being room `i`'s capacity. Each room is one of two types:

- **FIFO**: among visitors in the room, the earliest to enter is the first to leave;
- **LIFO**: the latest to enter is the first to leave.

Exactly `M+1` visitors (numbered from 0) queue up and enter in order:

- every visitor first enters room `0`;
- entering room `i` (`0 <= i < N`): if the room is not full, the visitor enters directly; if it is full, one visitor must leave (chosen by the room type) before entering;
- a visitor leaving room `i` (`0 <= i < N-1`) enters room `i+1`.

Visitors never leave voluntarily. Count the type assignments for which visitor `k` is the first to pass through the last room, modulo `1e9+7`.

Constraints: `1 <= N <= 200`, `1 <= capacities[i] <= 200`, `0 <= k <= sum(capacities)`.

## Approach

Analyze what each room does to the stream:

- A **LIFO** room of capacity `c` evicts, in order, its arrivals from index `c-1` onward (arrival order preserved); its first `c-1` arrivals are stuck forever.
- A **FIFO** room evicts its arrivals in exact order; only the *last* `c` arrivals remain when the flow ends.

So every room's departure sequence is an order-preserving (suffix) subsequence of its arrival sequence, and arrival sequences are always increasing visitor ids. Only LIFO rooms remove *early* visitors — each LIFO room `j` removes `c_j - 1` consecutive early visitors. Hence the arrival sequence at the last room begins `A[t] = t + R` where `R = Σ (c_j - 1)` over LIFO rooms `j < N-1`.

Counting the flow shows the last room receives exactly `c_{N-1} + 1` visitors and evicts exactly one — when the final visitor `M` enters room 0 — and that visitor is:

- last room FIFO: `A[0] = R`
- last room LIFO: `A[c_{N-1} - 1] = R + c_{N-1} - 1`

So the answer is a subset-sum count over the multiset `{c_j - 1 : j < N-1}`: the number of subsets summing to `k` (FIFO last room) plus the number summing to `k - (c_{N-1} - 1)` (LIFO last room), mod `1e9+7`. Standard 0/1 knapsack, `O(N · k)`.

Verified against a direct simulation of all `2^N` type assignments on randomized small inputs.
