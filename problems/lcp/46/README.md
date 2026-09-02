# [LCP 46] 志愿者调配

## Description


```md
https://leetcode.cn/problems/05ZEDJ/description/
* algorithms
* Medium (48.19%)
* Likes:    13
* Dislikes: -
* Testcase Example:  '[1,16]\n21\n[[0,1],[1,2]]\n[[2,1],[1,0],[3,0]]'
「力扣挑战赛」有 `n` 个比赛场馆（场馆编号从 `0` 开始），场馆之间的通道分布情况记录于二维数组 `edges` 中，`edges[i]= [x, y]` 表示第 `i` 条通道连接场馆 `x` 和场馆 `y`(即两个场馆相邻)。初始每个场馆中都有一定人数的志愿者（不同场馆人数可能不同），后续 `m` 天每天均会根据赛事热度进行志愿者人数调配。调配方案分为如下三种：
1. 将编号为 `idx` 的场馆内的志愿者人数减半；
2. 将编号为 `idx` 的场馆相邻的场馆的志愿者人数都加上编号为 `idx` 的场馆的志愿者人数；
3. 将编号为 `idx` 的场馆相邻的场馆的志愿者人数都减去编号为 `idx` 的场馆的志愿者人数。
所有的调配信息记录于数组 `plans` 中，`plans[i] = [num,idx]` 表示第 `i` 天对编号 `idx` 的场馆执行了第 `num` 种调配方案。
在比赛结束后对调配方案进行复盘时，不慎将第 `0` 个场馆的**最终**志愿者人数丢失，只保留了**初始**所有场馆的志愿者总人数 `totalNum` ，以及记录了第 `1 ~ n-1` 个场馆的**最终**志愿者人数的一维数组 `finalCnt`。请你根据现有的信息求出初始每个场馆的志愿者人数，并按场馆编号顺序返回志愿者人数列表。
**注意：**
- 测试数据保证当某场馆进行第一种调配时，该场馆的志愿者人数一定为偶数；
- 测试数据保证当某场馆进行第三种调配时，该场馆的相邻场馆志愿者人数不为负数；
- 测试数据保证比赛开始时每个场馆的志愿者人数都不超过 `10^9`；
- 测试数据保证给定的场馆间的道路分布情况中不会出现自环、重边的情况。
**示例 1：**
>![image.png](https://pic.leetcode.cn/1630061228-gnZsOz-image.png)
> 输入：
>`finalCnt = [1,16], totalNum = 21, edges = [[0,1],[1,2]], plans = [[2,1],[1,0],[3,0]]`
>
> 输出：`[5,7,9]`
>
> 解释：
> ![image.png](https://pic.leetcode.cn/1630061300-WuVkeF-image.png){:height=200}
**示例 2 ：**
> 输入：
>`finalCnt = [4,13,4,3,8], totalNum = 54, edges = [[0,3],[1,3],[4,3],[2,3],[2,5]], plans = [[1,1],[3,3],[2,5],[1,0]]`
>
> 输出：`[10,16,9,4,7,8]`
**提示：**
- `2 <= n <= 5*10^4`
- `1 <= edges.length <= min((n * (n - 1)) / 2, 5*10^4)`
- `0 <= edges[i][0], edges[i][1] < n`
- `1 <= plans.length <= 10`
- `1 <= plans[i][0] <=3`
- `0 <= plans[i][1] < n`
- `finalCnt.length = n-1`
- `0 <= finalCnt[i] < 10^9`
- `0 <= totalNum < 5*10^13`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

The "力扣挑战赛" has `n` venues (0..n-1). `edges` records corridors between venues (`edges[i]=[x,y]` means x and y adjacent). Each venue initially has some volunteers. Over `m` days, volunteer counts are adjusted based on event popularity, with three plan types applied to venue `idx`:
1. Halve the number of volunteers at venue `idx`;
2. Add `volunteers[idx]` to each venue adjacent to `idx`;
3. Subtract `volunteers[idx]` from each venue adjacent to `idx`.

`plans[i] = [num, idx]` records day i's operation. After the event, the **final** count of venue 0 was lost; only the total initial volunteer count `totalNum` and the finals of venues `1..n-1` (`finalCnt`) remain. Reconstruct the **initial** volunteer counts.

**Guarantees:** type-1 halving only when even; type-3 never makes neighbors negative; initial counts ≤ 1e9; no self-loops/duplicate edges.

**Example 1:** `finalCnt=[1,16], totalNum=21, edges=[[0,1],[1,2]], plans=[[2,1],[1,0],[3,0]]` → `[5,7,9]`
**Example 2:** → `[10,16,9,4,7,8]`

**Constraints:** `n <= 5*10^4`, `edges.length <= 5*10^4`, `plans.length <= 10`.

---

## Approach

All operations are **linear**, so every venue count is an affine function of the single unknown `X = initial[0]`. Work **backward** from the final state to the initial state:

- Represent value_i = `(p_i * X + q_i) / 2^(e_i)` (denominator is a power of 2, since only halvings produce it). Final known counts are `(0*X + cnt)/1`; venue 0 is `(1*X + 0)/1`.
- Replay plans **in reverse**, undoing each:
  - type 1: value doubled → exponent `e` decreases by 1;
  - type 2: undo addition → neighbors subtract `value[idx]`;
  - type 3: undo subtraction → neighbors add `value[idx]`.
- After full reversal, each `initial_i = (p_i X + q_i)/2^(e_i)`. Summing all over venues equals `totalNum`. Align denominators to `2^K` (K = max e) giving a linear equation `A·X + B = totalNum·2^K`, solve for `X`.
- Substitute back to get each initial count.

Complexity: `O((n + E)·plans)`.
