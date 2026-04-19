# [1436] Destination City

## Description

[LeetCode Problem Description](https://leetcode.com/problems/destination-city/description/)

* algorithms
* Easy (79.50%)
* Likes:    2320
* Dislikes: 107
* Testcase Example:  '[["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]'

```md
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.
It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

Example 1:

Input: paths = [['London','New York'],['New York','Lima'],['Lima','Sao Paulo']]
Output: 'Sao Paulo'
Explanation: Starting at 'London' city you will reach 'Sao Paulo' city which is the destination city. Your trip consist of: 'London' -> 'New York' -> 'Lima' -> 'Sao Paulo'.

Example 2:

Input: paths = [['B','C'],['D','B'],['C','A']]
Output: 'A'
Explanation: All possible trips are:
'D' -> 'B' -> 'C' -> 'A'.
'B' -> 'C' -> 'A'.
'C' -> 'A'.
'A'.
Clearly the destination city is 'A'.

Example 3:

Input: paths = [['A','Z']]
Output: 'Z'


Constraints:

1 <= paths.length <= 100
paths[i].length == 2
1 <= cityAi.length, cityBi.length <= 10
cityAi != cityBi
All strings consist of lowercase and uppercase English letters and the space character.


```

## 中文翻译

给定路径数组 paths，paths[i] = [A, B] 表示从 A 到 B 的直达路径。找出没有出边的目的地城市。

## 解题思路

将所有出发城市放入 Set，然后找不在出发城市 Set 中的终点城市即可。

## Solution

[SourceCode](./solution.js)
