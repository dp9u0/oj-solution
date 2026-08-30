# [3964] Minimum Lights to Illuminate a Road

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-lights-to-illuminate-a-road/description/)

* algorithms
* Medium (38.02%)
* Likes:    74
* Dislikes: 1
* Testcase Example:  '[0,0,0,0]'

```md
You are given an integer array lights of length n, representing positions 0 through n - 1 on a road.
For each position i:

If lights[i] = v, where v > 0, there is a working bulb at position i that illuminates every position from max(0, i - v) to min(n - 1, i + v), inclusive.
If lights[i] = 0, there is no working bulb at position i.

A position is visible if it is illuminated by at least one working bulb.
You may install additional bulbs at any positions. Each additional bulb installed at position j illuminates positions from max(0, j - 1) to min(n - 1, j + 1), inclusive.
Return the minimum number of additional bulbs required to make every position on the road visible.

Example 1:

Input: lights = [0,0,0,0]
Output: 2
Explanation:
One optimal placement is:

Install an additional bulb at position 1, illuminating positions [0, 1, 2].
Install an additional bulb at position 3, illuminating positions [2, 3].

Therefore, the minimum number of additional bulbs required is 2.

Example 2:

Input: lights = [0,0,0,2,0]
Output: 1
Explanation:

Since lights[3] = 2, the working bulb at position 3 illuminates positions [1, 2, 3, 4].
Installing an additional bulb at position 1 illuminates positions [0, 1, 2], making every position visible.
Therefore, the minimum number of additional bulbs required is 1.



Constraints:

1 <= n == lights.length <= 105
0 <= lights[i] <= n

Hint 1: First mark all positions already visible from the existing working bulbs.
Hint 2: Then scan the road from left to right. Whenever you find the first invisible position i, install a new bulb as far right as possible while still covering i.
Hint 3: Since each additional bulb covers distance 1, the best position is usually i + 1, unless it goes out of bounds. After placing it, skip all positions it covers.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给定一个长度为 n 的整数数组 lights，表示一条路上 0 到 n-1 的位置。

对于每个位置 i：

- 如果 lights[i] = v（v > 0），表示位置 i 有一个正常工作的灯泡，它照亮 [max(0, i - v), min(n - 1, i + v)] 范围内的所有位置（包含边界）。
- 如果 lights[i] = 0，表示位置 i 没有工作的灯泡。

一个位置只要被至少一个工作灯泡照亮，就算作"可见"。

你可以在任意位置安装额外的灯泡。安装在位置 j 的额外灯泡照亮 [max(0, j - 1), min(n - 1, j + 1)] 范围内的所有位置（即半径为 1）。

返回使路上所有位置都可见所需安装的最少额外灯泡数量。

示例 1：
输入：lights = [0,0,0,0]
输出：2
解释：在位置 1 安装灯泡照亮 [0,1,2]，在位置 3 安装灯泡照亮 [2,3]，共 2 个。

示例 2：
输入：lights = [0,0,0,2,0]
输出：1
解释：位置 3 的灯泡照亮 [1,2,3,4]，再在位置 1 安装一个照亮 [0,1,2]，共 1 个。

约束：
- 1 <= n == lights.length <= 10^5
- 0 <= lights[i] <= n

## 解题思路

贪心 + 差分数组：

1. **标记已照亮位置**：对每个 lights[i] = v > 0，它照亮的区间是 [max(0, i-v), min(n-1, i+v)]。用差分数组高效标记所有区间，再做前缀和得到每个位置的照亮次数（次数 > 0 即已照亮）。
2. **贪心安装**：从左到右扫描，遇到第一个未照亮的位置 i 时，新灯泡应尽量靠右安装以覆盖更多右侧位置，即装在 j = min(i + 1, n - 1)（覆盖 [j-1, j+1]，一定覆盖 i）。安装后计数 +1，并直接跳到 j + 2 继续扫描（j+1 及之前已全部被覆盖）。
3. 时间复杂度 O(n)，空间复杂度 O(n)。

正确性：对最左侧未照亮位置 i，任何覆盖 i 的额外灯泡最远只能放在 i+1（半径 1），因此放 i+1 是不劣的选择——这是经典的区间覆盖贪心交换论证。
