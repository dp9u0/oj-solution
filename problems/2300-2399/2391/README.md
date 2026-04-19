# [2391] Minimum Amount of Time to Collect Garbage

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/description/)

* algorithms
* Medium (85.07%)
* Likes:    1633
* Dislikes: 246
* Testcase Example:  '["G","P","GP","GG"]\n[2,4,3]'

```md
You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of the characters &#39;M&#39;, &#39;P&#39; and &#39;G&#39; representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 minute.
You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.
There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit each house in order; however, they do not need to visit every house.
Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.
Return the minimum number of minutes needed to pick up all the garbage.

Example 1:

Input: garbage = ['G','P','GP','GG'], travel = [2,4,3]
Output: 21
Explanation:
The paper garbage truck:
1. Travels from house 0 to house 1
2. Collects the paper garbage at house 1
3. Travels from house 1 to house 2
4. Collects the paper garbage at house 2
Altogether, it takes 8 minutes to pick up all the paper garbage.
The glass garbage truck:
1. Collects the glass garbage at house 0
2. Travels from house 0 to house 1
3. Travels from house 1 to house 2
4. Collects the glass garbage at house 2
5. Travels from house 2 to house 3
6. Collects the glass garbage at house 3
Altogether, it takes 13 minutes to pick up all the glass garbage.
Since there is no metal garbage, we do not need to consider the metal garbage truck.
Therefore, it takes a total of 8 + 13 = 21 minutes to collect all the garbage.

Example 2:

Input: garbage = ['MMM','PGM','GP'], travel = [3,10]
Output: 37
Explanation:
The metal garbage truck takes 7 minutes to pick up all the metal garbage.
The paper garbage truck takes 15 minutes to pick up all the paper garbage.
The glass garbage truck takes 15 minutes to pick up all the glass garbage.
It takes a total of 7 + 15 + 15 = 37 minutes to collect all the garbage.


Constraints:

2 <= garbage.length <= 105
garbage[i] consists of only the letters &#39;M&#39;, &#39;P&#39;, and &#39;G&#39;.
1 <= garbage[i].length <= 10
travel.length == garbage.length - 1
1 <= travel[i] <= 100


```

## 题目翻译

给定字符串数组 `garbage`，每个字符串由 'M'、'P'、'G' 组成，代表金属、纸张、玻璃垃圾。每个字符代表一单位垃圾，收集一单位需要 1 分钟。还有数组 `travel`，`travel[i]` 为从房子 i 到 i+1 所需时间。三辆垃圾车分别负责一种类型，都从房子 0 出发按顺序访问。返回收集所有垃圾的最少分钟数。

## 解题思路

对每种垃圾类型，卡车只需开到最后一个包含该类型的房子。总时间 = 所有垃圾单位数之和 + 每种类型的旅行距离（到其最后出现位置的前缀和）。一次遍历即可完成。

## Solution

[SourceCode](./solution.js)
