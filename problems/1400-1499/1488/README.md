# [1488] Avoid Flood in The City

## Description

[LeetCode Problem Description](https://leetcode.com/problems/avoid-flood-in-the-city/description/)

* algorithms
* Medium (38.98%)
* Likes:    2151
* Dislikes: 621
* Testcase Example:  '[1,2,3,4]'

```md
Your country has 109 lakes. Initially, all the lakes are empty, but when it rains over the nth lake, the nth lake becomes full of water. If it rains over a lake that is full of water, there will be a flood. Your goal is to avoid floods in any lake.
Given an integer array rains where:

rains[i] > 0 means there will be rains over the rains[i] lake.
rains[i] == 0 means there are no rains this day and youmust chooseone lake this day and dry it.

Return an array ans where:

ans.length == rains.length
ans[i] == -1 if rains[i] > 0.
ans[i] is the lake you choose to dry in the ith day if rains[i] == 0.

If there are multiple valid answers return any of them. If it is impossible to avoid flood return an empty array.
Notice that if you chose to dry a full lake, it becomes empty, but if you chose to dry an empty lake, nothing changes.

Example 1:

Input: rains = [1,2,3,4]
Output: [-1,-1,-1,-1]
Explanation: After the first day full lakes are [1]
After the second day full lakes are [1,2]
After the third day full lakes are [1,2,3]
After the fourth day full lakes are [1,2,3,4]
There&#39;s no day to dry any lake and there is no flood in any lake.

Example 2:

Input: rains = [1,2,0,0,2,1]
Output: [-1,-1,2,1,-1,-1]
Explanation: After the first day full lakes are [1]
After the second day full lakes are [1,2]
After the third day, we dry lake 2. Full lakes are [1]
After the fourth day, we dry lake 1. There is no full lakes.
After the fifth day, full lakes are [2].
After the sixth day, full lakes are [1,2].
It is easy that this scenario is flood-free. [-1,-1,1,2,-1,-1] is another acceptable scenario.

Example 3:

Input: rains = [1,2,0,1,2]
Output: []
Explanation: After the second day, full lakes are  [1,2]. We have to dry one lake in the third day.
After that, it will rain over lakes [1,2]. It&#39;s easy to prove that no matter which lake you choose to dry in the 3rd day, the other one will flood.


Constraints:

1 <= rains.length <= 105
0 <= rains[i] <= 109


```

## 中文翻译

有 10^9 个湖泊，初始为空。rains[i] > 0 表示第 i 天湖泊 rains[i] 下雨（满则洪水）；rains[i] == 0 表示可以选一个湖泊抽干。求避免洪水的方案，无法则返回空数组。

## 解题思路

贪心 + 有序集合。维护：每个满的湖泊的上次下雨天数 `lastRain`，以及可用的干燥天数列表。
当遇到 `rains[i] > 0`：
- 如果该湖已满，需要找一个之前的干燥日（在 lastRain[lake] 之后、i 之前）来抽干它。用 TreeMap/有序结构找最早可用的干燥日。若找不到则无解。
- 否则标记该湖已满。
当遇到 `rains[i] == 0`：记录该干燥日索引，留待后续分配。

JS 中没有 TreeMap，用数组 + 二分（bisect）模拟：维护 dryDays 数组，用二分找第一个 ≥ lastRain[lake]+1 的干燥日。

## Solution

[SourceCode](./solution.js)
