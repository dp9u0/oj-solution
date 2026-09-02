# [LCP 33] 蓄水

## Description


```md
https://leetcode.cn/problems/o8SXZn/description/
* algorithms
* Easy (35.53%)
* Likes:    225
* Dislikes: -
* Testcase Example:  '[1,3]\n[6,8]'
给定 N 个无限容量且初始均空的水缸，每个水缸配有一个水桶用来打水，第 `i` 个水缸配备的水桶容量记作 `bucket[i]`。小扣有以下两种操作：
-  升级水桶：选择任意一个水桶，使其容量增加为 `bucket[i]+1`
-  蓄水：将全部水桶接满水，倒入各自对应的水缸
每个水缸对应最低蓄水量记作 `vat[i]`，返回小扣至少需要多少次操作可以完成所有水缸蓄水要求。
注意：实际蓄水量 **达到或超过** 最低蓄水量，即完成蓄水要求。
**示例 1：**
>输入：`bucket = [1,3], vat = [6,8]`
>
>输出：`4`
>
>解释：
>第 1 次操作升级 bucket[0]；
>第 2 ~ 4 次操作均选择蓄水，即可完成蓄水要求。
![vat1.gif](https://pic.leetcode.cn/1616122992-RkDxoL-vat1.gif)
**示例 2：**
>输入：`bucket = [9,0,1], vat = [0,2,2]`
>
>输出：`3`
>
>解释：
>第 1 次操作均选择升级 bucket[1]
>第 2~3 次操作选择蓄水，即可完成蓄水要求。
**提示：**
- `1 <= bucket.length == vat.length <= 100`
- `0 <= bucket[i], vat[i] <= 10^4`

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

There are `N` water vats of infinite capacity, initially empty. Each vat has a bucket for fetching water; the capacity of the i-th vat's bucket is `bucket[i]`. Xiao Kou has two operations:

- **Upgrade bucket**: choose any bucket and increase its capacity to `bucket[i] + 1`.
- **Pour water**: fill ALL buckets and pour into their respective vats.

Each vat has a required minimum water amount `vat[i]`. Return the **minimum number of operations** to satisfy all vats.

**Note:** "reaching or exceeding" the minimum counts as satisfying.

**Example 1:** `bucket = [1,3], vat = [6,8]` → `4`
**Example 2:** `bucket = [9,0,1], vat = [0,2,2]` → `3`

**Constraints:** `1 <= bucket.length == vat.length <= 100`, `0 <= bucket[i], vat[i] <= 10^4`.

---

## Approach

If we pour exactly `t` times, vat `i` receives `t * bucket[i]`. Fix `t` = total number of pours; then to satisfy vat `i` (when `vat[i] > 0`) we need `bucket[i] >= ceil(vat[i] / t)`. The required upgrades for vat `i` are `max(0, ceil(vat[i]/t) - bucket[i])`.

Total operations for this `t` = `t + sum(upgrades)`. Iterate `t` from `1` up to `max(vat)` (more pours than the max required amount are never useful), take the minimum. Special case: if all `vat[i] == 0`, answer is `0`.

Complexity: `O(n · maxVat)` time, `O(1)` extra space.
