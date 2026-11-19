# [755] 倒水

## Description


```md
https://leetcode.cn/problems/pour-water/description/
* algorithms
* Medium (49.20%)
* Likes:    44
* Dislikes: -
* Testcase Example:  '[2,1,1,2,1,2,2]\n4\n3'
给定一个地形高度图，用一个整数数组 heights 表示，其中 heights[i] 表示索引 i 处的地形高度。每个位置的宽度为 1。同时给定两个整数 volume 和 k，表示有 volume 单位的水将落在索引 k 处。
水首先落在索引 k 处，并停留在该位置当前的最高高度（地形或已有水）之上。然后，它会按照以下规则流动：
如果水滴向左移动最终会下降，则向左移动。
否则，如果水滴向右移动最终会下降，则向右移动。
否则，停留在当前位置并堆积。
这里，“最终会下降”指的是水滴如果沿该方向移动，最终会到达一个更低的高度位置。这里的“高度”是指地形高度加上该位置已有的水量。
可以假设数组两侧边界之外是无限高的地形。此外，每一单位水必须完全位于某一个格子中，不会被均匀分散到多个格子。

示例 1：
输入：heights = [2,1,1,2,1,2,2], V = 4, K = 3
输出：[2,2,2,3,2,2,2]
解释：
第一个水滴降落在索引 K = 3 上。当向左或向右移动时，水可以移动到相同或更低的高度。（从水平上看，意思是该列的地形高度加上水的高度）
由于向左移动可以最终下落，因此向左移动。（一个水滴 “下落” 的意思是可以相比之前可以进入更低的高度）
由于向左移动不会使其降落，所以停在该位置上。
下一个水滴降落在索引 K = 3 上。由于新水滴向左移动可以最终下落，因此向左移动。注意水滴仍然是优先选择向左移动，尽管可以向右移动（而且向右移动可以下落更快）
经过刚才的阶段后，第三个水滴下落。由于向左移动不会最终下落，因此尝试向右移动。由于向右移动可以最终下落，因此向右移动。
最终，第四个水滴下落。由于向左移动不会最终下落，因此尝试向右移动。由于向右移动不会最终下落，因此停在当前位置：
示例 2：
输入：heights = [1,2,3,4], V = 2, K = 2
输出：[2,3,3,4]
解释：
最后的水滴落在索引 1 位置，因为继续向左移动不会使其下降到更低的高度。
示例 3：
输入：heights = [3,1,3], V = 5, K = 1
输出：[4,4,4]

提示：
1 <= heights.length <= 100
0 <= heights[i] <= 99
0 <= volume <= 2000
0 <= k < heights.length

```

## Solution

[SourceCode](./solution.js)

## Translation

Given a terrain height array `heights`, `volume` units of water drop one at a time at index `k`. Each droplet rests on top of the current height (terrain + water) at `k`, then: move left if moving left eventually leads to a strictly lower height; otherwise move right if that does; otherwise stack at the current position. "Eventually leads to a drop" means some cell in that direction (along the walk over non-increasing heights) is strictly lower. Outside the array is infinitely high terrain. Return the height map after all droplets.

- Example: heights = [2,1,1,2,1,2,2], volume = 4, k = 3 → `[2,2,2,3,2,2,2]`

## Approach

**逐滴模拟**。每滴水从 k 出发:向左走,记录沿途严格更低的最左可达点(等高可滑过但不更新),遇到升高即停;若找到严格更低点 best 则落在此处。否则对称地向右走。两边都没有更低点则水堆积在 k(等高滑动不算"最终下降",best 仍为 k)。每滴 O(n),总量 O(volume·n) ≤ 2000×100,直解。对副本操作避免污染输入。
