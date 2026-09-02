# [LCP 23] 魔术排列

## Description


```md
https://leetcode.cn/problems/er94lq/description/
* algorithms
* Medium (38.53%)
* Likes:    25
* Dislikes: -
* Testcase Example:  '[2,4,3,1,5]'
秋日市集上，魔术师邀请小扣与他互动。魔术师的道具为分别写有数字 `1~N` 的 `N` 张卡牌，然后请小扣思考一个 `N` 张卡牌的排列 `target`。
魔术师的目标是找到一个数字 k（k >= 1），使得初始排列顺序为 `1~N` 的卡牌经过特殊的洗牌方式最终变成小扣所想的排列 `target`，特殊的洗牌方式为：
- 第一步，魔术师将当前位于 **偶数位置** 的卡牌（下标自 1 开始），保持 **当前排列顺序** 放在位于 **奇数位置** 的卡牌之前。例如：将当前排列 [1,2,3,4,5] 位于偶数位置的 [2,4] 置于奇数位置的 [1,3,5] 前，排列变为 [2,4,1,3,5]；
- 第二步，若当前卡牌数量小于等于 `k`，则魔术师按排列顺序取走全部卡牌；若当前卡牌数量大于 `k`，则取走前 `k` 张卡牌，剩余卡牌继续重复这两个步骤，直至所有卡牌全部被取走；
卡牌按照魔术师取走顺序构成的新排列为「魔术取数排列」，请返回是否存在这个数字 k 使得「魔术取数排列」恰好就是 `target`，从而让小扣感到大吃一惊。
**示例 1：**
>输入：`target = [2,4,3,1,5]`
>
>输出：`true`
>
>解释：排列 target 长度为 5，初始排列为：1,2,3,4,5。我们选择 k = 2：
>第一次：将当前排列 [1,2,3,4,5] 位于偶数位置的 [2,4] 置于奇数位置的 [1,3,5] 前，排列变为 [2,4,1,3,5]。取走前 2 张卡牌 2,4，剩余 [1,3,5]；
>第二次：将当前排列 [1,3,5] 位于偶数位置的 [3] 置于奇数位置的 [1,5] 前，排列变为 [3,1,5]。取走前 2 张 3,1，剩余 [5]；
>第三次：当前排列为 [5]，全部取出。
>最后，数字按照取出顺序构成的「魔术取数排列」2,4,3,1,5 恰好为 target。
**示例 2：**
>输入：`target = [5,4,3,2,1]`
>
>输出：`false`
>
>解释：无法找到一个数字 k 可以使「魔术取数排列」恰好为 target。
**提示：**
- `1 <= target.length = N <= 5000`
- 题目保证 `target` 是 `1~N` 的一个排列。

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

A magician has N cards numbered `1..N`. A spectator thinks of a permutation `target` of `1..N`. The magician wants a number `k >= 1` such that starting from `[1..N]`, a special shuffle eventually draws the cards producing exactly `target` (the "magic draw order").

The shuffle at each round on the current array:
1. Take cards at **even positions** (1-based) first, keeping order, placing them before the odd-position cards. E.g. `[1,2,3,4,5]` → evens `[2,4]` then odds `[1,3,5]` → `[2,4,1,3,5]`.
2. If remaining count `<= k`, take all; else take the first `k` cards and repeat steps with the rest.

Return whether such `k` exists.

**Example 1:** `[2,4,3,1,5]` → `true` (k=2)
**Example 2:** `[5,4,3,2,1]` → `false`

**Constraints:** `1 <= N = target.length <= 5000`.

---

## Approach

Try every `k` from `1` to `N` (k > N behaves like N, taking everything after one shuffle):

- Start with `[1..N]`. While cards remain: apply the even-first stable shuffle to the current list, take `min(k, len)` cards appending to the drawn sequence, continue with the rest.
- If the drawn sequence equals `target`, return true.

Complexity: `O(N²)` worst case (N ≤ 5000 → fine).
