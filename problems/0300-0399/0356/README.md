# [356] 直线镜像

## Description


```md
https://leetcode.cn/problems/line-reflection/description/
* algorithms
* Medium (34.08%)
* Likes:    43
* Dislikes: -
* Testcase Example:  '[[1,1],[-1,1]]'
在一个二维平面空间中，给你 n 个点的坐标。问，是否能找出一条平行于 y 轴的直线，让这些点关于这条直线成镜像排布？
注意：题目数据中可能有重复的点。

示例 1：
输入：points = [[1,1],[-1,1]]
输出：true
解释：可以找出 x = 0 这条线。
示例 2：
输入：points = [[1,1],[-1,-1]]
输出：false
解释：无法找出这样一条线。

提示：
n == points.length
1 <= n <= 10^4
-10^8 <= points[i][j] <= 10^8

进阶：你能找到比 O(n2) 更优的解法吗?
Hint 1: Find the smallest and largest x-value for all points.
Hint 2: If there is a line then it should be at y = (minX + maxX) / 2.
Hint 3: For each point, make sure that it has a reflected point in the opposite side.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given `points`, return whether the set is symmetric about a vertical line (every point has a mirror).

**Example:**
[[1,1],[-1,1]] → true (mirror at x=0)

**Constraints:**
- 0 <= points.length <= 10^4

## Approach

镜像轴只可能是 x = (minX + maxX)/2。用 Set 记录全部点,验证每点 (x,y) 的镜像 (minX+maxX-x, y) 存在;轴上坐标用 2×mid 保持整数。

时间 O(n),空间 O(n)。
