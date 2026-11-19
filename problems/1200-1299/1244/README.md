# [1244] 力扣排行榜

## Description


```md
https://leetcode.cn/problems/design-a-leaderboard/description/
* algorithms
* Medium (64.99%)
* Likes:    57
* Dislikes: -
* Testcase Example:  '["Leaderboard","addScore","addScore","addScore","addScore","addScore","top","reset","reset","addScore","top"]\n' +
'[[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]'
新一轮的「力扣杯」编程大赛即将启动，为了动态显示参赛者的得分数据，需要设计一个排行榜 Leaderboard。
请你帮忙来设计这个 Leaderboard 类，使得它有如下 3 个函数：
addScore(playerId, score)：

假如参赛者已经在排行榜上，就给他的当前得分增加 score 点分值并更新排行。
假如该参赛者不在排行榜上，就把他添加到榜单上，并且将分数设置为 score。


top(K)：返回前 K 名参赛者的 得分总和。
reset(playerId)：将指定参赛者的成绩清零（换句话说，将其从排行榜中删除）。题目保证在调用此函数前，该参赛者已有成绩，并且在榜单上。
请注意，在初始状态下，排行榜是空的。

示例 1：
输入：
["Leaderboard","addScore","addScore","addScore","addScore","addScore","top","reset","reset","addScore","top"]
[[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]
输出：
[null,null,null,null,null,null,73,null,null,null,141]
解释：
Leaderboard leaderboard = new Leaderboard ();
leaderboard.addScore(1,73);   // leaderboard = [[1,73]];
leaderboard.addScore(2,56);   // leaderboard = [[1,73],[2,56]];
leaderboard.addScore(3,39);   // leaderboard = [[1,73],[2,56],[3,39]];
leaderboard.addScore(4,51);   // leaderboard = [[1,73],[2,56],[3,39],[4,51]];
leaderboard.addScore(5,4);    // leaderboard = [[1,73],[2,56],[3,39],[4,51],[5,4]];
leaderboard.top(1);           // returns 73;
leaderboard.reset(1);         // leaderboard = [[2,56],[3,39],[4,51],[5,4]];
leaderboard.reset(2);         // leaderboard = [[3,39],[4,51],[5,4]];
leaderboard.addScore(2,51);   // leaderboard = [[2,51],[3,39],[4,51],[5,4]];
leaderboard.top(3);           // returns 141 = 51 + 51 + 39;

提示：
1 <= playerId, K <= 10000
题目保证 K 小于或等于当前参赛者的数量
1 <= score <= 100
最多进行 1000 次函数调用
Hint 1: What data structure can we use to keep the players' data?
Hint 2: Keep a map (dictionary) of player scores.
Hint 3: For each top(K) function call, find the maximum K scores and add them.

```

## Solution

[SourceCode](./solution.js)

## Translation

Leaderboard: addScore (accumulate), top(K) (sum of K highest), reset (remove). ≤1000 calls.

## Approach

**哈希表 + 按需排序**。Map 存 playerId → 总分;addScore 累加,reset 删除,top 时把值数组降序排序取前 K 求和。调用 ≤1000,排序开销可忽略。
