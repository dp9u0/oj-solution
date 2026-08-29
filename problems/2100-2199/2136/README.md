# [2136] Earliest Possible Day of Full Bloom

## Description

[LeetCode Problem Description](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/description/)

* algorithms
* Hard (71.18%)
* Likes:    1696
* Dislikes: 90
* Testcase Example:  '[1,4,3]\n[2,3,1]'

```md
You have n flower seeds. Every seed must be planted first before it can begin to grow, then bloom. Planting a seed takes time and so does the growth of a seed. You are given two 0-indexed integer arrays plantTime and growTime, of length n each:

plantTime[i] is the number of full days it takes you to plant the ith seed. Every day, you can work on planting exactly one seed. You do not have to work on planting the same seed on consecutive days, but the planting of a seed is not complete until you have worked plantTime[i] days on planting it in total.
growTime[i] is the number of full days it takes the ith seed to grow after being completely planted. After the last day of its growth, the flower blooms and stays bloomed forever.

From the beginning of day 0, you can plant the seeds in any order.
Return the earliest possible day where all seeds are blooming.

Example 1:


Input: plantTime = [1,4,3], growTime = [2,3,1]
Output: 9
Explanation: The grayed out pots represent planting days, colored pots represent growing days, and the flower represents the day it blooms.
One optimal way is:
On day 0, plant the 0th seed. The seed grows for 2 full days and blooms on day 3.
On days 1, 2, 3, and 4, plant the 1st seed. The seed grows for 3 full days and blooms on day 8.
On days 5, 6, and 7, plant the 2nd seed. The seed grows for 1 full day and blooms on day 9.
Thus, on day 9, all the seeds are blooming.

Example 2:


Input: plantTime = [1,2,3,2], growTime = [2,1,2,1]
Output: 9
Explanation: The grayed out pots represent planting days, colored pots represent growing days, and the flower represents the day it blooms.
One optimal way is:
On day 1, plant the 0th seed. The seed grows for 2 full days and blooms on day 4.
On days 0 and 3, plant the 1st seed. The seed grows for 1 full day and blooms on day 5.
On days 2, 4, and 5, plant the 2nd seed. The seed grows for 2 full days and blooms on day 8.
On days 6 and 7, plant the 3rd seed. The seed grows for 1 full day and blooms on day 9.
Thus, on day 9, all the seeds are blooming.

Example 3:

Input: plantTime = [1], growTime = [1]
Output: 2
Explanation: On day 0, plant the 0th seed. The seed grows for 1 full day and blooms on day 2.
Thus, on day 2, all the seeds are blooming.


Constraints:

n == plantTime.length == growTime.length
1 <= n <= 105
1 <= plantTime[i], growTime[i] <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

你有 `n` 颗花种子。每颗种子必须先种植、后生长、再开花。给定两个长度为 `n` 的数组 `plantTime` 和 `growTime`：

- `plantTime[i]`：种植第 `i` 颗种子需要**整整** `plantTime[i]` 天（每天只能种一颗，不必连续，累计够天数即完成种植）；
- `growTime[i]`：种子种完后需要整整 `growTime[i]` 天生长，最后一天结束那天开花，且永远保持开花。

从第 0 天开始，可以按任意顺序种植。返回**所有种子都开花**的最早日子。

示例 1：`plantTime = [1,4,3], growTime = [2,3,1]` → `9`
示例 2：`plantTime = [1,2,3,2], growTime = [2,1,2,1]` → `9`
示例 3：`plantTime = [1], growTime = [1]` → `2`（第 0 天种，第 2 天开）

约束：`1 <= n <= 10^5`，`1 <= plantTime[i], growTime[i] <= 10^4`

## 解题思路

两个关键观察：

1. **总种植天数固定** = `sum(plantTime)`（每天只能种一颗，无论顺序），且"不连续种植"没有收益，故最优解就是把种子按某个顺序**首尾相接**地种。
2. 按顺序种植时，若第 `i` 颗在累计第 `cum` 天种完，则它在 `cum + growTime[i]` 开花。答案 = `max(cum_i + growTime[i])`。生长与后续种植**并行**，所以应让生长时间长的种子尽早种完，让它的生长期被后续种植掩盖——**按 `growTime` 降序种植**（交换论证：相邻两颗若前面的 growTime 更小，交换后 max 开花日不增）。

实现：下标按 `growTime` 降序排序，扫一遍累计 `cum += plantTime[i]`，`ans = max(ans, cum + growTime[i])`。

验证示例 1：顺序 idx1,0,2 → cum=4→7, cum=5→7, cum=8→9 → 9 ✓

时间复杂度 O(n log n)，空间 O(n)。
