# [面试题 16.15] 珠玑妙算

## Description


```md
https://leetcode.cn/problems/master-mind-lcci/description/
* lcci
* Easy (45.45%)
* Likes:    60
* Dislikes: -
* Testcase Example:  '"RGRB"\n"BBBY"'
珠玑妙算游戏（the game of master mind）的玩法如下。
计算机有4个槽，每个槽放一个球，颜色可能是红色（R）、黄色（Y）、绿色（G）或蓝色（B）。例如，计算机可能有RGGB 4种（槽1为红色，槽2、3为绿色，槽4为蓝色）。作为用户，你试图猜出颜色组合。打个比方，你可能会猜YRGB。要是猜对某个槽的颜色，则算一次“猜中”；要是只猜对颜色但槽位猜错了，则算一次“伪猜中”。注意，“猜中”不能算入“伪猜中”。
给定一种颜色组合solution和一个猜测guess，编写一个方法，返回猜中和伪猜中的次数answer，其中answer[0]为猜中的次数，answer[1]为伪猜中的次数。
示例：
输入： solution="RGBY",guess="GGRR"
输出： [1,1]
解释： 猜中1次，伪猜中1次。
提示：
len(solution) = len(guess) = 4
solution和guess仅包含"R","G","B","Y"这4种字符
Hint 1: 首先尝试创建一个具有每个元素发生频率的数组。
Hint 2: 为了在实现中简单明了，你可能需要使用其他方法和类。

```

## Description (English)

The game of Master Mind: the computer has 4 slots, each holding a ball colored red (R), yellow (Y), green (G) or blue (B). You try to guess the color combination. A "hit" is a guessed ball with the correct color in the correct slot; a "pseudo-hit" is one with the correct color but the wrong slot. Note: a hit never counts as a pseudo-hit. Given a solution and a guess, return [hits, pseudo-hits].

Example:
Input: solution = "RGBY", guess = "GGRR"
Output: [1,1]
Explanation: 1 hit and 1 pseudo-hit.

Note: len(solution) = len(guess) = 4; only "R","G","B","Y" appear.

## 思路

两遍计数：位置相同记猜中；其余位置各自按颜色统计剩余频次，伪猜中 = 每种颜色 `min(guess 剩余, solution 剩余)` 之和——猜中的球先被剔除，天然不会被重复计入。

## Solution

[SourceCode](./solution.js)
