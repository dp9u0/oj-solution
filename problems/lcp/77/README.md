# [LCP 77] 符文储备

## Description


```md
https://leetcode.cn/problems/W2ZX4X/description/
* algorithms
* Easy (69.30%)
* Likes:    5
* Dislikes: -
* Testcase Example:  '[1,3,5,4,1,7]'
远征队在出发前需要携带一些「符文」，作为后续的冒险储备。`runes[i]` 表示第 `i` 枚符文的魔力值。
他们将从中选取若干符文进行携带，并对这些符文进行重新排列，以确保任意相邻的两块符文之间的魔力值相差不超过 `1`。
请返回他们能够携带的符文 **最大数量**。
**示例 1：**
>输入：`runes = [1,3,5,4,1,7]`
>
>输出：`3`
>
>解释：最佳的选择方案为[3,5,4]
>将其排列为 [3,4,5] 后，任意相邻的两块符文魔力值均不超过 `1`，携带数量为 `3`
>其他满足条件的方案为 [1,1] 和 [7]，数量均小于 3。
>因此返回可携带的最大数量 `3`。
**示例 2：**
>输入：`runes = [1,1,3,3,2,4]`
>
>输出：`6`
>
>解释：排列为 [1,1,2,3,3,4]，可携带所有的符文
**提示：**
- `1 <= runes.length <= 10^4`
- `0 <= runes[i] <= 10^4`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Before departure the expedition must carry some "runes" as reserves. `runes[i]` is the magic value of the i-th rune.

They will pick some runes to carry and **rearrange** them so that any two adjacent runes differ in magic value by no more than `1`. Return the **maximum number** of runes they can carry.

**Example 1:** `runes = [1,3,5,4,1,7]` → `3` (pick `[3,5,4]`, arrange `[3,4,5]`)
**Example 2:** `runes = [1,1,3,3,2,4]` → `6` (arrange all as `[1,1,2,3,3,4]`)

**Constraints:** `1 <= runes.length <= 10^4`, `0 <= runes[i] <= 10^4`.

---

## Approach

A chosen multiset can be arranged with adjacent differences `<= 1` iff, when its values are **sorted**, every consecutive pair differs by `<= 1`. (In the sorted line, neighbors must differ by ≤1.)

So sort `runes`, then find the longest contiguous segment where each adjacent pair differs by at most `1`; that length is the answer.

Complexity: `O(n log n)` time, `O(1)` extra space.
