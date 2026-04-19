# [3017] Count the Number of Houses at a Certain Distance II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/description/)

* algorithms
* Hard (23.64%)
* Likes:    91
* Dislikes: 27
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

2 <= n <= 105
1 <= x, y <= n


```

## 翻译

n 栋房子排成一行（1..n），相邻房子有街道。额外一条街道连接 x 和 y。对每个 k (1<=k<=n)，求最短距离恰好为 k 的房子对 (i,j) 的数量。

## 解题思路

距离 d(i,j) = min(|i-j|, |i-x|+1+|y-j|, |i-y|+1+|x-j|)。用差分数组统计距离频次。对每对 (i,j)，距离取三种路径的最小值。暴力 O(n^2) 太慢，需要利用单调性优化。

将距离函数视为分段线性，用差分数组在转折点处 O(1) 更新。按 i 从左到右扫描，j 分为 j<i 和 j>i 两部分，分别计算通过直接路径和捷径路径的距离，取 min 后用差分数组统计。

具体：对每个 i，j 在 [i+1,n] 范围内，距离 d(j) = min(j-i, f(j)) 其中 f(j) 是通过捷径的距离。f(j) 是分段线性的，与 j-i 的交点将 j 分成两段。用差分数组在边界处增减。

## Solution

[SourceCode](./solution.js)
