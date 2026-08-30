# [3449] Maximize the Minimum Game Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-the-minimum-game-score/description/)

* algorithms
* Hard (25.99%)
* Likes:    56
* Dislikes: 6
* Testcase Example:  '[2,4]\n3'

```md
You are given an array points of size n and an integer m. There is another array gameScore of size n, where gameScore[i] represents the score achieved at the ith game. Initially, gameScore[i] == 0 for all i.
You start at index -1, which is outside the array (before the first position at index 0). You can make at most m moves. In each move, you can either:
Increase the index by 1 and add points[i] to gameScore[i].
Decrease the index by 1 and add points[i] to gameScore[i].
Note that the index must always remain within the bounds of the array after the first move.
Return the maximum possible minimum value in gameScore after at most m moves.

Example 1:
Input: points = [2,4], m = 3
Output: 4
Explanation:
Initially, index i = -1 and gameScore = [0, 0].


Move
Index
gameScore




Increase i
0
[2, 0]


Increase i
1
[2, 4]


Decrease i
0
[4, 4]


The minimum value in gameScore is 4, and this is the maximum possible minimum among all configurations. Hence, 4 is the output.
Example 2:
Input: points = [1,2,3], m = 5
Output: 2
Explanation:
Initially, index i = -1 and gameScore = [0, 0, 0].


Move
Index
gameScore




Increase i
0
[1, 0, 0]


Increase i
1
[1, 2, 0]


Decrease i
0
[2, 2, 0]


Increase i
1
[2, 4, 0]


Increase i
2
[2, 4, 3]


The minimum value in gameScore is 2, and this is the maximum possible minimum among all configurations. Hence, 2 is the output.

Constraints:
2 <= n == points.length <= 5 * 104
1 <= points[i] <= 106
1 <= m <= 109
Hint 1: Can we use binary search?
Hint 2: What happens if you fix the game score as x?
Hint 3: We should go from i to (i + 1) back and forth, making the value for each index i (from left to right) no less than x.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个长度为 n 的数组 points 和一个整数 m。另有一个长度为 n 的数组 gameScore，其中 gameScore[i] 表示第 i 场游戏获得的分数。初始时所有 gameScore[i] == 0。

你从下标 -1 出发（即数组外的第一个位置之前）。你最多可以进行 m 次移动。每次移动你可以：

- 将下标加 1，并将 points[i] 加到 gameScore[i]（i 为移动后所在下标）。
- 将下标减 1，并将 points[i] 加到 gameScore[i]（i 为移动后所在下标）。

注意：第一次移动之后，下标必须始终保持在数组边界之内。

返回在最多 m 次移动后，gameScore 中的最小值的最大可能值。

## 解题思路

二分答案 + 贪心检查（提示已经给出方向）。

**二分**：二分最终的最小值 x，检查是否能用不超过 m 次移动让每个 gameScore[i] >= x。

**贪心检查（关键）**：提示 3 说明最优策略是"从左到右依次处理每个位置，通过 i 与 i+1 之间的往返移动来给位置 i 加分"。具体地：

- 设 r_i = ceil(x / points[i]) 为位置 i 需要被访问的次数；p_i 为处理 i-1 时在 (i-1)↔i 边上往返"顺路"预存给 i 的访问次数。
- 走进 i 花费 1 步（算一次访问）；欠额 k = r_i - p_i - 1 通过在 i↔(i+1) 边上往返 k 次补足，每次往返 2 步，同时给 i+1 预存 k 次访问（p_{i+1} = k）。
- 中间位置被两条邻边的往返"免费"访问，所以高需求内部位置的代价很低——这是总步数远小于 2·Σr_i 的原因。
- 若 p_i >= r_i：i 已被顺路满足，只需 1 步途经它继续向右（p_{i+1} 归 0）；若这是最后一个位置，则连这 1 步都可省下。
- 累计 moves 超过 m 即不可行；全程用 Number（JS 双精度）足够（上界约 1e14 < 2^53）。

**复杂度**：O(n log(maxScore))，n = 5e4，二分约 60 轮，总量 ~3e6，可行。
