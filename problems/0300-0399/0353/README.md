# [353] 贪吃蛇

## Description


```md
https://leetcode.cn/problems/design-snake-game/description/
* algorithms
* Medium (42.63%)
* Likes:    117
* Dislikes: -
* Testcase Example:  '["SnakeGame","move","move","move","move","move","move"]\n' +
'[[3,2,[[1,2],[0,1]]],["R"],["D"],["R"],["U"],["L"],["U"]]'
请你设计一个 贪吃蛇游戏，该游戏将会在一个 屏幕尺寸 = 宽度 x 高度 的屏幕上运行。如果你不熟悉这个游戏，可以 点击这里 在线试玩。
起初时，蛇在左上角的 (0, 0) 位置，身体长度为 1 个单位。
你将会被给出一个数组形式的食物位置序列 food ，其中 food[i] = (ri, ci) 。当蛇吃到食物时，身子的长度会增加 1 个单位，得分也会 +1 。
食物不会同时出现，会按列表的顺序逐一显示在屏幕上。比方讲，第一个食物被蛇吃掉后，第二个食物才会出现。
当一个食物在屏幕上出现时，保证 不会 出现在被蛇身体占据的格子里。
如果蛇越界（与边界相撞）或者头与 移动后 的身体相撞（即，身长为 4 的蛇无法与自己相撞），游戏结束。
实现 SnakeGame 类：
SnakeGame(int width, int height, int[][] food) 初始化对象，屏幕大小为 height x width ，食物位置序列为 food
int move(String direction) 返回蛇在方向 direction 上移动后的得分。如果游戏结束，返回 -1 。

示例 1：
输入：
["SnakeGame", "move", "move", "move", "move", "move", "move"]
[[3, 2, [[1, 2], [0, 1]]], ["R"], ["D"], ["R"], ["U"], ["L"], ["U"]]
输出：
[null, 0, 0, 1, 1, 2, -1]
解释：
SnakeGame snakeGame = new SnakeGame(3, 2, [[1, 2], [0, 1]]);
snakeGame.move("R"); // 返回 0
snakeGame.move("D"); // 返回 0
snakeGame.move("R"); // 返回 1 ，蛇吃掉了第一个食物，同时第二个食物出现在 (0, 1)
snakeGame.move("U"); // 返回 1
snakeGame.move("L"); // 返回 2 ，蛇吃掉了第二个食物，没有出现更多食物
snakeGame.move("U"); // 返回 -1 ，蛇与边界相撞，游戏结束

提示：
1 <= width, height <= 104
1 <= food.length <= 50
food[i].length == 2
0 <= ri < height
0 <= ci < width
direction.length == 1
direction is 'U', 'D', 'L', or 'R'.
最多调用 104 次 move 方法

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Design a SnakeGame on a width×height screen: snake starts at (0,0) length 1, food appears sequentially. `move(direction)` moves the snake; hitting a wall or (post-move) its own body ends the game with -1; eating food grows the snake and scores +1. Return the score.

**Constraints:**
- 1 <= width, height <= 10^4, 1 <= food.length <= 150

## Approach

双端队列表示身体(尾部为头)+ Set 做 O(1) 身体冲突检查;每次移动:先移除尾尖(吃食物时保留),再检查新头是否撞身体,入队。关键细节是"移动后"判定碰撞,故尾巴先离开再判。

时间 O(1) 每步均摊(shift O(长度) 可用环形数组消除),空间 O(长度)。
