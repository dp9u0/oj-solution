# [1203] Sort Items by Groups Respecting Dependencies

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/description/)

* algorithms
* Hard (65.72%)
* Likes:    1910
* Dislikes: 322
* Testcase Example:  '8\n2\n[-1,-1,1,0,0,1,0,-1]\n[[],[6],[5],[6],[3,6],[],[],[]]'

```md
There arenitems eachbelonging to zero or one ofmgroups where group[i]is the group that the i-th item belongs to and it&#39;s equal to -1if the i-th item belongs to no group. The items and the groups are zero indexed. A group can have no item belonging to it.
Return a sorted list of the items such that:

The items that belong to the same group are next to each other in the sorted list.
There are somerelationsbetween these items wherebeforeItems[i]is a list containing all the items that should come before thei-th item in the sorted array (to the left of thei-th item).

Return any solution if there is more than one solution and return an empty listif there is no solution.

Example 1:


Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]
Output: [6,3,4,1,5,2,0,7]

Example 2:

Input: n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]
Output: []
Explanation:This is the same as example 1 except that 4 needs to be before 6 in the sorted list.


Constraints:

1 <= m <= n <= 3 * 104
group.length == beforeItems.length == n
-1 <= group[i] <= m - 1
0 <= beforeItems[i].length <= n - 1
0 <= beforeItems[i][j] <= n - 1
i != beforeItems[i][j]
beforeItems[i]does not containduplicates elements.


```

## 题目翻译

有 n 个项目，每个项目属于零个或一个 m 个组中的一个。group[i] 表示第 i 个项目所属的组，-1 表示不属于任何组。项目和组都是从 0 开始编号的。

返回一个排序后的项目列表，满足：
1. 属于同一组的项目在排序列表中相邻。
2. beforeItems[i] 中的所有项目必须出现在第 i 个项目之前。

如果有多个解返回任意一个，无解返回空列表。

## 解题思路

**双层拓扑排序**

1. 将 group=-1 的项目各自分配一个唯一的新组 ID（从 m 开始递增）
2. 根据 beforeItems 构建两层 DAG：
   - 同组内的依赖 → 项目级别 DAG
   - 跨组的依赖 → 组级别 DAG（用 Set 去重边）
3. 对组做拓扑排序，若存在环则返回 []
4. 按组的拓扑序，依次对每组内的项目做拓扑排序，若某组内有环则返回 []

时间复杂度 O(n + E)，空间复杂度 O(n + m + E)。

## Solution

[SourceCode](./solution.js)
