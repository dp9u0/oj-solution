# [3923] Minimum Generations to Target Point

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-generations-to-target-point/description/)

* algorithms
* Medium (44.37%)
* Likes:    28
* Dislikes: 11
* Testcase Example:  '[[0,0,0],[6,6,6]]\n[3,3,3]'

```md
You are given a 2D integer array points where points[i] = [xi, yi, zi] represents a point in 3D space, and an integer array target representing a target point.
Define generation 0 as the initial list of points. For each integer k >= 1, form generation k as follows:

Consider every pair of two distinct points a = [x1, y1, z1] and b = [x2, y2, z2] taken from all points produced in generations 0 through k - 1.
For each such pair, compute c = [floor((x1 + x2) / 2), floor((y1 + y2) / 2), floor((z1 + z2) / 2)] and collect every such c into a generation k.
All points in the generation k are produced simultaneously from points in generations 0 through​​​​​​​ k - 1.
After generation k is formed, the points in the generation k are considered available for forming later generations.

Return the smallest integer k such that the target appears in one of the generations 0 through k. If the target is already in the initial points, return 0. If it is impossible to obtain the target, return -1.
Notes:

floor denotes rounding down to the nearest integer.
'Two distinct points' means the two chosen points must have different (x, y, z) coordinates. A point cannot be paired with itself, and pairing two points with identical coordinates is not possible.


Example 1:

Input: points = [[0,0,0],[6,6,6]], target = [3,3,3]
Output: 1
Explanation:

Generation 0: The initial points = [[0, 0, 0], [6, 6, 6]].
The target = [3, 3, 3] does not exist in generation 0.
Generation 1: For each pair of points in generation 0, we create new points.

Using [0, 0, 0] and [6, 6, 6], we generate [3, 3, 3].


After generation 1, points = [[0, 0, 0], [6, 6, 6], [3, 3, 3]].
The target = [3, 3, 3] is found in generation 1, so the smallest k is 1.


Example 2:

Input: points = [[0,0,0],[5,5,5]], target = [1,1,1]
Output: 2
Explanation:

Generation 0: The initial points = [[0, 0, 0], [5, 5, 5]].
The target = [1, 1, 1] does not exist in generation 0.
Generation 1: For each pair of points in generation 0, we create new points.

Using [0, 0, 0] and [5, 5, 5], we generate [2, 2, 2].


After generation 1, points = [[0, 0, 0], [5, 5, 5], [2, 2, 2]].
Generation 2: For each pair of points available after generation 1, we create new points.

Using [0, 0, 0] and [5, 5, 5], we generate [2, 2, 2].
Using [0, 0, 0] and [2, 2, 2], we generate [1, 1, 1].
Using [5, 5, 5] and [2, 2, 2], we generate [3, 3, 3].


After generation 2, points = [[0, 0, 0], [5, 5, 5], [2, 2, 2], [1, 1, 1], [3, 3, 3]].
The target = [1, 1, 1] is found in generation 2, so the smallest k is 2.


Example 3:

Input: points = [[0,0,0],[2,2,2],[3,3,3]], target = [2,2,2]
Output: 0
Explanation:

Generation 0: The initial points = [[0, 0, 0], [2, 2, 2], [3, 3, 3]].
The target = [2, 2, 2] already exists in generation 0, so the smallest k is 0.


Example 4:

Input: points = [[1,2,3]], target = [5,5,5]
Output: -1
Explanation:

Only one initial point is available, so no new points can be generated.
Therefore, the target cannot be obtained, and the answer is -1.



Constraints:

1 <= points.length <= 20
points[i] = [xi, yi, zi​​​​​​​]
0 <= xi, yi, zi <= 6
target.length == 3
​​​​​​​0 <= target[i] <= 6
The initial set of points contains no duplicates.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个二维整数数组 `points`，其中 `points[i] = [xi, yi, zi]` 表示三维空间中的一个点；再给定整数数组 `target` 表示目标点。

定义第 0 代为初始点集。对每个整数 `k >= 1`，第 k 代按如下方式产生：

- 从第 0 代到第 k-1 代产生的**所有**点中，任取两个**不同**的点 `a = [x1, y1, z1]` 和 `b = [x2, y2, z2]` 组成点对。
- 对每个这样的点对，计算 `c = [floor((x1+x2)/2), floor((y1+y2)/2), floor((z1+z2)/2)]`（各坐标向下取整的中点），所有这些 `c` 构成第 k 代。
- 第 k 代的所有点由第 0 代到第 k-1 代的点同时产生；第 k 代形成后，其点也可用于产生后续的代。

返回目标点首次出现在第 0 代到第 k 代中的最小 `k`。若目标已在初始点集中，返回 0；若无法得到目标，返回 -1。

注意：
- floor 表示向下取整。
- "两个不同的点"指两个点的 (x, y, z) 坐标必须不同，点不能与自身配对，坐标完全相同的两个点也不能配对。

## 解题思路

**关键观察**：坐标范围 `0 <= x, y, z <= 6`，因此整个空间最多只有 `7^3 = 343` 个不同的点。由于每一代的点集是累积的（只增不减），点集大小单调不减且上界为 343，所以模拟过程必然在有限代内收敛（某一代没有产生任何新点即到达不动点）。

**算法（按代 BFS 模拟）**：
1. 将点编码为整数 `x*49 + y*7 + z`，用 `Set` 维护当前累积点集 `cur`。
2. 若 `target` 已在 `cur` 中，返回 0。
3. 迭代 k = 1, 2, ...：
   - 对 `cur` 中所有两两不同的点对，计算各坐标 floor 中点，加入新集合 `next`（`next` 初始为 `cur` 的拷贝）。
   - 若 `target ∈ next`，返回 k。
   - 若 `next.size === cur.size`（没有新点产生，集合已收敛），返回 -1。
   - 否则 `cur = next`，继续下一轮。

**正确性**：题目定义第 k 代由第 0..k-1 代的全部累积点产生，因此 `cur` 恰为第 k-1 代结束时的累积点集，模拟与定义一一对应；首次包含 target 的 k 即答案。

**复杂度**：点集最多 343 个点，最多约 343 代收敛，每代两两配对 O(343²)，总量极小。时间约 O(P³)（P=343 为点数上界），空间 O(P)。
