# [1728] Cat and Mouse II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/cat-and-mouse-ii/description/)

* algorithms
* Hard (40.36%)
* Likes:    288
* Dislikes: 48
* Testcase Example:  '["####F","#C...","M...."]\n1\n2'

```md
A game is played by a cat and a mouse named Cat and Mouse.
The environment is represented by a grid of size rows x cols, where each element is a wall, floor, player (Cat, Mouse), or food.

Players are represented by the characters &#39;C&#39;(Cat),&#39;M&#39;(Mouse).
Floors are represented by the character &#39;.&#39; and can be walked on.
Walls are represented by the character &#39;#&#39; and cannot be walked on.
Food is represented by the character &#39;F&#39; and can be walked on.
There is only one of each character &#39;C&#39;, &#39;M&#39;, and &#39;F&#39; in grid.

Mouse and Cat play according to the following rules:

Mouse moves first, then they take turns to move.
During each turn, Cat and Mouse can jump in one of the four directions (left, right, up, down). They cannot jump over the wall nor outside of the grid.
catJump, mouseJump are the maximum lengths Cat and Mouse can jump at a time, respectively. Cat and Mouse can jump less than the maximum length.
Staying in the same position is allowed.
Mouse can jump over Cat.

The game can end in 4 ways:

If Cat occupies the same position as Mouse, Cat wins.
If Cat reaches the food first, Cat wins.
If Mouse reaches the food first, Mouse wins.
If Mouse cannot get to the food within 1000 turns, Cat wins.

Given a rows x cols matrix grid and two integers catJump and mouseJump, return true if Mouse can win the game if both Cat and Mouse play optimally, otherwise return false.

Example 1:


Input: grid = ['####F','#C...','M....'], catJump = 1, mouseJump = 2
Output: true
Explanation: Cat cannot catch Mouse on its turn nor can it get the food before Mouse.

Example 2:


Input: grid = ['M.C...F'], catJump = 1, mouseJump = 4
Output: true

Example 3:

Input: grid = ['M.C...F'], catJump = 1, mouseJump = 3
Output: false


Constraints:

rows == grid.length
cols = grid[i].length
1 <= rows, cols <= 8
grid[i][j] consist only of characters &#39;C&#39;, &#39;M&#39;, &#39;F&#39;, &#39;.&#39;, and &#39;#&#39;.
There is only one of each character &#39;C&#39;, &#39;M&#39;, and &#39;F&#39; in grid.
1 <= catJump, mouseJump <= 8


```

## 题目翻译

猫鼠游戏。在 rows×cols 的网格中，猫(C)、鼠(M)和食物(F)各有一个。鼠先动，猫后动，交替进行。每个回合可以向四个方向跳 1~maxJump 格（不能跳过墙，可以原地不动）。鼠可以跳过猫。判定条件：猫鼠同位置→猫赢，猫先到食物→猫赢，鼠先到食物→鼠赢，1000 回合内鼠未到食物→猫赢。双方最优策略下鼠能否赢？

## 解题思路

**BFS 逆向归纳（Retrograde Analysis）**

状态：(鼠位置, 猫位置, 轮到谁)。网格 ≤8×8=64 格，状态总数 ≤64×64×2=8192。

1. 初始化所有终态：鼠到食物→鼠赢，猫鼠同位置或猫到食物→猫赢。
2. BFS 逆向传播：对每个已确定的状态，找其所有前驱（上一个回合的状态），根据博弈规则推导前驱的结果。
   - 鼠的回合：任一后继为鼠赢→前驱鼠赢；所有后继为猫赢→前驱猫赢。
   - 猫的回合：任一后继为猫赢→前驱猫赢；所有后继为鼠赢→前驱鼠赢。
3. 未确定的状态视为平局（猫赢）。

时间复杂度 O(N²×moves)，N≤64。

## Solution

[SourceCode](./solution.js)
