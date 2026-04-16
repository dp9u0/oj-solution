# [3015] Count the Number of Houses at a Certain Distance I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/description/)

* algorithms
* Medium (57.51%)
* Likes:    213
* Dislikes: 45
* Testcase Example:  '3\n1\n3'

```md
You are given three positive integers n, x, and y.
In a city, there exist houses numbered 1 to n connected by n streets. There is a street connecting the house numbered i with the house numbered i + 1 for all 1 <= i <= n - 1 . An additional street connects the house numbered x with the house numbered y.
For each k, such that 1 <= k <= n, you need to find the number of pairs of houses (house1, house2) such that the minimum number of streets that need to be traveled to reach house2 from house1 is k.
Return a 1-indexed array result of length n where result[k] represents the total number of pairs of houses such that the minimum streets required to reach one house from the other is k.
Note that x and y can be equal.

Example 1:


Input: n = 3, x = 1, y = 3
Output: [6,0,0]
Explanation: Let&#39;s look at each pair of houses:
- For the pair (1, 2), we can go from house 1 to house 2 directly.
- For the pair (2, 1), we can go from house 2 to house 1 directly.
- For the pair (1, 3), we can go from house 1 to house 3 directly.
- For the pair (3, 1), we can go from house 3 to house 1 directly.
- For the pair (2, 3), we can go from house 2 to house 3 directly.
- For the pair (3, 2), we can go from house 3 to house 2 directly.

Example 2:


Input: n = 5, x = 2, y = 4
Output: [10,8,2,0,0]
Explanation: For each distance k the pairs are:
- For k == 1, the pairs are (1, 2), (2, 1), (2, 3), (3, 2), (2, 4), (4, 2), (3, 4), (4, 3), (4, 5), and (5, 4).
- For k == 2, the pairs are (1, 3), (3, 1), (1, 4), (4, 1), (2, 5), (5, 2), (3, 5), and (5, 3).
- For k == 3, the pairs are (1, 5), and (5, 1).
- For k == 4 and k == 5, there are no pairs.

Example 3:


Input: n = 4, x = 1, y = 1
Output: [6,4,2,0]
Explanation: For each distance k the pairs are:
- For k == 1, the pairs are (1, 2), (2, 1), (2, 3), (3, 2), (3, 4), and (4, 3).
- For k == 2, the pairs are (1, 3), (3, 1), (2, 4), and (4, 2).
- For k == 3, the pairs are (1, 4), and (4, 1).
- For k == 4, there are no pairs.


Constraints:

2 <= n <= 100
1 <= x, y <= n


```

## 翻译

给定三个正整数 n, x, y。

城市中有编号 1 到 n 的房屋，由 n 条街道连接。对于所有 1 <= i <= n-1，有一条街道连接编号 i 和 i+1 的房屋。另有一条额外街道连接编号 x 和 y 的房屋。

对于每个 k（1 <= k <= n），找出满足从 house1 到 house2 最少需要经过 k 条街道的房屋对 (house1, house2) 的数量。

返回长度为 n 的 1-indexed 数组 result，result[k] 表示最少街道数为 k 的房屋对数量。

注意 x 和 y 可以相等。

## 解题思路

n 个房屋排成一条线（1-2-3-...-n），额外有一条边连接 x 和 y。

对于任意两个房屋 i 和 j（i < j），原始距离为 j - i。加上 x-y 这条捷径后，距离可能变短：
- dist(i, j) = min(j - i, |i - x| + 1 + |j - y|, |i - y| + 1 + |j - x|)

即走捷径的两种方式：先到 x 再到 y，或先到 y 再到 x。

n <= 100，直接 O(n^2) 枚举所有对，计算距离并统计即可。

## Solution

[SourceCode](./solution.js)
