# [294] 翻转游戏 II

## Description


```md
https://leetcode.cn/problems/flip-game-ii/description/
* algorithms
* Medium (46.94%)
* Likes:    138
* Dislikes: -
* Testcase Example:  '"++++"'
你和朋友玩一个叫做「翻转游戏」的游戏。游戏规则如下：
给你一个字符串 currentState ，其中只含 '+' 和 '-' 。你和朋友轮流将 连续 的两个 "++" 反转成 "--" 。当一方无法进行有效的翻转时便意味着游戏结束，则另一方获胜。默认每个人都会采取最优策略。
请你写出一个函数来判定起始玩家 是否存在必胜的方案 ：如果存在，返回 true ；否则，返回 false 。

示例 1：
输入：currentState = "++++"
输出：true
解释：起始玩家可将中间的 "++" 翻转变为 "+--+" 从而得胜。
示例 2：
输入：currentState = "+"
输出：false

提示：
1 <= currentState.length <= 60
currentState[i] 不是 '+' 就是 '-'
不能有超过 20 个连续的 '+'。

进阶：请推导你算法的时间复杂度。

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Two players take turns flipping two consecutive '+' into '--'. The player who cannot move loses. Given `currentState`, return whether the player to move can force a win (both play optimally).

**Constraints:**
- 1 <= currentState.length <= 60 (only '+' and '-')

## Approach

博弈记忆化:对每个状态枚举所有 "++" 移动,存在一个移动使对手落入必败态则当前态必胜。按整个字符串做 memo 键。

时间:状态数指数级但 memo 去重后实际可解(≤60 长度),空间 O(状态数)。
