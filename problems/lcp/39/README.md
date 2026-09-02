# [LCP 39] 无人机方阵

## Description


```md
https://leetcode.cn/problems/0jQkd0/description/
* algorithms
* Easy (57.16%)
* Likes:    15
* Dislikes: -
* Testcase Example:  '[[1,3],[5,4]]\n[[3,1],[6,5]]'
在 「力扣挑战赛」 开幕式的压轴节目 「无人机方阵」中，每一架无人机展示一种灯光颜色。 无人机方阵通过两种操作进行颜色图案变换：
- 调整无人机的位置布局
- 切换无人机展示的灯光颜色
给定两个大小均为 `N*M` 的二维数组 `source` 和 `target` 表示无人机方阵表演的两种颜色图案，由于无人机切换灯光颜色的耗能很大，请返回从 `source` 到 `target` 最少需要多少架无人机切换灯光颜色。
**注意：** 调整无人机的位置布局时无人机的位置可以随意变动。
**示例 1：**
> 输入：`source = [[1,3],[5,4]], target = [[3,1],[6,5]]`
>
> 输出：`1`
>
> 解释：
> 最佳方案为
将 `[0,1]` 处的无人机移动至 `[0,0]` 处；
将 `[0,0]` 处的无人机移动至 `[0,1]` 处；
将 `[1,0]` 处的无人机移动至 `[1,1]` 处；
将 `[1,1]` 处的无人机移动至 `[1,0]` 处，其灯光颜色切换为颜色编号为 `6` 的灯光；
因此从`source` 到 `target` 所需要的最少灯光切换次数为 1。
>![8819ccdd664e91c78cde3bba3c701986.gif](https://pic.leetcode.cn/1628823765-uCDaux-8819ccdd664e91c78cde3bba3c701986.gif){:height=300px}
**示例 2：**
> 输入：`source = [[1,2,3],[3,4,5]], target = [[1,3,5],[2,3,4]]`
>
> 输出：`0`
> 解释：
> 仅需调整无人机的位置布局，便可完成图案切换。因此不需要无人机切换颜色
**提示：**
`n == source.length == target.length`
`m == source[i].length == target[i].length`
`1 <= n, m <=100`
`1 <= source[i][j], target[i][j] <=10^4`

```

## Solution

[SourceCode](./solution.js)

---

### 翻译 (English Translation)

**Drone Formation (LCP 39)**

In the finale performance "Drone Formation" of the LeetCode Challenge opening ceremony, each drone displays a light color. The drone formation can change its color pattern through two operations:
- Adjusting the position layout of the drones
- Switching the light color of a drone

Given two 2D arrays `source` and `target` (both of size `N * M`) representing two color patterns of the drone formation. Since switching a drone's light color consumes a lot of energy, return the **minimum** number of drones that need to switch their light color to transform from `source` to `target`.

**Note:** When adjusting the position layout, the position of each drone can be changed arbitrarily.

**Example 1:**
> Input: `source = [[1,3],[5,4]], target = [[3,1],[6,5]]`
>
> Output: `1`
>
> Explanation: Rearrange the positions freely; only the drone holding color `4` in `source` has no matching color in `target`, so it must switch to color `6`. Thus 1 drone needs to switch.

**Example 2:**
> Input: `source = [[1,2,3],[3,4,5]], target = [[1,3,5],[2,3,4]]`
>
> Output: `0`
>
> Explanation: The two patterns share exactly the same multiset of colors, so only repositioning is needed.

**Constraints:**
- `n == source.length == target.length`
- `m == source[i].length == target[i].length`
- `1 <= n, m <= 100`
- `1 <= source[i][j], target[i][j] <= 10^4`

---

### 解题思路 (Approach)

由于调整位置布局时无人机可以随意变动,颜色图案的变换不依赖位置本身,只依赖**颜色的多重集**。因此问题等价于:把 `source` 的颜色多重集改成 `target` 的颜色多重集,最少需要改变多少个元素的值。

- 统计 `source` 中每种颜色的出现次数 `cntSource`,以及 `target` 中每种颜色的出现次数 `cntTarget`。
- 对每一种颜色,`source` 中比 `target` 中多出来的数量 `cntSource[c] - cntTarget[c]`(若为正)就是必须切换颜色的无人机数量(它们没有对应的 target 颜色可匹配)。
- 答案 = 所有正差值之和。

复杂度:时间 `O(n*m)` 空间 `O(n*m)`。

```js
// 等价地:answer = source.length*target[0].length - 可匹配颜色对数量
// 或者直接用差值求和
```

---

## Solution

[SourceCode](./solution.js)
