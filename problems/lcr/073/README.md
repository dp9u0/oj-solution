# [LCR 073] 爱吃香蕉的狒狒

## Description


```md
https://leetcode.cn/problems/nZZqjQ/description/
* algorithms
* Medium (53.39%)
* Likes:    82
* Dislikes: -
* Testcase Example:  '[3,6,7,11]\n8'
狒狒喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。
狒狒可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉，下一个小时才会开始吃另一堆的香蕉。
狒狒喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。
返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

示例 1：
输入: piles = [3,6,7,11], H = 8
输出: 4
示例 2：
输入: piles = [30,11,23,4,20], H = 5
输出: 30
示例 3：
输入: piles = [30,11,23,4,20], H = 6
输出: 23

提示：
1 <= piles.length <= 10^4
piles.length <= H <= 10^9
1 <= piles[i] <= 10^9

注意：本题与主站 875 题相同： https://leetcode.cn/problems/koko-eating-bananas/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Koko loves bananas. There are `N` piles of bananas; the i-th pile has `piles[i]` bananas. The guards have gone and will return in `H` hours.

Koko can decide her eating speed `K` (bananas per hour). Each hour, she chooses one pile and eats `K` bananas from it. If the pile has fewer than `K` bananas, she eats all of that pile and eats no more that hour (the next pile starts the next hour).

Koko likes to eat slowly but still wants to finish all bananas before the guards return.

Return the **minimum integer speed `K`** such that she can eat all bananas within `H` hours.

**Example 1:** Input `piles = [3,6,7,11], H = 8` → Output `4`
**Example 2:** Input `piles = [30,11,23,4,20], H = 5` → Output `30`
**Example 3:** Input `piles = [30,11,23,4,20], H = 6` → Output `23`

**Constraints:** `1 <= piles.length <= 10^4`, `piles.length <= H <= 10^9`, `1 <= piles[i] <= 10^9`.

Note: same as LeetCode 875.

---

## Approach

**Binary search on the speed `K`.**

- For a fixed `K`, the time to empty pile `i` is `ceil(piles[i] / K)` hours. Total hours must be `<= H`.
- `K` feasible range is `[1, max(piles)]` (speed `max` guarantees one pile per hour max). The predicate `canFinish(K)` is monotone: larger `K` never needs more hours, so binary search for the smallest feasible `K`.

Complexity: `O(n log(maxPile))` time, `O(1)` space.
