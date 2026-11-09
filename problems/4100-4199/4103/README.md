# [4103] 按类型和颜色删除元素

## Description


```md
https://leetcode.cn/problems/remove-elements-by-type-and-color/description/
* algorithms
* Medium (59.63%)
* Dislikes: -
* Testcase Example:  '[0,1,1,0]\n[5,3,3,5]\n[2,2]'
给你三个整数数组 types、colors 和 groupSize，其中 types 和 colors 的长度为 n，groupSize 的长度为 m。
types[i] 表示下标 i 处元素的类型。
colors[i] 表示下标 i 处元素的颜色。
groupSize[t] 表示类型为 t 的删除组需要的元素数量。
在一次操作中，如果 恰好 groupSize[t] 个 连续 元素都具有类型 t 且颜色 相同 ，你可以将它们移除。
在每次移除后，剩余的元素会重新 相邻 ，同时保持它们的相对顺序。
如果可以通过一系列有效操作移除所有元素，返回 true。否则，返回 false。

示例 1：
输入： types = [0,1,1,0], colors = [5,3,3,5] , groupSize = [2,2]
输出： true
解释：
首先，移除下标 1 和 2 处的连续元素。这两个元素的类型均为 1，颜色均为 3，且组大小等于 groupSize[1] = 2。
剩余的序列为：types = [0, 0]，colors = [5, 5]
现在移除剩下的两个元素。它们的类型为 0，颜色为 5，且组大小等于 groupSize[0] = 2。
所有元素已被移除，因此答案是 true。
示例 2：
输入： types = [0,1,0], colors = [9,9,9], groupSize = [3,2]
输出： false
解释：
无法执行任何有效操作，因为没有一个连续组满足其所需的大小。
因此，无法移除所有元素，所以答案是 false。
示例 3：
输入： types = [2,0,1,2], colors = [7,5,4,7], groupSize = [3,1,2]
输出： false
解释：
移除下标 2 处的元素。它的类型为 1，颜色为 4，并形成一个大小为 groupSize[1] = 1 的连续组。
剩余的序列为：types = [2, 0, 2]，colors = [7, 5, 7]。
无法再执行进一步的操作，因此答案是 false。

提示：
1 <= n == types.length == colors.length <= 105
1 <= m == groupSize.length <= 105
0 <= types[i] <= m - 1
1 <= colors[i] <= 105
1 <= groupSize[t] <= n

```

## Solution

[SourceCode](./solution.js)

## English Translation

You are given three integer arrays types, colors and groupSize, where types and colors have
length n and groupSize has length m.
types[i] is the type of the element at index i; colors[i] is its color; groupSize[t] is the
number of elements required by a removal group of type t.
In one operation, you may remove exactly groupSize[t] consecutive elements that all have type t
and the same color. After each removal, the remaining elements become adjacent, preserving order.
Return true if all elements can be removed via a sequence of valid operations, otherwise false.

Example 1: types=[0,1,1,0], colors=[5,3,3,5], groupSize=[2,2] -> true
Example 2: types=[0,1,0], colors=[9,9,9], groupSize=[3,2] -> false
Example 3: types=[2,0,1,2], colors=[7,5,4,7], groupSize=[3,1,2] -> false

Constraints: 1 <= n, m <= 1e5; 0 <= types[i] <= m-1; 1 <= colors[i] <= 1e5; 1 <= groupSize[t] <= n.

## Approach

Only elements with the same (type, color) key can ever be removed together, and a removal takes
exactly g = groupSize[type] consecutive equal-key elements. Keep a stack of runs (key, count):

- Push each element; if the top run has the same key, increment its count, otherwise push a new run.
- Whenever the top run's count becomes divisible by g of its type, pop it immediately.

Popping early is never worse: a popped run was physically removable anyway, and removing it only
lets its neighbors become adjacent; merging two same-key neighboring runs only enlarges the set of
available operations (any removal possible on the parts is possible on the concatenation), so it
never destroys a solution. The stack invariant (no two adjacent equal-key runs) is preserved:
pushes merge, and runs exposed by a pop were separated by the popped run, hence differ in key.
Succeeds iff the stack is empty at the end. O(n).
