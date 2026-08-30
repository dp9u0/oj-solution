# [3968] Maximum Manhattan Distance After All Moves

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-manhattan-distance-after-all-moves/description/)

* algorithms
* Medium (63.20%)
* Likes:    48
* Dislikes: 3
* Testcase Example:  '"L_D_"'

```md
You are given a string moves consisting of the characters &#39;U&#39;, &#39;D&#39;, &#39;L&#39;, &#39;R&#39;, and &#39;_&#39;.
Starting from the origin (0, 0), each character represents one move on a 2D plane:

&#39;U&#39;: Move up by 1 unit.
&#39;D&#39;: Move down by 1 unit.
&#39;L&#39;: Move left by 1 unit.
&#39;R&#39;: Move right by 1 unit.
&#39;_&#39;: Can be independently replaced with any one of &#39;U&#39;, &#39;D&#39;, &#39;L&#39;, or &#39;R&#39;.

Return the maximum Manhattan distance from the origin that can be achieved after all moves have been performed.

Example 1:

Input: moves = 'L_D_'
Output: 4
Explanation:
One optimal choice is:

&#39;L&#39;: (0, 0) -> (-1, 0)
&#39;_&#39; treated as &#39;D&#39;: (-1, 0) -> (-1, -1)
&#39;D&#39;: (-1, -1) -> (-1, -2)
&#39;_&#39; treated as &#39;L&#39;: (-1, -2) -> (-2, -2)

The final Manhattan distance from the origin is
0 - (-2)
+
0 - (-2)
= 4.

Example 2:

Input: moves = 'U_R'
Output: 3
Explanation:
One optimal choice is:

&#39;U&#39;: (0, 0) -> (0, 1)
&#39;_&#39; treated as &#39;U&#39;: (0, 1) -> (0, 2)
&#39;R&#39;: (0, 2) -> (1, 2)

The final Manhattan distance from the origin is
0 - 1
+
0 - 2
= 3.


Constraints:

1 <= moves.length <= 105
moves consists of only &#39;U&#39;, &#39;D&#39;, &#39;L&#39;, &#39;R&#39;, and &#39;_&#39;.


```

## 中文翻译

给定一个字符串 `moves`，由字符 `'U'`、`'D'`、`'L'`、`'R'` 和 `'_'` 组成。
从原点 (0, 0) 出发，每个字符代表在二维平面上的一次移动：

- `'U'`：向上移动 1 个单位。
- `'D'`：向下移动 1 个单位。
- `'L'`：向左移动 1 个单位。
- `'R'`：向右移动 1 个单位。
- `'_'`：可以独立地替换为 `'U'`、`'D'`、`'L'`、`'R'` 中的任意一个。

返回在所有移动执行完毕后，所能达到的距原点的最大曼哈顿距离。

示例 1：

输入：moves = 'L_D_'
输出：4
解释：一种最优选择是：
- 'L'：(0, 0) -> (-1, 0)
- '_' 当作 'D'：(-1, 0) -> (-1, -1)
- 'D'：(-1, -1) -> (-1, -2)
- '_' 当作 'L'：(-1, -2) -> (-2, -2)
最终距原点的曼哈顿距离为 |0 - (-2)| + |0 - (-2)| = 4。

示例 2：

输入：moves = 'U_R'
输出：3
解释：一种最优选择是：
- 'U'：(0, 0) -> (0, 1)
- '_' 当作 'U'：(0, 1) -> (0, 2)
- 'R'：(0, 2) -> (1, 2)
最终距原点的曼哈顿距离为 |0 - 1| + |0 - 2| = 3。

约束：

- 1 <= moves.length <= 10^5
- moves 仅由 'U'、'D'、'L'、'R' 和 '_' 组成。

## 解题思路

关键观察：只要求**最终位置**距原点的曼哈顿距离，与移动顺序无关。

设固定字符的统计为：竖直净位移 `vy = cntU - cntD`，水平净位移 `hx = cntL - cntR`，下划线数量 `w`。

把 `w` 个 `_` 分配 `a` 个给竖直方向、`b` 个给水平方向（`a + b = w`）。由于每个 `_` 都可以自由选择方向：

- 竖直方向取 `|vy| + a`（全部朝 `vy` 的符号方向走）
- 水平方向取 `|hx| + b`（全部朝 `hx` 的符号方向走）

总距离 = `|vy| + a + |hx| + b = |vy| + |hx| + w`，与分配方式无关——**每个 `_` 恰好贡献 +1**。

因此答案为：

```
answer = |cntU - cntD| + |cntL - cntR| + cntUnderscore
```

一次遍历统计即可，时间复杂度 O(n)，空间复杂度 O(1)。

验证：
- `L_D_`：|0-1| + |1-0| + 2 = 4 ✓
- `U_R`：|1-0| + |0-1| + 1 = 3 ✓

## Solution

[SourceCode](./solution.js)
