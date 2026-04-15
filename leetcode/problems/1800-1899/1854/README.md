# [1854] Maximum Population Year

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-population-year/description/)

* algorithms
* Easy (63.82%)
* Likes:    1556
* Dislikes: 288
* Testcase Example:  '[[1993,1999],[2000,2010]]'

```md
You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.
The population of some year x is the number of people alive during that year. The ith person is counted in year x&#39;s population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.
Return the earliest year with the maximum population.

Example 1:

Input: logs = [[1993,1999],[2000,2010]]
Output: 1993
Explanation: The maximum population is 1, and 1993 is the earliest year with this population.

Example 2:

Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
Output: 1960
Explanation:
The maximum population is 2, and it had happened in years 1960 and 1970.
The earlier year between them is 1960.

Constraints:

1 <= logs.length <= 100
1950 <= birthi < deathi <= 2050


```

## 题目翻译

给定 logs 数组，logs[i] = [birth, death] 表示第 i 个人的出生和死亡年份。某年的人口数为该年活着的人数（death 年不计入）。返回人口最多的最早年份。

## 解题思路

差分数组：birth 年人口+1，death 年人口-1。对年份范围做前缀和，找最大值的最早年份。

时间复杂度：O(n + Y)，空间复杂度：O(Y)

## Solution

[SourceCode](./solution.js)
