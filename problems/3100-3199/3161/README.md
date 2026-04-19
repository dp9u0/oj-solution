# [3161] Block Placement Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/block-placement-queries/description/)

* algorithms
* Hard (18.49%)
* Likes:    149
* Dislikes: 32
* Testcase Example:  '[[1,2],[2,3,3],[2,3,1],[2,2,2]]'

```md
There exists an infinite number line, with its origin at 0 and extending towards the positive x-axis.
You are given a 2D array queries, which contains two types of queries:

For a query of type 1, queries[i] = [1, x]. Build an obstacle at distance x from the origin. It is guaranteed that there is no obstacle at distance x when the query is asked.
For a query of type 2, queries[i] = [2, x, sz]. Check if it is possible to place a block of size sz anywhere in the range [0, x] on the line, such that the block entirely lies in the range [0, x]. A block cannot be placed if it intersects with any obstacle, but it may touch it. Note that you do not actually place the block. Queries are separate.

Return a boolean array results, where results[i] is true if you can place the block specified in the ith query of type 2, and false otherwise.

Example 1:

Input: queries = [[1,2],[2,3,3],[2,3,1],[2,2,2]]
Output: [false,true,true]
Explanation:

For query 0, place an obstacle at x = 2. A block of size at most 2 can be placed before x = 3.

Example 2:

Input: queries = [[1,7],[2,7,6],[1,2],[2,7,5],[2,7,6]]
Output: [true,true,false]
Explanation:


Place an obstacle at x = 7 for query 0. A block of size at most 7 can be placed before x = 7.
Place an obstacle at x = 2 for query 2. Now, a block of size at most 5 can be placed before x = 7, and a block of size at most 2 before x = 2.



Constraints:

1 <= queries.length <= 15 * 104
2 <= queries[i].length <= 3
1 <= queries[i][0] <= 2
1 <= x, sz <= min(5 * 104, 3 * queries.length)
The input is generated such that for queries of type 1, no obstacle exists at distance x when the query is asked.
The input is generated such that there is at least one query of type 2.


```

## 题目翻译

在一条无限长的数轴上，原点为 0，向正 x 轴方向延伸。给定一个二维数组 queries，包含两种查询：

- 类型 1：queries[i] = [1, x]，在距离 x 处放置一个障碍物。保证放置时该位置没有障碍物。
- 类型 2：queries[i] = [2, x, sz]，检查是否可以在 [0, x] 范围内放置一个大小为 sz 的方块。方块不能与任何障碍物相交，但可以触碰。注意不需要实际放置方块，各查询独立。

返回布尔数组，表示每个类型 2 查询的结果。

## 解题思路

**线段树 + 坐标压缩**

将所有查询中出现的坐标（障碍物位置和查询右边界 x）预先收集并排序去重，建立线段树。将位置 0 视为始终存在的虚拟障碍物。

线段树每个节点维护三个信息：
- `maxGap`：该区间内相邻障碍物之间的最大间距
- `leftObs`：该区间内最左侧障碍物的位置
- `rightObs`：该区间内最右侧障碍物的位置

类型 1 查询：单点更新，设置障碍物后向上传递。
类型 2 查询：范围查询 [0, x]，得到最大间距，再考虑最右障碍物到 x 的间距，取最大值与 sz 比较。

时间复杂度：O(n log n)

## Solution

[SourceCode](./solution.js)
