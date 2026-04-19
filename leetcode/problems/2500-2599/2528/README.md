# [2528] Maximize the Minimum Powered City

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-the-minimum-powered-city/description/)

* algorithms
* Hard (61.74%)
* Likes:    873
* Dislikes: 32
* Testcase Example:  '[1,2,4,5,0]\n1\n2'

```md
You are given a 0-indexed integer array stations of length n, where stations[i] represents the number of power stations in the ith city.
Each power station can provide power to every city in a fixed range. In other words, if the range is denoted by r, then a power station at city i can provide power to all cities j such that
i - j
<= r and 0 <= i, j <= n - 1.

Note that
x
denotes absolute value. For example,
7 - 5
= 2 and
3 - 10
= 7.

The power of a city is the total number of power stations it is being provided power from.
The government has sanctioned building k more power stations, each of which can be built in any city, and have the same range as the pre-existing ones.
Given the two integers r and k, return the maximum possible minimum power of a city, if the additional power stations are built optimally.
Note that you can build the k power stations in multiple cities.

Example 1:

Input: stations = [1,2,4,5,0], r = 1, k = 2
Output: 5
Explanation:
One of the optimal ways is to install both the power stations at city 1.
So stations will become [1,4,4,5,0].
- City 0 is provided by 1 + 4 = 5 power stations.
- City 1 is provided by 1 + 4 + 4 = 9 power stations.
- City 2 is provided by 4 + 4 + 5 = 13 power stations.
- City 3 is provided by 5 + 4 = 9 power stations.
- City 4 is provided by 5 + 0 = 5 power stations.
So the minimum power of a city is 5.
Since it is not possible to obtain a larger power, we return 5.

Example 2:

Input: stations = [4,4,4,4], r = 0, k = 3
Output: 4
Explanation:
It can be proved that we cannot make the minimum power of a city greater than 4.


Constraints:

n == stations.length
1 <= n <= 105
0 <= stations[i] <= 105
0 <= r<= n - 1
0 <= k<= 109


```

## 中文翻译

给定长度为 n 的数组 stations，stations[i] 表示第 i 个城市的电站数。每个电站覆盖范围 r（覆盖 [i-r, i+r] 的所有城市）。可新建 k 个电站（放任意城市），求最大化所有城市的最小供电量。

约束：n <= 10^5, k <= 10^9

## 解题思路

**二分答案 + 贪心验证**

1. 二分答案 mid，检查能否用不超过 k 个新电站使所有城市供电量 >= mid。
2. 验证：先计算每个城市初始供电量（前缀和），然后从左到右贪心——若城市 i 供电不足，在位置 min(i+r, n-1) 补建电站（最大化对未来城市的覆盖）。
3. 用差分数组维护新建电站的影响范围。

## Solution

[SourceCode](./solution.js)
