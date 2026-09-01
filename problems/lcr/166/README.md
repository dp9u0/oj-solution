# [LCR 166] 珠宝的最高价值

## Description


```md
https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/description/
* algorithms
* Medium (69.39%)
* Likes:    565
* Dislikes: -
* Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
现有一个记作二维矩阵 frame 的珠宝架，其中 frame[i][j] 为该位置珠宝的价值。拿取珠宝的规则为：
只能从架子的左上角开始拿珠宝
每次可以移动到右侧或下侧的相邻位置
到达珠宝架子的右下角时，停止拿取
注意：珠宝的价值都是大于 0 的。除非这个架子上没有任何珠宝，比如 frame = [[0]]。

示例 1：
输入：frame = [[1,3,1],[1,5,1],[4,2,1]]
输出：12
解释：路径 1→3→5→2→1 可以拿到最高价值的珠宝

提示：
0 < frame.length <= 200
0 < frame[0].length <= 200

```

## Solution

[SourceCode](./solution.js)

---

## 英文翻译 (English Translation)

There is a jewelry stand represented by a 2D matrix `frame`, where `frame[i][j]` is the value of the jewelry at that position. The rules for taking jewelry are:
- You can only start taking jewelry from the top-left corner of the stand.
- Each move can go to the adjacent position on the right or below.
- You stop taking when you reach the bottom-right corner of the stand.

Note: The value of every piece of jewelry is greater than 0, unless there is no jewelry on the stand at all, e.g., `frame = [[0]]`.

Example 1:
Input: `frame = [[1,3,1],[1,5,1],[4,2,1]]`
Output: `12`
Explanation: The path 1→3→5→2→1 collects the maximum value of jewelry.

Constraints:
- `0 < frame.length <= 200`
- `0 < frame[0].length <= 200`

---

## 解题思路 (Approach)

**动态规划 (Dynamic Programming)**

从左上角 (0,0) 走到右下角 (m-1, n-1)，每次只能向右或向下移动。要最大化路径上珠宝价值之和。

令 `dp[i][j]` 表示到达 (i,j) 时能拿到的最大价值。由于只能从上方或左方到达当前位置，状态转移方程为：

```
dp[i][j] = frame[i][j] + max(dp[i-1][j], dp[i][j-1])
```

边界处理：
- 第一行 (i=0)：只能从左方来，`dp[0][j] = dp[0][j-1] + frame[0][j]`
- 第一列 (j=0)：只能从上方来，`dp[i][0] = dp[i-1][0] + frame[i][0]`
- 起点 (0,0)：`dp[0][0] = frame[0][0]`

**空间优化**：直接在原数组 `frame` 上原地修改，每个格子累加上方和左方中的较大值，使额外空间复杂度降为 O(1)。

- 时间复杂度：O(m × n)
- 空间复杂度：O(1)
