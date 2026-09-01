# [403] Frog Jump

## Description

[LeetCode Problem Description](https://leetcode.com/problems/frog-jump/description/)

* algorithms
* Hard (47.58%)
* Likes:    6071
* Dislikes: 280
* Testcase Example:  '[0,1,3,5,6,8,12,17]'

```md
A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.
Given a list of stonespositions (in units) in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog is on the first stone and assumes the first jump must be 1 unit.
If the frog&#39;s last jump was k units, its next jump must be either k - 1, k, or k + 1 units. The frog can only jump in the forward direction.

Example 1:

Input: stones = [0,1,3,5,6,8,12,17]
Output: true
Explanation: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.

Example 2:

Input: stones = [0,1,2,3,4,8,9,11]
Output: false
Explanation: There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large.


Constraints:

2 <= stones.length <= 2000
0 <= stones[i] <= 231 - 1
stones[0] == 0
stonesis sorted in a strictly increasing order.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

一只青蛙要过河。河流被分成若干个单位长度，每个单位上可能有也可能没有石头。青蛙可以跳到石头上，但不能跳进水里。

给定一个按升序排列的石头位置列表 `stones`，判断青蛙能否过河，即能否跳到最后一块石头上。初始时青蛙站在第一块石头上，并假设第一跳必须跳 1 个单位。

如果青蛙上一次跳跃跳了 `k` 个单位，那么它接下来的跳跃距离只能是 `k - 1`、`k` 或 `k + 1` 个单位。青蛙只能向前跳。

示例 1：
- 输入：stones = [0,1,3,5,6,8,12,17]
- 输出：true
- 解释：青蛙可以依次跳 1、2、2、3、4、5 个单位到达最后一块石头。

示例 2：
- 输入：stones = [0,1,2,3,4,8,9,11]
- 输出：false
- 解释：第 5 块和第 6 块石头之间的间距太大，无法到达最后一块石头。

约束：
- 2 <= stones.length <= 2000
- 0 <= stones[i] <= 2^31 - 1
- stones[0] == 0
- stones 严格递增

## 解题思路

**动态规划（按位置记录可达的"上一跳距离"集合）**

关键观察：青蛙能否从某块石头继续跳，取决于它所在的位置以及上一次跳跃的距离 `k`。因此状态为 `(位置, 上一次跳跃距离)`。

用哈希表 `jumpsMap`：石头的位置 → 一个集合，表示"以哪些跳跃距离落到该石头上"是可能的。

流程：
1. 初始化 `jumpsMap.get(0) = {0}`（起点，上一次跳跃距离为 0，下一跳只能是 1，满足"第一跳必须为 1"）。
2. 按石头的位置顺序（严格递增，保证无后效性）遍历每块可达石头，对其集合中的每个 `k`，尝试步长 `k-1, k, k+1`：
   - 步长必须 > 0（只能向前跳）；
   - 目标位置 `pos + step` 若正好是最后一块石头，直接返回 true；
   - 若是某块石头，则把 `step` 加入该石头对应的集合。
3. 遍历结束后检查最后一块石头的集合是否非空。

复杂度分析：每块石头上可能的上一次跳跃距离最多有 O(n) 种（跳跃距离每次最多增加 1，第 i 块石头处的 k ≤ i），所以时间复杂度 O(n²)，空间复杂度 O(n²)。n ≤ 2000，完全可行。

一个剪枝：位置之间的距离超过 n-1 时必然不可达（因为跳跃距离每次至多 +1），但本题 O(n²) 已足够，无需额外处理。
