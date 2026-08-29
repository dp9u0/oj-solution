# [464] Can I Win

## Description

[LeetCode Problem Description](https://leetcode.com/problems/can-i-win/description/)

* algorithms
* Medium (31.72%)
* Likes:    2869
* Dislikes: 434
* Testcase Example:  '10\n11'

```md
In the '100 game' two players take turns adding, to a running total, any integer from 1 to 10. The player who first causes the running total to reach or exceed 100 wins.
What if we change the game so that players cannot re-use integers?
For example, two players might take turns drawing from a common pool of numbers from 1 to 15 without replacement until they reach a total >= 100.
Given two integers maxChoosableInteger and desiredTotal, return true if the first player to move can force a win, otherwise, return false. Assume both players play optimally.

Example 1:

Input: maxChoosableInteger = 10, desiredTotal = 11
Output: false
Explanation:
No matter which integer the first player choose, the first player will lose.
The first player can choose an integer from 1 up to 10.
If the first player choose 1, the second player can only choose integers from 2 up to 10.
The second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.
Same with other integers chosen by the first player, the second player will always win.

Example 2:

Input: maxChoosableInteger = 10, desiredTotal = 0
Output: true

Example 3:

Input: maxChoosableInteger = 10, desiredTotal = 1
Output: true


Constraints:

1 <= maxChoosableInteger <= 20
0 <= desiredTotal <= 300


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

"100 游戏"变体：两人轮流从公共池 `1..maxChoosableInteger` 中**不放回**取数累加，先使累计和 ≥ `desiredTotal` 者赢。给定 `maxChoosableInteger` 和 `desiredTotal`，双方最优博弈下先手是否能必胜。

示例 1：`10, 11` → `false`（先手任取 x，后手取 11−x 即胜）
示例 2：`10, 0` → `true`；示例 3：`10, 1` → `true`

约束：`1 <= maxChoosableInteger <= 20`，`0 <= desiredTotal <= 300`

## 解题思路

**状态压缩记忆化搜索**（经典）：

- 特判：`desiredTotal <= 0` 直接 true（开局即达成）；`Σ1..m < desiredTotal` 直接 false（池耗尽也到不了，无人能赢）；
- 状态 = 已用数字的位掩码（≤ 2^20），DFS：当前手面对剩余 `remaining`，枚举未用数字 `i`：若 `i >= remaining`（直接赢）或对手在 `state|bit` 下必败 → 返回 true；全失败则 false。Memo 数组按掩码索引。

复杂度 O(2^m · m)。
