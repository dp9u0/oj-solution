# [2021] 街上最亮的位置

## Description


```md
https://leetcode.cn/problems/brightest-position-on-street/description/
* algorithms
* Medium (58.86%)
* Likes:    15
* Dislikes: -
* Testcase Example:  '[[-3,2],[1,2],[3,3]]'
一条街上有很多的路灯，路灯的坐标由数组 lights 的形式给出。 每个 lights[i] = [positioni, rangei] 代表坐标为 positioni 的路灯照亮的范围为 [positioni - rangei, positioni + rangei] （包括顶点）。
位置 p 的亮度由能够照到 p的路灯的数量来决定的。
给出 lights, 返回最亮的位置 。如果有很多，返回坐标最小的。

示例 1:
输入: lights = [[-3,2],[1,2],[3,3]]
输出: -1
解释:
第一个路灯照亮的范围是[(-3) - 2, (-3) + 2] = [-5, -1].
第二个路灯照亮的范围是 [1 - 2, 1 + 2] = [-1, 3].
第三个路灯照亮的范围是 [3 - 3, 3 + 3] = [0, 6].
坐标-1被第一个和第二个路灯照亮，亮度为2
坐标0，1，2都被第二个和第三个路灯照亮，亮度为2.
对于以上坐标，-1最小，所以返回-1
示例 2：
输入: lights = [[1,0],[0,1]]
输出: 1
示例 3：
输入: lights = [[1,2]]
输出: -1

提示:
1 <= lights.length <= 105
lights[i].length == 2
-108 <= positioni <= 108
0 <= rangei <= 108
Hint 1: Convert lights into an array of ranges representing the range where each street light can light up and sort the start and end points of the ranges.
Hint 2: Do we need to traverse all possible positions on the street?
Hint 3: No, we don't, we only need to go to the start and end points of the ranges for each streetlight.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Street lights are given as `lights[i] = [position_i, range_i]`; light i illuminates the closed interval `[position_i - range_i, position_i + range_i]`. The brightness of a position p is the number of lights covering it.

Return the brightest position; on ties return the smallest coordinate.

Example 1:
Input: lights = [[-3,2],[1,2],[3,3]]
Output: -1

Example 2:
Input: lights = [[1,0],[0,1]]
Output: 1

Example 3:
Input: lights = [[1,2]]
Output: -1

Constraints: 1 <= lights.length <= 10^5, -10^8 <= position_i <= 10^8, 0 <= range_i <= 10^8.

## Approach

Sweep line over events: `+1` at `p - r` and `-1` at `p + r + 1` (converts each closed interval to half-open). Sort events by coordinate, sweep left to right applying all deltas at each coordinate; the brightness over `[x, next_x)` equals the running count. The first x attaining the strict maximum is the answer (ascending sweep keeps the smallest coordinate on ties).

Time O(n log n).
