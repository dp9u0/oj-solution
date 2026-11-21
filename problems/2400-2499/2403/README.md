# [2403] 杀死所有怪物的最短时间

## Description


```md
https://leetcode.cn/problems/minimum-time-to-kill-all-monsters/description/
* algorithms
* Hard (63.58%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '[3,1,4]'
你有一个整数数组 power，其中  power[i] 是第 i 个怪物的力量。
你从 0 点法力值开始，每天获取 gain 点法力值，最初 gain 等于 1。
每天，在获得 gain 点法力值后，如果你的法力值大于或等于怪物的力量，你就可以打败怪物。当你打败怪物时:

你的法力值会被重置为 0，并且


gain 的值增加 1。

返回打败所有怪物所需的 最少 天数。

示例 1:
输入: power = [3,1,4]
输出: 4
解释: 打败所有怪物的最佳方法是:
- 第 1 天: 获得 1 点法力值，现在总共拥有 1 点法力值。用尽所有法力值击杀第 2 个怪物。
- 第 2 天: 获得 2 点法力值，现在总共拥有 2 点法力值。
- 第 3 天: 获得 2 点法力值，现在总共拥有 4 点法力值。用尽所有法力值击杀第 3 个怪物。
- 第 4 天: 获得 3 点法力值，现在总共拥有 3 点法力值。 用尽所有法力值击杀第 1 个怪物。
可以证明，4 天是最少需要的天数。
示例 2:
输入: power = [1,1,4]
输出: 4
解释: 打败所有怪物的最佳方法是:
- 第 1 天: 获得 1 点法力值，现在总共拥有 1 点法力值。用尽所有法力值击杀第 1 个怪物。
- 第 2 天: 获得 2 点法力值，现在总共拥有 2 点法力值。用尽所有法力值击杀第 2 个怪物。
- 第 3 天: 获得 3 点法力值，现在总共拥有 3 点法力值。
- 第 4 天: 获得 3 点法力值，现在总共拥有 6 点法力值。用尽所有法力值击杀第 3 个怪物。
可以证明，4 天是最少需要的天数。
示例 3:
输入: power = [1,2,4,9]
输出: 6
解释: 打败所有怪物的最佳方法是:
- 第 1 天: 获得 1 点法力值，现在总共拥有 1 点法力值。用尽所有法力值击杀第 1 个怪物
- 第 2 天: 获得 2 点法力值，现在总共拥有 2 点法力值。用尽所有法力值击杀第 2 个怪物。
- 第 3 天: 获得 3 点法力值，现在总共拥有 3 点法力值。
- 第 4 天: 获得 3 点法力值，现在总共拥有 6 点法力值。
- 第 5 天: 获得 3 点法力值，现在总共拥有 9 点法力值。用尽所有法力值击杀第 4 个怪物。
- 第 6 天: 获得 4 点法力值，现在总共拥有 4 点法力值。用尽所有法力值击杀第 3 个怪物。
可以证明，6 天是最少需要的天数。

提示:
1 <= power.length <= 17
1 <= power[i] <= 109
Hint 1: Each monster can only have two states. They are either alive or dead.
Hint 2: We can use bitmasks to represent every possible combination of alive and dead monsters.
Hint 3: Let dp[mask] represent the minimum number of days needed to reach the state mask.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Kill all monsters. Each day you first gain `gain` mana (gain starts at 1); if mana >= power of some alive monster you may kill it: mana resets to 0 and gain increases by 1. Return the minimum days to kill everything.

Example 1:
Input: power = [3,1,4]
Output: 4

Example 2:
Input: power = [1,1,4]
Output: 4

Example 3:
Input: power = [1,2,4,9]
Output: 6

Constraints: 1 <= power.length <= 17, 1 <= power[i] <= 10^9.

## Approach

Bitmask DP: dp[mask] = min days to kill exactly the monsters in mask; gain after killing them = popcount(mask) + 1. Killing a new monster m costs ceil(power[m] / gain) days regardless of ordering (mana accumulates over days and is reset on kill). dp over 2^17 masks x 17 transitions.
