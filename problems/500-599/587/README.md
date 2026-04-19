# [587] Erect the Fence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/erect-the-fence/description/)

* algorithms
* Hard (52.87%)
* Likes:    1543
* Dislikes: 649
* Testcase Example:  '[[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]'

```md
You are given an array trees where trees[i] = [xi, yi] represents the location of a tree in the garden.
Fence the entire garden using the minimum length of rope, as it is expensive. The garden is well-fenced only if all the trees are enclosed.
Return the coordinates of trees that are exactly located on the fence perimeter. You may return the answer in any order.

Example 1:


Input: trees = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]
Output: [[1,1],[2,0],[4,2],[3,3],[2,4]]
Explanation: All the trees will be on the perimeter of the fence except the tree at [2, 2], which will be inside the fence.

Example 2:


Input: trees = [[1,2],[2,2],[4,2]]
Output: [[4,2],[2,2],[1,2]]
Explanation: The fence forms a line that passes through all the trees.


Constraints:

1 <= trees.length <= 3000
trees[i].length == 2
0 <= xi, yi <= 100
All the given positions are unique.


```

## 中文翻译

给定二维平面上的树的位置坐标数组，用最短绳索围住所有树（凸包问题），返回围栏上的所有树的坐标。

## 解题思路

Andrew 单调链算法求凸包。按 x 坐标排序后分别构建下凸包和上凸包，使用叉积判断转向，保留共线点。去重后返回所有凸包边界上的点。

时间复杂度：O(n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
